import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div
        className={` h-screen w-full bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: "url(/img/above-the-fold.jpg)",
        }}
      ></div>
      <div className=" bg-beige py-10 px-5 md:px-10 md:py-20">
        <div className="w-full md:w-9/12 m-auto">
          <div className="text-5xl">Browse our plants</div>
          <div className="flex flex-col md:grid-cols-3 md:grid gap-10 my-6">
            <div className="flex flex-col ">
              <img src="/img/FicusDanielle.jpeg" className="" alt="" />
              <div className="flex justify-between items-center mt-5">
                <div className="text-3xl font-medium ">Money Tree</div>
                <div>$39</div>
              </div>
              <div className="uppercase text-dark-grey">x-large</div>
            </div>
            <div className="flex flex-col">
              <img src="/img/FicusDanielle.jpeg" className="" alt="" />
              <div className="flex justify-between items-center mt-5">
                <div className="text-3xl font-medium">Red Prayer Plant</div>
                <div>$108</div>
              </div>
              <div className="uppercase text-dark-grey">small</div>
            </div>
            <div className="flex flex-col ">
              <img src="/img/FicusDanielle.jpeg" className="" alt="" />
              <div className="flex justify-between items-center mt-5">
                <div className="text-3xl font-medium">
                  Schefflera Arboricola
                </div>
                <div>$49</div>
              </div>
              <div className="uppercase text-dark-grey">large</div>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="flex md:flex-row">
        <div className="basis-1/2 bg-forest-green md:py-20 md:px-10 ">
          <div className="text-5xl text-white">
            Delivered right at your door
          </div>
          <div className="my-5 text-xl text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            molestie a iaculis at erat pellentesque adipiscing commodo elit.
            Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
          </div>
          <Link
            to="/products"
            className="block mt-5 p-6 py-3 w-48 text-center rounded-full text-base font-bold bg-white text-forest-green uppercase"
          >
            Shop all
          </Link>
        </div>
        <div
          className="basis-1/2 md:py-20 md:px-10 bg-cover bg-center"
          style={{ backgroundImage: "url(/img/homePage-1.jpg)" }}
        ></div>
      </div>
      {/* value prop section */}
      <div className="p-20">
        <div className="m-10 flex justify-start relative py-10 min-h-[75vh]">
          <div className=" absolute left-0 min-h-min max-w-md p-14 z-10 flex flex-col justify-center rounded-lg shadow-sm bg-forest-green">
            <div className="text-5xl text-white">Value prop 1</div>
            <div className="mt-5 text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              molestie a iaculis at erat pellentesque adipiscing commodo elit.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
            </div>
          </div>
          <div className="absolute inset-0 w-4/6 left-auto m-0 z-0">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full"
                src="/img/HomePage-3.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="mx-10 flex justify-start relative py-10 min-h-[60vh]">
          <div className="absolute inset-0 w-4/6 right-auto m-0 z-0">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full"
                src="/img/HomePage-3.jpg"
              ></img>
            </div>
          </div>
          <div className="absolute right-0 min-h-min  max-w-md p-14 z-10 flex flex-col justify-center rounded-lg shadow-sm bg-forest-green">
            <div className="text-5xl text-white">Value prop 2</div>
            <div className="mt-5 text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
              molestie a iaculis at erat pellentesque adipiscing commodo elit.
              Purus faucibus ornare suspendisse sed nisi lacus sed viverra.
            </div>
          </div>
        </div>
      </div>
      {/* final section */}
      <div
        className="p-20 bg-cover min-h-[50vh] bg-beige flex justify-center items-center flex-col gap-3"
        style={{ backgroundImage: "url(/img/HomePage-2.png)" }}
      >
        <div className="text-5xl">Ready to buy?</div>
        <div className="text-xl">Enjoy free shipping on $50+ orders</div>
        <Link
          to="/products"
          className="block mt-5 p-6 py-3 w-48 text-center rounded-full text-base font-bold bg-forest-green text-beige uppercase"
        >
          Shop all
        </Link>
      </div>
    </div>
  );
};

export default Main;