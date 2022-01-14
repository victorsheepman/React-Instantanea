import React,{useState} from 'react'
import { Photo } from '../../components/Photo/Photo'
import { Modal } from '../../components/Modal/Modal';
import { Helmet } from 'react-helmet';
export const Feed = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    console.log(show);
    return (
        <div className='feed'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Instantanea</title>
                <meta name="Instantanea" content="Instantanea feed" />
            </Helmet> 
            <div className='feed__user'>
                <figure>
                    <img src="assets/images/wendy.png" alt="" />
                </figure>
                <div className='feed__info'>
                    <div className='feed__info__name'>
                        <h2>wendy</h2>
                        <button>Enviar mensaje</button>
                    </div>
                    <div className='feed__info__followers'>
                        <span>
                            <strong>141</strong>publicaciones
                        </span>
                        <span>
                            <strong>2,768</strong>seguidores
                        </span>
                        <span>
                            <strong>761</strong>seguidos
                        </span>
                    </div>
                    <span className='feed__bio'>🌄 Disfruta de los mejores paisajes del mundo</span>
                </div>
            </div>
            <nav className='feed__nav'>
                <h4>PUBLICACIONES</h4>
                <h4>REELS</h4>
                <h4>IGTV</h4>
                <h4>GUARDADO</h4>
                <h4>ETIQUETADAS</h4>
            </nav>
            <div className='feed__post'>
                <Photo img='feed-1' setState={handleOpen} id='principal'/>
                <Photo img='feed-2'/>
                <Photo img='feed-3'/>
                <Photo img='feed-4'/>
                <Photo img='feed-5'/>
                <Photo img='feed-6'/>
                <Photo img='feed-7'/>
                <Photo img='feed-8'/>
                <Photo img='feed-9'/> 
            </div>
            {show && <Modal show={show} setState={handleClose} />}
        </div>
    )
}
