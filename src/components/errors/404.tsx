import { useTranslation } from 'react-i18next';

import { PageLevelError } from '~/components/errors/PageLevelError';

export const Page404 = () => {
  const { t: translation } = useTranslation();

  return (
    <PageLevelError
      title={translation('error-page.404.title', 'Page not found')}
      code={'404'}
      description={translation(
        'error-page.404.description',
        'Please check the URL in the address bar and try again.'
      )}
    />
  );
};
