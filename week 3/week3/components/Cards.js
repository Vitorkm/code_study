function Card(props) {
    return (
        <div className="my-card">
            <h1>{props.sigla}</h1>
            <p>{props.children}</p>
        </div>
    );
}


export default Card;