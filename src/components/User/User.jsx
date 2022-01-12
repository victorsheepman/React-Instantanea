import React from 'react'
import { UserPhoto } from '../UserPhoto/UserPhoto'
export const User = ({name, user, btn}) => {
    return (
        <div className='user'>
            <UserPhoto img={'juan'} type={'userphoto'}/>
            <div className='user__info'>
                <h5>{name}</h5>
                <span>{user}</span>
            </div>
            <span className='user__buttom'>{btn}</span>
        </div>
    )
}
