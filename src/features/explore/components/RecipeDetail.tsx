import TodoList from "../../todo/TodoList";
import { List } from "../../../types";

export default function RecipeDetail() {
  const testList: List = {
    id: "test",
    user_id: "brian",
    name: "Sherry Monkfish",
  };
  return (
    <div className="">
      <h3 className="font-semibold text-xl mb-1">Shelly Monkfish</h3>
    </div>
  );
}
