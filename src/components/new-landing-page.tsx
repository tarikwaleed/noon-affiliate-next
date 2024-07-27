"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignIn, SignedIn, SignedOut} from "@clerk/nextjs";

import { useUser } from "@clerk/clerk-react";

export function LandingPage() {
  const { user } = useUser();
  return (
    <>
      <section className="h-screen flex flex-col lg:flex-row">
        {/* Left column container with yellow background */}
        <div className="w-full lg:w-1/2 bg-yellow-300 flex flex-col items-center justify-center p-8">
          <img
            alt="Noon Affiliate Program Logo"
            className="rounded-lg mt-16"
            height={163}
            src="/noon-logo.png"
            style={{
              aspectRatio: "363/163",
              objectFit: "cover",
            }}
            width={363}
          />
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2">
              برنامج التسويق بالعمولة نون
            </h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8">
              Noon Affiliate Marketing Program
              <br />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                السعودية 🇸🇦 الإمارات 🇦🇪
              </span>
            </h2>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 mb-4">
              عمولات تصل حتى
            </div>
            <div className="flex flex-row gap-8 justify-center">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 mb-4">
                ريال/درهم
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 mb-4">
                40
              </div>
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 mb-4">
              على كل طلب
            </div>
          </div>
        </div>

        {/* Right column container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          {!user ? (
            <SignIn />
          ) : (
            <>
              <Link href="/user-dashboard/coupons">
                <Button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-gray-700 transition-colors duration-200">
                  لوحة التحكم
                </Button>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
}
