"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="transition-transform duration-300 ease-out">
            <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">
              Excellence in Tyre Technology
            </h2>
            <p className="text-light-300 mb-6">
              At TyreMax, we believe that exceptional tyres should provide the perfect balance of performance, safety,
              and durability. Our tyres are engineered to deliver superior grip and handling across all weather
              conditions, ensuring you can drive with confidence on any road.
            </p>
            <p className="text-light-300 mb-6">
              Each tyre is crafted using advanced rubber compounds and innovative tread patterns that maximize contact
              with the road surface. Our state-of-the-art manufacturing processes ensure consistent quality and
              performance, while our rigorous testing protocols guarantee that every tyre meets the highest safety
              standards.
            </p>
            <p className="text-light-300">
              Our commitment to innovation means that we continuously develop new technologies to improve fuel
              efficiency, reduce road noise, and extend tyre life. From high-performance sports tyres to all-terrain
              options, our comprehensive range caters to every driving need and vehicle type.
            </p>
          </div>

          <KenBurnsImage
            src="./tyreabout.png"
            alt="Modern tyre manufacturing facility"
            containerClassName="h-[500px]"
            initialScale={1.15}
            parallaxDirection={1}
          />
        </div>
      </div>
    </section>
  )
}
