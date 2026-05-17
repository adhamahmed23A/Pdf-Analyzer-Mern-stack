import {
  BookOpen,
  History,
  HomeIcon,
  MessageSquare,
  Upload,
} from "lucide-react";
import { IconBrandFacebook, IconBrandGithub } from "@tabler/icons-react";
export const HeaderData = {
  AnnouncementAuthor: "Adham Ahmed",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/adhamahmed23A",
      icon: IconBrandGithub,
      color: "black",
    },
    {
      label: "Facebook",
      href: "https://facebook.com/",
      icon: IconBrandFacebook,
      color: "#3852b4",
    },
  ],
  navigation: [
    {
      label: "Home",
      href: "/",
      icon: HomeIcon,
    },

    {
      label: "Upload",
      href: "/upload",
      icon: Upload,
      description: "Upload a new PDF",
    },
    {
      label: "Chat",
      href: "/chat",
      icon: MessageSquare,
      description: "Chat with your document",
    },
    {
      label: "History",
      href: "/history",
      icon: History,
      description: "Your past conversations",
    },
    {
      label: "Docs",
      href: "/docs",
      icon: BookOpen,
      description: "How to use DocuMind",
    },
  ],
};
