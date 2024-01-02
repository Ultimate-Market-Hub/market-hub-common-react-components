import { BellAlertIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function Template({
  title,
  description,
  code,
}: {
  title: string;
  description: string;
  code: string;
}) {
  const { t: translation } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <html className="h-full" />
        <body className="h-full" />
      </Helmet>
      <main className="relative isolate min-h-full">
        <img
          src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <div className="inline-flex">
            <span className="sr-only">{title}</span>
            <BellAlertIcon className="h-24 w-auto" />
          </div>
          <p className="text-base font-semibold leading-8 text-white">{code}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">{description}</p>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> {translation('error.back')}
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
