/* eslint-disable no-unused-vars */
const weatherAPI = require('../../src/weather/weather_api');
const { messageWeather } = require('../../src/weather/show_weather');

weatherAPI.getWeather = jest.fn((format) => 20);

describe('Show weather', () => {
  it('check', () => {
    const result = messageWeather();
    const expected = 'Today weather is 20, have a nice day!';

    expect(weatherAPI.getWeather).toHaveBeenCalledWith('C');
    expect(result).toBe(expected);

    weatherAPI.getWeather.mockRestore();
  });
});
