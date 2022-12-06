const router = require('express').Router();

router.get('/api/foodtrucklists', (req, res) => {
  /**
   * 
   * dummy data to be pulled from DB as soon as available
   * 
   */
    const listofTrucks = {
      'listOfTrucks': [
       {"name": "The Witching Hour",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name": "Food Therapy NWA",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Foodology Food Truck",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Burntsugars Food Truck",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Fatt Fingers",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Roll & Fold",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Boondocks Grill",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"City Pump",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"Takashimura Hibachi - Rogers",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":"T-Mo's cajun Cookin",
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":'new truck',
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      },
        {"name":'one more',
        "description":";lasdkjfl;sadjflsajdf",
        "address":"1234 W Dr Rogers,AR",
        "IMG":'www.com.comimage',
        "dateAdded":"12/5/2022"  
      }
      ]
    }
    res.send(listofTrucks)
  });

  module.exports = router;
