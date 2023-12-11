export interface FeaturedSectionProps {
  withImage: boolean;
  withBranding: boolean;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonRoute: string;
}

export const FeaturedSection = ({
  withImage,
  withBranding,
  heading,
  description,
  buttonLabel,
  buttonRoute,
}: FeaturedSectionProps) => {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        {withImage && (
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            withBranding ? "bg-primary-hub" : "bg-gray-900"
          } bg-opacity-50`}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-3 text-xl text-white">{description}</p>
          <a
            href={buttonRoute}
            className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
