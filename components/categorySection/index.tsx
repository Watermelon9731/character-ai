import { useEffect, useState } from "react";
import BodySection from "./bodySection";
import TitleSection from "./titleSection";

interface Props {
  title?: string;
}

export default function CategorySection({ title = "" }: Props) {
  const [selected, setSelected] = useState(1);

  return (
    <div className="mt-6">
      <TitleSection title={title} setSelected={setSelected} />
      <div className="mt-4">
        <BodySection selected={selected} />
      </div>
    </div>
  );
}
