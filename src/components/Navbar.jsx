import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Viraj Dhaigude</h1>

      <div className="flex gap-6">
        {["/", "/about", "/skills", "/projects", "/certifications", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Skills", "Projects", "Certifications", "Contact"];
          return (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "hover:text-blue-400"
              }
            >
              {names[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}