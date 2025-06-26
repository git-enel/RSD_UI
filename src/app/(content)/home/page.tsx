import Branding from "@/components/branding";
import Home from "@/components/home";
import WhyUs from "@/components/whyUs";
import OurService from "@/components/ourService";
import ClientReview from "@/components/clientReview";
import AboutUs from "@/components/aboutUs";


export default function HomePage() {
  return (
    <div className="w-full">
      <div
        className="relative h-[95vh] w-full max-w-8xl rounded-2xl bg-[#fbe4d8] p-4 shadow-2xl sm:p-6 md:p-3 overflow-hidden"
        style={{
          clipPath:
            "polygon(0 0, 73% 0, 78% 6%, 100% 6%, 100% 100%, 22% 100%, 17% 94%, 0 94%)",
        }}
      >
        <Home />
      </div>
      <div className="w-full py-10">
        <Branding />
      </div>
      <div className="w-full">
        <AboutUs />
      </div>
      <div className="w-full mb-10">
        <WhyUs />
      </div>
      <div className="w-full mb-10">
        <OurService />
      </div>
      <div className="w-full mb-10">
        <ClientReview />
      </div>
    </div>
  );
}
