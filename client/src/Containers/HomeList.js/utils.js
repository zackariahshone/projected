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
    if(truckLatLon?.lat && truckLatLon?.lon){
    const { lat, lon } = truckLatLon;
    const userLat = userLatLon?.lat;
    const userLon = userLatLon?.lng;  
        return  Math.round(haversine([userLat, userLon], [lat, lon])* 0.000621371192 * 100) / 100;;
    } else{
        return undefined;
    }
}