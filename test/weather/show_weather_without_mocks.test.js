const { messageWeather } = require('../../src/weather/show_weather');

test('should return weather message with celsius temperature', () => {
  const result = messageWeather();
  const expected = 'Today weather is 50, have a nice day!';
  expect(result).toBe(expected);
});
