import TeamCard from "@/components/TeamCard";

export const metadata = {
  title: "Ekibimiz | Bir Bulut Olsam Derneği",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">{children}</h2>
      <div className="mt-2 h-[2px] w-16 bg-blue-400 rounded"></div>
    </div>
  );
}

export default function EkibimizPage() {
  return (
    <div className="bg-[#0e0f12] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold">Ekibimiz</h1>

        {/* Kurucu */}
        <section className="mt-10">
          <SectionTitle>Kurucu</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TeamCard name="Emre İpekyüz" role="Kurucu" src="/team/founder.jpg" />
          </div>
        </section>

        {/* Yönetim Kurulu */}
        <section className="mt-16">
          <SectionTitle>Yönetim Kurulu</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <TeamCard name="Elif Yılmaz" role="Başkan" />
            <TeamCard name="Mert Demir" role="Başkan Yardımcısı" />
            <TeamCard name="Zeynep Karaca" role="Genel Sekreter" />
            <TeamCard name="Barış Yıldız" role="Sayman" />
            <TeamCard name="Deniz Öztürk" role="Üye" />
          </div>
        </section>

        {/* Proje Koordinatörleri */}
        <section className="mt-16">
          <SectionTitle>Proje Koordinatörleri</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TeamCard name="Selin Korkmaz" role="Proje Koordinatörü" />
            <TeamCard name="Ali Çelik" role="Proje Koordinatörü" />
          </div>
        </section>

        {/* Komite Koordinatörleri */}
        <section className="mt-16">
          <SectionTitle>Komite Koordinatörleri</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TeamCard name="Ayşe Akın" role="Gençlik Komitesi Koordinatörü" />
            <TeamCard name="Mehmet Ersoy" role="Eşitlik Komitesi Koordinatörü" />
            <TeamCard name="Buse Kaplan" role="Kültür Sanat Komitesi Koordinatörü" />
          </div>
        </section>
      </div>
    </div>
  );
}
