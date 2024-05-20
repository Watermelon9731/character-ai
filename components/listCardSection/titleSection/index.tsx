interface Props {
  text?: string;
}

export default function SectionTitle({ text = "" }: Props) {
  return (
    <div className="text-black px-5 max-lg:px-2">
      <h2 className="font-medium">{text}</h2>
    </div>
  );
}
