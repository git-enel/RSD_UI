import {
  IconBrandWhatsapp,
  IconCopyright,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function DownBanner() {
  return (
    <div className="bg-black text-white py-8">
      <div className="flex flex-col md:flex-row justify-between gap-y-10 md:gap-x-20 px-6 md:px-30">
        <div className="md:w-1/2">
          <h1 className="text-xl font-bold mb-2">Rumah Solusi Digital</h1>
          <p className="text-gray-300">
            Empowering businesses through innovative technology solutions that
            <br />
            drive growth and digital transformation.
          </p>
          <div className="flex gap-2 mt-2">
            <Link href="mailto:contact@rumahsolusidigital.com" target="_blank">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <IconMail className="w-5 h-5 text-red-400" />
              </button>
            </Link>
            <Link href="https://wa.me/+6285762544654" target="_blank">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <IconBrandWhatsapp className="w-5 h-5 text-green-400" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">
          <div>
            <h1 className="text-lg font-semibold mb-2">Service</h1>
            <div className="space-y-2 text-gray-300">
              <p>Digital Transformation</p>
              <p>Custom Software Development</p>
              <p>IT Consulting</p>
              <p>Cloud Solutions</p>
              <p>Data Analyticss</p>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold mb-2">Contact</h1>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-start gap-2">
                <IconMapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span>
                  Jl. T. Amir Hamzah, Helvetia Tim., Kec. Medan Helvetia, <br />
                  Kota Medan, Sumatera Utara
                </span>
              </p>

              <p className="flex items-center gap-2">
                <IconPhone className="w-5 h-5 text-green-400" />
                +62 857 6254 4654
              </p>

              <p className="flex items-center gap-2">
                <IconMail className="w-5 h-5 text-red-400" />
                contact@rumahsolusidigital.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 border-t border-gray-700 mx-6"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-y-3 text-gray-300 text-sm px-6 md:px-30 py-2">
        <p className="flex items-center gap-1 text-center">
          <IconCopyright className="w-4 h-4" />© 2025 Rumah Solusi Digital. All
          rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link
            href="/privacyPolicy"
            className="hover:underline hover:text-white transition"
          >
            Privacy Policy
          </Link>
          <Link
            href="/termsOfService"
            className="hover:underline hover:text-white transition"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookiePolicy"
            className="hover:underline hover:text-white transition"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
