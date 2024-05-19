interface Props {
  data?: BannerData;
}

export default function BannerVideo({ data }: Props) {
  return (
    
      <video
        key={data?.id}
        controls
        autoPlay
        muted
        loop
        className="w-full absolute -top-30"
      >
        <source src={data ? data.url : ""} type="video/mp4" />
      </video>
    
  );
}
