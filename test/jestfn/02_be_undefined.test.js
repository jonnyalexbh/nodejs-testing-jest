describe('Jest.fn() 02', () => {
  it('returns undefined by default', () => {
    const mock = jest.fn();
    const result = mock('foo'); // undefined
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('foo');
  });
});
