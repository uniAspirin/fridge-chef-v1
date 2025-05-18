export default function MyButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 rounded h-10 w-full text-white font-bold hover:bg-amber-600 transition"
    >
      {children}
    </button>
  );
}
