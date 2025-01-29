'use client';

import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { db } from '@/config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const EmergencyData = () => {
  const { data } = useSession();
  const [loading, setLoading] = useState(false);
  const [emergencyData, setEmergencyData] = useState({
    name: '',
    contact: '',
    address: '',
    sex: 'not-set',
    organDonor: 'not-set',
    medicalConditions: '',
    medications: '',
    allergiesAndReactions: '',
    remarks: '',
  });

  useEffect(() => {
    if (data?.user?.email) {
      loadEmergencyData(data.user.email);
    }
  }, [data?.user?.email]);

  const loadEmergencyData = async (email) => {
    setLoading(true);
    try {
      const docRef = doc(db, 'emergencyData', email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmergencyData(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching emergency data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data?.user?.email) {
      toast.error('User not authenticated!');
      return;
    }
    setLoading(true);
    try {
      const docRef = doc(db, 'emergencyData', data.user.email);
      await setDoc(docRef, emergencyData);
      toast.success('Emergency data saved successfully!');
      window.location.href = '/dashboard';
    } catch (error) {
      toast.error('Something went wrong');
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className='mb-2'>Your Emergency Data</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 accent-pink-400'>
        {['name', 'contact', 'address', 'medicalConditions', 'medications', 'allergiesAndReactions', 'remarks'].map((field) => (
          <div key={field} className='grid w-full items-center gap-1.5'>
            <Label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</Label>
            <Input
              type='text'
              id={field}
              disabled={loading}
              value={emergencyData[field]}
              onChange={(e) => setEmergencyData({ ...emergencyData, [field]: e.target.value })}
              className='focus:outline-none focus:ring-offset-0 focus-visible:ring-offset-0'
            />
          </div>
        ))}

        {[
          { id: 'sex', label: 'Sex', options: ['male', 'female', 'not-set'] },
          { id: 'organDonor', label: 'Organ Donor', options: ['yes', 'no', 'not-set'] },
        ].map(({ id, label, options }) => (
          <div key={id} className='grid w-full items-center gap-1.5'>
            <Label htmlFor={id}>{label}</Label>
            <Select
              value={emergencyData[id]}
              onValueChange={(value) => setEmergencyData({ ...emergencyData, [id]: value })}
              disabled={loading}
              id={id}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        ))}

        <button
          type='submit'
          disabled={loading}
          className='bg-gradient-to-tr cursor-pointer from-pink-400 to-pink-300 text-white font-semibold p-2 text-center w-full flex flex-row justify-center items-center gap-2 rounded-md'
        >
          {loading && <BiLoaderAlt className='text-xl animate-spin' />} Save
        </button>
      </form>
    </div>
  );
};

export default EmergencyData;