import Link from "next/link";
import { Gem } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Gem className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center pr-2">
                <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="hidden z-50 lg:block lg:self-stretch">
                    <Search />
                  </div>
                  <div className="ml-4 flow-root lg:ml-6 pr-4">
                    <Cart />
                  </div>
                </div>
                <MobileNav />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
