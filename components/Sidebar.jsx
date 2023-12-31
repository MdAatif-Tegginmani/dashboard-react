import React from 'react'
import Link from 'next/link'
import { RxDashboard, RxSketchLogo,RxPerson } from 'react-icons/rx'
import {HiShoppingBag} from 'react-icons/hi2'
import {LuSettings} from 'react-icons/lu'

const Sidebar = ({ children }) => {
  return (
    <div className='flex  '>
      <div className='fixed w-20 p-4 h-screen bg-white border-r-[1px] flex flex-col justify-between '>
        <div className='flex flex-col items-center'>
          <Link href="/" >
            <div className='bg-purple-800 text-white  p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-grey-200 w-full p-2'></span>
          <Link href="/">
            <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>

          <Link href="/customers">
            <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxPerson size={20} />
            </div>
          </Link>

          <Link href="/order">
            <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                <HiShoppingBag  size={20}/>
            </div>
          </Link>

          <Link href="/">
            <div className='bg-gray-100 hover:bg-gray-300 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LuSettings size={20} />
            </div>
          </Link>

        </div>


      </div>



      <main className='ml-20 w-full '>{children}</main>

    </div>
  )
}

export default Sidebar