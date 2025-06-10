"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="gallery" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-400 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Gallery</h2>
          <p className="text-light-300 mb-8">
            Explore our comprehensive tyre collection showcasing the latest in automotive technology, from
            high-performance racing tyres to rugged all-terrain options designed for every driving scenario.
          </p>
          <p className="text-light-300 text-sm bg-dark-300 p-2 rounded">
            <span className="text-red-500 font-bold">Note:</span> Images will show a red border at the top when they
            reach their final state (when the top of the image reaches the navigation bar height).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KenBurnsImage
            src="./tyre01.png"
            alt="High-performance racing tyres"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="./tyre02.png"
            alt="Winter tyres with deep tread pattern"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />
          <KenBurnsImage
            src="./tyre01.png"
            alt="High-performance racing tyres"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="./tyre02.png"
            alt="Winter tyres with deep tread pattern"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />
          <KenBurnsImage
            src="./tyre01.png"
            alt="High-performance racing tyres"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

          <KenBurnsImage
            src="./tyre02.png"
            alt="Winter tyres with deep tread pattern"
            containerClassName="h-[400px]"
            parallaxDirection={1}
            initialScale={1.15}
          />

    
        </div>
      </div>
    </section>
  )
}
