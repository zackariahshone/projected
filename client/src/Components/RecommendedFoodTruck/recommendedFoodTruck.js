// import { data } from 'jquery';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { 
    truckCategories
    } from '../../appstore/Reducers/TruckSearch';

const RecommendedTrucks = () => {

    const categories = useSelector(truckCategories);

   Object.values(categories).forEach(e=>{
    console.log(e)
   })
    return (
        // <></>
        <Container>
            <h1>Find Your Flavor! </h1>
            { Object.values(categories).map(e=>(
                <button>{e}</button>
   ))}
        </Container>
    );
}

export default RecommendedTrucks;