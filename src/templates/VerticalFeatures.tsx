import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="DISC PLOW 2x22"
      description="Sangat baik dalam membalikkan tanah sehingga zat hara yang berada di bagian atas tanah dapat tersimpan kembali di bagian bawah tanah, proses ini bertujuan meningkatkan produktivitas tanah. Disc Plow ini bisa digunakan untuk pengerjaan lahan basah ataupun lahan kering.
      
      Dilengkapi dengan 2 moulding disc dan 1 stabilizer dengan kualitas bahan terbaik, yang bisa disesuaikan di berbagai jenis lahan. Sehingga mampu memberikan hasil olahan yang sempurna dan stabil."
      image="/assets/images/dual-disc.png"
      imageAlt="DISC PLOW"
    />
    <VerticalFeatureRow
      title="ROTARY 1.65"
      description="Sangat baik dalam menggemburkan tanah menjadi siap tanam. Dilengkapi dengan 48 pisau (24 kanan 24 kiri) yang tersusun dalam 8 gang, sangat baik untuk memotong permukaan tanah, mencacah akar rumput menjadi gembur , lembut dan siap tanam.

      Gearbox yang kuat mendukung kecepatan putar PTO diubah dan disesuaikan dengan kebutuhan putaran pisau untuk mencapai hasil cacahan dan kedalaman yang diinginkan."
      image="/assets/images/rotary-depan.png"
      imageAlt="DISC PLOW"
      reverse
    />
    <VerticalFeatureRow
      title="DISC PLOW 3x22"
      description="Sangat baik dalam membalikkan tanah sehingga zat hara yang berada di bagian atas tanah dapat tersimpan kembali di bagian bawah tanah, proses ini bertujuan meningkatkan produktivitas tanah. Disc Plow ini bisa digunakan untuk pengerjaan lahan basah ataupun lahan kering.

      Dilengkapi dengan 3 moulding disc dan 1 stabilizer dengan kualitas bahan terbaik, yang bisa disesuaikan di berbagai jenis lahan. Sehingga mampu memberikan hasil olahan yang sempurna dan stabil."
      image="/assets/images/triple-disc.png"
      imageAlt="DISC PLOW"
    />
  </Section>
);

export { VerticalFeatures };
