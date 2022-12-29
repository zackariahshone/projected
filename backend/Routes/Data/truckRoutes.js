const router = require('express').Router();
const Categories = require('../../dbconnection/models/Categories');
const Truck = require('../../dbconnection/models/Trucks');
const dummyImage = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g=';
const nodeGeocoder = require('node-geocoder');
const jwt = require("jsonwebtoken");
const User = require('../../dbconnection/models/User');
const listOfTrucks = {
  'listOfTrucks': [
    {
      "name": "The Witching Hour",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "704 SW A St, Bentonville, AR 72712",
      "IMG": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood-truck&psig=AOvVaw3fxWXYVbIaEHSWlpGyDvyp&ust=1670377631199000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjImNzv4_sCFQAAAAAdAAAAABAE',
      "dateAdded": "12/5/2022",
      "category": [
        'sandwitch'
      ]
    },
    {
      "name": "Food Therapy NWA",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "623 W Walnut St. Rogers, AR 72756",
      "IMG": dummyImage,
      "dateAdded": "12/1/2022",
      "category": [
        'burger'
      ]
    },
    {
      "name": "Foodology Food Truck",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "115 NW 2nd St, Bentonville, AR 72712",
      "IMG": dummyImage,
      "dateAdded": "12/2/2022",
      "category": [
        'soulfood'
      ]
    },
    {
      "name": "Burntsugars Food Truck",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "105 1st Ave SE, Gravette, AR 72736",
      "IMG": dummyImage,
      "dateAdded": "12/4/2022",
      "category": [
        'panini', 'poutine', 'nachos'
      ]
    },
    {
      "name": "Fatt Fingers",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": " 623 W Walnut St, Rogers, AR 72756",
      "IMG": dummyImage,
      "dateAdded": "12/1/2022",
      "category": [
        'greasy', 'fries'
      ]
    },
    {
      "name": "Roll & Fold",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "801 SE 8th St, Bentonville, AR 72712",
      "IMG": dummyImage,
      "dateAdded": "12/6/2022",
      "category": [
        'sushi', 'japanese'
      ]
    },
    {
      "name": "Boondocks Grill",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "623 W Walnut St, Rogers, AR 72756",
      "IMG": dummyImage,
      "dateAdded": "12/5/2022",
      "category": [
        'grill', 'burger'
      ]
    },
    {
      "name": "City Pump",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "623 W Walnut St, Rogers, AR 72756",
      "IMG": dummyImage,
      "dateAdded": "12/1/2022",
      "category": [
        'variety', 'foodtrucks', 'bar'
      ]
    },
    {
      "name": "Takashimura Hibachi - Rogers",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "623 W Walnut St, Rogers, AR 72756",
      "IMG": dummyImage,
      "dateAdded": "12/5/2022",
      "category": [
        'asian', 'hibachi'
      ]
    },
    {
      "name": "T-Mo's cajun Cookin",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "401 S Bloomington St, Lowell, AR 72745",
      "IMG": dummyImage,
      "dateAdded": "11/4/2022",
      "category": [
        'cajun', 'spicy'
      ]
    },
    {
      "name": 'new truck',
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "1234 W Dr Rogers,AR",
      "IMG": dummyImage,
      "dateAdded": "12/5/2022",
      "category": [
        'vegen', 'veggie', 'sandwitch'
      ]
    },
    {
      "name": 'one more',
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "1234 W Dr Rogers,AR",
      "IMG": dummyImage,
      "dateAdded": "12/5/2022",
      "category": [
        'vegen', 'veggie'
      ]
    }
  ]
}
const getLatLong = async (address) => {
  let options = {
    provider: 'openstreetmap'
  };
  const geoCoder = nodeGeocoder(options);
  const location = await geoCoder.geocode(address);

  return (
    {
      lat: location[0]?.latitude,
      lon: location[0]?.longitude
    }
  )
}
router.get('/api/getcategories', async (req, res) => {
  const categories = await Categories.find().lean();
  res.json(categories[0].categories);
});


router.get('/api/foodtrucklists', async (req, res) => {
  const truckData = await Truck.find().lean()
  res.json(truckData)
});

router.post('/api/createTruck', async (req, res) => {
  //handle adding truck 
  const date = new Date();
  const truckToAdd = req.body;
  truckToAdd.coordinates = { ...await getLatLong(truckToAdd.address) };
  truckToAdd.dateAdded = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  await Truck.create(truckToAdd)
  //handle adding new categories
  const currentCategories = await Categories.find().lean();
  truckToAdd.category.forEach((cat) => {
    if (!currentCategories[0].categories.includes(cat.trim())) {
      currentCategories[0].categories.push(cat.trim())
    }
  })
  await Categories.updateOne({categories:currentCategories[0].categories})
  // handle assigning new trucks to logged in user profile
  const userInfo = jwt.decode(req.headers.token);
  const currentUser = await User.find({ email: userInfo.email })
  const trucksUpdate = currentUser[0].foodtrucks;
  trucksUpdate.push(req.body.name);
  await User.findByIdAndUpdate(currentUser[0]._id, { foodtrucks: trucksUpdate })
  res.send({ status: 200 })
})

router.get('/dbClean', async (req, res) => {
  //drop the truck collection
  //  Truck.collection.drop();
  //create list of trucks off of dummy data
  //  Truck.create(listOfTrucks.listOfTrucks)
  //
  let options = {
    provider: 'openstreetmap'
  };
  const geoCoder = nodeGeocoder(options);
  const truckData = await Truck.find().lean()
  truckData.forEach(async (truck) => {
    const location = await geoCoder.geocode(truck.address);
    const truckCoord = {
      coordinates:
      {
        lat: location[0]?.latitude,
        lon: location[0]?.longitude
      }
    }
    //  await Truck.findOneAndUpdate({name:truck.name},truckCoord)
  })
  // const _truckData = await Truck.find().lean()
  res.send(truckData)
})

module.exports = router;
 /**
* Saving algo for later use
*  */ 