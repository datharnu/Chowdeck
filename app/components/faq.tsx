"use client";
import React, { useState, useEffect } from "react";
import { Ans } from "../data";
import Image from "next/image";
import gif from "../../public/Animation2.gif";
import colorGif from "../../public/color.gif";
import { handleClientScriptLoad } from "next/script";
import { info } from "console";
import BotttomContainer from "./botttomContainer";
export default function Faqs() {
  const ansData = [
    {
      id: 1,
      info: "  Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.",
      button: "What is Chowdeck?",
    },
    {
      id: 2,
      info: "Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders.",
      button: "What is Chowdeck wallet?",
    },
    {
      id: 3,
      info: "Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders.",
      button: "What is Chowscore?",
    },
    {
      id: 4,
      info: "  The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform.",
      button: "What is Service fee?",
    },
    {
      id: 5,
      info: "Having food delivered to you anytime, anywhere is so convenient, but it can be extremely costly to operate a delivery service. We need to cover technology costs, transaction processing fees and support to do this effectively. The various fees on our checkout ensure we stay ahead of these costs and continue serving you, our deserving customer. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa.",
      button: "Why do we charge Service fee?",
    },
    {
      id: 6,
      info: "A surge fee is a dynamic flat fee applicable when order demand exceeds available driver supply and is added to your subtotal during checkout on the Chowdeck app. The surge fee is calculated by considering how many people want to order on Chowdeck and how many delivery drivers are on the road in a particular area to fulfil orders.",
      button: "What is Surge fee?",
    },
    {
      id: 7,
      info: " The surge fee was established to inspire and reward Chowdeck Champions for delivering meals in less than ideal conditions such as heavy rain or traffic gridlocks. This also ensures we consistently deliver, regardless of the prevailing situations, which may naturally hinder effective delivery. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa.",
      button: "Why do we charge Surge fee?",
    },
    {
      id: 8,
      info: "Go to Playstore or App Store on your phone, search for Chowdeck and download the app. Create an account in seconds by entering your details and verifying your phone number and email address. ",
      button: "How do i create an account on Chowdeck?",
    },
    {
      id: 9,
      info: "On the app, you can update your account details, delivery address and profile picture with avatars. Go to Profile on the homepage and make necessary edits.",
      button: "How do i update my Profile",
    },
    {
      id: 10,
      info: " On the app, you can delete your saved card details. Go to Profile on the homepage and click on Wallet. Click the Bin icon at the right of the saved card to delete the card.",
      button: "How do i delete a saved card?",
    },
    {
      id: 11,
      info: "From the home page, click on Profile at the bottom right. Select Wallet, at the top right click on Add Money and you'll be able to fund your wallet with either your saved card or via a payment gateway. The added amount will reflect in your wallet balance after transaction as been completed. ",
      button: "How do i fund/top up my Chowdeck wallet?",
    },
    {
      id: 12,
      info: "We currently pick up and also deliver food to places in Lagos, Abuja, Ibadan, Port-Harcourt, Ilorin, Benin City, Abeokuta and Asaba. This means you can find your favourite restaurants and food vendors who are in these locations and order your meals from them. There are ongoing plans to expand to other areas of Nigeria soon.",
      button: "What location do we currently deliver to?",
    },
  ];

  const [selectedAns, setSelectedAns] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    // Set the initial selected answer to the first item in ansData
    setSelectedAns(ansData[0]);
  }, []);

  const handleButtonClick = (id) => {
    const selectedAnswer = ansData.find((ans) => ans.id === id);
    setSelectedAns(selectedAnswer);
    setSelectedButton(id);
  };

  return (
    <section className="bg-black lg:px-16 sm:px-3 md:px-8 ">
      {/* FAQs and Ans Card */}
      <article className=" -mt-10 ">
        <div className="border-4 border-black md:flex md:flex-col-reverse sm:flex-col-reverse sm:flex  sm:bg-yellow md:bg-yellow rounded-2xl bg-white relative bottom-28 lg:flex lg:justify-center  lg:px-5    lg:space-x-[50px] ">
          {/* FAQS */}
          <article className="py-10 space-y-10 lg:w-[40%]">
            <div className="text-6xl font-extrabold text-primary">
              <h1 className="md:hidden sm:hidden">FAQs.</h1>
            </div>
            {/* FAQs Buttons */}
            <div className="flex lg:grid lg:gap-4  overflow-y-auto max-h-[610px] pb-14 ">
              {ansData.map((ans) => (
                <button
                  key={ans.id}
                  onClick={() => handleButtonClick(ans.id)}
                  className={`bg-white lg:bg-green-50 lg:border-chow-green-10 lg:border text-primary text-left font-extrabold py-2 lg:py-5 px-5 leading-5 rounded-lg min-w-[250px] flex items-center mr-2 ${
                    selectedButton === ans.id
                      ? "active:bg-black active:lg:bg-black active:text-white"
                      : ""
                  }`}
                >
                  {selectedButton === ans.id && (
                    <div className="mr-2">
                      {/* Assuming 'gif' is an Image component */}
                      <Image src={colorGif} width={30} height={20} alt="icon" />
                    </div>
                  )}
                  <span className=" text-sm lg:text-lg ">{ans.button}</span>
                </button>
              ))}
            </div>
          </article>
          {/* Ans. */}
          <article className="py-10 space-y-10 lg:max-w-lg lg:w-[50%] ">
            <div className=" text-6xl font-extrabold sm:flex md:flex px-5  justify-between text-primary">
              <h1 className="md:hidden sm:hidden">Ans.</h1>
              {/* small screen / medium screen UI */}
              <h1 className="text-4xl lg:hidden font-extrabold text-primary">
                FAQs
              </h1>
              <div className="lg:hidden">
                <Image src={gif} width={30} alt="title" />
              </div>
            </div>

            <div className="bg-yellow lg:h-[600px] px-5  lg:px-10 rounded-2xl overflow-y-auto pb-14">
              {/* Icon gif */}
              <div className="py-8 sm:hidden md:hidden">
                <Image src={gif} width={30} alt="title" />
              </div>
              {/* Chowdeck discription */}
              {selectedAns ? (
                <div className="text-lg lg:text-[22px] leading-6 lg:leading-normal ">
                  <p>{selectedAns.info}</p>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </article>
        </div>
      </article>
      {/* Bottom Container Card */}
      <BotttomContainer />
    </section>
  );
}
