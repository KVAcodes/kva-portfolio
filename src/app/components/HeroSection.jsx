import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 lg-grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello there, I'm Victor</h1>
                    <p className="text-[#ADB7BE] text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec ultricies.</p>
                </div>
            </div>
            <div className='col-span-5'>
                <Image
                    src="/images/pf-pic-high.png"  
                    alt="Hero Image"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    )
}

export default HeroSection;