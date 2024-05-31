import { Link } from "react-router-dom";
import { liItems } from "../../../json/liItemsForSkills";

const Skills = () => {
  const liClassName =
    "border border-slate-300 rounded-full p-1 flex items-center gap-1";
  return (
    <div>
      <ul className=" flex flex-wrap gap-2 py-3">
        {liItems.map((item) => (
          <li key={item.text} className={liClassName}>
            {item.icon}
            <Link to={item.url} target="_blank" className="text-sm">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
