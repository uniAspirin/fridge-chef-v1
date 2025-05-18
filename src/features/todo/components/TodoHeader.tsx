import { ChevronDown } from "lucide-react";

export default function TodoHeader({ name, isExpanded, toggleExpanded }) {
  return (
    <div className="flex flex-row justify-between">
      <p className="font-bold text-2xl mb-2">{name}</p>
      <button onClick={toggleExpanded}>
        <ChevronDown
          className={`transform transition-transform ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
    </div>
  );
}
