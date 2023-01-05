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

const fahreinheitToCelcius = (number) => `${((number - 32) * (5 / 9)).toFixed(2)}`;

const celciusToFahreinheit = (number) => `${(number * (9 / 5) + 32).toFixed(2)}`;

export { getDate, fahreinheitToCelcius, celciusToFahreinheit };
