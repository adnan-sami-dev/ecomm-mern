import React from 'react'
import heroVideo from '../../assets/videos/3205917-hd_1920_1080_25fps.mp4'

const Hero = () => {
    return (
        <div className="fixed top-0 z-[-1]">
            <section className="relative w-full w-[100vw] h-screen overflow-hidden">
                <video
                    src={heroVideo}
                    className="w-full h-screen object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="text-center text-white max-w-3xl">
                        <h1 className="text-4xl text-opacity-90 md:text-6xl font-bold tracking-tight">Timeless Elegance</h1>
                        <p className="mt-4 text-sm text-opacity-75 md:text-lg text-slate-100">Premium apparel crafted for comfort and confidence.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero