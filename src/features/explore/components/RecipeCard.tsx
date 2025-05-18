import { Heart } from "lucide-react";
import foodImg from "../../../assets/IMG_8294.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard() {
  const [isLiked, setIsLiked] = useState<boolean>(false); // initial value should be changed later
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <img
        src={foodImg}
        loading="lazy"
        className="w-full rounded-2xl cursor-pointer transition duration-250 hover:brightness-75"
        onClick={() => navigate("/detail")}
      />
      <div className="px-2 my-2">
        <p className="text-sm">Sherry Monkfish</p>
        <div className="flex flex-row justify-between w-full text-sm text-neutral-500">
          <p className="hover:text-neutral-700 cursor-pointer">Brian</p>
          <button
            className={`flex flex-row items-center cursor-pointer ${
              isLiked && "text-red-500"
            }`}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <Heart
              size={18}
              fill={isLiked ? "currentColor" : "none"}
              className="mr-1"
            />
            <p className="text-neutral-500">2634</p>
          </button>
        </div>
      </div>
    </div>
  );
}
