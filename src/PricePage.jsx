import React from 'react';
import { Link } from 'react-router-dom';


export default function PricePage() {
  return (

    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h1 className="text-white text-4xl font-extrabold drop-shadow-lg">Price List of All Mods</h1>
        <h1 className="text-gray-400 mt-3 text-2xl font-italic drop-shadow-lg">Select the option you want to buy and contact the mod maker</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
        {/* Redux Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg bg-opacity-35 hover:bg-opacity-40 text-center text-gray-900 bg-purple-900 rounded-3xl shadow-lg dark:border-gray-600 xl:p-8 dark:text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-purple-800">
          <h3 className="mb-4 text-2xl font-mono">Redux</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            Customize your game and improve optimization.
          </p>
          <div className="flex flex-col justify-center items-center my-8">
            <span className="text-5xl font-extrabold">€20</span>
            <h1 className="mt-2 text-center text-gray-400">The price may vary depending on the amount of work you order.</h1>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom timecycle</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom effects/tracers</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom Big Map/Mini-Map</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom scope</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom Gun-Game Arena</span>
            </li>
          </ul>
          <h1 className='font-extrabold'>CONTACT WITH MOD MAKER</h1>
          <Link to="/contact">
            <button className='font-extrabold mt-4 bg-purple-600 hover:bg-white hover:text-black py-2 px-6 rounded-3xl text-white transform transition duration-500 hover:scale-125 hover:shadow-lg'>CONTACT</button>
          </Link>
        </div>

        {/* Guns Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg bg-opacity-35 hover:bg-opacity-40 text-center text-gray-900 bg-purple-900 rounded-3xl shadow-lg dark:border-gray-600 xl:p-8 dark:text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-purple-800">
          <h3 className="mb-4 text-2xl font-mono">GunPack</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            Custom weapons with unique preferences and style.
          </p>
          <div className="flex flex-col justify-center items-center my-8">
            <span className="text-5xl font-extrabold">€35</span>
            <h1 className="mt-2 text-center text-gray-400">The price may vary depending on the amount of work you order.</h1>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Heavy Rifle</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Heavy Shotgun</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Carbine Rifle MK2</span>
            </li>
            <div className="flex flex-col justify-center items-center my-8">
              <span className="text-4xl font-bold text-gray-400">OTHER:</span>
              <span className="text-4xl font-extrabold">1 GUN FROM 13€</span>
            </div>


          </ul>
          <h1 className='font-extrabold'>CONTACT WITH MOD MAKER</h1>
          <Link to="/contact">
            <button className='font-extrabold mt-4 bg-purple-600 hover:bg-white hover:text-black py-2 px-6 rounded-3xl text-white transform transition duration-500 hover:scale-125 hover:shadow-lg'>CONTACT</button>
          </Link>
        </div>

        {/* Third Plan */}
        <div className="flex flex-col p-6 mx-auto max-w-lg bg-opacity-35 hover:bg-opacity-40 text-center text-gray-900 bg-purple-900 rounded-3xl shadow-lg dark:border-gray-600 xl:p-8 dark:text-white transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 hover:bg-purple-800">
          <h3 className="mb-4 text-2xl font-mono">Custom Plan</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">
            Tailored mods based on your needs.
          </p>
          <div className="flex flex-col justify-center items-center my-8">
            <span className="text-5xl font-extrabold">€5+</span>
            <h1 className="mt-2 text-center text-gray-400">The price may vary depending on the amount of work you order.</h1>
          </div>

          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom timecycle <span className='font-bold'>- from 10€</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom effects/tracers <span className='font-bold'>- from 5€</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom Big Map/Mini-Map <span className='font-bold'>- from 5€</span></span>
            </li>
            <li className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>Custom Gun-Game <span className='font-bold'>- from 15€</span></span>
            </li>
          </ul>
          <h1 className='font-extrabold'>CONTACT WITH MOD MAKER</h1>
          <Link to="/contact">
            <button className='font-extrabold mt-4 bg-purple-600 hover:bg-white hover:text-black py-2 px-6 rounded-3xl text-white transform transition duration-500 hover:scale-125 hover:shadow-lg'>CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
