const weatherAPI = require('./weather_api');

const messageWeather = () => {
  const weather = weatherAPI.getWeather('C');
  console.log(`****Today weather is ${weather}, have a nice day!`);
  return `Today weather is ${weather}, have a nice day!`;
};

module.exports = { messageWeather };
