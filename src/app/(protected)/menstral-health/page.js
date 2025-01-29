import React from 'react';

import Link from 'next/link';

const Learn = () => {
  const menuItems = [
    {
      color: 'amber',
      label: 'Menstrual Education',
      href: '/martial-art-for-safety',
    },
    {
      color: 'rose',
      label: 'Menstrual Health Issues',
      href: '/menstral-health-issues',
    },
    {
      color: 'green',
      label: 'Types of Menstrual Products',
      href: '#',
    },
    {
      color: 'rose',
      label: 'Mental Health',
      href: '#',
    },
  ];

  function GridElement({ key, data }) {
    return (
      <Link href={data.href}>
        <div
          key={key}
          className={`w-full aspect-square rounded-md flex flex-col justify-center items-center shadow-md gap-1 bg-gradient-to-br from-${data.color}-100 to-${data.color}-200 text-${data.color}-950`}
        >
          <span className="font-semibold">{data.label}</span>
        </div>
      </Link>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {menuItems.map((item) => (
        <GridElement key={item.label} data={item} />
      ))}
    </div>
  );
};

export default Learn;
