import { href, NavLink } from "react-router-dom";

export default function NavBar() {
  const navigation = [
    { name: "login", href: "/login" },
    { name: "register", href: "/register" },
    { name: "todo-list", href: "/todo-list" },
    { name: "explore", href: "/explore" },
    { name: "detail", href: "/detail" },
  ];

  return (
    <div className="flex flex-row w-full justify-around absolute bottom-2">
      {navigation.map((item) => (
        <NavLink key={item.name} to={item.href} className="bg-neutral-300">
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}
