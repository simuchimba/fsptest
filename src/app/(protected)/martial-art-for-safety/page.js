import React from 'react';
import Image from 'next/image';

const MartialArtForSafety = () => {
  return (
    <div className='p-4'>
      <div className='text-2xl font-semibold'>
        Menstrual Health
      </div>
      <div className='font-bold mt-8 text-xl mb-2'> Empowering Adolescent Girls through Knowledge and Awareness</div>
      <p>
      Menstrual health is an essential part of every adolescent girl&apos;s well-being, yet it is often shrouded in stigma, myths, and misconceptions. Education about menstrual health not only empowers girls to take care of themselves but also fosters confidence, breaks taboos, and promotes a healthier society. This article explores the importance of menstrual health and why addressing this topic openly and informatively is crucial.
      </p>
      <Image
        src='/assets/gelo.jpeg'
        loading='lazy'
        className='my-2'
        alt='gelo'
        width={500} 
        height={300} 
      />

      <div className='font-bold mt-8 text-xl mb-2'> Why Menstrual Education Matters</div>
      <p>
      Menstrual education lays the foundation for understanding and managing periods confidently. For many adolescent girls, their first period can be an overwhelming experience if they are unprepared. A lack of knowledge can lead to fear, confusion, and even shame. Comprehensive menstrual education equips girls with accurate information about the menstrual cycle, its purpose, and how to manage it effectively.
      </p>
      <Image
        src='/assets/men.jpg'
        loading='lazy'
        className='my-2'
        alt='menstrual education'
        width={500} 
        height={300} 
      />

      <div className='font-bold mt-8 text-xl mb-2'>Promoting Body Awareness and Confidence</div>
      <p>
      Menstrual education helps girls develop a positive relationship with their bodies. Understanding the changes that occur during puberty and menstruation allows them to embrace these developments rather than feel embarrassed or ashamed. Knowing what to expect, such as hormonal fluctuations or physical changes, can instill confidence in managing their health and bodies.
      </p>

      <div className='font-bold mt-8 text-xl mb-2'>Preventing Misconceptions and Myths</div>
      <p>
      Misconceptions about menstruation are rampant in many cultures, leading to harmful practices and misinformation. Some common myths include beliefs that periods are &quot;dirty&quot; or that girls should avoid certain activities or foods while menstruating. These misconceptions can lead to unnecessary restrictions, shame, or even health risks.
      </p>

      <div className='font-bold mt-8 text-xl mb-2'>Improving Menstrual Hygiene</div>
      <p>
      Menstrual hygiene is a critical aspect of overall health. Poor menstrual hygiene can lead to infections, discomfort, and even long-term health issues. Unfortunately, many girls lack access to proper menstrual products or facilities to manage their periods hygienically.
      </p>
      
      <div className='font-bold mt-8 text-xl mb-2'>Addressing Emotional and Physical Changes</div>
      <p>
      The emotional and physical changes that accompany menstruation can be confusing and overwhelming. Hormonal shifts during the menstrual cycle can lead to mood swings, irritability, or feelings of sadness. Physical symptoms, such as cramps, bloating, and fatigue, can also affect daily activities.
      </p>

      <div className='font-bold mt-8 text-xl mb-2'>Reducing Period Stigma</div>
      <p>
      One of the most significant barriers to menstrual health is the stigma surrounding periods. This stigma often leads to shame, secrecy, and discrimination, which can impact a girl&apos;s mental health and participation in school, work, or social activities.
      </p>
    </div>
  );
};

export default MartialArtForSafety;