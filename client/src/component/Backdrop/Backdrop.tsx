import React from "react"
import './Backdrop.css'

interface backdropType{
    children: React.ReactNode
}

const Backdrop: React.FC<backdropType> = ({children}) =>{
    return(
        <>
            <div className="backdrop-container">
                {children}            
            </div>    
        </>
    )
}

export default Backdrop