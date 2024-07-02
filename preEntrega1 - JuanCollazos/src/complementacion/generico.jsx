export function Header(props) {
    console.log(props)
  return (
    <header>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Tienda Online</p>
    </footer>
  );
}