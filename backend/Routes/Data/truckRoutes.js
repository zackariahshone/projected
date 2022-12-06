const router = require('express').Router();

const dummyImage = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g='

router.get('/api/foodtrucklists', (req, res) => {
  /**
   * 
   * dummy data to be pulled from DB as soon as available
   * 
   */
  const listofTrucks = {
    'listOfTrucks': [
      {
        "name": "The Witching Hour",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood-truck&psig=AOvVaw3fxWXYVbIaEHSWlpGyDvyp&ust=1670377631199000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjImNzv4_sCFQAAAAAdAAAAABAE',
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Food Therapy NWA",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022",
        "category":[
          
        ]
      },
      {
        "name": "Foodology Food Truck",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Burntsugars Food Truck",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Fatt Fingers",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Roll & Fold",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Boondocks Grill",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "City Pump",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "Takashimura Hibachi - Rogers",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": "T-Mo's cajun Cookin",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": 'new truck',
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      },
      {
        "name": 'one more',
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022"
      }
    ]
  }
  res.send(listofTrucks)
});

module.exports = router;
