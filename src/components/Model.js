import React from 'react';
import './model.css'

const Model=(props)=>{
    const {title, url} = props.modelInfo;
    return(
        <div className='model-parent' onClick={props.click}>
            <div className='model-overlay'></div>
            <div className='model' >
                <span>{title}</span>
                <img src={url} alt=''/>
            </div>  
        </div>
    )
}

export default Model;