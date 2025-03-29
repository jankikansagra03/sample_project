import React from "react";
import GuestNavbar from "./guest_navbar";

function About() {
  return (
    <div>
      <GuestNavbar />
      <br />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-2 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto mb-5 text-center lg:mb-5">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-amber-800 dark:text-white">
            About Our Store
          </h2>
          <p className="mt-1 dark:text-gray-400 text-amber-800">
            Bringing you the finest selection of products with exceptional
            service since 2010
          </p>
        </div>
        {/* <!-- End Title --> */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mb-5 md:grid-cols-2">
          {/* <!-- Our Story Section --> */}
          <div className="p-2 text-amber-800">
            <h3 className="mb-4 text-xl font-bold text-center dark:text-white">
              Our Story
            </h3>
            <p className="text-amber-800">
              Started as a small local shop, we've grown into a trusted online
              destination for quality products. Our commitment to customer
              satisfaction and product excellence has helped us build a loyal
              community of shoppers who trust us for their everyday needs.
            </p>
          </div>
          {/* <!-- Our Mission Section --> */}
          <div className="p-2 text-amber-800">
            <h3 className="mb-4 text-xl font-bold text-center text-amber-800">
              Our Mission
            </h3>
            <p className="text-amber-800">
              Our mission is to provide exceptional products and service to our
              customers. We strive to create a seamless shopping experience
              while maintaining the highest standards of quality and customer
              care.
            </p>
          </div>
        </div>

        {/* <!-- Our Story Section --> */}

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {/* <!-- Stat 1 --> */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-800"></div>

                <div className="flex items-center justify-center w-full h-full text-white">
                  <h4 className="text-3xl font-semibold text-amber-50">10+</h4>
                </div>
              </div>
              <p className="mt-1 text-amber-800">Years in Business</p>
            </div>
            {/* <!-- Stat 2 --> */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-800"></div>
                <div className="flex items-center justify-center w-full h-full">
                  <h4 className="text-3xl font-semibold text-white">50K+</h4>
                </div>
              </div>
              <p className="mt-1 text-amber-800">Happy Customers</p>
            </div>
            {/* <!-- Stat 3 --> */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-800"></div>
                <div className="flex items-center justify-center w-full h-full">
                  <h4 className="text-3xl font-semibold text-white">5K+</h4>
                </div>
              </div>
              <p className="mt-1 text-amber-800">Products</p>
            </div>
            {/* <!-- Stat 4 --> */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-amber-800"></div>
                <div className="flex items-center justify-center w-full h-full">
                  <h4 className="text-3xl font-semibold text-white">99%</h4>
                </div>
              </div>
              <p className="mt-1 text-amber-800">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
