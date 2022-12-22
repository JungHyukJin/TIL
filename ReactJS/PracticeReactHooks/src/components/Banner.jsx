import React from 'react'

export default function Banner() {
  return (
    <section className="h-96 relative">
        <div className="w-full h-full bg-cover bg-banner" />
        <div className="absolute w-full text-center text-white top-32">
            <p className="text-6xl">
                When in doubt, wear us.
            </p>
            <p className="text-2xl">
                Best Products, High Quality
            </p>
        </div>
    </section>
    )
}
