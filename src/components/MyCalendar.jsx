import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MyCalendar = () => {
  // Get the current date
  const currentDate = new Date();
  const [currentWeek, setCurrentWeek] = useState(currentDate);

  const goToPreviousWeek = () => {
    const previousWeek = new Date(currentWeek);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentWeek(previousWeek);
  };

  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  // Function to generate an array of day names
  const generateDayNames = () => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayNames.map((dayName) => (
      <div key={dayName} className="text-center font-custom text-xs text-gray-400">
        {dayName}
      </div>
    ));
  };

  // Function to generate an array of date cells for the current week
  const generateDateCells = () => {
    const dateCells = [];
    const currentWeekStartDate = new Date(currentWeek);

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(currentWeekStartDate);
      currentDay.setDate(currentWeekStartDate.getDate() + i);

      const isCurrentDate = currentDay.toDateString() === currentDate.toDateString();
      const cellClass = isCurrentDate ? 'bg-[#6e62e5] text-white' : 'bg-white';

      dateCells.push(
        <div key={i} className={`text-center ${cellClass} rounded-full p-1 text-xs`}>
          {currentDay.getDate()}
        </div>
      );
    }

    return dateCells;
  };

  // Function to get the current month name with the year
  const getCurrentMonthName = () => {
    const options = { year: 'numeric', month: 'long' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 h-[40px]">
        <h1 className='font-custom font-semibold text-sm'>{getCurrentMonthName()}</h1>
        <div className='font-normal flex gap-3'>
          <button onClick={goToPreviousWeek}><IoIosArrowBack className='text-[#6e62e5] border border-gray-300 rounded-full text-2xl p-1' /></button>
          <button onClick={goToNextWeek}><IoIosArrowForward className='text-[#6e62e5] border border-gray-300 rounded-full text-2xl p-1' /></button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {generateDayNames()}
        {generateDateCells()}
      </div>
    </div>
  );
};

export default MyCalendar;
