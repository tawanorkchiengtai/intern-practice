'use client';
import React, { useState, useEffect } from 'react';

const Overview: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('Good morning');
  const [emoji, setEmoji] = useState<string>('🌤️'); // Add state for emoji
  

  const refreshTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Bangkok',
    };
    const date = new Date().toLocaleString('en-US', options);
    const formattedString = formatDateString(date);
    setCurrentTime(formattedString);

    const currentHour = new Date().toLocaleString('en-US', { hour: '2-digit', hour12: false, timeZone: 'Asia/Bangkok' });
    const hour = parseInt(currentHour);

    if (hour < 12) {
      setGreeting('Good morning');
      setEmoji('🌤️'); // Morning emoji
    } else if (hour < 18) {
      setGreeting('Good afternoon');
      setEmoji('🌥️'); // Afternoon emoji
    } else {
      setGreeting('Good evening');
      setEmoji('🌜'); // Evening emoji
    }
  };

  const formatDateString = (dateString: string) => {
    const [dayOfWeek, rest] = dateString.split(', ');
    const [monthDay, time] = rest.split(' at ');
    const [month, day] = monthDay.split(' ');
    const formattedDay = day.replace(',', '');
    return `${dayOfWeek}, ${month} ${formattedDay} ${time}`;
  };

  useEffect(() => {
    refreshTime(); // Set initial time
    const intervalId = setInterval(refreshTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="h-full w-full overflow-hidden bg-zinc-100">
      <div className="space-y-7 md:p-7 p-3 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-lg">
        <div>
          <h3 className="text-xl font-semibold">
            {greeting}, Sophon Thongthavornwong
          </h3>
          <h6 className="flex items-center gap-2 font-medium text-custom-text-400">
            <div>{emoji}</div>
            <div className="text-zinc-400" id="timeDisplay">{currentTime}</div>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Overview;
