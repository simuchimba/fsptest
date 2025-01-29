import React from "react";
import Image from "next/image";

export default function Greeting({ userFirstName }) {
  const getGreeting = () => {
    const currentTime = new Date().getHours();
    let src, greeting, message;

    if (currentTime >= 5 && currentTime < 12) {
      src = "morning";
      greeting = "Welcome";
      message = "Start your day with a smile!";
    } else if (currentTime >= 12 && currentTime < 17) {
      src = "afternoon";
      greeting = "Welcome";
      message = "Enjoy your afternoon!";
    } else if (currentTime >= 17 && currentTime < 21) {
      src = "evening";
      greeting = "Welcome";
      message = "Have a pleasant evening!";
    } else {
      src = "night";
      greeting = "Welcome";
      message = "Have a peaceful sleep!";
    }

    return { src, greeting, message };
  };

  const { src, greeting, message } = getGreeting();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg">
        <Image
          src={`/assets/dashboard/${src}.png`}
          alt={`${src} greeting image`}
          width={48}
          height={48}
          className="scale-[2.5]"
        />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {greeting}, {userFirstName}
        </h2>
        {/* <p className="text-gray-500 dark:text-gray-400">{message}</p> */}
      </div>
    </div>
  );
}
