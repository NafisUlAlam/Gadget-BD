import { NavLink, useLoaderData } from "react-router-dom";

const Sidebar = () => {
  const categeories = useLoaderData();
  //console.log(categeories);
  return (
    <div className="flex flex-wrap md:flex-col gap-4  p-4 mb-4 md:mb-0 md:w-[20%] flex-grow-0 flex-shrink-0">
      {categeories &&
        categeories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#9538E2] text-white rounded-full px-4 py-2 hover:bg-[#7327b1] hover:text-white text-center shadow-lg outline outline-[#9538E2]"
                : "bg-white text-black px-4 py-2 hover:bg-[#7327b1] hover:text-white rounded-full outline outline-[#9538E2]"
            }
            key={category.id}
            to={`/category/${category.name}`}
          >
            <button className="  rounded-full bg-transparent  font-bold">
              {category.name}
            </button>
          </NavLink>
        ))}
    </div>
  );
};

export default Sidebar;
