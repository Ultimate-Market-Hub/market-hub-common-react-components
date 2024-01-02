import { useTranslation } from 'react-i18next';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { PageLevelError } from '~/components/errors/PageLevelError';

export function ErrorBoundary() {
  const { t: translation } = useTranslation();
  const error = useRouteError();

  const clearCacheMessage = translation(
    'error-page.try-clearing-cache',
    'Try clearing your cache and try again.'
  );

  if (isRouteErrorResponse(error)) {
    if (import.meta.env.VITE_DEBUG_UNIT_TESTS) {
      // Makes debugging msw tests a bit easier
      // eslint-disable-next-line no-console
      console.log('🧼 ErrorBoundary.tsx: Route error response:', error);
    }
    return (
      <PageLevelError
        title={error.statusText}
        code={`${error.status}`}
        description={error.data?.message || clearCacheMessage}
      />
    );
  } else {
    if (import.meta.env.VITE_DEBUG_UNIT_TESTS) {
      // Makes debugging msw tests a bit easier
      // eslint-disable-next-line no-console
      console.log('🧼 ErrorBoundary.tsx: NON route error:', error);
    }

    return (
      <PageLevelError
        title={translation(
          'error-page.something-went-wrong',
          'Something went wrong'
        )}
        code={translation('error-page.application-error', 'Application error')}
        description={clearCacheMessage}
      />
    );
  }
}
