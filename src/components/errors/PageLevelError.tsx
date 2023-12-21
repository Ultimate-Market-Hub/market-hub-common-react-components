import { BellAlertIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const PageLevelError = ({
  helmet,
  title,
  description,
  code,
}: {
  title: string;
  helmet: string;
  description: string;
  code: string;
}) => {
  const { t: translation } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{helmet}</title>
        <html className="h-full" />
        <body className="h-full" />
      </Helmet>
      <div className="flex min-h-full w-full flex-col bg-white pb-48 pt-[64px]">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-16 sm:px-24 lg:px-32">
          <div className="flex flex-shrink-0 justify-center">
            <div className="inline-flex">
              <span className="sr-only">UMH</span>
              <BellAlertIcon className="h-24 w-auto" />
            </div>
          </div>
          <div className="py-[64px]">
            <div className="text-center">
              <p className="text-16 font-semibold text-error">{code}</p>
              <h1 className="text-dark-grey text-32 sm:text-48 mt-8 font-bold tracking-tight">
                {title}
              </h1>
              <p className="text-16 mt-8 text-primary-medium-grey">
                {description}
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
