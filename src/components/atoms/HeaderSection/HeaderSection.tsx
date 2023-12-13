interface HeaderSectionProps {
  primary: string;
  textCenter: boolean;
  tightSecondary: boolean;
  bgColor?: string;
  leading?: string;
  secondary?: string;
}

export function HeaderSection({
  leading,
  secondary,
  primary,
  textCenter,
  tightSecondary,
  bgColor,
}: HeaderSectionProps) {
  return (
    <div className={`${bgColor ?? ''} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl ${
            textCenter ? 'text-center' : 'lg:mx-0'
          }`}
        >
          {leading && (
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {leading}
            </p>
          )}
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {primary}
          </h2>
          {secondary && (
            <p
              className={`${
                tightSecondary ? 'mt-2' : 'mt-6'
              } text-lg leading-8 text-gray-600`}
            >
              {secondary}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
