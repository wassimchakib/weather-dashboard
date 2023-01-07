import { fahreinheitToCelcius, getHoursAndMinutes } from '../utils/functions';

describe('Function tests', () => {
  it('should be equal to ', () => {
    const date = getHoursAndMinutes(1673041519);
    expect(date).toEqual('09:45 PM');
  });

  test(' 32 °F => 0°C', () => {
    const result = fahreinheitToCelcius(32);
    expect(result).toBe('0.00');
  });
});
