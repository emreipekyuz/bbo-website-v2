export default function HakkimizdaPage() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Üst Tanıtım Metni */}
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-blue-400">Bir Bulut Olsam Derneği</h1>
        
        {/* Giriş Metni */}
        <p className="mt-6 text-lg leading-relaxed text-gray-200 text-left">
          <strong>Bir Bulut Olsam Derneği</strong>, gençler tarafından kurulmuş ve gençler tarafından
          yönetilen bir sivil toplum örgütüdür. 2024 yılında Bursa’da doğan bu girişim, kısa sürede
          yerel topluluklardan ulusal ve uluslararası gençlik ağlarına uzanan güçlü bir etki yaratmıştır.
          Dernek, toplumsal cinsiyet eşitliği, gençlik katılımı, kapsayıcılık, eğitim ve sosyal etki
          odaklı projeler geliştirerek gençlerin hem bireysel hem de toplumsal potansiyellerini
          açığa çıkarmayı hedefler.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-200 text-left">
          Amacımız; gençlerin yalnızca geleceğin liderleri değil, bugünün toplumsal dönüşüm aktörleri
          olabileceğini göstermek ve onların sesini görünür kılmaktır. Bir Bulut Olsam Derneği, 
          gençlerin karar alma süreçlerine aktif olarak katılabileceği, üretimlerini paylaşabileceği 
          ve dayanışma içerisinde yeni fikirler geliştirebileceği bir ekosistem kurar. 
          Eğitim, atölye çalışmaları, gönüllülük programları ve oyunlaştırılmış öğrenme araçlarıyla 
          gençlerin farklı alanlarda güçlenmesini sağlarız.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-200 text-left">
          Derneğimiz, yerel yönetimler, üniversiteler, gençlik meclisleri ve uluslararası kurumlarla 
          iş birlikleri kurarak gençlerin hem yerelde hem küreselde kendilerini ifade etmelerini 
          destekler. Bir Bulut Olsam Derneği; eşitlikçi, kapsayıcı ve sürdürülebilir bir gençlik 
          hareketi yaratmayı amaçlayan bir platformdur. 
        </p>

        {/* Misyon & Vizyon */}
        <h2 className="mt-10 text-2xl font-semibold text-blue-400 text-left">Misyonumuz</h2>
        <p className="mt-3 text-lg leading-relaxed text-gray-200 text-left">
          Gençlerin yaratıcılığını destekleyen, toplumsal cinsiyet eşitliğini güçlendiren, 
          kapsayıcı ve yenilikçi projelerle gençlerin aktif yurttaşlık becerilerini geliştirmelerini 
          sağlamak. Derneğimiz, gençlerle birlikte üretimi temel alır ve onların toplumsal 
          katılımını güçlendirmeyi ana hedef olarak benimser.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-blue-400 text-left">Vizyonumuz</h2>
        <p className="mt-3 text-lg leading-relaxed text-gray-200 text-left">
          Gençlerin kendi sözlerini söyleyebildiği, eşitlikçi ve kapsayıcı bir toplumun inşasında 
          öncü bir gençlik hareketi olmak. Bir Bulut Olsam Derneği, gençlerin yalnızca katılımcı 
          değil, aynı zamanda dönüştürücü aktörler olduğu bir geleceği hedefler.
        </p>
      </div>

      {/* Butonlar */}
      <div className="max-w-5xl mx-auto flex justify-start gap-6 mb-12 px-4">
        <a
          href="#"
          className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          Kurum Tüzüğü
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
        >
          Kurum Politikası
        </a>
      </div>

      {/* 3 Sütun */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        {/* Amacımız */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-400">Amacımız</h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Dijitalleşen dünyada gençlerin eşitlikçi ve kapsayıcı biçimde toplumsal yaşama katılımını
            artırmak, onların yaratıcılığını güçlendirecek sosyal etki odaklı projeler geliştirmek.
          </p>
        </div>

        {/* İlkelerimiz */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-400">İlkelerimiz</h2>
          <ul className="mt-4 space-y-3 text-gray-300 text-sm">
            <li><strong>Bağlantı (Connection):</strong> Gençleri birbirine bağlayan köprüler kurar.</li>
            <li><strong>Görünürlük (Visibility):</strong> Gençlerin sesini görünür kılar.</li>
            <li><strong>Katılım (Participation):</strong> Herkesin fikrine alan açar.</li>
            <li><strong>Birliktelik (Togetherness):</strong> Dayanışmayı ve ortak amaçları güçlendirir.</li>
            <li><strong>Gündem (Agenda):</strong> Gençlerin kendi önceliklerini öne çıkarır.</li>
          </ul>
        </div>

        {/* Faaliyet Raporları */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-blue-400">Faaliyet Raporları</h2>
          <p className="mt-4 text-gray-300 text-sm">
            İlgili yıllara tıklayarak raporları görüntüleyebilirsiniz.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-blue-300 text-sm">
            <a href="#">2025</a>
          </div>
        </div>
      </div>
    </div>
  );
}
