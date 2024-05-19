/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function BannerCard() {
  return (
    <div className="min-w-banner-card-w h-banner-card-h bg-[#c8c8cf] rounded-card text-black p-4 overflow-hidden">
      <div className="flex-col h-full justify-between overflow-hidden">
        <div className="flex gap-5 h-1/4 w-full">
          <div className="rounded-full h-[48px] w-[48px] overflow-hidden">
            <Image
              width={48}
              height={48}
              src="https://characterai.io/i/80/static/avatars/uploaded/2024/2/17/U_XA0s10BiAyh4EB0qXcxW5ysVLk8WwW-Mu005m_NmM.webp?webp=true&anim=0"
              alt="user-avatar"
            />
          </div>
          <p>Eddie explain</p>
        </div>

        <div className="w-full h-2/4 overflow-hidden">
          <p className="text-ellipsis overflow-hidden">
            Hi there! I'm Eddie, but around here, I'm better known as Eddie
            Explains. You know those tricky topics that tie your brain in knots?
            Well, I'm your guy for untangling them. . So, what's on your mind
            today? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur repudiandae commodi illum minima voluptate dolorum
            deleniti, fugiat dicta quisquam, a, consequuntur odit eligendi
            provident at modi sit quasi nam culpa!
          </p>
        </div>

        <div className="w-full h-1/4 flex items-end">
          <p>Reply...</p>
        </div>
      </div>
    </div>
  );
}
