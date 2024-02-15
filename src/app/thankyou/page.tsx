"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";

const ThankYouPage = () => {
  const { items, clearCart } = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartTotal = items.reduce(
    (total, { product }) => total + parseFloat(product.price),
    0
  );

  const fee = 1;
  const orderId = Math.floor(Math.random() * 90000000) + 10000000;

  return (
    <main className="relative lg:min-h-full">
      <div className="hidden lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          fill
          src="/images/thankyou.jpg"
          className="h-full w-full object-cover object-center"
          alt="Thank you for your order"
          sizes="50vw"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <p className="text-sm font-medium text-emerald-700">
              Order successful
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thank you for ordering
            </h1>

            <div className="mt-16 text-sm font-medium">
              <div className="text-muted-foreground">Order nr.</div>
              <div className="mt-2 text-gray-900">{isMounted && orderId}</div>

              <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
                {isMounted &&
                  items.map(({ product }, index) => {
                    const imageUrl = product.urls[0];

                    return (
                      <li
                        key={product.id + index}
                        className="flex space-x-6 py-6"
                      >
                        <div className="relative h-24 w-24">
                          <Image
                            fill
                            src={imageUrl}
                            alt={`${product.name} image`}
                            className="flex-none rounded-md bg-gray-100 object-cover object-center"
                            sizes="5vw"
                          />
                        </div>

                        <div className="flex-auto flex flex-col justify-between">
                          <div className="space-y-1">
                            <h3 className="text-gray-900">{product.name}</h3>
                          </div>
                        </div>

                        <p className="flex-none font-medium text-gray-900">
                          {formatPrice(product.price)}
                        </p>
                      </li>
                    );
                  })}
              </ul>

              <div className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="text-gray-900">
                    {isMounted && formatPrice(cartTotal)}
                  </p>
                </div>

                <div className="flex justify-between">
                  <p>Transaction Fee</p>
                  <p className="text-gray-900">
                    {isMounted && formatPrice(fee)}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <p className="text-base">Total</p>
                  <p className="text-base">
                    {isMounted && formatPrice(cartTotal + fee)}
                  </p>
                </div>
              </div>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <Link
                  href="/"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-600"
                  onClick={() => clearCart()}
                >
                  Continue shopping &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
