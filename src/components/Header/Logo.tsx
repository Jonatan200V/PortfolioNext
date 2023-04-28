import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <Image
      src={
        'https://res.cloudinary.com/di0jcyqyv/image/upload/v1682409306/images-users/riuoynvictefoj061ub0.png'
      }
      alt="Logo"
      width={64}
      height={46}
      className="logo"
    />
  );
}
