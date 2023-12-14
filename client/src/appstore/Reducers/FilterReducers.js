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
                state.SearchFilterState = {};
        },
        removeFilter: (state, action)=>{
            var currentFilters = current(state).SearchFilterState;
            const filterToBeRemoved = action.payload;
            const filterValueTobeRemoved = Object.values(filterToBeRemoved)
            Object.keys(filterToBeRemoved).forEach(key=>{
                const newFilter = [];
                currentFilters[key].forEach((value)=>{
                   if( value != filterValueTobeRemoved[0]){
                    newFilter.push(value);
                   }
                })
                    state.SearchFilterState = { ...currentFilters, [key]: newFilter} 
            })
        },
    }
})

export const { setFilters, getFilters, removeFilters,removeFilter } = truckSearchFilterSlice.actions;
export const truckSearchFilters = (state) => state.truckSearchFilterState?.SearchFilterState;
export default truckSearchFilterSlice.reducer