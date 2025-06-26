import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export const BrandingSideSec = () => {
  return (
    <div className="h-[500px] overflow-y-auto direction-rtl pr-4 mt-4">
      <div className="flex flex-col gap-5 direction-ltr">
        {/* CARD 1 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Explore <br className="sm:hidden" />
              great neighborhoods
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore video tours, in-depth research, and articles on 20,000 neighborhoods.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Discover new places
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Find hidden gems and local favorites in every city.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CARD 3 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Live smarter
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Get tips, insights, and tools to improve your lifestyle.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

                {/* CARD 1 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Explore <br className="sm:hidden" />
              great neighborhoods
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Explore video tours, in-depth research, and articles on 20,000 neighborhoods.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Discover new places
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Find hidden gems and local favorites in every city.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* CARD 3 */}
        <div className="flex items-start justify-between p-6 rounded-3xl shadow-md border border-gray-200 bg-white max-w-xl relative">
          <div className="w-12 h-12 flex-shrink-0">
            <Image
              src="/asset/monyet2.png"
              alt="Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 leading-snug">
              Live smarter
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Get tips, insights, and tools to improve your lifestyle.
            </p>
          </div>
          <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
            <IconArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tambahkan card lainnya di sini */}
      </div>
    </div>
  );
};
