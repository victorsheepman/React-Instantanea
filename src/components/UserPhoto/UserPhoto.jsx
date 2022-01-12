import React from 'react'

export const UserPhoto = ({img, type, name, setState}) => {
    return (
        <div className='history' onClick={()=>setState(true)}>
            <figure className={type}>
                <img src={`assets/images/${img}.png`} alt="" />
                
            </figure>
            {
                name && 
                <p>{name}</p>
            }   
        </div>
        
    )
}
