import React from 'react';
import { GiDrop } from 'react-icons/gi'; // Menstrual Health (drop of blood)
import { MdHealthAndSafety } from 'react-icons/md'; // Safe Abortion
import { FaBalanceScale } from 'react-icons/fa'; // SRHR Laws (justice/balance scale)
import { AiOutlineMedicineBox } from 'react-icons/ai'; // STI (medicine box)
import Link from 'next/link';

const Learn = () => {
  const menuItems = [
    {
      color: 'amber', // Tailwind color
      label: 'Menstrual Health',
      href: '/menstral-health',
      icon: GiDrop,
    },
    {
      color: 'rose', // Tailwind color
      label: 'Safe Abortion',
      href: '#',
      icon: MdHealthAndSafety,
    },
    {
      color: 'green', // Tailwind color
      label: 'SRHR Laws',
      href: '#',
      icon: FaBalanceScale,
    },
    {
      color: 'green', // Tailwind color
      label: 'STI (with guidance from gynaecologist)',
      href: '#',
      icon: AiOutlineMedicineBox,
    },
  ];

  function GridElement({ key, data }) {
    return (
      <Link href={data.href}>
        <div
          key={key}
          className={`w-full aspect-square rounded-md flex flex-col justify-center items-center shadow-md gap-1 bg-gradient-to-br from-${data.color}-100 to-${data.color}-200 text-${data.color}-950`}
        >
          {React.createElement(data.icon, {
            className: `w-1/2 h-1/3 fill-${data.color}-900`,
          })}
          <span className='font-semibold'>{data.label}</span>
        </div>
      </Link>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-4'>
      {menuItems.map((item) => (
        <GridElement key={item.label} data={item} />
      ))}
    </div>
  );
};

export default Learn;
