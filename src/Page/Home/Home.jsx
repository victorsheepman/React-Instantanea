import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../components/Post/Post'
import { Histories } from '../../container/Histories/Histories'
import {Sidebar} from '../../container/Sidebar/Sidebar'
export const Home = () => {
    const history = useNavigate();
    const handleClick =() => {
        history('/feed');
    }
    return (
        <div className='home'>
            <div className='home__feed'>
                <Histories />
                <Post post='post-1' user='wendy' click={handleClick} />
                <Post post='post-1' user='esther' className />
                <Post post='post-1' user='Iker' className />
            </div>
            <Sidebar />
        </div>
    )
}
