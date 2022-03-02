import React from "react";
import TimeLine from "../molecule/TimeLine";
import { isMobileDevice } from "utils";

const RoadMap = React.forwardRef<HTMLElement>((_, ref) => {
  const isMobile = isMobileDevice();

  return (
    <section ref={ref} className="mb-14">
      <div className="px-5 md:px-0 mb-4">
        <div className="md:container">
          <div className="text-sm font-medium tracking-[6px] uppercase mb-2 gradient-text bg-gradient-to-r from-[#80acfd] to-[#e0bdf1]">
            Roadmap
          </div>
          <h2 className="text-[#d8d8d8] text-[40px] mb-8 md:text-[50px]">
            Explore our roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-y-10 md:gap-x-14">
            {roadMapData.map((roadMap, index) => (
              <TimeLine
                key={index}
                month={roadMap.month}
                year={roadMap.year}
                content={roadMap.content}
              />
            ))}
          </div>
        </div>
      </div>
      {isMobile ? (
        <img src="/assets/grid.svg" width="414" height="98" alt="optim grid" />
      ) : (
        <video src="/assets/optim_grid.mp4" autoPlay loop muted width="100%" />
      )}
    </section>
  );
});

export default RoadMap;

const roadMapData = [
  {
    month: "March",
    year: 2022,
    content: (
      <>
        <span className="block">ISO Lending - Development</span>
        <span className="md:mt-2 block">Partnership Announcements</span>
        <span className="md:mt-2 block">Interoperability Testing</span>
      </>
    ),
  },
  {
    month: "April",
    year: 2022,
    content: (
      <>
        <span className="block">ISO Lending - Audit &amp; Testnet</span>
        <span className="md:mt-2 block">
          Leveraged Yield Farming - Development
        </span>
        <span className="md:mt-2 block">stADA - Development</span>
      </>
    ),
  },
  {
    month: "May",
    year: 2022,
    content: (
      <>
        <span className="block">ISO Lending - Launch</span>
        <span className="md:mt-2 block">
          Leveraged Yield Farming - Development
        </span>
        <span className="md:mt-2 block">Strategy Vaults - Development</span>
      </>
    ),
  },
  {
    month: "June",
    year: 2022,
    content: (
      <>
        <span className="block">Leveraged Yield Farming - Enter Audit</span>
        <span className="md:mt-2 block">Strategy Vaults - Development</span>
        <span className="md:mt-2 block">stADA - Enter Audit</span>
      </>
    ),
  },
  {
    month: "July",
    year: 2022,
    content: (
      <>
        <span className="block">Leveraged Yield Farming - Launch</span>
        <span className="md:mt-2 block">Strategy Vaults - Enter Audit</span>
        <span className="md:mt-2 block">stADA - Launch</span>
      </>
    ),
  },
  {
    month: "August",
    year: 2022,
    content: (
      <>
        <span className="block">Strategy Vaults - Launch</span>
        <span className="md:mt-2 block">
          V2 Leverage Yield Farming - Development
        </span>
      </>
    ),
  },
];
