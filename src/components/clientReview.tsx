import { IconStarFilled } from "@tabler/icons-react";

export default function ClientReview() {
  return (
    <div className="px-10">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-sans font-bold text-4xl mb-5 text-gray-900">
          Apa yang Client Kami katakan?
        </h1>
        <p className="text-justify mb-3">
          Kami bukan sekadar pengembang aplikasi, kami adalah mitra strategis
        </p>
        <p className="text-justify text-gray-700">
          Berikut adalah tiga alasan utama mengapa harus memilih kami:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20">
        <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto">
          <div className="px-6 py-4">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <div className="font-bold text-xl mb-2">
              Benar-benar Mengubah Cara Kerja Bisnis Kami!
            </div>
            <p className="text-gray-700 text-base text-justify mb-5">
              &ldquo;Sebelum bekerja dengan tim ini, operasional kami terasa
              lambat dan banyak manual. Mereka tidak hanya membangun aplikasi
              manajemen proyek yang kami impikan, tapi juga memberikan
              konsultasi yang sangat membantu untuk merampingkan seluruh alur
              kerja kami. Sekarang, semua tim kami lebih efisien dan
              produktivitas melonjak. Yang terbaik? Mereka sangat transparan
              soal biaya, jadi kami tidak perlu khawatir ada kejutan. Sangat
              direkomendasikan!&rdquo;
            </p>
            <p>
              -<span className="font-bold"> Budi Santoso</span>, CEO, PT. Maju
              Jaya
            </p>
          </div>
        </div>

        <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto">
          <div className="px-6 py-4">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <div className="font-bold text-xl mb-2">
              Mitra Sejati untuk Pertumbuhan Digital
            </div>
            <p className="text-gray-700 text-base text-justify mb-5">
              &ldquo;Sebagai bisnis yang terus berkembang, kami membutuhkan
              solusi yang fleksibel dan bisa beradaptasi. Perusahaan ini
              membuktikan diri sebagai mitra sejati dalam perjalanan digital
              kami. Dari perencanaan awal hingga pemeliharaan berkelanjutan,
              mereka selalu mendengarkan dan memberikan solusi inovatif yang
              sesuai dengan visi kami. Mereka membuat digitalisasi terasa mudah
              dan tanpa beban.&rdquo;
            </p>
            <p>
              -<span className="font-bold"> Rico Lim</span>, Founder, Start-up
              Kreatif Digitalindo
            </p>
          </div>
        </div>

        <div className="max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-white mx-auto">
          <div className="px-6 py-4">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <IconStarFilled key={i} className="w-5 h-5 text-yellow-500" />
              ))}
            </div>
            <div className="font-bold text-xl mb-2">
              Efisiensi Biaya Tanpa Kompromi Kualitas
            </div>
            <p className="text-gray-700 text-base text-justify mb-5">
              &ldquo;Kami awalnya ragu untuk berinvestasi besar pada
              pengembangan aplikasi. Tapi, pendekatan mereka dalam pengendalian
              biaya bersama-sama membuat kami nyaman. Hasilnya? Aplikasi CRM
              yang berkualitas tinggi yang pas di anggaran kami. Sekarang tim
              penjualan kami lebih terorganisir dan bisa fokus pada pelanggan.
              Kualitasnya top, harganya masuk akal!&rdquo;
            </p>
            <p>
              -<span className="font-bold"> Dewi Lestari</span>, Direktur
              Penjualan, Konsultan Finansial Sejahtera
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
