import { useForm } from "react-hook-form";
import { z } from "zod";
import MyButton from "../../../components/MyButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

// interface RegisterFormData {
//   email: string;
//   username: string;
//   password: string;
// }

const registerSchema = z.object({
  email: z.string().email("Please enter valid email address"),
  username: z
    .string()
    .regex(
      /^[a-zA-Z0-9_]{4,}$/,
      "User name can only include letters, numbers and underline and must be at least 4 letters long"
    ),
  password: z.string().min(8, "Password must be at least 8 letters long"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  const inputStyle =
    "border-1 px-2 border-stone-300 focus: outline-none h-10 rounded w-full";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div>
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="email address"
          className={inputStyle}
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="username" className="font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="username"
          className={inputStyle}
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className={inputStyle}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="absolute bottom-4 inset-x-0 px-4">
        <p className="font-semibold text-neutral-600 mb-1">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-500 hover:text-amber-600 transition"
          >
            Login
          </Link>
        </p>
        <MyButton onClick={handleSubmit(onSubmit)}>Register</MyButton>
      </div>
    </form>
  );
}
