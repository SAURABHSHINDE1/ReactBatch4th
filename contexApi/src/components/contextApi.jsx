import { createContext } from "react";


export const dataContext = createContext()

export const DataProvider =({children})=>{

    let name = "om"

    return <dataContext.Provider value={{name}}>

        {children}

    </dataContext.Provider>

}