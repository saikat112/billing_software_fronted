import { createContext, useEffect } from "react";

export const AppContext= createContext(null);
export const AppContextProvider = (props) => {
    useEffect(() => {
        loadData();
    },[])

    const contextvalue = {


    }
    return <AppContext.Provider value={contextvalue}>
        {props.children}
    </AppContext.Provider>
}
