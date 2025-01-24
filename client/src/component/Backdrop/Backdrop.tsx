import React from "react"
import './Backdrop.css'

interface backdropType{
    Payment: React.FC
}

const Backdrop: React.FC<backdropType> = ({Payment}) =>{
    return(
        <>
            <div className="backdrop-container">
                <Payment></Payment>            
            </div>    
        </>
    )
}

export default Backdrop