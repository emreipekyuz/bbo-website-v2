"use client";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-slate-200">
      <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-sky-700 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
