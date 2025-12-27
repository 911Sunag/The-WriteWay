import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkSel = ({ isActive }: { isActive: boolean }) =>
    `relative pb-1 transition ${
      isActive
        ? "text-pink-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-400"
        : "text-black"
    }`;

  return (
    <section className="flex flex-col items-center justify-center gap-8 p-5">
      <h1 className="font-Playwrite text-4xl font-bold selection:bg-pink-400">
        The WriteWay
      </h1>

      <nav className="flex justify-between  w-full text-xl font-nunpara font-semibold">
        <NavLink to="/" className={linkSel}>
          Lifestyle
        </NavLink>
        <NavLink to="/business" className={linkSel}>
          Business
        </NavLink>
        <NavLink to="/culture" className={linkSel}>
          Culture
        </NavLink>
        <NavLink to="/fashion" className={linkSel}>
          Fashion
        </NavLink>
        <NavLink to="/opinion" className={linkSel}>
          Opinion
        </NavLink>
        <NavLink to="/sports" className={linkSel}>
          Sports
        </NavLink>
        <NavLink to="/tech" className={linkSel}>
          Tech
        </NavLink>
        <NavLink to="/world" className={linkSel}>
          World
        </NavLink>
      </nav>
    </section>
  );
};

export default NavBar;
