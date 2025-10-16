import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen h-full ">
      <Hero />
      <Experience />
      <Footer/>

    </main>
  );
}
