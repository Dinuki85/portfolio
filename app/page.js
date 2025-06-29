'use client';
import Header from "@/app/components/Header";
import Navbar from "./components/Navbar";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import Contact from "@/app/components/Contact";



export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
