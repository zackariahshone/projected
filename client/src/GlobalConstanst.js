import NavSquares from './Components/NavSquares/navSquares';
import HomeList from './Containers/HomeList.js';
import RecommendedTrucks from './Containers/RecommendedTrucks';
import Login from './Containers/Login/login';
import SignUp from './Containers/Signup/signup';
import { VenderPortal } from './Containers/VendorPortal/vendorPortal.js'
import { ERRORPage } from './Components/Error/error'
import VenderSignup from './Containers/VendorSignup/vendersignup';


export const colorArray = ['#D6742B', '#D04F2C', '#431E15', '#D9AC36', '#428F5A', '#80B0A4'];
export const DUMMY_IMG = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g=';

export const ROUTES = [
    {
        name: 'Truck List',
        link: "homelist",
    },
    {
        name: 'Recommended For You!',
        link: "recommendedtrucks"
    },
    {
        name: 'Vender Portal',
        link: 'vender',
        protected: true
    }
   
];

export const BROWSER_ROUTER_CONFIGS =
    [
        {
            path: '*',
            element: ERRORPage
        },
        {
            path: '/',
            element: NavSquares
        },
        {
            path: 'homelist',
            element: HomeList
        },
        {
            path: 'recommendedtrucks',
            element: RecommendedTrucks
        },
        {
            path: 'login',
            element: Login
        },
        {
            path: 'signUp',
            element: SignUp
        },
        {
            path: 'vender',
            element: VenderPortal,
            protected: true

        },
        {
            path:'vender/register',
            element:VenderSignup,
            // protected:true,
        }
    ]

    export const SearchFilterButtons = ['Recommended For You', 'Favorites', 'Closest', 'Newest'];
