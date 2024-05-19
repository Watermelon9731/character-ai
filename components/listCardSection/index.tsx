import SectionBody from "./sectionBody";
import SectionTitle from "./sectionTitle";

interface Props {
  title?: string;
  data: Character[];
}

export default function ListCardSection({ title, data }: Props) {
  return (
    <div className="mt-6">
      <SectionTitle text={title} />
      <div className="mt-4">
        <SectionBody data={data} />
      </div>
    </div>
  );
}
