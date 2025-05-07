import { StaticImageData } from "next/image";

export interface ImageType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  description?: string;
}

export interface ProgramType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  title: string;
  description: string;
}

export interface TeamType {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  role: string;
  name: string;
}
