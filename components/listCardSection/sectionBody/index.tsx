import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { shortenNumber } from "@/utils/helper/number";

interface Props {
  data: Character[];
}

export default function SectionBody({ data }: Props) {
  return (
    <div className="h-list-card-h">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="listCardSwiper"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 h-full w-list-card-w flex gap-4 bg-surface rounded-[16px]">
              <div className="min-w-[90px] max-w-[90px] flex rounded-img overflow-hidden">
                <Image
                  width={90}
                  height={114}
                  src={`https://characterai.io/i/200/static/avatars/${item.avatar_file_name}`}
                  alt=""
                />
              </div>
              <div className="w-full h-full text-left flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs font-normal text-gray-500">
                    By @{item.user__username}
                  </p>
                  <p className="text-xs font-normal text-gray-500">
                    {item.title}
                  </p>
                </div>
                <div className="flex">
                  {item.participant__num_interactions &&
                    item.participant__num_interactions > 0 && (
                      <>
                        <div></div>
                        <p className="text-xs text-gray-500">
                          {shortenNumber(item.participant__num_interactions, 2)}
                        </p>
                      </>
                    )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
