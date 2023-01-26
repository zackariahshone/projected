import { useSelector } from 'react-redux';
import {
    truckCategories
} from '../../appstore/Reducers/TruckSearch';
import './style.css';
import { colorArray } from '../../GlobalConstanst';

export const DisplayCategories =({setUserCategories,userCategories})=>{
    const categories = useSelector(truckCategories);
    let colorIndex = 0;
    let textIndex = colorArray.length-1;
     return (
         Object.values(categories).map((category, i) => {
             if(i>0){
         colorIndex++;
         textIndex--;
        }
         colorIndex = colorArray.length === colorIndex ? 0 : colorIndex;
         textIndex = textIndex !== -1 ? textIndex : colorArray.length-1;    
         return (
             <button
                 style={{ backgroundColor: `${colorArray[colorIndex]}`, color: `${colorArray[textIndex]}` }}
                 key={`catButton_${i}`}
                 className={`categoryButtons ${userCategories.includes(category)? 'recTruckActive' :''}`}
                 onClick={() => {
                    if(!userCategories.includes(category)){
                     setUserCategories([...userCategories, category])
                    }
                 }}
             >{category}</button>
         )
     })
     )
}
