import React, { useEffect, useState } from "react";


const ContextPhotos = React.createContext({})

const LoadingPhotos = ({children}) => {

    const [loadPhotos, setLoadPhotos] = useState('')

    useEffect(() => {
        setLoadPhotos(require('../images/photos/smaller/entradas.jpg'))
    },[])

    return ( 
        <ContextPhotos.Provider
        value={{loadPhotos}}>
            {children}
        </ContextPhotos.Provider>
     );
}
 
export {ContextPhotos, LoadingPhotos};