/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};
const orders = [
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Machined Brass Puzzle',
        href: '#',
        price: '$95.00',
        color: 'Brass',
        size: '3" x 3" x 3"',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-07-product-01.jpg',
        imageAlt:
          'Brass puzzle in the shape of a jack with overlapping rounded posts.',
      },
      // More products...
    ],
  },
  // More orders...
];
const footerNavigation = {
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Saved Items', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Redeem Gift card', href: '#' },
  ],
  service: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
    { name: 'Get in touch', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  connect: [
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
    { name: 'Twitter', href: '#' },
  ],
};

export default function InvoiceListWithQuickActions() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:pb-32 sm:pt-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders.map((order) => (
            <section
              key={order.number}
              aria-labelledby={`${order.number}-heading`}
            >
              <div className="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
                <h2
                  id={`${order.number}-heading`}
                  className="text-lg font-medium text-gray-900 md:flex-shrink-0"
                >
                  Order #{order.number}
                </h2>
                <div className="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1">
                  <p className="text-sm font-medium text-gray-500">
                    {order.status}
                  </p>
                  <div className="flex text-sm font-medium">
                    <a
                      href={order.href}
                      className="text-primary-hub-700 hover:text-primary-hub-500"
                    >
                      Manage order
                    </a>
                    <div className="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
                      <a
                        href={order.invoiceHref}
                        className="text-primary-hub-700 hover:text-primary-hub-500"
                      >
                        View Invoice
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
                {order.products.map((product) => (
                  <div key={product.id} className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-20 w-20 flex-none rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                      <div className="min-w-0 flex-1 pt-1.5 sm:pt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="truncate text-sm text-gray-500">
                          <span>{product.color}</span>{' '}
                          <span
                            className="mx-1 text-gray-400"
                            aria-hidden="true"
                          >
                            &middot;
                          </span>{' '}
                          <span>{product.size}</span>
                        </p>
                        <p className="mt-1 font-medium text-gray-900">
                          {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
                      <button
                        type="button"
                        className="focus:ring-primary-hub-500500 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                      >
                        Buy again
                      </button>
                      <button
                        type="button"
                        className="focus:ring-primary-hub-500500 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-full sm:flex-grow-0"
                      >
                        Shop similar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer
        aria-labelledby="footer-heading"
        className="border-t border-gray-200 bg-white"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Account</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.account.map((item) => (
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
                <h3 className="text-sm font-medium text-gray-900">Service</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.service.map((item) => (
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
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Company</h3>
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
              <div>
                <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.connect.map((item) => (
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
          </div>

          <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <p>Shipping to Canada ($CAD)</p>
              <p className="ml-3 border-l border-gray-200 pl-3">English</p>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500 sm:mt-0">
              &copy; 2021 Your Company, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
