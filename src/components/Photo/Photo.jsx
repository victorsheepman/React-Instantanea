import React from 'react'
export const Photo = ({img,setState}) => {
    return (
        <>
            <figure className='photo' onClick={setState}>
                <img src={`assets/images/${img}.png`} alt="" />
            </figure>
        </>
    )
}
