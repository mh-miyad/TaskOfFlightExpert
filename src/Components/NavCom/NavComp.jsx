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
            <a href="#" className="text-2xl font-semibold">
              Master Price
            </a>
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
            <button onClick={() => setIsOpen(true)} className="block lg:hidden">
              <HiBars3 size={30} />
            </button>
          </div>
          {/* Here Avatar and Notify icon  */}
        </div>
      </nav>

      <div>
        <Drawer open={isOpen} onClose={handleClose}>
          <Drawer.Header title="Menu " />
          <Drawer.Items>
            <ul className="space-y-5">
              <li className=" cursor-pointer border px-10 py-3 text-xl font-medium capitalize ">
                Dashboard
              </li>
              <li className="cursor-pointer  border px-10 py-3 text-xl font-medium capitalize  ">
                Master price{" "}
              </li>
              <li className="cursor-pointer  border px-10 py-3 text-xl font-medium capitalize ">
                custom price{" "}
              </li>
              <li className=" cursor-pointer border px-10 py-3 text-xl font-medium capitalize  ">
                calender
              </li>
              <li className=" cursor-pointer border px-10 py-3 text-xl font-medium capitalize  ">
                reports
              </li>
            </ul>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
};

export default NavComp;
