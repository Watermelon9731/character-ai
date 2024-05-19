import BannerSection from "@/components/bannerSection";
import ListCardSection from "@/components/listCardSection";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface Props {
  banner: BannerData[];
  characterList: Character[];
}

export default function Home({ banner, characterList }: Props) {
  return (
    <main className="max-w-7xl md:max-w-6xl py-10 px-5 flex justify-center">
      <div className="w-full overflow-hidden">
        <BannerSection data={banner} />
        <ListCardSection data={characterList} title="For you" />
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data for Banner
  const bannerRes = await fetch("http://localhost:3000/api/banner");
  const banner = await bannerRes.json();

  // Fetch data for Character Card List
  const characterListRes = await fetch("http://localhost:3000/api/suggestion");
  const characterList = await characterListRes.json();

  return { props: { banner, characterList } };
};
