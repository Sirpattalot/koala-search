// Converts degrees to radians
function toRad(Value: number) 
{
    return Value * Math.PI / 180;
}

// Pulled this from some old code (likely from SO) Uses haversine formula to calculate distance between two points (as the crow flys).
export function getCrowDistanceBetween(lat1: number, lon1: number, lat2: number, lon2: number) : number
{
  let R = 6371; // radius of Earth in km
  let dLat = toRad(lat2-lat1);
  let dLon = toRad(lon2-lon1);
  let lat1ToRad = toRad(lat1);
  let lat2ToRad = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1ToRad) * Math.cos(lat2ToRad); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

export function getProbabilityText(p: number, firstLetterUppercase?: boolean) {

  let text = 'very likely';

  if (p < 0.4) {
    text = 'unlikely';
  } else if (p < 0.6) {
    text = 'possible';
  } else if (p < 0.8) {
    text = 'likely';
  }

  if (firstLetterUppercase) {
    text = text[0].toUpperCase() + text.slice(1);
  }

  return text;
}