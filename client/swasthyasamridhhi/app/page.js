'use client'
import { useState, useEffect } from 'react';
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero/>
          <Countdown />
          <FAQ />
          <Footer/>
        </>
      )}
    </>
  );
}
