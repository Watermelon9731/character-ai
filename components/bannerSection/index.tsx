/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BannerCard from "../bannerCard";
import BannerVideo from "./bannerVideo/bannerVideo";

interface Props {
  data: BannerData[];
}

export default function BannerSection({ data }: Props) {
  const [video, setVideo] = useState<BannerData>();

  useEffect(() => {
    if (!video && data.length !== 0) {
      setVideo(data[0]);
    } else if (video) {
      const id = Math.floor(Math.random() * 6);
      setTimeout(() => setVideo(data[id]), 3000);
    }
  }, [video]);

  return (
    <div className="w-full min-w-banner-section-w h-featured-section-h rounded-bl-section rounded-tl-section overflow-hidden relative">
      <div className="w-3/4 h-full relative rounded-bl-section rounded-tl-section overflow-hidden border-none">
      {video && <BannerVideo data={video} />}
      </div>
      <div className="bg-gradient-to-l from-[#f4f4f5] absolute shadow-sm top-0 opacity-1 w-3/4 h-full rounded-tl-section rounded-bl-section border-none" />
      <div className="bg-white absolute shadow-sm top-0 opacity-80 w-3/4 h-full rounded-tl-section rounded-bl-section border-none" />
      <div className="text-black absolute top-0 left-0 h-full w-full py-10 px-10">
        <h3>What do you want to do?</h3>
        <h2 className="text-[1.5rem] font-medium py-2">
          Epic challenges await
        </h2>
      </div>
      <div className="w-2/4 h-full absolute right-0 top-0">
        <div className="w-full h-full flex justify-end items-center gap-5">
          <BannerCard />
          <BannerCard />
        </div>
      </div>
    </div>
  );
}
