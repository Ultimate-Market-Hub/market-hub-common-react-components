interface DarkHeaderSectionProps {
  leading?: string
  secondary?: string
  primary: string
  textCenter: boolean
  backColor?: string
}


export function DarkHeaderSection({leading, secondary, primary, textCenter, backColor = 'bg-primary-hub'}: DarkHeaderSectionProps) {
  return (
    <div className={`${backColor} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl ${textCenter ? 'text-center': 'lg:mx-0'}`}>
          {leading && <p className="text-base font-semibold leading-7 text-white">{leading}</p>}
            <h2 className="mt-2 text-4xl font-bold font-branded tracking-tight text-primary-white sm:text-6xl">{primary}</h2>
          {secondary && <p className="mt-6 text-lg leading-8 font-thin text-primary-white">
            {secondary}
          </p>}
        </div>
      </div>
    </div>
  )
}
