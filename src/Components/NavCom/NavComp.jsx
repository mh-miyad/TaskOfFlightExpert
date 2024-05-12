import { useState } from "react";
import { Avatar, Drawer } from "flowbite-react";
import { HiBars3, HiOutlineBell } from "react-icons/hi2";
const NavComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <nav className="bg-slate-800 p-6 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between ">
          {/* here nav link  */}
          <div className="block lg:hidden">
            <a href="#">Master Price</a>
          </div>
          <ul className="hidden items-center gap-x-10  lg:flex">
            <li className="cursor-pointer text-xl capitalize  ">Dashboard</li>
            <li className="cursor-pointer text-xl capitalize   ">
              Master price{" "}
            </li>
            <li className="cursor-pointer text-xl capitalize  ">
              custom price{" "}
            </li>
            <li className="cursor-pointer text-xl capitalize  ">calender</li>
            <li className="cursor-pointer text-xl capitalize  ">reports</li>
          </ul>
          {/* here nav link  */}
          {/* Here Avatar and Notify icon  */}
          <div className="flex items-center gap-3">
            <HiOutlineBell size={30} />
            <Avatar rounded alt="Avatar" />
            <button onClick={() => setIsOpen(true)}>
              <HiBars3 size={30} />
            </button>
          </div>
          {/* Here Avatar and Notify icon  */}
        </div>
      </nav>

      <div>
        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="Drawer" />
          <Drawer.Items>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our&nbsp;
              <a
                href="#"
                className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
              >
                limited-time sale
              </a>
              &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
              top-ranked candidates and the #1 design job board.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="#"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Get access&nbsp;
                <svg
                  className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
};

export default NavComp;
