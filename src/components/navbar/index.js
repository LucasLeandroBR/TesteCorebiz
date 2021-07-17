import React, { Fragment, } from 'react'
import logoCorebiz from '../../assets/images/logo-corebiz.png'
import { Popover, Transition, } from '@headlessui/react'
import { SearchIcon, UserIcon, ShoppingCartIcon, } from '@heroicons/react/outline'

const solutions = [
  {
    name: 'Meu Carrinho',
    href: '#',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Minha Conta',
    href: '#',
    icon: UserIcon,
  },

]

export default function navbarMenu() {
  return (
    <>

      <div className="navbar">
        <img className="h-full w-24" src={logoCorebiz} alt="" srcset="" />
        <div className="container-input">
          <input className="input" type="text" placeholder="O que está procurando?" />
          <SearchIcon className="icon-search" />
        </div>
        <div className="menu-main">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                  ${open ? '' : 'text-opacity-90'}
                  text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <UserIcon className="w-4 h-4" />
                  <span className="w-24 text-sm">Minha conta</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="popover-panel">
                    <div className="popover-panel-headding">
                      <div className="popover-panel-title">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div>
            <ShoppingCartIcon className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div >
    </>
  )
}




