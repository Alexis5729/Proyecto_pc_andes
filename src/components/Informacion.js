import React from 'react';
import Imagen from '../assets/images/Banner.png';

function Informacion() {
    return (
        <div className='row'>
            <div className='col-lg-6'>
                <img src={Imagen} style={{width: '50%'}} ></img>
            </div>
        </div>
    );

}

export default Informacion;