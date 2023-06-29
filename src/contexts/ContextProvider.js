import React, { createContext, useContext, useState} from 'react'


const StateContext = createContext()

const initialState = {
    chat: false,
    cart:false,
    userProfile:false,
    notification:false
}


export const ContextProvider = ({ children }) =>{
    const [activeMenu, setActiveMenu ] = useState(true)
    const [isClicked,  setIsClicked ] = useState(initialState)
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const handleClick = (clicked) => {  
        setIsClicked({...initialState, [clicked]:true})
    }
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider
            value={{ 
                activeMenu,
                setActiveMenu, 
                isClicked, 
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize, 
                currentColor, 
                setCurrentColor
            
             }}
        > 
            {children}
        </StateContext.Provider>
    )

}


export const useStateContext = () => useContext(StateContext)