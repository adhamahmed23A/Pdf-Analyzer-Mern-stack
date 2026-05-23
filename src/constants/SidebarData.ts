import {
  Sparkles,
  HelpCircle,
  Settings,
  MessageCircle,
  NotebookIcon,
} from "lucide-react";

export const SidebarData = {
  main: [
    {
      group: "Workspace",
      links: [
        {
          label: "Chat",
          href: "/chat",
          icon: MessageCircle,
          description: "Chat with your document",
        },
        {
          label: "AI Summary",
          href: "/summary",
          icon: Sparkles,
          description: "Auto summarize any PDF",
          badge: "New",
        },
        {
          label: "Notebooks",
          href: "/notebooks",
          icon: NotebookIcon,
          description: "Organize chats into notebooks",
        },
      ],
    },
  ],

  bottom: [
    {
      label: "Help & Docs",
      href: "/help",
      icon: HelpCircle,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ],
};
