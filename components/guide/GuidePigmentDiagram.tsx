import React from 'react';
import Image from 'next/image';

export const GuidePigmentDiagram: React.FC = () => {
  return (
    <figure className="my-6 max-w-[520px] mx-auto rounded-lg border border-[#DDE5F5] bg-white p-3 shadow-xs">
      <div className="relative w-full overflow-hidden rounded bg-white">
        <Image
          src="/images/vitiligo-pigment-diagram.jpg"
          alt="Side-by-side illustration comparing healthy skin, where pigment-making cells produce melanin that colors the skin, with skin with vitiligo, where the immune system affects pigment-making cells so patches have less melanin. Vitiligo is not contagious."
          width={1024}
          height={1399}
          loading="lazy"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <figcaption className="text-[11px] text-[#5B6785] leading-relaxed mt-2.5 text-center sm:text-left">
        Simplified pigment diagram. This compares skin changes rather than showing the complete sequence of disease initiation. Clinical review pending.
      </figcaption>
    </figure>
  );
};
