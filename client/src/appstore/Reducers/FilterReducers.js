import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {}

export const truckSearchFilterSlice = createSlice({
    name: 'truckSearchFilterSlice',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            
            const currnetFilters = current(state).SearchFilterState;
            
            const newFilters = action.payload

            const incomingfilterkey = Object.keys(newFilters)[0]
            const incomingfilterValue = Object.values(newFilters)

            if(currnetFilters !== undefined && 
                currnetFilters[incomingfilterkey] !== undefined &&  
                currnetFilters[incomingfilterkey] !== null){
                                    
                    incomingfilterValue.push(...currnetFilters[incomingfilterkey]);
            
            }   
            const filterSet = [...new Set(incomingfilterValue)]
                state.SearchFilterState = { ...currnetFilters, [incomingfilterkey]: filterSet} 
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