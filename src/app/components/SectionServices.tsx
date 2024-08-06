import { ServicesCards } from "./ServicesCards"
import { CgGym } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { GiChickenLeg } from "react-icons/gi";
import { content } from "../utils/utils"


export const SectionServices = () => {
    return (
        <div className="services">
            <h2>Nuestros Servicios</h2>
            <div className="contentCards">
                <ServicesCards title="Entrenamiento Personalizado" content={content.entrenamiento} icon={<CgGym style={{ fontSize: "40px" }} />} />
                <ServicesCards title="Horario Flexible" content={content.horario} icon={<CiClock2 style={{ fontSize: "40px" }} />} />
                <ServicesCards title="Asesoría Nutricional" content={content.nutricion} icon={<GiChickenLeg style={{ fontSize: "40px" }} />} />
            </div>
        </div>
    )
}
