import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "İletişim | Bir Bulut Olsam Derneği",
};

export default function IletisimPage() {
  return (
    <div className="bg-[#0e0f12] text-white">
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold">Bizimle İletişime Geçin</h1>
        <div className="mt-2 h-[2px] w-24 bg-blue-400 rounded"></div>

        <p className="text-gray-300 mt-6 max-w-2xl">
          Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Ekibimiz en kısa sürede dönüş yapacaktır.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
