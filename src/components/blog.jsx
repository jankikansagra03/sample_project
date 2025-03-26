import React from "react";

function Blog() {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-y-16">
          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="view_blog.php"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//images (1).jpeg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  The Future of Electronics: Trends to Watch
                </h3>
                <p className="mt-3 text-amber-800">
                  Explore the latest advancements in electronics, from
                  AI-powered devices to sustainable technologies
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="#"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//images.jpeg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  Robotics in Electronics: A New Era of Innovation
                </h3>
                <p className="mt-3 text-amber-800">
                  Discover how robotics is transforming the electronics
                  industry, from manufacturing to consumer products
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="#"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//electronic-products-copy.jpg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  The Internet of Things: Revolutionizing Electronics
                </h3>
                <p className="mt-3 text-amber-800">
                  Learn how IoT is transforming the electronics industry, from
                  smart homes to industrial automation
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="#"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//istockphoto-1349094915-612x612.jpg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  The Impact of Electronics on the Environment
                </h3>
                <p className="mt-3 text-amber-800">
                  Explore the environmental impact of the electronics industry
                  and what can be done to reduce waste
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="#"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//images (2).jpeg"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  The Role of Robotics in Electronics Manufacturing
                </h3>
                <p className="mt-3 text-amber-800">
                  Discover how robotics is transforming the electronics
                  manufacturing process, from assembly to quality control
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <a
            className="block overflow-hidden group rounded-xl focus:outline-none"
            href="#"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full overflow-hidden shrink-0 rounded-xl sm:w-56 h-44">
                <img
                  className="absolute top-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-focus:scale-105 size-full start-0 rounded-xl"
                  src="..//Images//blogs//EN-Jun-19-2024-02-03-00-3089-PM.webp"
                  alt="Blog Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold text-amber-800 group-hover:text-amber-800">
                  Unlocking the Power of New Technologies
                </h3>
                <p className="mt-3 text-amber-800">
                  Explore the latest advancements in technology and their
                  potential impact on the electronics industry
                </p>
                <p className="inline-flex items-center mt-4 text-sm font-medium text-amber-800 gap-x-1 decoration-2 group-hover:underline group-focus:underline">
                  Read more
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
