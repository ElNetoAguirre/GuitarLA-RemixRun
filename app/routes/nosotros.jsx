import imagen from "../../public/img/nosotros.jpg"
import styles from "~/styles/nosotros.css"

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de música"
  }
}

export function links() {
  return[
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen Sobre Nosotros"/>
        <div>
          <p>Nullam sed lectus maximus, dapibus velit ac, placerat dolor. Curabitur sit amet ex vel elit iaculis dapibus id eget dui. In lobortis purus quis odio fermentum ultricies. Phasellus non nisl a dui aliquam hendrerit. Suspendisse dolor felis, pretium ut risus tincidunt, cursus imperdiet urna. Mauris tempor dictum mi, nec tempus tortor iaculis et. Aliquam ut rhoncus lectus.</p>

          <p>Nullam sed lectus maximus, dapibus velit ac, placerat dolor. Curabitur sit amet ex vel elit iaculis dapibus id eget dui. In lobortis purus quis odio fermentum ultricies. Phasellus non nisl a dui aliquam hendrerit. Suspendisse dolor felis, pretium ut risus tincidunt, cursus imperdiet urna. Mauris tempor dictum mi, nec tempus tortor iaculis et. Aliquam ut rhoncus lectus.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros