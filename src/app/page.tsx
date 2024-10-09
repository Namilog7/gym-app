import { Footer } from "./components/Footer";
import { SectionServices } from "./components/SectionServices";
import { Anton } from "next/font/google";
import SectionPrincipal from "./components/SectionPrincipal";
import SectionNosotros from "./components/SectionNosotros";
import SectionFAQs from "./components/SectionFAQs";


export const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <SectionPrincipal />
      <main>
        <SectionServices />
        <SectionNosotros />
        <SectionFAQs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
