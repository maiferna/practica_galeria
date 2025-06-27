

export const Formulario = ({ onNuevaCategoria }) => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const input = ev.target.categoria.value;
        onNuevaCategoria(input);
    }

    return (
        <nav className="navbar bg-body-tertiary mt-3">
            <div className="container-fluid">
                <form className="d-flex mx-auto p-2" onSubmit={handleSubmit}>
                    <input className="form-control me-2" type="text" id="categoria" name="categoria" placeholder="Añade una categoría" />
                    <button className="btn btn-outline-success" type="submit">Añadir</button>
                </form>
            </div>
        </nav>
    )
}
