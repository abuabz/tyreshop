"use client"

import { useRef } from "react"
import { KenBurnsImage } from "./ken-burns-image"

export function ResidencesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section id="products" ref={sectionRef} className="py-20 px-4 md:px-6 bg-dark-400 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-light text-light-100 mb-6">Our Tyre Range</h2>
          <p className="text-light-300">
            Each TyreMax tyre is specifically designed to excel in different driving conditions, providing optimal
            performance whether you're navigating city streets, conquering off-road terrain, or pushing the limits on
            the track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KenBurnsImage
            src="./Performance Series.png"
            alt="High-performance sports tyres"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">Performance Series</h3>
                <p className="text-light-200/80 text-sm">Maximum grip for sports and luxury vehicles</p>
              </div>
            }
          />

          <KenBurnsImage
            src="All-Terrain Series.png"
            alt="All-terrain tyres for SUVs and trucks"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">All-Terrain Series</h3>
                <p className="text-light-200/80 text-sm">Versatile performance for any adventure</p>
              </div>
            }
          />

          <KenBurnsImage
            src="./Eco Series.png"
            alt="Eco-friendly fuel-efficient tyres"
            containerClassName="h-[400px]"
            initialScale={1.15}
            parallaxDirection={1}
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-display text-light-100 mb-2">Eco Series</h3>
                <p className="text-light-200/80 text-sm">Fuel-efficient tyres for everyday driving</p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
