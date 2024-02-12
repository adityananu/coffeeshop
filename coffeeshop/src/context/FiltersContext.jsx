import { useContext } from "react";

const FilterContext = useContext();

function FiltersContext({children}) {
    return(
        <FilterContext.Provider>
            {children}
        </FilterContext.Provider>
    )
};
 
export {FiltersContext};