const { method1 } = require('../../src/comments/methods');
const { deleteComment } = require('../../src/comments/deleteComment');

jest.mock('../../src/comments/deleteComment');

// afterEach(() => {
//   console.log('********afterEach');
// });

describe('App', () => {
  describe('call deleteComment', () => {
    deleteComment.mockReturnValueOnce('deleteComment response');
    const result = method1([12]);

    it('check response', () => {
      expect(result).toBe('deleteComment response');
    });

    it('deleteComment must be called', () => {
      expect(deleteComment).toHaveBeenCalled();
    });

    it('deleteComment must be called with 12', () => {
      expect(deleteComment).toHaveBeenCalledWith(12);
    });
  });

  describe('do not call deleteComment', () => {
    const result = method1([]);
    it('check response', () => {
      expect(result).toBe('good');
    });
    it('must be call twice', () => {
      expect(deleteComment).toHaveBeenCalledTimes(2);
    });
  });

  describe('call deleteComment again', () => {
    deleteComment.mockReturnValueOnce('deleteComment response two');
    const result = method1([99]);
    it('check response', () => {
      expect(result).toBe('deleteComment response two');
    });
    it('deleteComment must be called', () => {
      expect(deleteComment).toHaveBeenCalled();
    });
    it('deleteComment must be called with 99', () => {
      expect(deleteComment).toHaveBeenCalledWith(99);
    });
  });
});
