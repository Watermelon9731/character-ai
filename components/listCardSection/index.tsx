import SectionBody from "./bodySection";
import SectionTitle from "./titleSection";

interface Props {
  title?: string;
  data: Character[];
}

export default function ListCardSection({ title, data }: Props) {
  return (
    <div className="mt-6 max-lg:mt-0">
      <SectionTitle text={title} />
      <div className="mt-4">
        <SectionBody data={data} />
      </div>
    </div>
  );
}
