import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Student from "../components/Student";

export default function Home() {
  return (
    <div className="bg-[#121212] h-screen scroll-smooth snap-y snap-mandatory overflow-scroll z-0">
      {/* Head */}
      <Head>
        <title>Sell your Soul</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* Features */}
      <section id="features">
        <Features />
      </section>
      <section id="student">
        <Student />
      </section>
    </div>
  );
}
