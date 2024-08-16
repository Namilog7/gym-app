import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { SectionServices } from "./components/SectionServices";
import { Anton } from "next/font/google";
import { Button } from "./components/Button";
import { SectionPlace } from "./components/SectionPlace";

export const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
        <div className="contenedorheader">
          <div className="divh1">
            <h1 className={`${anton.className} titles`} style={{ fontSize: "4em", margin: "0" }}>ALCANZA TUS METAS</h1>
            <h1 className={anton.className} style={{ fontSize: "4em", margin: "0", color: "#07296b" }}>
              TRANSFORMA TU ESTILO DE VIDA
            </h1>
            <p style={{ fontSize: "20px", color: "grey" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quae obcaecati quos animi nam excepturi distinctio, aliquam sunt null</p>
            <Button content="ENTRENAR" className="ingresar" />
          </div>

        </div>
      </header>
      <main>
        <SectionServices />
        <SectionPlace />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
