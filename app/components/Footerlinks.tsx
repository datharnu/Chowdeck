import React from "react";
import Verified from "../../public/Verified1.gif";
import Badge from "./Badge";
import logo from "../../public/logo.svg";
import Image from "next/image";
import icon3 from "../../public/Icon3.svg";
import icon4 from "../../public/Icon4.svg";
import icon2 from "../../public/Icon2.svg";

export default function Footerlinks() {
  return (
    <section className="flex">
      {/* logo and Verified */}
      <div className="sm:hidden flex-col pr-5 space-y-[40rem] ">
        {/* Verified Picture */}
        <div>
          <Image src={Verified} alt={"Verified"} />
        </div>
        {/* logo */}
        <div className="sm:hidden md:hidden">
          <Badge clx="bg-primary mt-4 py-6 px-7 text-[17px] space-x-2 border-none cursor-pointer">
            <Image src={logo} alt="Logo" width={25} height={25} />
            <span className="text-white font-bold">Chowdeck</span>
          </Badge>
        </div>
      </div>
      <div className="lg:border-l border-white-20 flex-1">
        <div className="border-b border-white-20 pt-16 lg:pt-0 lg:grid lg:grid-cols-3">
          <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-white-20 lg:pl-4 lg:py-16">
            <h3 className="uppercase text-black-14 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
              Company
            </h3>
            <ul className="w-[60%] lg:w-full grid gap-6">
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="customers" href="/">
                  customers
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="Vendors" href="/vendors">
                  Vendors
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="Riders" href="/riders">
                  Riders
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Storefront
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="About" href="/company">
                  About
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/careers"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Careers
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="FAQs" href="/#faqs">
                  FAQs
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="Blog" href="/blog">
                  Blog
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a className="hover:underline" title="Contact" href="/contact">
                  Contact
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  className="hover:underline"
                  title="Terms of Use"
                  href="/terms"
                >
                  Terms of Use
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  className="hover:underline"
                  title="Privacy Policy"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-white-20 lg:pl-4 lg:py-16">
            <h3 className="uppercase text-black-14 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
              Cuisines near you
            </h3>
            <ul className="w-[60%] lg:w-full grid gap-6">
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/pasta-near-me"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Pasta near me
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/rice-near-me"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Rice near me
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/fast-food-near-me"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Fast food near me
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/asian-food-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Asian food in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/african-food-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  African food in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/breakfast-menu-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Breakfast menu in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/fitfam-stores-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Fitfam stores in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/american-food-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  American food in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/pastries-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Pastries in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/salad-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Salad in Lagos
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/cuisines/fruits-in-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Fruits in Lagos
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-start lg:block mb-20 lg:mb-0 lg:even:border-x lg:border-white-20 lg:pl-4 lg:py-16">
            <h3 className="uppercase text-black-14 sub-title w-[40%] pr-5 lg:mb-8 lg:w-full">
              popular
            </h3>
            <ul className="w-[60%] lg:w-full grid gap-6">
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Food delivery
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/surulere"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Surulere
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/ogudu"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Ogudu
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/lagos-mainland"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Yaba
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/ikeja"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Ikeja
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/lekki"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Lekki
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/ikeja/restaurants/king-glab-ikeja"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  King Glab
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/lagos-mainland/restaurants/korede-spaghetti"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Korede Spaghetti
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/lagos-mainland/restaurants/iyan-aladuke"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Iyan Aladuke
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/ikeja/restaurants/food-fusion-lagos"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Food Fusion
                </a>
              </li>
              <li className="text-white first-letter:capitalize">
                <a
                  href="/store/ikeja/restaurants/belefull"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  Belefull
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="grid grid-cols-2">
            {/* Twitter */}
            <li className="h-24 font-bold  text-xl flex items-center justify-center border-white-20 border-r border-b">
              <a
                href="https://twitter.com/chowdeck"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon3} width={20} alt="icon3" />
                  Twitter
                </div>
              </a>
            </li>
            {/* Instagram */}
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-b">
              <a
                href="https://www.instagram.com/chowdeck/"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon2} width={20} alt="icon3" />
                  Instagram
                </div>
              </a>
            </li>
            {/* Facebook */}
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20 border-r">
              <a
                href="https://facebook.com/chowdeck"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <div className="flex gap-2">
                  <Image src={icon4} width={20} alt="icon3" />
                  Facebook
                </div>
              </a>
            </li>
            <li className="h-24 font-bold text-xl flex items-center justify-center border-white-20">
              <a
                href="https://www.linkedin.com/company/chowdeck/"
                target="_blank"
                rel="noreferrer"
                className="text-white flex items-center hover:underline"
              >
                <span className="w-5 h-5 border-4 bg-red-400 border-white border-opacity-40 rounded-full mr-2"></span>{" "}
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
