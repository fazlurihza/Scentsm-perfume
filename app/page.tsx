"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import ProcessSection from "@/components/ProcessSection";
import ScentPalette from "@/components/ScentPalette";
import StorySection from "@/components/StorySection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import OrderBuilderDrawer from "@/components/OrderBuilderDrawer";

export default function Home() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const openOrder = useCallback(() => setIsOrderOpen(true), []);
  const closeOrder = useCallback(() => setIsOrderOpen(false), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <ProcessSection />
        <ScentPalette />
        <StorySection />
        <ConsultationSection onStartConsultation={openOrder} />
      </main>
      <Footer />
      <OrderBuilderDrawer isOpen={isOrderOpen} onClose={closeOrder} />
    </>
  );
}
