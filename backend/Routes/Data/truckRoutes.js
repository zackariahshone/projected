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
        "address": "704 SW A St, Bentonville, AR 72712",
        "IMG": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffood-truck&psig=AOvVaw3fxWXYVbIaEHSWlpGyDvyp&ust=1670377631199000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjImNzv4_sCFQAAAAAdAAAAABAE',
        "dateAdded": "12/5/2022",
        "category":[
          
        ]
      },
      {
        "name": "Food Therapy NWA",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "623 W Walnut St. Rogers, AR 72756",
        "IMG": dummyImage,
        "dateAdded": "12/1/2022",
        "category":[
          
        ]
      },
      {
        "name": "Foodology Food Truck",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "115 NW 2nd St, Bentonville, AR 72712",
        "IMG": dummyImage,
        "dateAdded": "12/2/2022",
        "category":[
          
        ]
      },
      {
        "name": "Burntsugars Food Truck",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "105 1st Ave SE, Gravette, AR 72736",
        "IMG": dummyImage,
        "dateAdded": "12/4/2022",
        "category":[
          
        ]
      },
      {
        "name": "Fatt Fingers",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": " 623 W Walnut St, Rogers, AR 72756",
        "IMG": dummyImage,
        "dateAdded": "12/1/2022",
        "category":['greasy','soulfood', 'fries']
      },
      {
        "name": "Roll & Fold",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "801 SE 8th St, Bentonville, AR 72712",
        "IMG": dummyImage,
        "dateAdded": "12/6/2022",
        "category":['asian', 'sushi']
      },
      {
        "name": "Boondocks Grill",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "623 W Walnut St, Rogers, AR 72756",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022",
        "category":['grill','bbq','burgers']
      },
      {
        "name": "City Pump",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "623 W Walnut St, Rogers, AR 72756",
        "IMG": dummyImage,
        "dateAdded": "12/1/2022",
        "category":['variety','food truck venue', 'multiples']
      },
      {
        "name": "Takashimura Hibachi - Rogers",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "623 W Walnut St, Rogers, AR 72756",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022",
        "category":['hibachi','asian-fusion']
      },
      {
        "name": "T-Mo's cajun Cookin",
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "401 S Bloomington St, Lowell, AR 72745",
        "IMG": dummyImage,
        "dateAdded": "11/4/2022",
        "category":['cajun','spicy',]
      },
      {
        "name": 'new truck',
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022",
        "category":['vegen', 'veggie', 'sandwitch']
      },
      {
        "name": 'one more',
        "description": ";lasdkjfl;sadjflsajdf",
        "address": "1234 W Dr Rogers,AR",
        "IMG": dummyImage,
        "dateAdded": "12/5/2022",
        "category":['vegen', 'veggie']
      }
    ]
  }
  res.send(listofTrucks)
});

module.exports = router;
