describe('Jest.fn() 03', () => {
  it('mock implementation', () => {
    const mock = jest.fn(() => 'bar');
    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
  });

  it('also mock implementation', () => {
    const mock = jest.fn().mockImplementation(() => 'bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
  });

  it('mock implementation one time', () => {
    const mock = jest.fn().mockImplementationOnce(() => 'bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');

    expect(mock('baz')).toBe(undefined);
    expect(mock).toHaveBeenCalledWith('baz');
  });

  it('mock return value', () => {
    const mock = jest.fn();
    mock.mockReturnValue('bar');

    expect(mock('foo')).toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
  });

  it('mock promise resolution', () => {
    const mock = jest.fn();
    mock.mockResolvedValue('bar');

    expect(mock('foo')).resolves.toBe('bar');
    expect(mock).toHaveBeenCalledWith('foo');
  });
});
