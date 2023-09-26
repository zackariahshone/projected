import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {}

export const truckSearchFilterSlice = createSlice({
    name: 'truckSearchFilterSlice',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            const newFilters = action.payload
            const currnetFilters = current(state).SearchFilterState;

            const filterkey = Object.keys(newFilters)[0]
            const filterValue = Object.values(newFilters)
            // console.log(...currnetFilters[filterkey])
            console.log(newFilters);
            if(currnetFilters !== undefined && 
                currnetFilters[filterkey] !== undefined &&  
                currnetFilters[filterkey] !== null){
                    
                    console.log(currnetFilters[filterkey]);
                
                filterValue.push(...currnetFilters[filterkey]);
            
            }   
            console.log(filterValue);
            const filterSet = [...new Set(filterValue)]
            console.log(filterSet);
            // if (Object.keys(currnetFilters).indexOf(filterkey) !== -1) {
                state.SearchFilterState = { ...currnetFilters, [filterkey]: filterSet} 
            // } else {
                // state.SearchFilterState = { [filterkey]: filterSet }
            // }
        },
        removeFilters: (state, action) => {
            // state.selectedFilters
        },
        getFilters: (state, action) => {
            // state.selectedFilters
        }
    }
})

export const { setFilters, getFilters, removeFilters } = truckSearchFilterSlice.actions;
export const truckSearchFilters = (state) => state?.SearchFilterState;
export default truckSearchFilterSlice.reducer