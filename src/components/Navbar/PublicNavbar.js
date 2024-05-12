import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBlog } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PublicNavbar() {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1].toString();
  console.log(subpage);

  function linkClassess(path) {
    let classes =
      "inline-flex items-center border-b-2  px-1 pt-1 pb-3 text-sm font-medium hover:border-orange-600";

    if (subpage.toString() === path.toString()) {
      classes += " border-orange-500";
    } else {
      classes += " border-transparent";
    }
    return classes;
  }

  const homeHandler = () => {
    navigate("/");
  };
  const recipeHandler = () => {
    navigate("/posts");
  };
  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="pl-4 pr-4 md:px-8 fixed inset-x-0 top-0 z-50 text-white bg-gray-900 bg-opacity-30">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 justify-center items-center inline-flex md:hidden">
                  {/* Logo here */}
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">F</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">D</h1>
                  </div>
                  <div class="flex justify-center w-2 items-center">
                    <span className=" text-orange-600 text-xs">•</span>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">B</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">K</h1>
                  </div>
                </div>

                <div className="flex flex-shrink-0 items-center hidden md:inline-flex">
                  {/* <div className="flex flex-shrink-0 justify-center items-center "> */}
                  {/* Logo here */}
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">F</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">D</h1>
                  </div>
                  <div class="flex justify-center w-2 items-center">
                    <span className=" text-orange-600 text-xs">•</span>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">B</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">O</h1>
                  </div>
                  <div class="flex justify-center items-center  w-5 h-5 rounded-full border-2 md:border-1 border-white text-white">
                    <h1 className="text-xs">K</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link className={linkClassess("")} to={"/"}>
                    Home
                  </Link>
                  <Link className={linkClassess("posts")} to={"/posts"}>
                    Recipes
                  </Link>
                  <Link className={linkClassess("login")} to={"/login"}>
                    Login
                  </Link>
                </div>
                <div className="flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0"></div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden bg-gray-800 relative z-50 px-4">
              <div className="space-y-1 pt-2 pb-3">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  onClick={homeHandler}
                  className="block py-2 text-base font-medium text-white hover:bg-text-orange-500 hover:text-orange-500"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  onClick={recipeHandler}
                  className="block  py-2 text-base font-medium text-white hover:bg-text-orange-500 hover:text-orange-500"
                >
                  Recipes
                </Disclosure.Button>
                <Disclosure.Button
                  onClick={loginHandler}
                  className="block  py-2 text-base font-medium text-white hover:bg-text-orange-500 hover:text-orange-500"
                >
                  Login
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
