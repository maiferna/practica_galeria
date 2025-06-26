import React from 'react'

export const fetchCall = async (url) => {
    const apiKey = import.meta.env.VITE_API_KEY; // import.meta para acceder a metainformación sobre el módulo actual. forma estándar en los módulos ES6
    const urlBase = import.meta.env.VITE_URL_BASE;
    try {
        // Llamada fetch
        const respuesta = await fetch(`${urlBase}${url}&per_page=8`, {
            headers: {
                'Authorization': `${apiKey}`
            }
            //cache
        })
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data.photos;
        } else {
            throw ("Error con la data");
        }
    } catch (error) {
        console.log({error});
        throw (error);
    }
}
