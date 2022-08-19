# Koala Search

Demo: https://octopus-app-ohip2.ondigitalocean.app/

Create React App with Typescript hosted with DigitalOcean Apps.

Based on koala data from NSW government: https://www.planningportal.nsw.gov.au/opendata/dataset/koala-likelihood-map-v2-0-august-2019

- Only tested on latest desktop Chrome, and Safari.
- Works fine on iPhone 6S with iOS 15.4 (Safari). I've noticed the AppHeader can disappear on some mobile devices - just some CSS tweaking required.
- I used https://mapshaper.org/ to get the shapefile into GeoJSON format. Ran into some issues regarding spatial reference systems in the resulting data but mostly smooth.
- Leaflet with a MapBox baselayer.
- I spent a few hours getting a handle on shapefile data, geoJSON, Leaflet, and rendering to a map. I ended up building a basic version of the NSW gov map (image below). I discarded majority of this.
- After building the version in the previous point, I noticed the stark performance difference between a blank map, and a map full of koala data. So I trimmed the GeoJSON data of all values where probability=0 and probability=999 (no data). Then instead of representing each koala region as 5 coordinates, I reduced them down to a single coordinate at the centre of the region. I also reduced the properties down to just probability (previously there was koala location id, confidence, N, etc). I just embedded this resulting json data straight into a ts file.
- I spent more time than I should have playing around with OSM/Nominatim API for searching places, but it was terrible despite my best efforts. I jumped ship and went to Google Places/Geocode API in the name of user experience.
- The google-autocomplete package I used wasn’t too great either. It had terrible defaults for styling, and a weird way to override.
- I’ve only used Bootstrap and Tailwind previously, so I’ll sheepishly admit this is the first time I’ve used a component library (MUI). On the one hand, it really increased development speed and I enjoyed it a lot. On the other, hot reloading wasn’t so hot anymore. The performance hit is immense. In future projects, I’ll look for a nice middle ground.
- Red flag - I’m using three different techniques for styling components: that frustrating method google-autocomplete package requires, MUI sx={{ color: ‘red’ }}, and a good old fashioned css file on principle (my go to). 
- I may be dependency averse (sometimes to a fault), so for this project I went wild.
- It turned out that after I wrote the script to filter/reduce my geoJSON data, I’d already written majority of the code for having actual filters (probability, max results, distance). And I wanted to use more MUI components to get a better handle on them.
- I used a SmoothZoom addon for Leaflet I found on Github. I couldn’t believe they have such a janky zoom built-in. Definitely was not smooth for user.
- Didn’t document too much, but left comments in places where something might be unclear. 
- There’s some less than ideal stuff in the code eg. hasCurrentLocation in App.tsx. But it’s documented in the code, so I won’t repeat here. 

Initial prototype labelling regions by probability of koala sightings.
![image](https://user-images.githubusercontent.com/12858317/185525102-9d5ee567-8b54-422e-9636-313ecb65759a.png)

