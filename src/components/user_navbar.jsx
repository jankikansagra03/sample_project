import { useState } from "react";
import { Link } from "react-router-dom";
// Link

const UserNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-800">
      <div className="max-w-[85rem] w-full mx-auto md:flex md:flex-row md:justify-between md:items-center md:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
        {/* Brand Name & Toggle Button */}
        <div className="flex items-center justify-between gap-x-3">
          <div className="grow">
            <span className="font-semibold text-white whitespace-nowrap">
              Janki Kansagra
            </span>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            type="button"
            className="md:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className={`size-4 ms-1 transition-transform ${isOpen ? "rotate-180" : ""
                }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "block" : "hidden"
            } md:block`}
        >
          <div className="flex flex-col py-2 lg:items-center md:py-0 md:flex-row md:justify-end gap-y-2 md:gap-y-0">
            {[
              { to: "orders.php", label: "My Orders", icon: "shopping-bag" },
              {
                to: "cart.php",
                label: "Shopping Cart",
                icon: "shopping-cart",
              },
              { to: "wishlist.php", label: "Wishlist", icon: "heart" },
              {
                to: "profile.php",
                label: "My Profile",
                icon: "contact-round",
              },
              { to: "/logout", label: "Logout", icon: "log-out" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition rounded-md hover:bg-white hover:text-amber-800 hover:p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-${item.icon}`}
                >
                  {item.icon === "shopping-bag" && (
                    <>
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </>
                  )}
                  {item.icon === "shopping-cart" && (
                    <>
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </>
                  )}
                  {item.icon === "heart" && (
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  )}
                  {item.icon === "contact-round" && (
                    <>
                      <path d="M16 2v2" />
                      <path d="M17.915 22a6 6 0 0 0-12 0" />
                      <path d="M8 2v2" />
                      <circle cx="12" cy="12" r="4" />
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                    </>
                  )}
                  {item.icon === "log-out" && (
                    <>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" x2="9" y1="12" y2="12" />
                    </>
                  )}
                </svg>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;