const router = require('express').Router();
const Categories = require('../../dbconnection/models/Categories');
const Truck = require('../../dbconnection/models/Trucks');
const Reviews = require('../../dbconnection/models/Reviews');
const dummyImage = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g=';
const nodeGeocoder = require('node-geocoder');
const jwt = require("jsonwebtoken");
const User = require('../../dbconnection/models/User');
const UTILS = require('./utils');
const { current } = require('@reduxjs/toolkit');


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
        'BBQ', 'chicken'
      ]
    },
    {
      "name": "Foodology Food Truck",
      "description": ";lasdkjfl;sadjflsajdf",
      "address": "115 NW 2nd St, Bentonville, AR 72712",
      "IMG": dummyImage,
      "dateAdded": "12/2/2022",
      "category": [
        'burger', 'poutine', 'smash burger', 'panini'
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
const rmvWhiteSpace = (array) => {
  const cleanArray = []
  array.forEach((el) => {
    cleanArray.push(el.trim())
  })
  return cleanArray
}
const getLatLong = async (address) => {
  const openstreemapURL = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
  try {
    const response = await fetch(openstreemapURL, {
      headers: {
        'User-Agent': 'clustertruck/v1.0 zackariahshone@gmail.com'
      }
    });
    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return (
      {
        lat: data[0].latitude,
        lon: data[0].longitude
      }
    )
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}
router.get('/api/getcategories', async (req, res) => {
  try {
    const categories = await Categories.findOne().lean();
    console.log('get cat ====',categories );
    
    res.json(categories.categories);

  } catch (error) {
    res.json({})
  }
});


router.get('/api/foodtrucklists', async (req, res) => {
  try {
    const truckData = await Truck.find().lean()
    res.json(truckData)

  } catch (error) {
    // res.send({status:error});  
  }
});


router.post('/api/createTruck', async (req, res) => {
  //handle adding truck 
  const date = new Date();
  const truckToAdd = req.body;
  truckToAdd.category = req.body.category ? rmvWhiteSpace(req.body.category):[];
  let catForUpdate = [];
  let currentCategories = truckToAdd.category;
  truckToAdd.coordinates = { ...await getLatLong(truckToAdd.address) };
  truckToAdd.dateAdded = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  const addedTruck = await Truck.create(truckToAdd);
  //handle adding new categories
  currentCategories = await Categories.find().lean();
  
  if(truckToAdd.category && currentCategories[0] != undefined && currentCategories[0]?.categories){
    truckToAdd.category.forEach((cat) => {
      if (!currentCategories[0].categories.includes(cat.trim()) &&
      cat.trim().length !== 0) {
        currentCategories[0].categories.push(cat.trim())
      }
      catForUpdate = currentCategories[0].categories
    })
  }else{
    catForUpdate = truckToAdd.category
  }
  console.log(catForUpdate);
  
  const filter = { name: 'categories' }; // Filter to find or create the document
  // The string to add to the array

   await Categories.findOneAndUpdate(
      filter,
      { $addToSet: { filters: catForUpdate } }, // Add newTag to the 'tags' array, avoiding duplicates
      { new: true, upsert: true } // Return the modified document, create if not found
    )

  // await Categories.updateOne({categories:catForUpdate},{ upsert: true })
  // handle assigning new trucks to logged in user profile
  const userInfo = jwt.decode(req.headers.token);
  const currentUser = await User.find({ email: userInfo.email })
  const trucksUpdate = currentUser[0].foodtrucks;
  trucksUpdate.push(addedTruck._id);
  await User.findByIdAndUpdate(currentUser[0]._id, { foodtrucks: trucksUpdate })
  // res.send({ status: 200 })
})

router.delete('/api/deletetruck', async (req, res) => {
  //delete truck as requested
  const truckId = req.body.id
  await Truck.findByIdAndDelete({ _id: truckId });
  //clean up categories when truck is removed and categorie no longer matches a truck. 
  const currentCategories = await Categories.find().lean()
  const truckData = await Truck.find({}).lean()
  const truckCategories = new Set();
  truckData.forEach(truck => {
    truck.category.forEach((cat) => {
      truckCategories.add(cat);
    });
  })
  const filterdCategories = currentCategories[0].categories.filter((category) => [...truckCategories].includes(category));
  await Categories.updateOne({ categories: filterdCategories })
  res.json({ deleted: true });
})
router.post('/api/editTruck', async (req, res) => {
  const updatedTruck = await Truck.findOneAndUpdate({ _id: req.headers.truckid }, UTILS.rmvEmpty(req.body)).lean();
  const currentUser = jwt.decode(req.headers.token)
  const user = await User.findOneAndUpdate({ email: currentUser.email }, { foodtrucks: updatedTruck._id })
})
router.post('/api/review',async(req,res)=>{
  const review = {text:req.body.reviewText,rating:req.body.rating} 
  const ratingID = req.body.ratingID || "annonymous"
  if(review.text && review.rating){

    const setReview = await Reviews.findOneAndUpdate(
      { _id: req.body.id }, 
      {
        $push: 
        {reviews: { rating: review.rating, ratingtext: review.text, ratingID : ratingID }}
      },
      { upsert: true, new: true } 
    ); 
    const truck = await Truck.findById(req.body.id)
    if(!truck){
      console.log("no truck");
    }

    
    truck.ratingCount =  setReview.reviews.length 
      const validRatings = setReview.reviews.map(r => r.rating).filter(r => typeof r === 'number' && r >= 1 && r <= 5);
      if (validRatings.length === 0) return 0;
      const sum = validRatings.reduce((acc, val) => acc + val, 0);
      const average = sum / validRatings.length;
      
      truck.rating = Math.round(average * 10) / 10;   
    await truck.save();
    res.send({status:400, reason:"emptyData"})
  }
  })
router.get('/api/reviews',async(req,res)=>{
  const truckRevie = await Reviews.findById(req.query.id);
  truckRevie.reviews = truckRevie?.reviews?.filter(r => Object.keys(r).length > 0);
  await truckRevie.save()
  res.json(await Reviews.findById(req.query.id)); 
})
/**
 * just dirty utils 
 * uncoment lines that you need the run /dbDoDirty 
 * to clean what ever you need
 */
// router.get('/dbDoDirty', async (req, res) => {
//   const truck = await Truck.findById({_id:"646d4739f472fc6d7ab56974"})

//   truck.rating = 0;
//   truck.ratingCount = 0;
//   await truck.save();
//   res.json(await Truck.find({_id:"646d4739f472fc6d7ab56974"}));
// }) 
// await Categories.updateOne({categories:[]})

//find all users
// const users = await User.find({}).lean();
//drop the truck collection
//  Truck.collection.drop();
//create list of trucks off of dummy data
//  Truck.create(listOfTrucks.listOfTrucks)
//drop the users
//  User.collection.drop();
//set geoLocation for all trucks 
// let options = {
//   provider: 'openstreetmap'
// };
// const geoCoder = nodeGeocoder(options);
// const truckData = await Truck.find().lean()
// truckData.forEach(async (truck) => {
//   const location = await geoCoder.geocode(truck.address);
//   const truckCoord = {
//     coordinates:
//     {
//       lat: location[0]?.latitude,
//       lon: location[0]?.longitude
//     }
//   }
//  await Truck.findOneAndUpdate({name:truck.name},truckCoord)
// })
// const _truckData = await Truck.find().lean()
// res.send(cats)

// })

module.exports = router;

