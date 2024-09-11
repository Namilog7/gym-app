import { Footer } from "./components/Footer";
import { SectionServices } from "./components/SectionServices";
import { Anton } from "next/font/google";
import SectionPrincipal from "./components/SectionPrincipal";
import { SectionPlace } from "./components/SectionPlace";

export const anton = Anton({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <SectionPrincipal />
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
