import { Check, X } from "lucide-react";

interface TodoFilterProps {
  filter: string;
  setFilter: (text: string) => void;
}

export default function TodoFilter({ filter, setFilter }: TodoFilterProps) {
  const style: string =
    "px-2 rounded transition duration-175 flex-1 flex justify-center";
  const styleHovered: string =
    "bg-neutral-200 px-2 rounded transition duration-175 flex-1 flex justify-center";

  return (
    <div className="flex flex-row w-full justify-between">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? styleHovered : style}
      >
        <span className="font-medium">All</span>
      </button>
      <button
        onClick={() => setFilter("done")}
        className={filter === "done" ? styleHovered : style}
      >
        <Check />
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? styleHovered : style}
      >
        <X />
      </button>
    </div>
  );
}
