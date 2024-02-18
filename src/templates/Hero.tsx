import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://wa.me/6281316161005" target="_blank">
            Contact Us
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-4">
          Selamat Datang di {''}
          <span className="text-primary-500">Nama Perusahaan</span> Solusi Alat
          Berat Profesional untuk Proyek Anda
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Kuatkan Fondasi Kesuksesan Proyek Anda Bersama Kami
        </p>
      </div>
    </Section>
  </Background>
);

export { Hero };
