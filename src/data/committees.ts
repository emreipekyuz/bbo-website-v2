// src/data/committees.ts
export type CommitteeCard = {
  title: string;
  excerpt: string;
  coverImage?: string;
  date?: string;   // ISO
  tag?: string;    // "Etkinlik" | "Proje" | "Atölye" gibi
};

export type Committee = {
  slug: string;          // URL: /komiteler/[slug]
  name: string;          // "Kültür-Sanat Komitesi"
  description: string;   // üstte: "neler yapar, neden önemli?"
  heroImage?: string;
  cards: CommitteeCard[];
};

export const committees: Committee[] = [
  {
    slug: "kultur-sanat",
    name: "Kültür-Sanat Komitesi",
    description:
      "Kültür-sanat yoluyla gençlerin ifade alanlarını genişletir, yerel üretimi görünür kılar ve birlikte üretim kültürünü güçlendirir. Atölyeler, sergiler ve buluşmalarla Bursa’nın genç hafızasına katkı sunar.",
    heroImage: "/covers/kultur-hero.jpg",
    cards: [
      {
        title: "Üçpınar Evi Buluşması",
        excerpt:
          "Gençlerle kent–kültür ilişkisini konuştuk; atölye çıktılarıyla mikro bir sergileme yaptık.",
        coverImage: "/covers/kultur-ucpinar.jpg",
        date: "2025-10-18T10:00:00.000Z",
        tag: "Etkinlik",
      },
      {
        title: "Plak Boyama Atölyesi",
        excerpt:
          "Yaratıcı yeniden kullanım odaklı atölye; katılımcılar kendi plak tasarımlarını üretti.",
        coverImage: "/covers/plak-boyama.jpg",
        date: "2025-08-30T14:00:00.000Z",
        tag: "Atölye",
      },
      {
        title: "Mahalle Hafızası Mini Sergi",
        excerpt:
          "Gençlerin çektiği fotoğraflarla mahalle hikâyelerini bir araya getirdik.",
        coverImage: "/covers/mini-sergi.jpg",
        date: "2025-09-12T17:30:00.000Z",
        tag: "Proje",
      },
    ],
  },
  // ileride: genclik, esitlik, sosyal-sorumluluk...
];
