import { Cards } from "./Cards"
import { CgGym } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { GiChickenLeg } from "react-icons/gi";
import { content } from "../utils/utils"
import { anton } from "../page";

export const SectionServices = () => {
    return (
        <div className="services" id="section1">
            <div className="data">
                <h2 className={`${anton.className} titles`} >NUESTROS SERVICIOS</h2>
                <p>Descubre todo lo que Viking Gym tiene para ofrecerte.</p>
            </div>
            <div className="contentCards">
                <Cards className="cardServices" title="Entrenamiento Personalizado" content={content.entrenamiento} icon={<CgGym style={{ fontSize: "40px" }} />} />
                <Cards className="cardServices" title="Horario Flexible" content={content.horario} icon={<CiClock2 style={{ fontSize: "40px" }} />} />
                <Cards className="cardServices" title="Asesoría Nutricional" content={content.nutricion} icon={<GiChickenLeg style={{ fontSize: "40px" }} />} />
            </div>
        </div>
    )
}
