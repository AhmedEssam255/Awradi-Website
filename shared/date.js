'use client';

import { useEffect, useState } from 'react';
import prayerTimes from '../lib/prayerTimes';

const Date = () => {
  const [prayers, setPrayers] = useState(null);

  useEffect(() => {
    const getPrayers = async () => {
      try {
        const prayerTimesResponse = await prayerTimes();
        setPrayers(prayerTimesResponse);
      } catch (error) {
        setPrayers('حدثت مشكلة !');
      }
    };

    getPrayers();
  }, []);

  return (
    <h2
      className={
        prayers === 'حدثت مشكلة !'
          ? 'text-red-500 font-bold'
          : 'border border-surface-200 dark:border-surface-700 rounded-xl m-3 p-3 bg-white dark:bg-surface-800 shadow-soft text-surface-800 dark:text-surface-200 font-semibold'
      }
    >
      {prayers === 'حدثت مشكلة !'
        ? prayers
        : `${prayers?.data?.date?.hijri?.weekday?.ar || ''}, ${prayers?.data?.date?.hijri?.day || ''} ${prayers?.data?.date?.hijri?.month?.ar || ''} ${prayers?.data?.date?.hijri?.year || ''}`}
    </h2>
  );
};

export default Date;
