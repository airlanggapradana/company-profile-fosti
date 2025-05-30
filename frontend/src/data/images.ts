import { ImageType } from "../types/image";
import foto1 from "../../public/DSC03502.webp";
import foto2 from "../../public/20250308_124553.webp";
import foto3 from "../../public/IMG_6051.webp";
import foto5 from "../../public/DSC00076.webp";
import foto6 from "../../public/IMG_4585.webp";
import foto7 from "../../public/IMG_4630.webp";

export const images: ImageType[] = [
  {
    src: foto3,
    width: 1000,
    height: 1000,
    alt: "Large group photo",
    title: "FOSTISIDA",
    description: "Event that brings joyful memories and togetherness",
  },
  {
    src: foto1,
    width: 1000,
    height: 1000,
    alt: "Diverse group",
    title: "Community Event",
    description: "Diverse group of people at tech event",
  },
  {
    src: foto6,
    width: 1000,
    height: 1000,
    alt: "Small team meeting",
    title: "FOSTICLASS",
    description: "By developers for developers, a journey of growth",
  },
  {
    src: foto7,
    width: 1000,
    height: 1000,
    alt: "Conference presentation",
    title: "Workshop",
    description: "Workshop on various topics with hands-on experience",
  },
  {
    src: foto2,
    width: 1000,
    height: 1000,
    alt: "Group photo",
    title: "Training of Trainers",
    description: "Program to train trainers and mentors for future events",
  },
  {
    src: foto5,
    width: 1000,
    height: 1000,
    alt: "Team celebration",
    title: "Open Recruitment",
    description: "Getting to know about the organization and its visions",
  },
];
