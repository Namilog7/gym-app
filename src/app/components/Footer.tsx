import { anton } from "../page"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="data">
                <h2 className={`${anton.className} titles`}>Contáctanos</h2>
                <p>Si tienes alguna pregunta o quieres más información, no dudes en comunicarte con nosotros.</p>
            </div>
            <div className="divredes">
                <a href="" className="redes ig">
                    <FaInstagram style={{ fontSize: "40px" }} />
                </a>
                <a href="" className="redes fb">
                    <FaFacebookF style={{ fontSize: "40px" }} />
                </a>
                <a href="" className="redes wp">
                    <FaWhatsapp style={{ fontSize: "40px" }} />
                </a>
            </div>

        </div>
    )
}