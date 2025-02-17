import { Footer } from "./components/Footer";
import { SectionServices } from "./components/SectionServices";
import SectionPrincipal from "./components/SectionPrincipal";
import SectionNosotros from "./components/SectionNosotros";
import SectionFAQs from "./components/SectionFAQs";


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
