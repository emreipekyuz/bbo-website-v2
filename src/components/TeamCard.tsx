"use client";
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  src?: string; // opsiyonel: boş bırakılırsa placeholder görünür
};

export default function TeamCard({ name, role, src }: Props) {
  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-700/60 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-2">
        {/* Fotoğraf varsa göster, yoksa placeholder */}
        <div className="rounded-lg overflow-hidden border border-slate-600/60 bg-slate-800">
          {src ? (
            <Image
              src={src}
              alt={name}
              width={600}
              height={750}
              className="w-full h-72 object-cover"
            />
          ) : (
            <div className="w-full h-72 flex items-center justify-center text-slate-500 text-sm">
              Fotoğraf Yok
            </div>
          )}
        </div>

        {/* İsim & Rol */}
        <div className="px-3 pt-3 pb-4">
          <div className="font-semibold text-white leading-tight">{name}</div>
          <div className="mt-1 text-[11px] tracking-wide uppercase text-slate-300">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}
