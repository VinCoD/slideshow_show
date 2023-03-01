import React, { useState, useEffect } from 'react'

const images = [
  'https://source.unsplash.com/random/1600x900',
  'https://source.unsplash.com/random/1600x901',
  'https://source.unsplash.com/random/1600x902',
]

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentImage])

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-8xl">{`Image ${currentImage + 1}`}</h1>
      </div>
    </div>
  )
}

export default HeroSection