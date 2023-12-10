import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid';

const products = [
  {
    id: 1,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    leadTime: '3 weeks',
    color: 'White',
    inStock: true,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    leadTime: '3 weeks',
    inStock: true,
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  // More products...
];
const policies = [
  {
    name: 'Free returns',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
};

export default function PolicyGridExtendedSummary() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h1>

          <form className="mt-12">
            <section aria-labelledby="cart-heading">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {products.map((product, productIdx) => (
                  <li key={product.id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                      />
                    </div>

                    <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div>
                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                          <div className="pr-6">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.color}
                            </p>
                            {product.size ? (
                              <p className="mt-1 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div>

                          <p className="text-right text-sm font-medium text-gray-900">
                            {product.price}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                          <label
                            htmlFor={`quantity-${productIdx}`}
                            className="sr-only"
                          >
                            Quantity, {product.name}
                          </label>
                          <select
                            id={`quantity-${productIdx}`}
                            name={`quantity-${productIdx}`}
                            className="focus:ring-primary-hub-500500 block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>

                          <button
                            type="button"
                            className="ml-4 text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500 sm:ml-0 sm:mt-3"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <span>
                          {product.inStock
                            ? 'In stock'
                            : `Ships in ${product.leadTime}`}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-10 sm:ml-32 sm:pl-6"
            >
              <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                <h2 id="summary-heading" className="sr-only">
                  Order summary
                </h2>

                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-200 text-sm">
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Subtotal</dt>
                      <dd className="font-medium text-gray-900">$99.00</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Shipping</dt>
                      <dd className="font-medium text-gray-900">$5.00</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-gray-600">Tax</dt>
                      <dd className="font-medium text-gray-900">$8.32</dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="text-base font-medium text-gray-900">
                        Order total
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        $112.32
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="focus:ring-primary-hub-500500 w-full rounded-md border border-transparent bg-primary-hub-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  or
                  <a
                    href="#"
                    className="font-medium text-primary-hub-700 hover:text-primary-hub-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </section>
          </form>
        </div>
      </div>

      {/* Policy grid */}
      <section
        aria-labelledby="policies-heading"
        className="mt-24 border-t border-gray-200 bg-gray-50"
      >
        <h2 id="policies-heading" className="sr-only">
          Our policies
        </h2>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {policies.map((policy) => (
              <div
                key={policy.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="-my-1 mx-auto h-24 w-auto"
                      src={policy.imageSrc}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {policy.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer aria-labelledby="footer-heading" className="bg-gray-50">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color=primary-hub&shade=600"
                  alt=""
                  className="h-8 w-auto"
                />
              </div>

              {/* Sitemap sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Products
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Customer Service
                  </h3>
                  <ul role="list" className="mt-6 space-y-6">
                    {footerNavigation.customerService.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 className="text-sm font-medium text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-6 text-sm text-gray-500">
                  The latest deals and savings, sent to your inbox weekly.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="focus:ring-primary-hub-500500 w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="focus:ring-primary-hub-500500 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">
              &copy; 2021 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
