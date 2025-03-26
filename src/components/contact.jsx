import React from "react";
import useJQueryValidation from "./useJQueryValidation";
import axios from "axios";
import { useState } from "react";

function Contact() {
  useJQueryValidation("contact_form", {
    name: {
      required: true,
      minlength: 3,
    },
    email: {
      required: true,
      email: true,
    },
    mobile: {
      required: true,
      regex: /^[0-9]{10}$/,
    },
    subject: {
      required: true,
      minlength: 3,
    },
    message: {
      required: true,
      minlength: 10,
    },

  }, {
    name: {
      required: "Please enter your name",
      minlength: "Name must be at least 3 characters long",
    },
    email: {
      required: "Please enter your email address",
      email: "Please enter a valid email address",
    },
    mobile: {
      required: "Please enter your mobile number",
      regex: /^[0-9]{10}$/,
    },
    subject: {
      required: "Please enter a subject",
      minlength: "Subject must be at least 3 characters long",
    },
    message: {
      required: "Please enter a message",
      minlength: "Message must be at least 10 characters long",
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    messages: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contacts/add-contact",
        formDataToSend
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid max-w-5xl gap-8 mx-auto mt-1 md:grid-cols-1 lg:grid-cols-2">
          {/* <!-- Contact Details Column --> */}

          <div className="p-6 bg-white border shadow-sm border-amber-800 rounded-xl h-fit">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-amber-800">Contact Details</h1>
              <p className="mt-2 text-sm text-amber-800">
                Here's how you can reach us
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-amber-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Address</h3>
                  <p className="text-sm text-amber-800">
                    123 Street Name, City, Country
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-amber-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Phone</h3>
                  <p className="text-sm text-amber-800">+1 234 567 8900</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-amber-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-amber-800">Email</h3>
                  <p className="text-sm text-amber-800">contact@example.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <h3 className="font-medium text-amber-800">Location</h3>
                  <p className="text-sm text-amber-800">
                    View our location on the map
                  </p>
                </div>

                <div className="w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.879261115465!2d70.73211131484664!3d22.273891485109965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c6f6a6a6a6a6a6%3A0x6e3a3a3a3a3a3a3a!2sRK+University!5e0!3m2!1sen!2sin!4v1664294191151!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Contact Form Column --> */}
          <div className="p-6 bg-white border shadow-sm border-amber-800 rounded-xl">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-amber-800">
                Send us a Message
              </h1>
              <p className="mt-2 text-sm text-amber-800">
                We'd love to hear from you
              </p>
            </div>

            <form
              id="contact_form"
              className="mt-5 space-y-4"
              onSubmit={handleSubmit}>

              <div className="grid gap-y-4">
                <div>
                  <label for="name" className="block mb-2 text-sm text-amber-800">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-amber-800 focus:ring-amber-800"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="error" id="nameError"></div>
                </div>
                <div>
                  <label for="email" className="block mb-2 text-sm text-amber-800">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-amber-800 focus:ring-amber-800"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="error" id="emailError"></div>
                </div>
                <div>
                  <label for="mobile" className="block mb-2 text-sm text-amber-800">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="mobile"
                      name="mobile"
                      className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-amber-800 focus:ring-amber-800" onChange={handleChange}
                      value={formData.mobile} />
                  </div>
                  <div className="error" id="mobileError"></div>
                </div>
                <div>
                  <label
                    for="subject"
                    className="block mb-2 text-sm text-amber-800"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-amber-800 focus:ring-amber-800"
                      onChange={handleChange}
                      value={formData.subject}

                    />
                  </div>
                  <div className="error" id="subjectError"></div>
                </div>
                <div>
                  <label
                    for="message"
                    className="block mb-2 text-sm text-amber-800"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full px-4 py-3 text-sm border rounded-md border-amber-800 focus:border-amber-800 focus:ring-amber-800"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                  <div className="error" id="messageError"></div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-white align-middle transition-all border rounded-md shadow-sm bg-amber-800 hover:bg-white hover:border border-amber-800 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-amber-800"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
