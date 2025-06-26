import { useState } from 'react'
import { Formulario } from './Formulario'
import { GridGaleria } from './GridGaleria'

export const Galeria = () => {

    const [categorias, setCategorias] = useState([])

    const onNuevaCategoria = (categoria) => {
        if (categorias.includes(categoria)) return;
        setCategorias([categoria, ...categorias]);
    }

    return (
        <>
            <Formulario onNuevaCategoria={onNuevaCategoria} />
            {
                categorias.map(categoria => (
                    <GridGaleria key={categoria} categoria={categoria} />
                ))
            }
        </>
    )
}
