

import React from 'react';
import PropTypes from 'prop-types';


const ContactEstruct = ({props}) => {
    return (
        <>
            <h2>Nombre: {props.nombre}</h2>
            <h2>Apellido:{props.apellido}</h2>
            <h3>Email:{props.email}</h3>
            <h4> Su estado es : {props.conectado?  'Contacto en linea':'Contacto no disponible'} </h4>            

        </>
    );
};


ContactEstruct.propTypes = {

    nombre: PropTypes.string.isRequired,
    apellido:PropTypes.string.isRequired,
    email:PropTypes.string,
    conectado:PropTypes.bool,   

};


export default ContactEstruct;
