import { anton } from "../page"
import FAQ from "./FAQ"


export default function SectionFAQs() {
    return (
        <div id="section3" className="nosotros" >
            <div>
                <h2 className={`${anton.className} titles`}>Preguntas Frecuentes</h2>
            </div>
            <FAQ></FAQ>
        </div>
    )
}