import ProjectCard from "@/components/ProjectCard";

export default function KulturSanatKomitesiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-sky-800 mb-4">
        Kültür-Sanat Komitesi
      </h1>
      <p className="text-slate-700 mb-8 leading-relaxed">
        Kültür-Sanat Komitesi, sanat ve kültür yoluyla gençlerin ifade
        özgürlüklerini geliştirmeyi, üretimlerini görünür kılmayı ve birlikte
        öğrenmeyi hedefler.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard title="Proje 1" description="Açıklama" imageUrl="/images/proje1.jpg" />
        <ProjectCard title="Proje 2" description="Açıklama" imageUrl="/images/proje2.jpg" />
        <ProjectCard title="Proje 3" description="Açıklama" imageUrl="/images/proje3.jpg" />
        <ProjectCard title="Proje 4" description="Açıklama" imageUrl="/images/proje4.jpg" />
      </div>
    </div>
  );
}
