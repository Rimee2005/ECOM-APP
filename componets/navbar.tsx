import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:text-blue-500">
            My Ecommerce
          </Link>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex justify-center flex-1 space-x-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/checkout" className="hover:text-blue-500">
            Checkout
          </Link>
          <Link href="/products" className="hover:text-blue-500">
            Products
          </Link>
        </div>

        {/* Right - Empty for now or add icons later */}
        <div className="w-24">{/* Optional space or right-side items */}</div>
      </div>
    </nav>
  );
};
