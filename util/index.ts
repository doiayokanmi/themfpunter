export const links = [
  {
    title: "Home",
    linkto: "/",
  },
  {
    title: "Contact",
    linkto: "/contact",
  },
  {
    title: "About Us",
    linkto: "/about",
  },
  {
    title: "Become A VIP member",
    linkto: "/vip",
  },
];

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

export const tabs = [
  {
    title: "Yesterday",
    currentDate: yesterday.toISOString().split("T")[0],
  },
  {
    title: "Today",
    currentDate: today.toISOString().split("T")[0],
  },
  {
    title: "Tomorrow",
    currentDate: tomorrow.toISOString().split("T")[0],
  },
];

