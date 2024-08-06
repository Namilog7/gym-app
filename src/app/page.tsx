import { Button } from "./components/Button";
import { NavBar } from "./components/NavBar";
import { SectionServices } from "./components/SectionServices";


export default function Home() {
  return (
    <>
      <NavBar />
      <header>
        <div className="contenedor">
          <h1>
            Bienvenido a Viking Gym
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aperiam minima porro voluptatem maiores! Nobis obcaecati magnam eius, autem consequuntur ipsam error
          </p>
          <div className="contenedorbotones">
            <Button className="button" content="Empezar" />
            <Button className="ingresar" content="Ingresar" />
          </div>
        </div>
      </header>
      <main>
        <SectionServices />
      </main>
    </>
  );
}
