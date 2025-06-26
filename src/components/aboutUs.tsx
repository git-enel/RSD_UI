import Image from "next/image";
import Link from "next/link";
import CountUp from "./reuse-compo/CountUp";

export default function AboutUs() {
  return (
    <div className="w-full">
      <div
        className="relative h-[135vh] lg:h-[95vh] w-full max-w-8xl rounded-2xl bg-[#f8f6f6] shadow-2xl overflow-hidden"
        style={{
          clipPath: `polygon(
      0 6%,
      35% 6%,       
      42% 0,
      58% 0,
      65% 6%,
      100% 6%,
      100% 100%,
      20% 100%,
      15% 94%,
      0 94%
    )`,
        }}
      >
        <div className="absolute inset-0 flex flex-col lg:flex-row mt-15 lg:mt-0">
          <div className="w-full lg:w-1/2 flex justify-center items-center text-justify px-6 py-8">
            <div className="flex flex-col items-center">
              <Image
                src="/asset/logo.png"
                alt=""
                width={250}
                height={250}
                className="object-contain"
              />
              <div className="flex flex-col text-center mt-5">
                <h1 className="font-semibold font-sans">
                  <div className="text-3xl sm:text-4xl">
                    <span className="text-orange-600 mr-2">RUMAH</span>
                    <span className="text-blue-800">SOLUSI</span>
                  </div>
                  <div className="text-xl sm:text-2xl text-gray-700 font-semibold">
                    DIGITAL
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-8">
            <div className="flex flex-col space-y-4 w-full max-w-xl">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                About Us
              </h1>
              <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pretium eros sapien. Fusce tincidunt rhoncus tellus, eget
                ultrices ante egestas porta. Nam efficitur mi sed vestibulum
                vestibulum. Fusce ultricies mauris ut mauris suscipit placerat.
                Sed luctus condimentum risus nec accumsan. Quisque velit nibh,
                pellentesque non diam a, lobortis elementum arcu. Nullam in arcu
                rutrum, dapibus justo nec, elementum ante. Donec aliquam metus
                velit, vel blandit eros vulputate nec. Pellentesque nulla
                sapien, convallis vitae ullamcorper quis, consectetur ac velit.
                Fusce vel blandit orci. Etiam elementum sapien in orci rutrum,
                eu auctor purus lacinia. Proin et nisl eu felis vestibulum
                convallis.
              </p>
              <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                Donec aliquam metus velit, vel blandit eros vulputate nec.
                Pellentesque nulla sapien, convallis vitae ullamcorper quis,
                consectetur ac velit. Fusce vel blandit orci. Etiam elementum
                sapien in orci rutrum, eu auctor purus lacinia. Proin et nisl eu
                felis vestibulum convallis.
              </p>

              <div className="flex flex-col sm:flex-row justify-between gap-5 mt-5">
                <div>
                  <CountUp
                    from={0}
                    to={300}
                    duration={5}
                    className="text-2xl font-bold font-sans text-blue-900"
                  />
                  <span className="text-2xl font-bold font-sans text-blue-900 ml-1">
                    +
                  </span>
                  <h3 className="font-sans text-sm sm:text-base">
                    Projects Completed
                  </h3>
                </div>
                <div>
                  <CountUp
                    from={0}
                    to={96}
                    duration={5}
                    className="text-2xl font-bold font-sans text-blue-900"
                  />
                  <span className="text-2xl font-bold font-sans text-blue-900 ml-1">
                    %
                  </span>
                  <h3 className="font-sans text-sm sm:text-base">
                    Client Satisfaction
                  </h3>
                </div>
                <div>
                  <CountUp
                    from={0}
                    to={50}
                    duration={5}
                    className="text-2xl font-bold font-sans text-blue-900"
                  />
                  <span className="text-2xl font-bold font-sans text-blue-900 ml-1">
                    +
                  </span>
                  <h3 className="font-sans text-sm sm:text-base">
                    Industry Partners
                  </h3>
                </div>
              </div>

              <div className="flex justify-end sm:justify-start">
                <Link href="/aboutus">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition mt-6">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
