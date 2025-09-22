"use client";
import { useState } from "react";

type TeamCardProps = {
  name: string;
  role: string;
  src?: string;
};

export default function TeamCard({ name, role, src }: TeamCardProps) {
  const [imgSrc, setImgSrc] = useState(src || "/team/default.png");

  return (
    <div className="bg-white text-black rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      {/* Fotoğraf */}
      <div className="w-full h-48 bg-gray-200">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImgSrc("/team/default.png")}
        />
      </div>

      {/* İsim ve Rol */}
      <div className="p-4 flex-grow flex flex-col items-center text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
