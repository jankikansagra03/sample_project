import React from "react";

function Testimonial() {
  return (
    <div>
      {/* <!-- Testimonials Carousel --> */}

      <div
        data-hs-carousel='{
  "loadingclassNamees": "opacity-0", 
  "dotsItemclassNamees": "hs-carousel-active:bg-amber-800 hs-carousel-active:border-amber-800 size-3 border-amber-800 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 1,
    "md": 2,
    "lg": 3
  },
  "isDraggable": true
}'
        className="relative max-w-[85rem] px-4 mx-auto"
      >
        <div className="w-full overflow-hidden rounded-lg hs-carousel">
          <div className="relative min-h-[300px] -mx-1">
            <div className="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 hs-carousel-body start-0 flex-nowrap cursor-grab hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
              {/* <!-- Testimonial 1 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/1.png"
                    alt="Sarah Johnson"
                  />
                  <p className="mb-2 italic text-gray-600">
                    "The service exceeded my expectations. The team was
                    professional and delivered outstanding results."
                  </p>
                  <div className="">
                    <h4 className="font-semibold text-amber-800">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial 2 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/2.png"
                    alt="Michael Chen"
                  />
                  <p className="mb-4 italic text-gray-600">
                    "I couldn't be happier with the outcome. Their attention to
                    detail and commitment to quality is remarkable."
                  </p>
                  <div>
                    <h4 className="font-semibold text-amber-800">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Tech Entrepreneur</p>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial 3 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/3.png"
                    alt="Emily Rodriguez"
                  />
                  <p className="mb-4 italic text-gray-600">
                    "A game-changing experience. Their innovative approach
                    helped transform our business processes."
                  </p>
                  <div>
                    <h4 className="font-semibold text-amber-800">
                      Emily Rodriguez
                    </h4>
                    <p className="text-sm text-gray-500">Operations Manager</p>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial 4 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/5.png"
                    alt="David Thompson"
                  />
                  <p className="mb-4 italic text-gray-600">
                    "Working with this team has been a pleasure. They truly
                    understand customer needs and deliver solutions."
                  </p>
                  <div>
                    <h4 className="font-semibold text-amber-800">David Thompson</h4>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial 5 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/6.png"
                    alt="Rachel Foster"
                  />
                  <p className="mb-4 italic text-gray-600">
                    "Their expertise and dedication to customer satisfaction
                    made all the difference in our project's success."
                  </p>
                  <div>
                    <h4 className="font-semibold text-amber-800">Rachel Foster</h4>
                    <p className="text-sm text-gray-500">Project Manager</p>
                  </div>
                </div>
              </div>

              {/* <!-- Testimonial 6 --> */}
              <div className="px-1 hs-carousel-slide">
                <div className="flex flex-col items-center h-full p-6 text-center rounded-lg bg-amber-50">
                  <img
                    className="object-cover w-20 h-20 mb-4 rounded-full"
                    src="../Images/testimonials/7.png"
                    alt="James Wilson"
                  />
                  <p className="mb-4 italic text-gray-600">
                    "An exceptional team that consistently delivers high-quality
                    solutions. They've become our trusted partner."
                  </p>
                  <div>
                    <h4 className="font-semibold text-amber-800">James Wilson</h4>
                    <p className="text-sm text-gray-500">CEO, Innovation Tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-amber-800 hover:bg-amber-800/10 focus:outline-none focus:bg-amber-800/10 rounded-s-lg"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
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
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-amber-800 hover:bg-amber-800/10 focus:outline-none focus:bg-amber-800/10 rounded-e-lg"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-5"
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>

        <div className="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0"></div>
      </div>
    </div>
  );
}

export default Testimonial;
