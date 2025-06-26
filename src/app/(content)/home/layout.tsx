import ContentNavbar from "@/components/layout/HomeNavbar";
import DownBanner from "@/components/reuse-compo/downBanner";
import { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <div className="relative z-0">{children}</div>
      <div className="mt-20">
        <DownBanner />
      </div>

      <div className="absolute top-0 left-0 w-full z-50">
        <ContentNavbar />
      </div>
    </div>
  );
};

export default ContentLayout;
