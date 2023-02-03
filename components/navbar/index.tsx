import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { FaShoppingCart } from 'react-icons/fa'

type Props = {}

const Navbar = (props: Props) => {

  const toggleNavbar = () => {

  }

  const router = useRouter()
  return (
    <>
      <div className='flex py-4 bg-[#1D1D1D] w-screen  justify-center items-center'>
        <div className='flex items-center lg:grid grid-cols-navbar mx-auto w-screen lg:w-[95%]  lg:max-w-navbar '>
          <div
            className={` cursor-pointer lg:hidden origin-left md:scale-100 h-6 w-12 md:w-10 my-auto mr-auto relative flex items-center `}
          >
            <Hamburger onToggle={toggleNavbar} size={36} color={"#ffffff"} />
          </div>
          <Link href={"/"}>
            <div className='lg:w-[312px]  lg:h-[50px] w-[170px] h-[70px] relative cursor-pointer'>
              <Image
                alt=''
                fill={true}
                priority
                className='object-contain' src={"/assets/Logo_Update.webp"}
                sizes="(min-width: 60em) 24vw,
                                    (min-width: 28em) 45vw,
                                    100vw"
              />
            </div>
          </Link>
          <div className='hidden lg:flex items-center justify-center'>
            <ul className='flex justify-center px-2 items-center'>
              <div>
                <button>

                </button>
              </div>
              {links.map((link) => {
                const { id, text, url } = link
                return (
                  <li key={id} className="mx-4 px-2 relative">
                    <Link href={url}>
                      <p className='capitalize font-medium text-white tracking-wide text-clrgrey3'>
                        {text}
                      </p>
                    </Link>
                    <span
                      className={`${router.pathname === url
                        ? 'block w-full transition-all duration-500'
                        : ' w-0'
                        } bg-clrprimary7 -ml-2 rounded-2xl h-[3px] mt-1 absolute`}
                    ></span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='navButtons hidden lg:flex cursor-pointer space-x-1 items-center px-3'>
            {/* <p className='text-2xl tracking-wide'>Cart</p> */}
            <span className='relative'>
              {/* <span className='absolute bg-[#AB7A5F] ml-4 -mt-2 rounded-full h-5 w-5 text-white items-center justify-center flex '>0</span> */}
              <FaShoppingCart className='text-2xl text-white' />
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar

export const links = [
  {
    id: 1,
    text: "collaborate",
    url: "/"
  },
  {
    id: 2,
    text: "community",
    url: "/"
  },
  {
    id: 3,
    text: "why touchstone",
    url: "/"

  }

]