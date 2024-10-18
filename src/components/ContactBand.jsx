import { twMerge } from "tailwind-merge";
const iconsList = [
  {
    icon: <i className="fa-brands fa-facebook-f fa-2x"></i>,
    unique: "bg-blue-800 dark:bg-blue-600 text-white",
  },
  {
    icon: <i className="fa-brands fa-github fa-2x"></i>,
    unique: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    icon: <i className="fa-brands fa-instagram fa-2x"></i>,
    unique: "bg-pink-600 dark:bg-pink-500 text-white",
  },
];

function ContactBand() {
  return (
    <div className={twMerge("h-full w-full", "flex items-center justify-end")}>
      {iconsList.map((e, i) => (
        <div
          key={i}
          className={twMerge(
            "h-12 w-16",
            "flex items-center justify-center",
            "transition-all duration-500",
            e.unique,
          )}
        >
          {e.icon}
        </div>
      ))}
    </div>
  );
}

export default ContactBand;
