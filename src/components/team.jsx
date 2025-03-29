import React from "react";
import GuestNavbar from "./guest_navbar";

function Team() {
  return (
    <div>
      <GuestNavbar />
      <br />
      <br />
      {/* <!-- Leadership Section --> */}
      <div className="max-w-2xl mx-auto mb-10 text-center">
        <h3 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white text-amber-800">
          Meet Our Leadership
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Leader Card 1 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//1.avif"
              alt="Founder"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Jane Doe
            </h3>
            <p className="mt-1 text-amber-800">Founder & CEO</p>
            <p className="mt-3 text-amber-800">
              Pioneering e-commerce innovation with 15+ years of retail
              expertise.
            </p>
          </div>
        </div>

        {/* <!-- Leader Card 2 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//2.jpg"
              alt="Operations Head"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              John Smith
            </h3>
            <p className="mt-1 text-amber-800">Head of Operations</p>
            <p className="mt-3 text-amber-800">
              Ensuring seamless order fulfillment and customer satisfaction.
            </p>
          </div>
        </div>

        {/* <!-- Leader Card 3 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//3.png"
              alt=" Product Director"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Sarah Johnson
            </h3>
            <p className="mt-1 text-amber-800">Product Director</p>
            <p className="mt-3 text-amber-800">
              Curating the best products and managing vendor relationships.
            </p>
          </div>
        </div>
        {/* <!-- Leader Card 1 --> */}
      </div>

      {/* <!-- Team Section --> */}
      <div className="max-w-2xl mx-auto mt-10 mb-10 text-center">
        <h3 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white text-amber-800">
          The Team Behind Your Shopping Experience
        </h3>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Team Member 1 -->
        <!-- Team Member 1 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//4.jpg"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Mike Wilson
            </h3>
            <p className="mt-1 text-amber-800">E-commerce Platform Manager</p>
          </div>
        </div>

        {/* <!-- Team Member 2 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//5.jpg"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Emily Chen
            </h3>
            <p className="mt-1 text-amber-800">Customer Experience Lead</p>
          </div>
        </div>

        {/* <!-- Team Member 3 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//7.jpg"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              David Kim
            </h3>
            <p className="mt-1 text-amber-800">Inventory Manager</p>
          </div>
        </div>

        {/* <!-- Team Member 4 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//8.jpg"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Lisa Brown
            </h3>
            <p className="mt-1 text-amber-800">Digital Marketing Specialist</p>
          </div>
        </div>

        {/* <!-- Team Member 5 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//9.webp"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Tom Anderson
            </h3>
            <p className="mt-1 text-amber-800">Logistics Coordinator</p>
          </div>
        </div>

        {/* <!-- Team Member 6 --> */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-col items-center justify-center h-64 bg-gray-500 rounded-t-xl">
            <img
              className="object-cover w-full h-64 rounded-t-xl"
              src="..//Images//team//10.jpg"
              alt="Team Member"
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-xl font-semibold text-amber-800 dark:text-gray-300">
              Rachel Martinez
            </h3>
            <p className="mt-1 text-amber-800">Customer Support Specialist</p>
          </div>
        </div>
      </div>
      <br />
      {/* <!-- Stats Section --> */}
    </div>
  );
}

export default Team;
