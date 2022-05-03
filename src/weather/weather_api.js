const getWeather = (format) => {
  console.log('****getWeather api');
  return format === 'C' ? 50 : 100;
};

module.exports = { getWeather };
