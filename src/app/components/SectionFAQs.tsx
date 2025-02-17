import FAQ from "./FAQ"
import { Anton } from "next/font/google"
const anton = Anton({ weight: "400", subsets: ["latin"] })

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