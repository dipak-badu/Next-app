import Image from "next/image";
import Link from "next/link";

export const HomeHeader = () => {
  return (
    <>
      <section className=" bg-linear-to-r from-secondary-950 via-secondary-800 to-secondary-700  h-10 text-white">
        <div className=" flex mx-auto items-center text-center justify-between px-10 h-full">
          <p className="text-lg font-semibold italic ">
            Free shipping on orders over $50!
          </p>
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className=" text-gray-300 transition hover:text-gray-300/75 underline italic"
                  href="/privacy-policy"
                >
                  privacy policy
                </Link>
              </li>
              <li>
                <Link
                  className=" text-gray-300 transition hover:text-gray-300/75 underline "
                  href="/terms-and-conditions italic"
                >
                  Term and conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <header className="bg-white dark:bg-primary-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 dark:text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <Image
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className=" size-15 rounded-full"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/history"
                    >
                      History
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
                  href="#"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
