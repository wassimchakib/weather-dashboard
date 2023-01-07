const getDate = () => {
  const newDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return `${newDate.toLocaleString('en-US', options)} ${newDate.toLocaleTimeString('en-US')}`;
};

const getHoursAndMinutes = (dt) => {
  const newDate = typeof dt === 'string' ? new Date(dt) : new Date(dt * 1000);

  return newDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

const fahreinheitToCelcius = (number) => `${((number - 32) * (5 / 9)).toFixed(2)}`;

const celciusToFahreinheit = (number) => `${(number * (9 / 5) + 32).toFixed(2)}`;

const getCityName = (obj) => `${obj.name}, ${obj.sys.country}`;

export {
  getDate, getHoursAndMinutes, fahreinheitToCelcius, celciusToFahreinheit, getCityName,
};
