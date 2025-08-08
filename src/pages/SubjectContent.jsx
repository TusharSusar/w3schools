import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function SubjectContent() {
  return (
    <section className='w-full h-dvh relative bg-gray-200 '>
      <Sidebar/>
      <Outlet/>
    </section>
  )
}

export default SubjectContent
