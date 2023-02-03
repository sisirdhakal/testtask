import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

type Props = {}

const Navbar = (props: Props) => {

  const toggleNavbar = () => {

  }

  const router = useRouter()
  return (
    <>
      <div className='flex bg-[#1D1D1D] w-screen  justify-center items-center'>
        <div className='flex items-center lg:grid h-[80px] lg:grid-cols-navbar mx-auto w-[95%]  lg:max-w-navbar '>
          <div
            className={` cursor-pointer lg:hidden md:scale-100 h-6 w-12 md:w-10 my-auto relative flex items-center `}
          >
            <Hamburger onToggle={toggleNavbar} size={32} color={"#ffffff"} />
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <Link href={"/"}>
              <div className='lg:w-[312px]  mx-auto  lg:h-[50px] w-[350px] h-[56px] relative cursor-pointer'>
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
          </div>
          <div className='hidden lg:flex items-center h-full justify-center'>
            <ul className='flex justify-center h-full px-2 items-center mt-2'>
              <div className='mr-2'>
                <button className='hover:bg-[#D28006] transition-all duration-200 ease-in-out w-[82px] h-[24px] font-semibold bg-[#f90] text-white'>
                  SHOP
                </button>
              </div>
              {links.map((link) => {
                const { id, text, url, options } = link
                return (
                  <div key={id} className="group h-full relative flex justify-center items-center px-2  cursor-pointer">
                    <div className=" font-semibold rounded relative items-center">
                      <div className=" font-semibold rounded  inline-flex items-center">
                        <span className="capitalize font-medium text-white tracking-wide">
                          {text}
                        </span>
                        <MdOutlineKeyboardArrowDown className=" h-5 mt-1 w-5 text-white" />
                      </div>
                    </div>
                    <ul className="invisible top-[100%] group-hover:mt-[-5px] mt-[-20px] transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 backdrop-blur-sm divide-y-[1px] divide-white/30 text-gray-700 w-[230px] ">
                      {
                        options.map(item => {
                          return <li key={item.name} className="px-5 hover:bg-gray-400  text-clrgrey5 font-medium  py-2  ">
                            {item.name}
                          </li>
                        })
                      }

                    </ul>
                  </div>
                )
              })}
              <div className='navButtons hidden lg:flex cursor-pointer space-x-1 items-center px-3'>
                <span className='relative'>
                  <FaShoppingCart className='text-2xl text-white' />
                </span>
              </div>
            </ul>
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
    url: "/",
    options: [
      {
        name: "Collaborate",
        mobile: false
      },
      {
        name: "Visionary Business Owner",
        mobile: false
      },
      {
        name: "Affiliate",
        mobile: false
      },
      {
        name: "Brand Ambassador",
        mobile: false
      },
      {
        name: "Touchstone Essentials Live",
        mobile: false
      },
      {
        name: "Premier Reward Trip NYC",
        mobile: false
      },
    ]
  },
  {
    id: 2,
    text: "community",
    url: "/",
    options: [
      {
        name: "Blog",
        mobile: false
      },
      {
        name: "Good Inside Gear",
        mobile: false
      },
      {
        name: "Goode Rewards",
        mobile: false
      },
      {
        name: "Experts",
        mobile: false
      },
      {
        name: "Social Justice",
        mobile: false
      },
      {
        name: "Reviews",
        mobile: false
      },
    ]
  },
  {
    id: 3,
    text: "why touchstone",
    url: "/",
    options: [
      {
        name: "Collaborate",
        mobile: false
      },
      {
        name: "Visionary Business Owner",
        mobile: false
      },
      {
        name: "Affiliate",
        mobile: false
      },
      {
        name: "Brand Ambassador",
        mobile: false
      },
      {
        name: "Touchstone Essentials Live",
        mobile: false
      },
      {
        name: "Premier Reward Trip NYC",
        mobile: false
      },
    ]
  }
]