import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { SectionServices } from "./components/SectionServices";
import { CgMathPlus } from "react-icons/cg";
import { Anton } from "next/font/google";
import { Cards } from "./components/Cards";
import { Button } from "./components/Button";

export const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <div className="contenedor">
          <div className="divh1">
            <h1 className={anton.className} style={{ fontSize: "6em", margin: "0" }}>
              TRANSFORMA TU ESTILO DE VIDA
            </h1>
            <p style={{ fontSize: "20px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae obcaecati quos animi nam excepturi distinctio, aliquam sunt null</p>
            <Button content="Empezar" className="ingresar" />
          </div>

        </div>
      </header>
      <main>
        <SectionServices />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
