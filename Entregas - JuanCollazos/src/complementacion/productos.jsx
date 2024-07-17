import Producto from "./producto";

const Productos = () => {
  return (
    <section className="products">
      <h1>Productos Destacados</h1>
      <div className="product-grid">
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
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxXWTypp1bdoPyCYo7qdqyWvKj11OquEMGg&s"
          nombre="Carrera"
          precio={200000}
        />

      </div>
    </section>
  );
};

export default Productos;