import React, {useState, useEffect, createContext} from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]); //(1)
    // Luu tru data vao local
    useEffect(() =>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    },[]);
   

    return(
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}