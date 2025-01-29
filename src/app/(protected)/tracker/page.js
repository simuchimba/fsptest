'use client';

import Greeting from '@/components/dashboard/Greeting';
import { getUser } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaEgg } from 'react-icons/fa6';
import { MdBloodtype } from 'react-icons/md';
import { SiEsbuild } from 'react-icons/si';
import { GiCottonFlower } from 'react-icons/gi';
import { BiLoaderAlt } from 'react-icons/bi';

export default function Tracker() {
  const { data } = useSession();
  const userFirstName = data?.user?.name ? data.user.name.split(' ')[0] : '';

  const [userFireData, setUserFireData] = useState(false);
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
  }, [email]); // Fixed missing dependency issue

  function getPhaseDates(phase) {
    return (
      userFireData?.menstrualCycle?.[phase]?.start_date +
      ' to ' +
      userFireData?.menstrualCycle?.[phase]?.end_date
    );
  }

  return (
    <div>
      <div className='flex flex-col'>
        <Greeting userFirstName={userFirstName} />
        <hr className='w-full opacity-20' />
        <p className='text-2xl font-semibold text-center text-rose-400'>
          Your Menstrual Tracker
        </p>
        {userFireData ? (
          <>
            <Accordion type='multiple' collapsible className='mt-8 flex flex-col gap-4'>
              <AccordionItem value='item-1' className='bg-gradient-to-br from-pink-50 to-pink-100 px-4 rounded-md text-pink-950 shadow-md'>
                <AccordionTrigger>
                  <p className='flex flex-col gap-2'>
                    <span className='flex items-center gap-1 font-semibold'>
                      <MdBloodtype /> Menstrual Phase (Period)
                    </span>
                    <span className='text-sm ml-5 text-start'>{getPhaseDates('menstrual_phase')}</span>
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Menstruation is commonly known as a period. When you menstruate, your uterus lining sheds and flows out of your vagina...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2' className='bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 px-4 rounded-md text-fuchsia-950 shadow-md'>
                <AccordionTrigger>
                  <p className='flex flex-col gap-2'>
                    <span className='flex items-center gap-1 font-semibold'>
                      <SiEsbuild /> Follicular Phase
                    </span>
                    <span className='text-sm ml-5 text-start'>{getPhaseDates('follicular_phase')}</span>
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  The follicular phase starts on the first day of your period and lasts for 13 to 14 days, ending in ovulation...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3' className='bg-gradient-to-br from-zinc-50 to-zinc-100 px-4 rounded-md text-zinc-950 shadow-md'>
                <AccordionTrigger>
                  <p className='flex flex-col gap-2'>
                    <span className='flex items-center gap-1 font-semibold'>
                      <FaEgg /> Ovulation Phase
                    </span>
                    <span className='text-sm ml-5 text-start'>{getPhaseDates('ovulation_phase')}</span>
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  Ovulation is when a mature egg is released from an ovary and moves along a fallopian tube towards your uterus...
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4' className='bg-gradient-to-br from-sky-50 to-sky-100 px-4 rounded-md text-sky-950 shadow-md'>
                <AccordionTrigger>
                  <p className='flex flex-col gap-2'>
                    <span className='flex items-center gap-1 font-semibold'>
                      <GiCottonFlower /> Luteal Phase
                    </span>
                    <span className='text-sm ml-5 text-start'>{getPhaseDates('luteal_phase')}</span>
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  After ovulation, cells in the ovary release progesterone and a small amount of estrogen...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ) : (
          <div className='flex flex-row justify-center items-center p-4'>
            <BiLoaderAlt className='text-4xl animate-spin' />
          </div>
        )}
      </div>
    </div>
  );
}