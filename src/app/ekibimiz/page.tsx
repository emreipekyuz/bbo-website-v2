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

        {/* Yönetim Kurulu */}
        <section className="mt-10">
          <SectionTitle>Yönetim Kurulu</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <TeamCard name="Emre İpekyüz" role="Yönetim Kurulu Üyesi" src="/team/emre-ipekyuz.jpg" />
            <TeamCard name="Musa İpekten" role="Yönetim Kurulu Üyesi" src="/team/musa-ipekten.jpg" />
            <TeamCard name="Yağmur Akın" role="Yönetim Kurulu Üyesi" src="/team/yagmur-akin.jpg" />
            <TeamCard name="Maysa Ünal" role="Yönetim Kurulu Üyesi" src="/team/maysa-unal.jpg" />
            <TeamCard name="Nilsu Uysal" role="Yönetim Kurulu Üyesi" src="/team/nilsu-uysal.jpg" />
            <TeamCard name="Gülsu Erdan" role="Yönetim Kurulu Üyesi" src="/team/gulsu-erdan.jpg" />
            <TeamCard name="Aleyna Koldaş" role="Yönetim Kurulu Üyesi" src="/team/aleyna-koldas.jpg" />
            <TeamCard name="Zeynep İshakoğlu" role="Yönetim Kurulu Üyesi" src="/team/zeynep-ishakoglu.jpg" />
            <TeamCard name="Gülbahar Yüceyüksel" role="Yönetim Kurulu Üyesi" src="/team/gulbahar-yuceyuksel.jpg" />
            <TeamCard name="Zeynep Sunay" role="Yönetim Kurulu Üyesi" src="/team/zeynep-sunay.jpg" />
          </div>
        </section>

        {/* Komite Koordinatörleri */}
        <section className="mt-16">
          <SectionTitle>Komite Koordinatörleri</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Eşitlik */}
            <TeamCard name="Yağmur Akın" role="Eşitlik Komitesi Koordinatörü" />
            <TeamCard name="Zeynep Sunay" role="Eşitlik Komitesi Koordinatörü" />

            {/* Gençlik */}
            <TeamCard name="Zehra Melek Tonka" role="Gençlik Komitesi Koordinatörü" />
            <TeamCard name="Ayşegül Sağdıç" role="Gençlik Komitesi Koordinatörü" />
            <TeamCard name="Nilsu Uysal" role="Gençlik Komitesi Koordinatörü" />

            {/* Kültür Sanat */}
            <TeamCard name="Maysa Ünal" role="Kültür Sanat Komitesi Koordinatörü" />
            <TeamCard name="Kübra Rüya Yıldırım" role="Kültür Sanat Komitesi Koordinatörü" />
            <TeamCard name="Kardelen Kopmaz" role="Kültür Sanat Komitesi Koordinatörü" />
            <TeamCard name="İpek Bayık" role="Kültür Sanat Komitesi Koordinatörü" />
            <TeamCard name="Gülbahar Yüceyüksel" role="Kültür Sanat Komitesi Koordinatörü" />

            {/* Sosyal Etki */}
            <TeamCard name="Esra Gül Arslan" role="Sosyal Etki Komitesi Koordinatörü" />
            <TeamCard name="Gözde Nur Kılınç" role="Sosyal Etki Komitesi Koordinatörü" />
            <TeamCard name="Umut Eylül Alan" role="Sosyal Etki Komitesi Koordinatörü" />
            <TeamCard name="Gülsu Erdan" role="Sosyal Etki Komitesi Koordinatörü" />
            <TeamCard name="Aleyna Koldaş" role="Sosyal Etki Komitesi Koordinatörü" />

            {/* Boş slotlar */}
            {Array.from({ length: 5 }).map((_, i) => (
              <TeamCard key={i} name={`Komite Koordinatörü ${i + 16}`} role="Koordinatör" />
            ))}
          </div>
        </section>

        {/* Nilüfer Gençlik Programı */}
        <section className="mt-16">
          <SectionTitle>Nilüfer Gençlik Programı</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <TeamCard name="Melsa Bedir" role="Program Koordinatörü" src="/team/melsa-bedir.jpg" />
            <TeamCard name="Emre İpekyüz" role="Program Koordinatörü" src="/team/emre-ipekyuz.jpg" />
            <TeamCard name="Nehir Naz Yılmaz" role="Proje Koordinatörü" />
            <TeamCard name="Şevval Güleç" role="Proje Koordinatörü" />
            <TeamCard name="Beyza Kaya" role="Proje Koordinatörü" />
            <TeamCard name="Dilek Öncü" role="Proje Koordinatörü" />
            <TeamCard name="Nazrin Sanani" role="Proje Koordinatörü" />
          </div>
        </section>
      </div>
    </div>
  );
}
