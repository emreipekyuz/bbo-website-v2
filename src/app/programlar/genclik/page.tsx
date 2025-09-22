import ProjectCard from "@/components/ProjectCard";

export default function GenclikKomitesiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Başlık ve Açıklama */}
      <h1 className="text-3xl font-bold text-sky-800 mb-4">
        Gençlik Komitesi
      </h1>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Gençlik Komitesi, gençlerin bir araya gelerek projeler geliştirdiği,
        gönüllülüğü ve aktif yurttaşlığı deneyimlediği bir alandır.
      </p>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard
          title="Proje 1"
          description="Bu alana proje hakkında kısa açıklama yazılacak."
          imageUrl="/images/proje1.jpg"
        />
        <ProjectCard
          title="Proje 2"
          description="Bu alana proje hakkında kısa açıklama yazılacak."
          imageUrl="/images/proje2.jpg"
        />
        <ProjectCard
          title="Proje 3"
          description="Bu alana proje hakkında kısa açıklama yazılacak."
          imageUrl="/images/proje3.jpg"
        />
        <ProjectCard
          title="Proje 4"
          description="Bu alana proje hakkında kısa açıklama yazılacak."
          imageUrl="/images/proje4.jpg"
        />
      </div>
    </div>
  );
}
