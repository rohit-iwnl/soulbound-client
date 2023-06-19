import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Student from "../components/Student";
import Testing from "@/components/Testing";
import About from "@/components/About";
import Sending from "@/components/Sending";
import Claim from "@/components/Claim";
import Both from '@/components/Both';

export default function Home() {
  return (
    <div className="bg-[#121212] h-screen scroll-smooth snap-y snap-mandatory overflow-scroll z-0">
      {/* Head */}
      <Head>
        <title>Soul Bound</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      <section id="feat">
        <Testing />
      </section>
      {/* Features */}
      {/* <section id="features">
        <Features />
      </section> */}
      <section id="about">
        <About />
      </section>
      <section id="send">
        <Sending />
      </section>
      <section id="claim">
        <Claim />
      </section>
    </div>
  );
}
