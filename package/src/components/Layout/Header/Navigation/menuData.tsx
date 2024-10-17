import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Causes",
    href: "#",
    submenu: [
      { label: "Cause List", href: "/cause" },
      { label: "Cause Details", href: "/cause/cause-1" },
    ],
  },
  {
    label: "Events",
    href: "#",
    submenu: [
      { label: "Events List", href: "/events" },
      { label: "Events Details", href: "/events/event-1" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "#" },
  { label: "Contact", href: "/contact" },
];
