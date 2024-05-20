import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  title?: string;
  setSelected: (value: number) => void;
}

export default function TitleSection({ title = "", setSelected }: Props) {
  const { data } = useFetch<CategoryTitle[]>("/api/category-title-list");
  const [category, setCategory] = useState(1);

  const handleSelect = (id: number) => {
    if (id < 1) return;
    setCategory(id);
    setSelected(id);
  };

  return (
    <>
      <div className="text-black px-5">
        <h2 className="font-medium">{title}</h2>
      </div>
      <div className="h-category-title-h">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          className="listTitleSwiper"
        >
          {data &&
            data.map((item, idx) => (
              <SwiperSlide key={idx} onClick={() => handleSelect(item.id)}>
                {category === item.id ? (
                  <div className="p-2 px-4 h-full w-fit flex items-center rounded-[16px] text-white text-sm font-medium bg-black cursor-pointer capitalize">
                    {item.name}
                  </div>
                ) : (
                  <div className="p-2 px-4 h-full w-fit flex items-center rounded-[16px] text-black text-sm font-medium bg-surface cursor-pointer capitalize">
                    {item.name}
                  </div>
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
