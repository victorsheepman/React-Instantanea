import React from 'react'

export const History = ({setState}) => {
    return (
        <div  className='history-modal'>
            <figure className='history-modal__exit' onClick={()=>setState(false)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.70703 0.292969L0.292969 1.70703L7.58594 9L0.292969 16.293L1.70703 17.707L9 10.4141L16.293 17.707L17.707 16.293L10.4141 9L17.707 1.70703L16.293 0.292969L9 7.58594L1.70703 0.292969Z" fill="white"/>
                </svg>
            </figure>
            <figure className='history-modal__logo'>
                <img src="assets/images/instagram.png" alt="" />
            </figure>
            <figure className='history-modal__img'>
                <img src="assets/images/history.png" alt="" />
                <div className='history-modal__img__user'>
                    <figure>
                    <img src="assets/images/User-1.png" alt="" />
                    </figure>
                    <p>Joaquin</p>
                </div>
                <div className='history-modal__img__footer'>
                    <input type="text"  placeholder='Responder a joaquin...'/>
                </div>
            </figure>
        </div>
    )
}
