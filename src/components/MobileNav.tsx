"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative inline-flex items-center rounded-md p-2 text-gray-400"
      >
        <Menu className="h-8 w-8" aria-hidden="true" />
      </button>
    );

  return (
    <div>
      <div className="relative z-40 lg:hidden ml-auto">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </div>

      <div className="fixed overflow-y-scroll overscroll-y-none inset-0 z-40 flex">
        <div className="w-full">
          <div className="relative flex w-full flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-2">
              <ul>
                {PRODUCT_CATEGORIES.map((category, i) => {
                  return (
                    <li
                      key={category.value}
                      className="space-y-10 px-4 pb-8 pt-10"
                    >
                      <div className="border-b border-gray-200">
                        <div className="-mb-px flex">
                          <p className="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 py-4 text-base font-medium">
                            {category.label}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="group relative text-sm"
                          >
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <Image
                                fill
                                src={item.imageSrc}
                                alt="Product category image"
                                className="object-cover object-center"
                                sizes="50vw"
                              />
                            </div>
                            <Link
                              href={item.href}
                              className="mt-6 block font-medium text-gray-900"
                            >
                              {item.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
