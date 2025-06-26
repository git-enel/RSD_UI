import { CompanyHistory } from "@/components/aboutus/history";
import { TeamBoard } from "@/components/aboutus/team";
import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat py-20 px-5 text-gray-800 text-center"
        style={{ backgroundImage: "url('/asset/bg.jpg')" }}
      >
        <div className="text-5xl font-bold leading-tight text-shadow-lg drop-shadow-md">
          About Our Company
        </div>
        <div className="mt-8">Learn More About Our Company</div>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto text-justify mt-10 gap-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices ante
          egestas porta. Nam efficitur mi sed vestibulum vestibulum. Fusce
          ultricies mauris ut mauris suscipit placerat. Sed luctus condimentum
          risus nec accumsan. Quisque velit nibh, pellentesque non diam a,
          lobortis elementum arcu. Nullam in arcu rutrum, dapibus justo nec,
          elementum ante. Donec aliquam metus velit, vel blandit eros vulputate
          nec. Pellentesque nulla sapien, convallis vitae ullamcorper quis,
          consectetur ac velit. Fusce vel blandit orci. Etiam elementum sapien
          in orci rutrum, eu auctor purus lacinia. Proin et nisl eu felis
          vestibulum convallis. Integer ornare vitae mi id mattis. Proin aliquet
          leo id egestas mattis. Nam arcu velit, blandit et ante sit amet,
          accumsan facilisis nulla. Praesent ullamcorper mollis felis, ac
          ullamcorper ante convallis sed. Donec a massa orci. Cras nec urna
          justo. Curabitur bibendum eros sem, quis suscipit lectus pretium nec.
          In ornare libero et orci aliquet bibendum. Donec molestie vulputate
          tincidunt. Integer lectus augue, malesuada pellentesque lacus eu,
          faucibus pellentesque urna. Pellentesque at nunc pretium, iaculis
          felis non, cursus dui. Curabitur in malesuada enim. Aliquam magna
          turpis, condimentum non lectus tincidunt, pellentesque efficitur
          purus. Cras sodales ultrices felis in viverra. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse molestie justo eu
          dignissim efficitur. Duis non arcu ac dui tempus pharetra sed vel
          risus. Cras id augue pulvinar, iaculis nisl sed, cursus lacus. Quisque
          tincidunt vulputate vehicula.
        </p>
        <p>
          Nam accumsan finibus erat sed luctus. Vestibulum dignissim diam mi, et
          mattis sem blandit in. Curabitur pulvinar sagittis nunc in vulputate.
          Nam ac massa congue, rhoncus turpis ac, commodo quam. Suspendisse sed
          turpis quis eros convallis suscipit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In quis urna sem. Sed vulputate lectus et
          lacus scelerisque, sit amet blandit sem tincidunt. Fusce tempor nunc
          eu urna blandit lobortis. Suspendisse molestie tortor vitae tortor
          malesuada, ut malesuada odio aliquet. Donec a finibus velit, id
          vehicula odio. In iaculis, lacus a aliquet volutpat, lorem erat
          consequat nunc, ut porta tortor quam vel risus. Duis ac venenatis
          diam. In hac habitasse platea dictumst. Aenean quis neque pharetra,
          elementum arcu et, varius quam. Aenean mattis porttitor velit, in
          tincidunt felis. Nulla vehicula urna nec arcu dignissim ultricies.
          Nullam auctor dolor sed nulla pharetra efficitur. Nulla sodales
          pretium dignissim. Proin vel semper leo. Integer ultricies at quam et
          vulputate. Pellentesque urna risus, sagittis in nunc at, mollis
          ullamcorper metus. Fusce ac purus in lacus maximus ultrices nec non
          justo. Suspendisse rhoncus ligula non odio maximus semper. Curabitur
          ultricies id velit et congue. Integer pulvinar vehicula augue, ut
          tempus lacus mollis a. Curabitur at cursus justo, at facilisis nulla.
          Nulla fermentum erat ut aliquet dictum. Sed a tempor massa. Integer
          pulvinar, nunc ut hendrerit hendrerit, orci sem pulvinar sapien, non
          feugiat magna velit et turpis. Maecenas nibh sapien, euismod eu orci
          vitae, scelerisque fringilla neque.
        </p>
      </div>
      <div className="bg-gray-100 mt-10 mb-10">
        <CompanyHistory />
      </div>
      <div className="mt-10 mb-10">
        <TeamBoard />
      </div>
    </div>
  );
}
