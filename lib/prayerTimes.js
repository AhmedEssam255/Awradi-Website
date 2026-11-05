const prayerTimes = async () => {
  try {
    const geoLocRes = await fetch('https://ipapi.co/json/');

    const geoLoc = await geoLocRes.json();

    const { latitude, longitude } = await geoLoc;

    const prayerTimesRes = await fetch(
      `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&midnightMode=1`,
    );

    const prayerTimesData = await prayerTimesRes.json();

    return prayerTimesData;
  } catch (error) {
    throw new Error('Failed to fetch prayer times');
  }
};

export default prayerTimes;
