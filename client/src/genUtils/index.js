export const dateFormat = (date) =>{
const formatedDate = new Date(date);
return formatedDate.toLocaleDateString();
}

export const sortByDate =(truckArray)=>{
   truckArray.sort(function(a,b){
      console.log(new Date(a.dateAdded),new Date(b.dateAdded));
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.dateAdded) - new Date(a.dateAdded);
        // return
      });
    //  console.log(array);
} 

export const calculateOffset = (numColumns)=>{
  switch (numColumns%3) {
    case 1:
    case 2:
      return 'span: 4, offset: 4';
      break;
    default:
      break;
  }
}