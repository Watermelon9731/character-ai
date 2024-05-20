import useFetch from "@/hooks/useFetch";
import { shortenNumber } from "@/utils/helper/number";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  selected: number;
}

export default function BodySection({ selected = 1 }: Props) {
  const [list, setList] = useState([]);

  const getCategoryContent = async () => {
    const res = await fetch(`/api/category?cate=${selected}`);
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    if (!selected) return;
    getCategoryContent();
  }, [selected]);

  return (
    <div className="h-list-card-h">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        className="listCardSwiper"
      >
        {list &&
          list.length > 0 &&
          list.map((item: CategoryContent, idx) => {
            if (item.data.length === 0) return <></>;
            return item.data.map((char, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-4 h-full w-list-card-w flex gap-4 bg-surface rounded-[16px]">
                  <div className="min-w-[90px] max-w-[90px] flex rounded-img overflow-hidden">
                    <Image
                      width={90}
                      height={114}
                      src={`https://characterai.io/i/200/static/avatars/${char.avatar_file_name}`}
                      alt=""
                    />
                  </div>
                  <div className="w-full h-full text-left flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs font-normal text-gray-500">
                        By @{char.user__username}
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        {char.title}
                      </p>
                    </div>
                    <div className="flex">
                      {char.participant__num_interactions &&
                        char.participant__num_interactions > 0 && (
                          <>
                            <div></div>
                            <p className="text-xs text-gray-500">
                              {shortenNumber(
                                char.participant__num_interactions,
                                2
                              )}
                            </p>
                          </>
                        )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ));
          })}
      </Swiper>
    </div>
  );
}
