'use client'

import { CustomBtn } from "@/components/module/index"
import Image from "next/image"

export default function Hero(){ 

  const scrollHandler = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomBtn
          title="Explore Cars"
          style="bg-primary-blue text-white rounded-full mt-10"
          eventHandler={scrollHandler}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>

  )
}