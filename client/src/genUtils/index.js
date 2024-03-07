import haversine from 'haversine-distance'
import { filter, forEach } from 'lodash';

export const dateFormat = (date) => {
  const formatedDate = new Date(date);
  return formatedDate.toLocaleDateString();
}

export const sortByDate = (truckArray) => {
  truckArray.sort(function (a, b) {
    // console.log(new Date(a.dateAdded), new Date(b.dateAdded));
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.dateAdded) - new Date(a.dateAdded);
    // return
  });
  //  console.log(array);
}

export const applyFilters = (filterObj, latLong, startingListToFilter) => {
  // console.log(startingListToFilter);
  let list = [];
  let trucksFiltered = 0
  startingListToFilter.forEach(truck=>{
    Object.keys(filterObj).forEach(key=>{
      if(key === 'Distance'){
        // console.log(key)
        list = getListFromDistanceFilter(filterObj[key], latLong, startingListToFilter);
      }
      Object.keys(truck).forEach(truckKey=>{
        if(truckKey == key && key != 'Distance'){
          trucksFiltered ++;
        }
      })
    })
  })
  // console.log(`filteed list ${trucksFiltered}`);
// console.log(list);

  // Object.keys(filterObj).forEach(key => {
  //   console.log(key);
  //   console.log(filterObj[key]);
  //   switch (key.toLowerCase()) {
  //     case 'distance':
  //       list.concat(getListFromDistanceFilter(filterObj[key], latLong, startingListToFilter));
  //       break;
  //     case 'categories':
  //       if(list.length > 0){
  //        list.concat(filterOutNonMatchingCategories(list));
  //       }else{
  //        list.concat(filterOutNonMatchingCategories(startingListToFilter),key, filterObj);
  //       }
  //       break;
  //     default:
  //       break
  //   }
  // })
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

const filterOutNonMatchingCategories = (filterList, filter)=>{
  
}
