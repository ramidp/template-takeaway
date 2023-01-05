import React from "react";
import { useState } from "react";

const ContextHide = React.createContext({});


const HideContext = ({children} : any) => {

    const [hide, setHide] = useState<boolean>(false)
    const [hide2, setHide2] = useState<boolean>(false)
    const [changeImage, setChangeImage] = useState<boolean>(false)

    const menuHidding = () => {
            setHide(true)
            setHide2(false)
    }

    const menuHidding2 = () => {
        setHide2(true)
        setHide(false)
    }

    const menuOff = () => {
        setHide(false)
        setHide2(false)
    }

    return ( 
        <ContextHide.Provider
        value={{hide, hide2, setHide, menuHidding, menuOff, menuHidding2, changeImage, setChangeImage}}>
            {children}
        </ContextHide.Provider>
     );
}
 
export {HideContext, ContextHide};