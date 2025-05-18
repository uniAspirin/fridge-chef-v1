import { Link } from "react-router-dom";
import MyButton from "../../../components/MyButton";

export default function LoginForm() {
  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputStyle =
    "border-1 px-2 border-stone-300 focus: outline-none h-10 rounded w-full";

  return (
    <form className="flex flex-col gap-2">
      <div>
        <label className="font-medium">Email</label>
        <input placeholder="enter your email" className={inputStyle} />
      </div>
      <div>
        <label className="font-medium">Password</label>
        <input placeholder="enter your password" className={inputStyle} />
      </div>

      <div className="flex flex-row items-center">
        <input type="checkbox" id="remember" className="size-4 mr-1" />
        <label htmlFor="remember" className="font-medium">
          {" "}
          Remember me
        </label>
      </div>
      <div className="absolute bottom-4 inset-x-0 px-4">
        <p className="font-semibold text-neutral-600 mb-1">
          Do not have an account yet?{" "}
          <Link
            to="/register"
            className="text-amber-500 hover:text-amber-600 transition"
          >
            Register
          </Link>
        </p>
        <MyButton onClick={onLogin}>Login</MyButton>
      </div>
    </form>
  );
}
