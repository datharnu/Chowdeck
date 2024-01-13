import React from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Order from "./components/order";
import Stories from "./components/Stories";
import Faqs from "./components/faq";
import Testing from "./components/testing";
import Footer from "./components/footer";

export default function page() {
  return (
    <>
      <Hero />
      <Info />
      <Order />
      <Stories />
      <Faqs />
      <Footer />
      {/* <Testing /> */}
    </>
  );
}
