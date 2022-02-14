export const dateFormat = (date) =>{
const formatedDate = new Date(date);
return formatedDate.toLocaleDateString();
}