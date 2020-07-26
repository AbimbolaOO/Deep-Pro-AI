import React from 'react'
import imageplaceholder from './../img/imageplaceholder.png';

export default function TextImgComponent({ header1, reverse, children } ) {

    return (
        <div className= {reverse 
                        ? "txt-img-container-reversed"
                        : "txt-img-container"}>
            <div className={reverse
                            ?"txt-img-text-reversed"
                            :"txt-img-text"}>
                <h1>
                    {header1}
                </h1>
                <p>
                    {children}
                </p>
            </div>
            <img className="txt-img-image" src={imageplaceholder} alt="placeholder content"/>
        </div>
    )
}
