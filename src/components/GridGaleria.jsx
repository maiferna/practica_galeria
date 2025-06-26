
import { useFetch } from '../hooks/useFetch';
import { Card } from './Card'

export const GridGaleria = ({ categoria }) => {

    //const respuesta = ['a', 'b', 'c']; // Llamada a la API
    const { data, loading, error } = useFetch(categoria)
    console.log('Grid para:', categoria);
    console.log('Data:', data);
    return (
        <section>
            <h3>{categoria}</h3>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <div className="row">
                {data.map(imagen => (
                    <div key={imagen.id} className="col-4 col-lg-3 mb-4">
                        <Card imagen={imagen} />
                    </div>
                ))}
            </div>
        </section>

    )
}
