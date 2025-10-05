/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Footer() {
  return (
     <footer className="mt-20 py-12 text-zinc-600 text-sm">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <div className="font-extrabold text-2xl">MensFashion</div>
              <p className="mt-2">Premium men's fashion inspired by modern trends. Sustainable fabrics. Limited drops.</p>
            </div>
            <div className="flex gap-6">
              <div>
                <h5 className="font-semibold">Shop</h5>
                <ul className="mt-2">
                  <li>Shirts</li>
                  <li>Pants</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Company</h5>
                <ul className="mt-2">
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  )
}
