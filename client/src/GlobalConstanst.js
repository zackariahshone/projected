import NavSquares from './Components/NavSquares/navSquares';
import FoodTruckNearBy from './Containers/FoodTruckNearBy';
import NewTrucks from './Containers/NewTrucks/newTrucks';
import TruckSearch from './Containers/TruckSearch/trucksearch';
import RecommendedTrucks from './Containers/RecommendedTrucks';
import Login from './Containers/Login/login';
import SignUp from './Containers/Signup/signup'
// import { VendorSignup } from './Containers/VendorSignup/vendorsignup';
import { VendorPortal } from './Containers/VendorPortal/vendorPortal.js'
import { ERRORPage } from './Components/Error/error'
import VenderSignup from './Containers/VendorSignup/vendersignup';


export const colorArray = ['#80B0A4', '#D04F2C', '#D9AC36', '#431E15', '#428F5A', '#D6742B'];
export const DUMMY_IMG = 'https://media.istockphoto.com/id/1301655857/vector/food-truck-illustration.jpg?s=1024x1024&w=is&k=20&c=GVgNLfVIJFCwH70eMQZd5dRvNbP0F7WcixupUFJtl6g=';

export const ROUTES = [
    {
        name: 'Closest Food-Trucks',
        link: "foodtrucksnearby",
    },
    {
        name: 'New Food-Trucks',
        link: "newfoodtrucks"
    },
    {
        name: 'Food-Truck Search',
        link: "trucksearch"
    },
    {
        name: 'Recommended For You!',
        link: "recommendedtrucks"
    },
    {
        name: 'Vendor Portal',
        link: 'vendor',
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
            path: 'foodtrucksnearby',
            element: FoodTruckNearBy
        },
        {
            path: 'newfoodtrucks',
            element: NewTrucks
        },
        {
            path: 'trucksearch',
            element: TruckSearch
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
            path: 'vendor',
            element: VendorPortal,
            protected: true

        },
        {
            path:'vendor/register',
            element:VenderSignup,
            protected:true,
        }
    ]
