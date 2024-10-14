import { twMerge } from "tailwind-merge";
const iconsList = [
  {
    icon: <i className="fa-brands fa-facebook-f fa-2x"></i>,
    bgColor: "bg-accent-500",
  },
  {
    icon: <i className="fa-brands fa-github fa-2x"></i>,
    bgColor: "bg-purple-500",
  },
  {
    icon: <i className="fa-brands fa-instagram fa-2x"></i>,
    bgColor: "bg-pink-500",
  },
];

function ContactBand() {
  return (
    <div className={twMerge("h-full w-full", "flex items-center justify-end")}>
      {iconsList.map((e, i) => (
        <div
          key={i}
          className={twMerge(
            "text-complementary-100",
            "h-12 w-16",
            "flex items-center justify-center",
            e.bgColor,
          )}
        >
          {e.icon}
        </div>
      ))}
    </div>
  );
}

export default ContactBand;
