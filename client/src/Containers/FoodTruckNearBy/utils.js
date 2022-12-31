import haversine from 'haversine-distance'

export const foodTruckDistance = (userDistance, userLatLon, foodTruckList) => {
    console.log(userDistance);
    if(userDistance==0){
        return foodTruckList;
    }
    console.log(userDistance, userLatLon, foodTruckList);
    const trucksWithinDistance = [];
    const userLat = userLatLon?.lat;
    const userLon = userLatLon?.lng;
    foodTruckList.forEach((truck) => {
        const { lat, lon } = truck.coordinates;
        if(haversine([userLat, userLon], [lat, lon]) * 0.000621371192 < userDistance){
            trucksWithinDistance.push(truck);
        }
    })
    console.log(trucksWithinDistance)
    return trucksWithinDistance;
}