import { BrandingSide } from "./reuse-compo/branding";
import { BrandingSideSec } from "./reuse-compo/brandingSec";

export default function Branding() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-start justify-center w-full">
        <div className="w-full md:w-1/2 h-full">
          <div className="h-full w-full">
            <BrandingSide />
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full p-4 md:p-6 md:ml-10">
          <div className="h-full w-full">
            <BrandingSideSec />
          </div>
        </div>
      </div>
    </div>
  );
}