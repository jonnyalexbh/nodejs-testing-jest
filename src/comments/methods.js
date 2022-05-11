const { deleteComment } = require('./deleteComment');

exports.method1 = (arg1) => {
  if (!arg1.length) return 'good';
  return deleteComment(arg1[0]);
};
