import { MyLocation, TuneRounded } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { LatLngLiteral } from "leaflet"
import { Dispatch, SetStateAction } from "react"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"

type AppHeaderProps = {
  onSelectCurrentLocation: VoidFunction,
  onSelectLocation: Dispatch<SetStateAction<LatLngLiteral | undefined>>,
  onClickFilterBtn: VoidFunction,
}

function AppHeader({ onSelectCurrentLocation, onSelectLocation, onClickFilterBtn }: AppHeaderProps) {

  const onSelectGoogleLocation = (selectedLocation: any) => { //any. not going to define a type for Google response.

    if (selectedLocation) {
      geocodeByAddress(selectedLocation.value.description)
      .then( (results: any) => getLatLng(results[0])) //grab the first (most likely) google result
      .then(({ lat, lng }) => {
        const coordinates: LatLngLiteral = { lat, lng };
        onSelectLocation(coordinates);
      })
      .catch( (e) => { console.log(e) })
    }
  }

  return(
    <AppBar position="relative" sx={{ bgcolor: "#282c34", height: '10vh', justifyContent: 'center' }}>    
      <Toolbar>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}
        >
          KoalaSearch
        </Typography>

        <div className="location-search">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="current location"
            sx={{ mr: 2 }}
            onClick={ onSelectCurrentLocation }
            >
            <MyLocation />
          </IconButton>

          { /* This component is annoying to style, and doesn't have sensible defaults */}
          <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
            autocompletionRequest={{
              componentRestrictions: {
                country: ['au'],
              }
            }}
            selectProps={{
              placeholder: 'Enter location...',
              onChange: onSelectGoogleLocation,
              styles: googleAutocompleteStyles //defined below
            }}
          />
        </div>

        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open filters"
            sx={{ mr: 2 }}
            onClick={() => { onClickFilterBtn() }}
          >
            <TuneRounded />
          </IconButton>

        </Toolbar>
    </AppBar>
  );
}

export default AppHeader;

//as per docs. not a fan.
const googleAutocompleteStyles = {
  input: (provided: any) => ({
    ...provided,
  }),
  container: (provided: any) => ({
    ...provided,
    minWidth: '200px',
    width: '50%',
  }),
  option: (provided: any) => ({
    ...provided,
    color: 'black',
    cursor: 'pointer'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'lightgray',
  }),
  control: (provided: any) => ({
    ...provided,
    cursor: 'text',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    cursor: 'pointer',
  }),
}