

export const Card = ({ imagen }) => {
    return (
        <>
            <div className="card">
                {<img className="card-img-top" src={imagen.src.medium} />}
                {<div className="card-body">
                    <p className="card-text">
                        {imagen.photographer}
                    </p>
                </div>}
            </div>
        </>
    )
}
