import { fahreinheitToCelcius, getHoursAndMinutes } from '../utils/functions';

describe('Function tests', () => {
  it('should be equal to ', () => {
    const date = getHoursAndMinutes(1673041519);
    expect(date).toEqual(new Date(1673041519 * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }));
  });

  test(' 32 °F => 0°C', () => {
    const result = fahreinheitToCelcius(32);
    expect(result).toBe('0.00');
  });
});
