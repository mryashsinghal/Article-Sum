import React from 'react'
import { logo } from '../assets';

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between 
        items-center w-full mb-10 pt-3'>
                <img src={logo} alt="sumz_logo" className='w-28 object-contain' />

                <button type='button' onClick={() => window.open('https://github.com/mryashSinghal')}
                    className='black_btn'>
                    Github
                </button>
            </nav>
            <h1 className='head_text'>
                AI-Powered Article Summaries  <br className='max-md:overflow-hidden' />
                <span className='orange_gradient'>with GPT-4 Precision</span>
            </h1>
            <h2 className='desc'>
                Streamline your article reading with summize, an Open-Source summarizer that converts long articles into easily digestible and clear summaries for quick understanding
            </h2>


        </header>
    )
}

export default Hero
