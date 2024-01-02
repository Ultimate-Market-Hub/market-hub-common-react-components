import { getState } from './getState';

describe('getState', () => {
  it('should return LOADING if isLoading', () => {
    expect(
      getState({
        isLoading: true,
        isError: false,
        isUploaded: false,
        fileRejections: undefined,
      })
    ).toBe('LOADING');
  });

  it('should return ERROR if isError', () => {
    expect(
      getState({
        isLoading: false,
        isError: true,
        isUploaded: false,
        fileRejections: undefined,
      })
    ).toBe('ERROR');
  });

  it('should return ERROR if fileRejections', () => {
    expect(
      getState({
        isLoading: false,
        isError: false,
        isUploaded: false,
        // @ts-ignore
        fileRejections: {
          errors: [
            {
              code: 'ERROR_CODE',
              message: 'ERROR_MESSAGE',
            },
          ],
        },
      })
    ).toBe('ERROR');
  });

  it('should display UPLOADED if isUploaded', () => {
    expect(
      getState({
        isLoading: false,
        isError: false,
        isUploaded: true,
        fileRejections: undefined,
      })
    ).toBe('UPLOADED');
  });

  it('should display IDLE if not anything set', () => {
    expect(
      getState({
        isLoading: false,
        isError: false,
        isUploaded: false,
        fileRejections: undefined,
      })
    ).toBe('IDLE');
  });
});
