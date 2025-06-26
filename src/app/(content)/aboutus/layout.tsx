import BaseNavbar from "@/components/layout/BaseNavbar";
import DownBanner from "@/components/reuse-compo/downBanner";
import { ReactNode } from "react";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <BaseNavbar>{children}</BaseNavbar>

      <div className="mt-15"><DownBanner /></div>
    </div>
  );
};

export default BaseLayout;