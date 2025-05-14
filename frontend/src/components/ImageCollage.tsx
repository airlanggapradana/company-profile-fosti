"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import ImageCard from "./ImageCard";
import { images } from "../data/images";

const ImageCollage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid auto-rows-[200px] grid-cols-12 gap-4">
        {/* Large image on the left */}
        <div className="col-span-12 row-span-2 md:col-span-6">
          <ImageCard image={images[0]!} className="h-full" />
        </div>

        {/* Top right large image */}
        <div className="col-span-12 md:col-span-6">
          <ImageCard image={images[1]!} className="h-full" />
        </div>

        {/* Two small images on the right */}
        <div className="col-span-12 md:col-span-6">
          <ImageCard image={images[2]!} className="h-full" />
        </div>
        {/* <div className="col-span-6 md:col-span-3">
          <ImageCard image={images[3]!} className="h-full" />
        </div> */}

        {/* Bottom two images */}
        <div className="col-span-12 md:col-span-6">
          <ImageCard image={images[4]!} className="h-full" />
        </div>
        <div className="col-span-12 md:col-span-6">
          <ImageCard image={images[5]!} className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
