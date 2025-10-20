import haversine from 'haversine-distance'

export const foodTruckDistance = (userDistance, userLatLon, TruckList) => {
    if(userDistance==0){
        return TruckList;
    }
    const trucksWithinDistance = [];
    const userLat = userLatLon?.lat;
    const userLon = userLatLon?.lng;
    TruckList.forEach((truck) => {
        const { lat, lon } = truck.coordinates;
        if(haversine([userLat, userLon], [lat, lon]) * 0.000621371192 < userDistance){
            trucksWithinDistance.push(truck);
        }
    });
    return trucksWithinDistance;
}

export const truckDistanceFromUser=(userLatLon, truckLatLon )=>{
    console.log(truckLatLon);

    
    const { lat, lon } = truckLatLon;
    const userLat = userLatLon?.lat;
    const userLon = userLatLon?.lng;
    console.log(lat, lon, userLat, userLon);
    
    console.log(haversine([userLat, userLon], [lat, lon])* 0.000621371192);
    
return  Math.round(haversine([userLat, userLon], [lat, lon])* 0.000621371192 * 100) / 100;;
}