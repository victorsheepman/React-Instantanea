import React from 'react'
import { User } from '../../components/User/User'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <User name='victor' user='joaquin.perez' btn='Cambiar' />
            <div className='sidebar__users'>
                <h4>Sugerencia para ti</h4>
                <User name='victor' user='joaquin.perez' btn='Cambiar' />
                <User name='victor' user='joaquin.perez' btn='Cambiar' />
                <User name='victor' user='joaquin.perez' btn='Cambiar' />
                <User name='victor' user='joaquin.perez' btn='Cambiar' />
            </div>
            <div className='sidebar__options'>
                <div>
                    <p>Informacion</p>
                    <span></span>
                    <p>Ayuda</p>
                    <span></span>
                    <p>Prensa</p>
                    <span></span>
                    <p> API</p>
                    <span></span>
                </div>
                <div>
                    <p> Privacidad</p>
                    <span></span>
                    <p> Condiciones</p>
                    <span></span>
                    <p> Ubicaciones</p>
                    <span></span>
                </div>
                <div>
                    <p> Cuentas destacadas</p>
                    <span></span>
                    <p>Hashtags</p>
                    <span></span>
                    <p>Idioma</p>
                </div>
            </div>
            <h5 className='sidebar__footer'>© 2020 INSTAGRAM FROM FACEBOOK</h5>
        </div>
    )
}
