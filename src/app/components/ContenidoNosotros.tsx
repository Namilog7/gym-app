import Piramid from "./Piramid";
import Images from "./Images";

export default function ContenidoNosotros() {
    return (
        <div className="nosotroscontenido">
            <div className="contenido">
                <h3>Disciplina y Voluntad</h3>
                <p style={{ color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat qui voluptatem necessitatibus inventore illum provident. Iure magni, ratione ipsa, dicta veniam eaque necessitatibus sequi illum nobis, culpa nisi accusantium!</p>
                <p style={{ color: "grey" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo deleniti a inventore repellat cumque delectus odit et, perspiciatis architecto expedita culpa vero excepturi, aut nemo quasi adipisci dolore fugit in?</p>
                <Piramid />
            </div>
            <Images />
        </div>
    )
}