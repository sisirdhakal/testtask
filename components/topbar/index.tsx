import React from 'react'
import { MdArrowDropDown, MdSearch } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <>
      <div className='bg-[#50B848] py-1 w-screen   justify-center items-center'>
        <div className=' items-center md:text-sm lg:text-base grid grid-cols-topbarMob lg:grid-cols-topbar lg:gap-x-2 mx-auto w-screen  lg:max-w-navbar px-2 lg:pl-3 '>
          <h1 className='text-white text-[0.9rem] hidden lg:block'> <span className='font-semibold'>FREE</span> shipping on any order with Pure Body Extra!</h1>
          <button className='font-bold lg:px-1 text-[0.7rem] lg:text-[1rem] w-28  py-[2px] border border-white text-white lg:w-32'>
            JOIN US! (VBO)
          </button>
          <div className='h-full hidden lg:flex justify-center mr-2 cursor-pointer items-center relative group '>
            <div className=" rounded relative items-center">
              <div className=" rounded  inline-flex items-center">
                <span className="capitalize text-[0.9rem] text-white tracking-wide">
                  United States (USD)
                </span>
                <MdArrowDropDown className=" h-6 w-6 text-white" />
              </div>
            </div>
            <ul className="invisible top-[100%] group-hover:mt-[5px] transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 backdrop-blur-sm divide-y-[1px] divide-white/30 text-gray-700 w-[230px] ">
              {/* {
                    shopOptions.map(item => {
                      return <li key={item.name} className="px-5 hover:text-clrgrey2  text-clrgrey6 font-medium mb-[2px]  ">
                        {item.name}
                      </li>
                    })
                  } */}

            </ul>
          </div>
          <div className='h-full hidden lg:flex justify-center mr-2 cursor-pointer items-center relative group '>
            <div className=" rounded relative items-center">
              <div className=" rounded  inline-flex items-center">
                <span className="capitalize text-[0.9rem] text-white tracking-wide">
                  Select Language
                </span>
                <MdArrowDropDown className=" h-6 w-6 text-white" />
              </div>
            </div>
            <ul className="invisible top-[100%] group-hover:mt-[-5px] mt-[-20px] transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 backdrop-blur-sm divide-y-[1px] divide-white/30 text-gray-700 w-[230px] ">
              Select Language
            </ul>
          </div>
          <div className='h-full flex lg:mx-2 justify-center cursor-pointer items-center relative group'>
            <div className=" font-semibold rounded relative items-center">
              <div className=" font-semibold rounded justify-center flex items-center">
                <BsPersonFill className=" h-6 mr-1 w-5 text-white"/>
                <span className="capitalize text-[0.9rem] text-white tracking-wide">
                  My Account
                </span>
                <MdArrowDropDown className=" h-6 w-6 text-white hidden lg:block" />
              </div>
            </div>
            <ul className="invisible top-[100%] group-hover:mt-[5px] transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 grid lg:grid-cols-2 gap-x-5 right-0 py-[25px] px-[20px] z-50 text-gray-700 lg:w-[600px] w-[300px] ">

              <div className='border-2 border-[#FF9900] px-4 py-4 rounded-md'>
                <h3 className=' text-center text-2xl mb-2 font-medium  tracking-wide text-[#FF9900]'>Shop & Track Orders</h3>
                <h1 className='text-sm text-clrgrey4 text-center'>
                  <strong>Login</strong> to view or place orders,<br /> add or update an AutoShip subscription,<br /> and track shipments.
                </h1>
                <button
                  type='button'
                  className='bg-[#FF9900]  py-[4px] mx-auto block mt-2 tracking-wider px-2 text-sm lg:px-5 text-white rounded transition-all ease-linear duration-300 leading-6 hover:text-clrgrey2 capitalize'
                >
                  Login to Shop
                </button>
              </div>
              {/* <div className='border-2 '> */}
              <div className='border-2 hidden lg:block border-[#70AC48] px-4 py-4 rounded-md'>
                <h3 className=" text-center text-2xl font-medium  tracking-wide text-green-600 mb-2">Reports &amp; Resources</h3>
                <h1 className='text-sm text-clrgrey4 text-center'>

                  <strong>Visit the VBO office suite</strong> to<br /> manage your team, view
                  reports<br /> and access resources.
                </h1>
                <button
                  type='button'
                  className='bg-[#50B848]  py-[4px] mx-auto block mt-2 tracking-wider px-2 text-sm lg:px-5 text-white rounded transition-all ease-linear duration-300 leading-6 hover:text-clrgrey2 capitalize'
                >
                  Login to Office
                </button>
              </div>
            </ul>
          </div>
          <div className='h-full flex lg:hidden mx-2 lg:mx-6 justify-center cursor-pointer items-center relative group '>
            <div className=" font-semibold rounded relative items-center">
              <div className=" font-semibold rounded  inline-flex items-center">
                <span className="capitalize text-[0.9rem] text-white tracking-wide">
                  Office
                </span>
                <MdArrowDropDown className=" h-6 w-6 text-white hidden lg:block" />
              </div>
            </div>
            <ul className="invisible top-[100%] group-hover:mt-[4px]   transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 grid lg:grid-cols-2 gap-x-5 right-0 py-[25px] px-[20px] z-50 text-gray-700 lg:w-[600px] w-[300px] ">
              {/* <div className='border-2 '> */}
              <div className='border-2 border-[#70AC48] px-4 py-4 rounded-md'>
                <h3 className=" text-center text-2xl font-medium  tracking-wide text-green-600 mb-2">Reports &amp; Resources</h3>
                <h1 className='text-sm text-clrgrey4 text-center'>

                  <strong>Visit the VBO office suite</strong> to<br /> manage your team, view
                  reports<br /> and access resources.
                </h1>
                <button
                  type='button'
                  className='bg-[#50B848]  py-[4px] mx-auto block mt-2 tracking-wider px-2 text-sm lg:px-5 text-white rounded transition-all ease-linear duration-300 leading-6 hover:text-clrgrey2 capitalize'
                >
                  Login to Office
                </button>
              </div>
            </ul>

          </div>
          <div className='h-full relative group flex lg:hidden cursor-pointer space-x-1 items-center px-3'>
            <div className=''>
              <FaShoppingCart className='text-2xl text-white' />
            </div>
            <ul className="invisible top-[100%]  group-hover:mt-[8px] transition-all duration-300 ease-in-out group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-slate-100 backdrop-blur-sm divide-y-[1px] divide-white/30 text-gray-700 h-[192px] right-0 lg:w-[515px] w-[340px] flex justify-center items-center z-50">
              <div className='mx-auto'>
                <div className='bg-green-200 p-4 rounded-full w-20 flex justify-center items-center h-20 mx-auto'>
                  <FaShoppingCart className='text-4xl -ml-2 text-clrgrey7' />
                </div>
                <p className='text-lg text-clrgrey3 mx-auto font-medium text-center'>Your cart is lonely. Check out <span className='text-green-500'>our products</span>  to add some goodness.</p>
              </div>
            </ul>
          </div>
          <form className=' hidden lg:flex'>
            <input
              placeholder={"Search.."}
              className=' text-gray-700 h-8 px-2 ring-0 focus:ring-white border-white focus:border-white focus:ring-0 border-0 focus:border-0  w-36 placeholder:tracking-wide'
              type="text"
              name="text"
            />
            <button className='bg-clrgrey9 px-3 flex justify-center items-center'>
              <MdSearch className='w-6 h-6 text-clrgrey3' />
            </button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Topbar

export const shopOptions = [
  {
    name: "AUD",
    mobile: false
  },
  {
    name: "USD",
    mobile: false
  },
  {
    name: "Immune System",
    mobile: false
  },
  {
    name: "Daily Detox",
    mobile: false
  },
  {
    name: "Everyday Nutrition",
    mobile: false
  },
  {
    name: "Greens",
    mobile: false
  },
  {
    name: "Energy",
    mobile: false
  },
  {
    name: "Heart",
    mobile: false
  },
  {
    name: "Joints",
    mobile: false
  },
  {
    name: "Metabolism",
    mobile: false
  },
  {
    name: "Protein",
    mobile: false
  },
  {
    name: "Product Packs",
    mobile: false
  },
  {
    name: "USDA Organic",
    mobile: false
  },
  {
    name: "Vegan",
    mobile: false
  },
  {
    name: "Vitamin D",
    mobile: false
  },
  {
    name: "Zeolite",
    mobile: false
  },
]