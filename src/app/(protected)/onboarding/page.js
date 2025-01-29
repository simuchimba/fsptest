"use client";


import Image from "next/image";  // Import Image component
import { Button } from "@/components/ui/button";  // Import Button component
import { BsChevronDoubleRight } from "react-icons/bs"; // Import BsChevronDoubleRight
import { useSession } from "next-auth/react";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { db } from "@/config/firebase";
import { generateMenstrualCycle } from "@/lib/utils";
import { toast } from "@/components/ui/Toast";

export default function Onboarding() {
  const { data } = useSession();
  const userFirstName = data?.user?.name ? data.user.name.split(" ")[0] : "";

  const [initiated, setInitiated] = useState(false);

  const [menstrualData, setMenstrualData] = useState({
    last_period_start_date: "",
    average_cycle_length: 22,
    variations_in_cycle_length: 0,
    period_duration: 5,
    recent_changes_in_your_cycle: "",
    underlying_health_conditions: "",
    medications: "",
    stress: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const menstrualCycle = generateMenstrualCycle(menstrualData);
    const docRef = collection(db, "users");
    setDoc(doc(docRef, data?.user?.email), { menstrualData, menstrualCycle })
      .then(() => {
        window.location.href = "/dashboard";
      })
      .catch((e) => {
        toast.error("Something went wrong");
      });
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="w-full text-center text-2xl text-pink-400 mt-10">
        Hi,
        <br />
        <span className="text-5xl text-pink-500 font-medium">
          {userFirstName}
        </span>
      </p>
      {!initiated ? (
        <>
          <Image
            src="/assets/onboarding/1.jpg"
            alt="Onboarding Image"
            className="self-center w-5/6"
            width={500}  // Define the width for optimization
            height={500} // Define the height for optimization
          />
          <Button
            className="self-center flex text-xl py-8 w-5/6 bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg shadow-pink-500/20 ring-1 ring-pink-200"
            onClick={() => setInitiated(true)}
          >
            Let&apos;s Start <BsChevronDoubleRight />
          </Button>
        </>
      ) : (
        <>
          <p className="text-sm opacity-90">
            Please fill these info so that we can personalize our app for you:
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 accent-pink-400"
          >
            {/* Form inputs and content */}
          </form>
        </>
      )}
    </div>
  );
}
