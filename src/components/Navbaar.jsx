import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavLogo from '../../public/assets/nav_logo.png';

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'HTML', href: '#', current: false },
  { name: 'CSS', href: '#', current: false },
  { name: 'JavaScript', href: '#', current: false },
  { name: 'ReactJS ', href: '#', current: false },
  { name: 'ReactNative ', href: '#', current: false },
  { name: 'NodeJS', href: '#', current: false }, 
  { name: 'ExpressJS', href: '#', current: false },
  { name: 'MongoDB', href: '#', current: false },
  { name: 'C++ ', href: '#', current: false },
  { name: 'TailwindCSS', href: '#', current: false },
  { name: 'AI', href: '#', current: false },
  { name: 'Java', href: '#', current: false },
 
];
// bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-purple-400  to-40%
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-[#193452]  shadow-md fixed w-full z-10  ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-16 w-auto"
                    src={NavLogo}
                    alt="Your Company"
                  />
                </div> */}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-white  hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium' ,
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Add your button here */}
                {/* <button className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium sm:block hidden hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  My Button
                </button> */}
              </div>
            </div>
          </div>

          {/* <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white  hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300  hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="border-t border-gray-700 pt-4 flex justify-center">
                <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
              </div>
            </div>
          </DisclosurePanel> */}
          <DisclosurePanel className="sm:hidden">
  <div className="space-y-1 px-2 pb-3 pt-2">
    {navigation.map((item) => (
      <DisclosureButton
        key={item.name}
        as="a"
        href={item.href}
        className={classNames(
          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium'
        )}
        aria-current={item.current ? 'page' : undefined}
      >
        {item.name}
      </DisclosureButton>
    ))}
    <div className="border-t border-gray-700 pt-4 flex justify-center">
      <button
        type="submit"
        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Subscribe
      </button>
    </div>
  </div>
</DisclosurePanel>

          
        </>
      )}
    </Disclosure>
  );
}
