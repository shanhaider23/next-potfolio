import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

function Sidebar() {
  return (
    <div>
      <img
        src="https://shan-e-haider.netlify.app/images/new.jpg"
        alt="user avatar"
        className="mx-auto h-32 w-32 rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        Shan<span>-e-haider</span>
      </h3>
      <p className="my-3 rounded-full bg-gray-200 px-2 py-1">Web Developer</p>
      <a
        href="http://"
        className="my-3 flex items-center justify-center rounded-full bg-gray-200 px-2 py-1"
        download="name"
      >
        {' '}
        <GiTie className="h-6 w-6" />
        Download Resume
      </a>
      <div className="my-5 mx-auto flex w-9/12 justify-around text-gray-500 md:w-full">
        <a href="https://github.com/">
          <AiFillGithub className=" h-8 w-8 cursor-pointer" />
        </a>
        <a href="https://github.com/">
          <AiFillLinkedin className=" h-8 w-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="my-5 bg-gray-200 py-4"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div>
          <GoLocation />
          <span>Copenhagen, Denmark </span>
        </div>
        <p className="my-2"> shan.haider@gmail.com </p>
        <p className="my-2"> 004591439592</p>
      </div>
      <button className="my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 py-2 text-white">
        Email Me
      </button>
      <button className="my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 py-2 text-white">
        Change Theme
      </button>
    </div>
  )
}

export default Sidebar
