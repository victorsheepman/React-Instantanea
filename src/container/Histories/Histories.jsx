import React, { useState } from 'react'
import { UserPhoto } from '../../components/UserPhoto/UserPhoto'
import { History } from '../../components/History/History'
const users = [
{
    name:'Tu Historia',
    img:'User-1',
    class:'userphoto',
},
{
    name:'esther',
    img:'esther',
    class:'userphoto--other'
},
{
    name:'carlos',
    img:'carlos',
    class:'userphoto--other'
},
{
    name:'juan',
    img:'juan',
    class:'userphoto--other'  
},
{
    name:'Cristobal',
    img:'Cristobal',
    class:'userphoto--other' 
},
{
    name:'Iker',
    img:'Iker',
    class:'userphoto--other' 
},
{
    name:'Almudena',
    img:'Almudena',
    class:'userphoto--other' 
}
]
export const Histories = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='histories' id='historia'>
            {
                users.map(
                    (user)=><UserPhoto key={user.name} type={user.class} name={user.name} img={user.img} setState={setShow} />
                )
            }
            {
                show && <History setState={setShow} />
            }
              
            
        </div>
    )
}
