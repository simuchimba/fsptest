'use client';

import { getUser } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Profile() {
  const { data } = useSession();

  const [userFireData, setUserFireData] = useState(null);
  const email = data?.user?.email;

  useEffect(() => {
    if (email) {
      getUser(email).then((userData) => {
        if (userData) {
          setUserFireData(userData);
        } else {
          window.location.href = '/onboarding';
        }
      });
    }
  }, [email]); // ✅ Added email as dependency

  return (
    <div className='p-4'>
      <div className='flex flex-row items-center gap-4 mb-4'>
        <Image
          src={data?.user?.image || '/default-profile.png'} // ✅ Provide a fallback image
          alt='Profile Picture'
          width={56} // Optimized width
          height={56} // Optimized height
          className='rounded-full ring-2 ring-pink-400'
        />
        <div>
          <h1 className='text-2xl font-semibold'>{data?.user?.name}</h1>
          <p className='text-sm text-gray-500'>{data?.user?.email}</p>
        </div>
      </div>
      <Link
        href={'/onboarding'}
        className='bg-gradient-to-tr from-pink-400 to-pink-300 text-white font-semibold block p-2 text-center w-full rounded-md'
      >
        Edit Profile
      </Link>

      {userFireData && (
        <>
          <p className='text-lg mt-4 opacity-90'>Your Menstrual Data:</p>

          <label className='text-sm'>Last period start date*</label>
          <input
            type='date'
            required
            value={userFireData?.menstrualData?.last_period_start_date}
            disabled
            className='w-full p-2 border-2 border-gray-200 rounded-md'
          />

          <label className='text-sm'>Average cycle length* [21-35 days normally]</label>
          <div className='flex'>
            <input
              type='range'
              min={14}
              max={40}
              disabled
              value={userFireData?.menstrualData?.average_cycle_length}
              className='w-11/12'
            />
            <span className='mx-auto'>{userFireData?.menstrualData?.average_cycle_length}</span>
          </div>

          <label className='text-sm'>Variations in cycle length* [+/- 7 days normally]</label>
          <div className='flex'>
            <input
              type='range'
              min={0}
              max={7}
              disabled
              value={userFireData?.menstrualData?.variations_in_cycle_length}
              className='w-11/12'
            />
            <span className='mx-auto'>{userFireData?.menstrualData?.variations_in_cycle_length}</span>
          </div>

          <label className='text-sm'>Period duration* [3-7 days normally]</label>
          <div className='flex'>
            <input
              type='range'
              min={0}
              max={7}
              disabled
              value={userFireData?.menstrualData?.period_duration}
              className='w-11/12'
            />
            <span className='mx-auto'>{userFireData?.menstrualData?.period_duration}</span>
          </div>

          <label className='text-sm'>Recent Changes In Your Cycle</label>
          <input
            type='text'
            placeholder='No recent changes'
            value={userFireData?.menstrualData?.recent_changes_in_your_cycle}
            disabled
            className='w-full p-2 border-2 border-gray-200 rounded-md'
          />

          <label className='text-sm'>Underlying Health Conditions</label>
          <input
            type='text'
            placeholder='e.g. PCOS, Endometriosis, Thyroid, etc.'
            value={userFireData?.menstrualData?.underlying_health_conditions}
            disabled
            className='w-full p-2 border-2 border-gray-200 rounded-md'
          />

          <label className='text-sm'>Medications</label>
          <input
            type='text'
            placeholder='Birth control pills'
            value={userFireData?.menstrualData?.medications}
            disabled
            className='w-full p-2 border-2 border-gray-200 rounded-md'
          />

          <label className='text-sm'>Stress</label>
          <input
            type='text'
            placeholder='Low, Medium, High'
            value={userFireData?.menstrualData?.stress}
            disabled
            className='w-full p-2 border-2 border-gray-200 rounded-md'
          />
        </>
      )}
    </div>
  );
}
