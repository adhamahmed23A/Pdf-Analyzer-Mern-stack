import {
  BookOpen,
  History,
  HomeIcon,
  MessageSquare,
  Upload,
} from "lucide-react";

export const HeaderData = {
  AnnouncementAuthor: "Adham Ahmed",

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
