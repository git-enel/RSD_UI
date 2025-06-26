import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function OurService() {
  return (
    <div
      className="relative w-full rounded-2xl bg-[#f8f6f6] shadow-2xl overflow-hidden py-10 px-5 md:px-20"
      style={{
        clipPath: `polygon(
          0 4%,
          35% 4%,       
          42% 0,
          58% 0,
          65% 4%,
          100% 4%,
          100% 100%,
          20% 100%,
          15% 100%,
          0 100%
        )`,
      }}
    >
      <div className="text-center max-w-3xl mx-auto mb-10 mt-15">
        <h1 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-gray-900">
          Our Service
        </h1>
        <p className="mb-3 text-gray-700">
          Membangun Solusi Digital untuk Bisnis Anda
        </p>
        <p className="text-gray-600 text-justify">
          Di era digital yang bergerak cepat ini, bisnis Anda membutuhkan lebih
          dari sekadar teknologi. Anda butuh solusi yang cerdas, efisien, dan
          benar-benar mendorong pertumbuhan. Kami hadir sebagai mitra terpercaya
          untuk mewujudkan hal tersebut. Dengan pemahaman mendalam tentang
          kebutuhan bisnis dan keahlian teknis yang kuat, kami menawarkan
          beragam layanan pengembangan aplikasi yang dirancang untuk memberikan
          dampak nyata bagi operasional Anda.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0 justify-items-center mb-10">
        {[
          {
            title: "Digital Transformation",
            image: "/asset/person2.jpg",
          },
          {
            title: "Custom Software Development",
            image: "/asset/person2.jpg",
          },
          {
            title: "IT Consulting",
            image: "/asset/person2.jpg",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={168}
              className="w-full object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-700 text-base text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex px-6 pt-4 pb-6 justify-end">
              <Link href="/service">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
                  Learn More
                  <IconArrowNarrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/service">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition w-full sm:w-auto">
            See All Services
          </button>
        </Link>
        <Link href="/contactus">
          <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto">
            Discuss Your Project
          </button>
        </Link>
      </div>
    </div>
  );
}
