export const dateFormat = (date) =>{
const formatedDate = new Date(date);
return formatedDate.toLocaleDateString();
}

export const sortByDate =(array)=>{
   array.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      });
      return array;
} 