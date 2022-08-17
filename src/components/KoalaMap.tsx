import '../App.css';

import {useState, useEffect, useRef} from 'react';
import L, { LatLng, LatLngBoundsExpression, LatLngLiteral, MapOptions } from 'leaflet';
import { koalaData } from '../geodata';
import '../leaflet/smoothWheelZoom'; //Comment this and switch scrollWheelZoom: false to true. You'll see why this is needed.
import { getCrowDistanceBetween, getProbabilityText } from '../global/utilities';
import KoalaCountNotification from './KoalaCountNotification';

const mapboxUrl = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`

type MapProps = {
  location?: LatLngLiteral,
  maxResults: number,
  maxDistance: number,
  minProbability: number,
}

//Extend type for SmoothZoom library.
interface MapOptionsSmoothZoom extends MapOptions {
  smoothWheelZoom?: boolean,
  smoothSensitivity?: number
}

const koalaIcon = L.icon({
  iconUrl: 'koala.png',
  iconSize: [38, 38],
});

function KoalaMap({ location, maxResults, maxDistance, minProbability }: MapProps) {

  const layerRef = useRef<L.LayerGroup<any>>();
  const [leafletMap, setLeafletMap] = useState<L.Map>();
  const [koalaResultCount, setKoalaResultCount] = useState<number>(-1);

  useEffect( () => {
    generateBaseMap();
  }, [])

  //redraw koala layer if filters or location change.
  useEffect( () => {

      if (!location) {
        return;
      }

      redrawKoalaLayer(location);
      
    }, [maxResults, maxDistance, minProbability, location] // eslint-disable-line react-hooks/exhaustive-deps
  )

  // Generates textbox for koala icon click
  function generateKoalaTextbox(probability: number, coords: LatLng) {
    const probabilityText = getProbabilityText(probability);
    const coordString = coords.lat + ',' + coords.lng;
    const reportSightingUrl = 'https://www.environment.nsw.gov.au/topics/animals-and-plants/threatened-species/programs-legislation-and-framework/nsw-koala-strategy/how-to-get-involved/privacy-policy';

    return(
      `It is <b>${probabilityText}</b> you'll find me within 5km of here.<br><br>
      <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=${coordString}'>Get directions</a><br><br>
      If you find me, report it <a target='_blank' href=${reportSightingUrl}>here</a>.`
    );
  }

  function generateBaseMap() {
    // Had to add this because in React.StrictMode, useEffect runs twice for debugging reasons.
    // Was getting "Map already initialised" error as a result.
    // See discussion: https://github.com/facebook/react/issues/24502
    if (layerRef?.current) { 
      return;
    }

    let grayscale = L.tileLayer(mapboxUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: 'powered by MapBox & Leaflet'})

    const mapOptions: MapOptionsSmoothZoom = {
      center: [-33.87936, 151.20935], //My town
      zoom: 6,
      layers: [
        grayscale
      ],
      scrollWheelZoom: false,
      smoothWheelZoom: true,
      smoothSensitivity: 1,
    }

    const map = L.map('koala-map', mapOptions);
    layerRef.current = L.layerGroup().addTo(map);
    setLeafletMap(map)
  }

  const redrawKoalaLayer = (targetLocation: LatLngLiteral) => {

    if (!layerRef?.current) {
      return;
    }

    layerRef.current.clearLayers();
    const filteredKoalaData = getKoalasNearby(targetLocation, maxDistance, maxResults, minProbability);
    const koalaLayer = getGeoJSONLayer(filteredKoalaData);
    koalaLayer.addTo(layerRef.current)
  }

  const getKoalasNearby = (location: LatLngLiteral, maxDistance: number, n: number, minProbability: number) => {

    //sort sites by distance from search location.
    return Object.assign({}, koalaData).features.sort( (a: GeoJSON.Feature, b: GeoJSON.Feature) => {

      //having trouble typing these.
      let geometryA: any = a.geometry;
      let geometryB: any = b.geometry;

      const distanceA = getCrowDistanceBetween(location.lat, location.lng, geometryA.coordinates[1], geometryA.coordinates[0]);
      const distanceB = getCrowDistanceBetween(location.lat, location.lng, geometryB.coordinates[1], geometryB.coordinates[0]);

      return distanceA - distanceB;
    })
    //apply minProbability and maxDistance filters
    .filter( (feature: GeoJSON.Feature) => {

      if (feature?.properties?.p > minProbability) {
        let geometry: any = feature.geometry; //having trouble typing this.
        const distance = getCrowDistanceBetween(location.lat, location.lng, geometry.coordinates[1], geometry.coordinates[0]);

        if (distance < maxDistance) {
          return true
        }
      }

      return false;
    })
    .slice(0, n) //apply maxResults filter
  }

  const moveMap = (koalaCount: number, latLngs: LatLng[]) => {

    if (!leafletMap) {
      return;
    }

    if (koalaCount > 0) { //Contain all search result icons in map view.
      const bounds: LatLngBoundsExpression = L.latLngBounds(latLngs);
      leafletMap.flyToBounds(bounds);
    } else if (location) { //else just go to selected location - no koalas :(
      leafletMap.flyTo([location.lat, location.lng], 9);
    }
  }

  const getGeoJSONLayer = (features: GeoJSON.Feature[]) => {

    const filteredKoalaData: GeoJSON.FeatureCollection = { type: "FeatureCollection", features: features};

    //collect coords of markers to determine zoom level.
    let latLngs: LatLng[] = [];

    // add koala markers to GeoJSON layer
    let koalaLayer = L.geoJSON(filteredKoalaData, {
      pointToLayer: function(geoJsonPoint: GeoJSON.Feature<GeoJSON.Point, any>, latLng: LatLng) {
        
        latLngs.push(latLng)
        const probability: number = geoJsonPoint.properties.p;
        const koalaTextBox = generateKoalaTextbox(probability, latLng);
        return L.marker(latLng, { icon: koalaIcon }).bindPopup(koalaTextBox);
      }
    });

    const koalaCount = latLngs.length;
    setKoalaResultCount(koalaCount);
    moveMap(koalaCount, latLngs);
    
    return koalaLayer;    
  }

  return(
    <>
      <KoalaCountNotification 
        koalaResultCount={koalaResultCount}
      />
    
      <div id='koala-map'></div>
    </>
  );

}

export default KoalaMap;