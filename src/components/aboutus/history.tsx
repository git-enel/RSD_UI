export const CompanyHistory = () => {
  const TimelineItem = ({
    year,
    title,
    children,
  }: {
    year: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="relative pl-15">
      <div className="relative z-10 flex items-start gap-4">
        <div className="min-w-[60px] text-lg font-bold text-green-700">
          {year}
        </div>

        <div className="h-[220px] min-h-[2em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-700 to-transparent opacity-25 dark:via-neutral-700"></div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-700 mb-1">{title}</h3>
          <div className="text-gray-600 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-8xl w-full mx-auto px-4 md:px-8 gap-10 md:gap-0 py-10">
      <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left order-1 md:order-none">
        <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
          Our <span className="text-gray-700">Company History</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Setiap perusahaan punya cerita. <br />
          <span className="text-gray-700">
            Inilah cerita kami, sebuah perjalanan yang dimulai dari mimpi
            sederhana.
          </span>
        </p>
      </div>

      <div>
        <div className="max-w-4xl w-full mx-auto py-5 px-6 space-y-2">
          <TimelineItem year="2020" title="start with a small service">
            GNV Consulting Services (GNV Consulting) is widely recognized as one
            of the leading Tax, Customs and Business Consulting firms in
            Indonesia, independent of any Tax and Customs firm, free from
            conflict and independence issues in providing non-attest services.
          </TimelineItem>

          <TimelineItem year="2021" title="first employees">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices
            ante egestas porta. Nam efficitur mi sed vestibulum vestibulum.
            Fusce ultricies mauris ut mauris suscipit placerat. Sed luctus
            condimentum risus nec accumsan. Quisque velit nibh, pellentesque non
            diam a, lobortis elementum arcu. Nullam in arcu rutrum, dapibus
            justo nec, elementum ante. Donec aliquam metus velit, vel blandit
            eros vulputate nec. Pellentesque nulla sapien, convallis vitae
            ullamcorper quis, consectetur ac velit. Fusce vel blandit orci.
            Etiam elementum sapien in orci rutrum, eu auctor purus lacinia.
            Proin et nisl eu felis vestibulum convallis.
          </TimelineItem>

          <TimelineItem year="2022" title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices
            ante egestas porta. Nam efficitur mi sed vestibulum vestibulum.
            Fusce ultricies mauris ut mauris suscipit placerat. Sed luctus
            condimentum risus nec accumsan. Quisque velit nibh, pellentesque non
            diam a, lobortis elementum arcu. Nullam in arcu rutrum, dapibus
            justo nec, elementum ante. Donec aliquam metus velit, vel blandit
            eros vulputate nec. Pellentesque nulla sapien, convallis vitae
            ullamcorper quis, consectetur ac velit. Fusce vel blandit orci.
            Etiam elementum sapien in orci rutrum, eu auctor purus lacinia.
            Proin et nisl eu felis vestibulum convallis.
          </TimelineItem>

          <TimelineItem year="2023" title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices
            ante egestas porta. Nam efficitur mi sed vestibulum vestibulum.
            Fusce ultricies mauris ut mauris suscipit placerat. Sed luctus
            condimentum risus nec accumsan. Quisque velit nibh, pellentesque non
            diam a, lobortis elementum arcu. Nullam in arcu rutrum, dapibus
            justo nec, elementum ante. Donec aliquam metus velit, vel blandit
            eros vulputate nec. Pellentesque nulla sapien, convallis vitae
            ullamcorper quis, consectetur ac velit. Fusce vel blandit orci.
            Etiam elementum sapien in orci rutrum, eu auctor purus lacinia.
            Proin et nisl eu felis vestibulum convallis.
          </TimelineItem>

          <TimelineItem year="2024" title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices
            ante egestas porta. Nam efficitur mi sed vestibulum vestibulum.
            Fusce ultricies mauris ut mauris suscipit placerat. Sed luctus
            condimentum risus nec accumsan. Quisque velit nibh, pellentesque non
            diam a, lobortis elementum arcu. Nullam in arcu rutrum, dapibus
            justo nec, elementum ante. Donec aliquam metus velit, vel blandit
            eros vulputate nec. Pellentesque nulla sapien, convallis vitae
            ullamcorper quis, consectetur ac velit. Fusce vel blandit orci.
            Etiam elementum sapien in orci rutrum, eu auctor purus lacinia.
            Proin et nisl eu felis vestibulum convallis.
          </TimelineItem>

          <TimelineItem year="2025" title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pretium eros sapien. Fusce tincidunt rhoncus tellus, eget ultrices
            ante egestas porta. Nam efficitur mi sed vestibulum vestibulum.
            Fusce ultricies mauris ut mauris suscipit placerat. Sed luctus
            condimentum risus nec accumsan. Quisque velit nibh, pellentesque non
            diam a, lobortis elementum arcu. Nullam in arcu rutrum, dapibus
            justo nec, elementum ante. Donec aliquam metus velit, vel blandit
            eros vulputate nec. Pellentesque nulla sapien, convallis vitae
            ullamcorper quis, consectetur ac velit. Fusce vel blandit orci.
            Etiam elementum sapien in orci rutrum, eu auctor purus lacinia.
            Proin et nisl eu felis vestibulum convallis.
            <br />
            <br />
            Donec aliquam metus velit, vel blandit eros vulputate nec.
            Pellentesque nulla sapien, convallis vitae ullamcorper quis,
            consectetur ac velit. Fusce vel blandit orci. Etiam elementum sapien
            in orci rutrum, eu auctor purus lacinia. Proin et nisl eu felis
            vestibulum convallis.
          </TimelineItem>
        </div>
      </div>
    </div>
  );
};
