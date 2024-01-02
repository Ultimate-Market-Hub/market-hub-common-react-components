export const createFormDataForFirstFile = (files: File[]) => {
  const data = new FormData();
  data.append('file', files[0], files[0].name);
  return data;
};
