

import React from 'react';
import ContactEstruct from '../forms/contact_estruct';
import { Contacto } from '../models/contacto';



const ContactComp = () => {

    const defaultcontacto= new Contacto(' Maria Camila',' Castro',' cami@gmail.com', true)     
    //  console.log(defaultcontacto)
    return (
        <>
            <h1>Mis nuevos contactos  </h1>
             <ContactEstruct props={defaultcontacto}></ContactEstruct>
        </>
    );
};

export default ContactComp;
