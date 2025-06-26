import {
  IconAlignBoxTopLeft,
  IconMoneybag,
  IconStarFilled,
} from "@tabler/icons-react";
import SpotlightCard from "./reuse-compo/SpotlightCard";

export default function WhyUs() {
  return (
    <div className="px-10">
      <div className="flex flex-col justify-center items-center py-10">
        <h1 className="font-sans font-bold text-4xl mb-7 text-gray-900">
          Mengapa Memilih Kami Sebagai Mitra Digital Anda?
        </h1>
        <p className="text-justify mb-7">
          Di era digital ini, kami memahami bahwa setiap pemilik bisnis ingin
          meningkatkan efisiensi dan efektivitas kerja, namun seringkali
          terhalang oleh kekhawatiran biaya. Di sinilah kami hadir sebagai
          solusi.
          <br />
          Kami bukan sekadar pengembang aplikasi, kami adalah mitra strategis
          yang berdedikasi untuk membantu bisnis Anda bertransformasi secara
          digital dengan cara yang terkontrol dan terencana.
        </p>
        <p className="">
          Berikut adalah tiga alasan utama mengapa harus memilih kami:
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-6">
        <SpotlightCard
          className="custom-spotlight-card max-w-md w-full p-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <IconMoneybag className="w-8 h-8 text-green-600 mb-5" />
            <h2 className="text-xl font-semibold mb-3">
              Solusi Digital yang Terjangkau dan Terkontrol
            </h2>
            <p className="text-justify font-sans">
              Kami percaya bahwa digitalisasi tidak harus mahal. Filosofi kami
              adalah bersama-sama mengendalikan biaya proyek Anda, memastikan
              bahwa setiap investasi teknologi memberikan nilai maksimal tanpa
              melebihi anggaran yang ditetapkan. Anda tidak perlu lagi khawatir
              tentang biaya tak terduga, kami akan bekerja transparan dan
              kolaboratif, menjamin solusi yang efisien dan efektif untuk bisnis
              Anda.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card max-w-md w-full p-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <IconAlignBoxTopLeft className="w-8 h-8 text-blue-600 mb-5" />
            <h2 className="text-xl font-semibold mb-3">
              Fokus pada Efisiensi dan Efektivitas Bisnis
            </h2>
            <p className="text-justify font-sans">
              Kami tidak hanya membangun aplikasi. Kami membangun solusi yang
              dirancang khusus untuk meningkatkan produktivitas, mengoptimalkan
              operasional, dan mengurangi beban kerja di perusahaan Anda. Setiap
              fitur yang kami kembangkan berorientasi pada bagaimana teknologi
              dapat secara nyata membuat bisnis Anda berjalan lebih cepat, lebih
              cerdas, dan lebih menguntungkan. Kami adalah ahli dalam mengubah
              tantangan bisnis menjadi peluang digital.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card max-w-md w-full p-4"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div>
            <div className="flex gap-1 mb-5">
              <IconStarFilled className="w-5 h-5 text-yellow-500" />
              <IconStarFilled className="w-5 h-5 text-yellow-500" />
              <IconStarFilled className="w-5 h-5 text-yellow-500" />
              <IconStarFilled className="w-5 h-5 text-yellow-500" />
              <IconStarFilled className="w-5 h-5 text-yellow-500" />
            </div>{" "}
            <h2 className="text-xl font-semibold mb-3">
              Mitra Digital Jangka Panjang yang Terpercaya
            </h2>
            <p className="text-justify font-sans">
              Memilih kami berarti Anda mendapatkan lebih dari sekadar vendor;
              Anda mendapatkan mitra jangka panjang yang peduli dengan
              kesuksesan berkelanjutan bisnis Anda. Kami berkomitmen untuk
              mendukung perjalanan digital Anda dari awal hingga akhir, dan
              seterusnya. Kami siap beradaptasi dengan perubahan kebutuhan
              bisnis Anda, memastikan solusi yang kami sediakan selalu relevan
              dan mendukung pertumbuhan Anda di masa depan.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
