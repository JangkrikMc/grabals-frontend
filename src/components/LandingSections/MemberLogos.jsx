import React from "react";
import LogoLoop from "../../assets/ReactBitsCompo/LogoLoop";
import ShinyText from "../../assets/ReactBitsCompo/ShinyText";

const MemberLogos = ({ refs, imageLogos, photosLoading, imagesLoaded }) => {
  const { Elemen11 } = refs;

  return (
    <div ref={Elemen11} className="mt-12 sm:mt-20 items-center shadow-lg grid grid-cols-1 sm:grid-cols-[40%_60%] gap-4 sm:gap-0">
      <div className="h-20 flex items-center justify-center">
        <ShinyText
          text="Member"
          speed={10}
          className="text-neutral-600 text-lg font-bold"
        />
      </div>

      <div className="mt-8" style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
        {photosLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-500"></div>
              <span className="text-sm">Memuat foto member... ({imagesLoaded}/{imageLogos?.length || 0})</span>
            </div>
          </div>
        ) : (
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
            ariaLabel="Member photos"
          />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default MemberLogos;