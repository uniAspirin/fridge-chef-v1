import RecipeCard from "./RecipeCard";

export default function RecipeGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2 overflow-y-auto h-full">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
