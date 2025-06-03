"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 bg-white z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Left - Logo */}
        <div className="flex-shrink-0 text-xl font-bold text-blue-600">
          <Link href="/" className="hover:text-blue-700 transition">
            My Ecommerce
          </Link>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex justify-center flex-1 space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600 transition">
            Checkout
          </Link>
        </div>

        {/* Right - Cart & Toggle */}
        <div className="flex items-center space-x-3">
          <Link
            href="/checkout"
            className="relative flex items-center group"
          >
            <ShoppingCartIcon className="w-6 h-6 text-gray-700 group-hover:text-black transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-inner">
          <ul className="flex flex-col space-y-3 text-gray-800 font-medium">
            <li>
              <Link href="/" className="block hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block hover:text-blue-600 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="block hover:text-blue-600 transition"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  ) ;
};
