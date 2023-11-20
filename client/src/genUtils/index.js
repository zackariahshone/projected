import haversine from 'haversine-distance'

export const dateFormat = (date) => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString();
}

export const sortByDate = (truckArray) => {
  truckArray.sort(function (a, b) {
    console.log(new Date(a.dateAdded), new Date(b.dateAdded));
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.dateAdded) - new Date(a.dateAdded);
    // return
  });
  //  console.log(array);
}

export const applyFilters = (filterObj, latLong, startingListToFilter) => {
  let list;
  Object.keys(filterObj).forEach(key => {
    console.log(key);
    console.log(filterObj[key]);
    switch (key.toLowerCase()) {
      case 'distance':
        list = getListFromDistanceFilter(filterObj[key], latLong, startingListToFilter);
        break;
      default:
        break
    }
  })
  console.log(list);
  if (list.length > 0) {
    return list;
  } else {
    return startingListToFilter;
  }
}

const getListFromDistanceFilter = (userDistance, userLatLon, TruckList) => {
  const filterDistance = userDistance[0];
  if (filterDistance == 0) {
    return TruckList;
  }
  const trucksWithinDistance = [];
  const userLat = userLatLon?.lat;
  const userLon = userLatLon?.lng;
  TruckList.forEach((truck) => {
    if (truck.coordinates !== undefined) {
      const { lat, lon } = truck?.coordinates;
      if (haversine([userLat, userLon], [lat, lon]) * 0.000621371192 < filterDistance) {
        trucksWithinDistance.push(truck);
      }
    }
  });
  return trucksWithinDistance;
}
