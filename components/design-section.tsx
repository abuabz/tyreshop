"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="technology" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-500 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <KenBurnsImage
            src="./Advanced Technology.png"
            alt="Advanced tyre technology and testing facility"
            containerClassName="h-[600px]"
            initialScale={1.15}
            parallaxDirection={1}
          />

          <div className="transition-transform duration-300 ease-out">
            <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Advanced Technology</h2>
            <p className="text-light-300 mb-6">
              Our innovation approach is driven by three core principles: cutting-edge materials, precision engineering,
              and rigorous testing. These principles guide every aspect of our tyre development process, from initial
              concept to final production.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-display text-light-100 mb-3">Advanced Rubber Compounds</h3>
              <p className="text-light-300">
                We utilize proprietary silica-enhanced rubber compounds that provide superior grip in both wet and dry
                conditions. Our advanced mixing processes ensure optimal distribution of materials for consistent
                performance across the entire tyre.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-display text-light-100 mb-3">Innovative Tread Design</h3>
              <p className="text-light-300">
                Our computer-optimized tread patterns are designed using advanced simulation technology to maximize
                water evacuation, reduce road noise, and provide exceptional grip. Each pattern is specifically
                engineered for its intended application.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-display text-light-100 mb-3">Rigorous Testing Standards</h3>
              <p className="text-light-300">
                Every tyre undergoes extensive testing in our state-of-the-art facilities and real-world conditions.
                From high-speed endurance tests to extreme weather simulations, we ensure each tyre meets our exacting
                performance and safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
