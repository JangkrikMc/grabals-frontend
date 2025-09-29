import React from "react";
import LogoLoop from "../../assets/ReactBitsCompo/LogoLoop";
import ShinyText from "../../assets/ReactBitsCompo/ShinyText";

const MemberLogos = ({ refs, imageLogos }) => {
  const { Elemen11 } = refs;

  return (
    <div ref={Elemen11} className="mt-20 items-center shadow-lg grid grid-cols-[40%_60%]">
      <div className="h-20 flex items-center justify-center">
        <ShinyText
          text="Member"
          speed={10}
          className="text-neutral-600 text-lg font-bold"
        />
      </div>

      <div className="mt-8" style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={imageLogos}
          speed={150}
          direction="left"
          logoHeight={48}
          gap={50}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#151414ff"
          ariaLabel="Technology partners"
        />
      </div>
      <div></div>
    </div>
  );
};

export default MemberLogos;