

function Card(props) {
    return (
      <div>
        <h2>La suscripción se realizó con éxito</h2>
        <h3>Datos registrados</h3>
        <p>Nombre: {props.nombre}</p>
        <p>Correo: {props.correo}</p>
      </div>
    );
  }
  export default Card;