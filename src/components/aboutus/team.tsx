import ChromaGrid from "../reuse-compo/ChromaGrid";

export const TeamBoard = () => {
  const items = [
    {
      image: "/asset/person1.jpg",
      title: "Sarah Johnson",
      subtitle: "Frontend Developer",
      handle: "@sarahjohnson",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson",
    },
    {
      image: "/asset/person1.jpg",
      title: "Mike Chen",
      subtitle: "Backend Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
  ];

  return (
    <div className="">
      <div className="text-center">
        <h1 className=" text-5xl font-sans font-bold text-gray-800">
          Meet Our Team
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium
          eros sapien.
        </p>
      </div>

      <div>
        <div style={{ height: "600px", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </div>
  );
};
