import Image from "next/image";

export const metadata = {
  title: "İş Birliklerimiz | Bir Bulut Olsam Derneği",
};

type Partner = {
  name: string;
  logo: string; // public/partners/... altında olacak
  url: string;
};

const projectPartners: Partner[] = [
  { name: "Nilüfer Belediyesi", logo: "/partners/nilufer.png", url: "#" },
  { name: "Uludağ Üniversitesi", logo: "/partners/uludag.png", url: "#" },
  { name: "Bir STK", logo: "/partners/stk.png", url: "#" },
  { name: "Bir Şirket", logo: "/partners/company.png", url: "#" },
];

const internationalPartners: Partner[] = [
  { name: "UNICEF", logo: "/partners/unicef.png", url: "#" },
  { name: "UN Women", logo: "/partners/unwomen.png", url: "#" },
  { name: "Google", logo: "/partners/google.png", url: "#" },
  { name: "OECD", logo: "/partners/oecd.png", url: "#" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">{children}</h2>
      <div className="mt-2 h-[2px] w-20 bg-blue-400 rounded"></div>
    </div>
  );
}

export default function IsBirliklerimizPage() {
  return (
    <div className="bg-[#0e0f12] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold">İş Birliklerimiz</h1>
        <div className="mt-2 h-[2px] w-24 bg-blue-400 rounded"></div>

        {/* Proje Ortakları */}
        <section className="mt-12">
          <SectionTitle>Proje Ortakları</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {projectPartners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={200}
                  height={80}
                  className="object-contain max-h-14 w-auto"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Uluslararası Partnerler */}
        <section className="mt-16">
          <SectionTitle>Uluslararası Partnerler</SectionTitle>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {internationalPartners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white rounded-lg p-4 hover:scale-105 transition"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={200}
                  height={80}
                  className="object-contain max-h-14 w-auto"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
