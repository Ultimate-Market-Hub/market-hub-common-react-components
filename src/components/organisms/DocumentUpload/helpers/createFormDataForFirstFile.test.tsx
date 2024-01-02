import { createFormDataForFirstFile } from './createFormDataForFirstFile';

describe('createFormDataForFirstFile', () => {
  it('should map the file', () => {
    const file = new File(['document'], 'FILE_NAME');

    const result = createFormDataForFirstFile([file]);

    expect(result.get('file')).toStrictEqual(file);
  });
});
