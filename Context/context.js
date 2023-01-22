import { createContext, useState } from "react";


const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data,setData] = useState({
        "product_data" : [],
        'data_exist':false,
    });
    return (
        <DataContext.Provider value={{data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext,DataProvider}