import {
  Home,
  Compass,
  TrendingUp,
  Film,
  Tv,
  CalendarClock,
  AudioWaveform,
} from "lucide-react";

export const NavLinks_Constants = {
  icon: AudioWaveform,
  navMain: [
    { title: "Home", url: "/", icon: Home },
    {
      title: "Explore",
      url: "/explore",
      icon: Compass,
    },
    {
      title: "Trending",
      url: "/trending",
      icon: TrendingUp,
    },
    {
      title: "Movies",
      url: "/movies",
      icon: Film,
    },
    {
      title: "TV Series",
      url: "/tv-series",
      icon: Tv,
    },
    {
      title: "Coming Soon",
      url: "/coming-soon",
      icon: CalendarClock,
    },
  ],
} as const;
