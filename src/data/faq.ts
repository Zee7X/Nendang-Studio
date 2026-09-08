export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Untuk landing page biasanya 1–2 minggu, company profile 2–3 minggu, dan project custom tergantung kebutuhan fitur. Timeline detail kami sampaikan saat konsultasi gratis.",
  },
  {
    question: "Apakah bisa request desain custom?",
    answer:
      "Bisa banget! Semua desain kami buat dari nol sesuai identitas brand kamu — bukan template pasaran. Kamu juga boleh kasih referensi yang kamu suka.",
  },
  {
    question: "Apakah sudah termasuk domain dan hosting?",
    answer:
      "Belum termasuk di harga paket, tapi kami bantu urus sampai beres — dari pemilihan domain, setup hosting, sampai deploy. Biaya domain & hosting ditanggung sesuai harga resmi provider.",
  },
  {
    question: "Apakah ada garansi setelah website selesai?",
    answer:
      "Ada. Kami kasih garansi perbaikan bug selama 30 hari setelah website live, plus support untuk pertanyaan seputar pengelolaan website kamu.",
  },
  {
    question: "Apakah website bisa saya kelola sendiri?",
    answer:
      "Untuk paket Custom dengan CMS, kamu bisa update konten sendiri lewat dashboard yang mudah dipakai. Kami juga kasih panduan singkat saat serah terima.",
  },
  {
    question: "Apakah bisa integrasi WhatsApp / API / CMS?",
    answer:
      "Bisa. Integrasi WhatsApp tersedia di semua paket. Untuk API pihak ketiga, CMS, dan database tersedia di paket Custom — atau sebagai add-on paket lain.",
  },
];
