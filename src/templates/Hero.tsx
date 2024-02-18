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
          <Link
            href="https://api.whatsapp.com/send?phone=6281316161005&text=Halo%20Bang%20Azis,%20Saya%20mau%20tanya%20nih"
            target="_blank"
          >
            Contact Us
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
          Selamat Datang di {''}
          <span className="text-primary-500">Azis Machinery Masters</span>
          {''} Solusi Alat Berat Profesional untuk Proyek Anda
        </h1>
        <p className="mb-8 text-xl text-gray-700">
          Kuatkan Fondasi Kesuksesan Proyek Anda Bersama Kami
        </p>
      </div>
    </Section>
  </Background>
);

export { Hero };
