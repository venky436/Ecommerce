import React from 'react'

export const Rating = ({value,text,color}) => {
    return (
        <div>
            <span className="d-block mx-2 my-1">
                <i style={{color:"gold"}}  className={
                    value>=1 ? "fas fa-star"
                    : value >=0.5 ? "fas fa-star-half-alt"
                    : "far fa-star"
                }>

                </i>
                <i style={{color:"gold"}}  className={
                    value>=2 ? "fas fa-star"
                    : value >=1.5 ? "fas fa-star-half-alt"
                    : "far fa-star"
                }>

                </i>
                <i style={{color:"gold"}}  className={
                    value>=3 ? "fas fa-star"
                    : value >=2.5 ? "fas fa-star-half-alt"
                    : "far fa-star"
                }>

                </i>
                <i style={{color:"gold"}}  className={
                    value>=4 ? "fas fa-star"
                    : value >=3.5 ? "fas fa-star-half-alt"
                    : "far fa-star"
                }>

                </i>
                <i style={{color:"gold"}}  className={
                    value>=5 ? "fas fa-star"
                    : value >=4.5 ? "fas fa-star-half-alt"
                    : "far fa-star"
                }>

                </i>
            </span>
            <span className="d-block my-1">{text}</span>
        </div>
    )
}
