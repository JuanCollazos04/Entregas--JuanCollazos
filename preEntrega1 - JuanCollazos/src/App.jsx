function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">
        Beauty Shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 5H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zM3.14 6l1.25 6H12.5l1.25-6H3.14zM5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
              <span className="cart-count">{5}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Producto(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={props.imagen} className="card-img-top" alt={props.nombre} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">${props.precio}</p>
          <button className="btn-añadir">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

const Productos = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">PRODUCTOS DESTACADOS</h1>
      <div className="row">
        <Producto
          imagen="https://www.funkychic.com.co/uploads/funkychico/product_images/857/medium/rubor-liquido-beauty_kZPyG.jpg"
          nombre="Rubor"
          precio={90000}
        />
        <Producto
          imagen="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/09/16468224518548.jpg"
          nombre="Pestañina"
          precio={100000}
        />
        <Producto
          imagen="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ50St3gOHU5a1mScJiccVzv8jxl37aKdGyWqMgS0mSL5VNwiVYie_xkaXcbskBxR-JGiCV7Vmf-GvFBxLVbI_rK5hCxhSP-MWFSxArHX4O5wKN_xYuuNl4r2jp8l9r0ICblmQ1Y7Uiyg&usqp=CAc"
          nombre="Contorno de Ojos"
          precio={100000}
        />
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Tienda Online</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Productos />
      <Footer />
    </>
  );
}

export default App;