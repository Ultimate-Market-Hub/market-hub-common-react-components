import { Fragment } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useSlideOver } from 'context/SlideOverContext';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '~/components/atoms/Button';
import { LinkButton } from '~/components/atoms/LinkButton';
import { TextField } from '~/components/atoms/TextField';

const SlideOverExample = () => {
  const { openSlideOver, openSlide, closeSlide, isOpen } = useSlideOver();

  const methods = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const onSubmit = async (values: any) => {};

  return (
    <div>
      <div>
        <button onClick={() => openSlide('exampleSlide')}>
          Open Slide Over
        </button>
        <button onClick={() => openSlide('exampleProfile')}>
          Open Profile Slide Over
        </button>
      </div>

      <div>
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeSlide}>
            <div className="fixed inset-0 animate-marquee bg-primary-medium-grey opacity-5" />

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                      {openSlideOver === 'exampleProfile' && (
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                Profile
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                  onClick={closeSlide}
                                >
                                  <span className="absolute -inset-2.5" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* Main */}
                          <div className="divide-y divide-gray-200">
                            <div className="pb-6">
                              <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
                              <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                                <div>
                                  <div className="-m-1 flex">
                                    <div className="inline-flex overflow-hidden rounded-lg border-4 border-white">
                                      <img
                                        className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                                        src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-6 sm:ml-6 sm:flex-1">
                                  <div>
                                    <div className="flex items-center">
                                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                        Ashley Porter
                                      </h3>
                                      <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                                        <span className="sr-only">Online</span>
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                      @ashleyporter
                                    </p>
                                  </div>
                                  <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                    <button
                                      type="button"
                                      className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                                    >
                                      Message
                                    </button>
                                    <button
                                      type="button"
                                      className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      Call
                                    </button>
                                    <div className="ml-3 inline-flex sm:ml-0">
                                      <Menu
                                        as="div"
                                        className="relative inline-block text-left"
                                      >
                                        <Menu.Button className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                          <span className="absolute -inset-1" />
                                          <span className="sr-only">
                                            Open options menu
                                          </span>
                                          <EllipsisVerticalIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </Menu.Button>
                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <a
                                                    href="#"
                                                    className={classNames(
                                                      active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                      'block px-4 py-2 text-sm'
                                                    )}
                                                  >
                                                    View profile
                                                  </a>
                                                )}
                                              </Menu.Item>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <a
                                                    href="#"
                                                    className={classNames(
                                                      active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                      'block px-4 py-2 text-sm'
                                                    )}
                                                  >
                                                    Copy profile link
                                                  </a>
                                                )}
                                              </Menu.Item>
                                            </div>
                                          </Menu.Items>
                                        </Transition>
                                      </Menu>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-4 py-5 sm:px-0 sm:py-0">
                              <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                                <div className="sm:flex sm:px-6 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Bio
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    <p>
                                      Enim feugiat ut ipsum, neque ut. Tristique
                                      mi id elementum praesent. Gravida in
                                      tempus feugiat netus enim aliquet a, quam
                                      scelerisque. Dictumst in convallis nec in
                                      bibendum aenean arcu.
                                    </p>
                                  </dd>
                                </div>
                                <div className="sm:flex sm:px-6 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Location
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    New York, NY, USA
                                  </dd>
                                </div>
                                <div className="sm:flex sm:px-6 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Website
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    ashleyporter.com
                                  </dd>
                                </div>
                                <div className="sm:flex sm:px-6 sm:py-5">
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                    Birthday
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                                    <time dateTime="1982-06-23">
                                      June 23, 1982
                                    </time>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      )}
                      {openSlideOver === 'exampleSlide' && (
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                Create User
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                  onClick={closeSlide}
                                >
                                  <span className="absolute -inset-2.5" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="divide-y divide-gray-200">
                            <div className="pb-6">
                              <div className="relative flex-1 p-8">
                                <div>
                                  <FormProvider {...methods}>
                                    <form
                                      className="space-y-6"
                                      onSubmit={handleSubmit(onSubmit)}
                                    >
                                      <div>
                                        <TextField
                                          label="Username"
                                          error={errors.username?.message}
                                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          {...register('username')}
                                        />
                                      </div>

                                      <div>
                                        <TextField
                                          label="Password"
                                          error={errors.password?.message}
                                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                          {...register('password')}
                                        />
                                      </div>

                                      <div className="flex items-center justify-between">
                                        <div className="text-sm leading-6">
                                          <LinkButton
                                            to="/forgot-password"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                          >
                                            Forgot password?
                                          </LinkButton>
                                        </div>
                                      </div>

                                      <div>
                                        <Button
                                          size="md"
                                          className="flex w-full justify-center"
                                        >
                                          Sign in
                                        </Button>
                                      </div>
                                    </form>
                                  </FormProvider>
                                </div>

                                <div className="mt-10">
                                  <div className="relative">
                                    <div
                                      className="inset-0 flex items-center"
                                      aria-hidden="true"
                                    >
                                      <div className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm font-medium leading-6">
                                      <span className="bg-white px-6 text-gray-900">
                                        Or continue with
                                      </span>
                                    </div>
                                  </div>

                                  <div className="mt-6 grid grid-cols-2 gap-4">
                                    <Button className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]">
                                      <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                      </svg>
                                      <span className="text-sm font-semibold leading-6">
                                        Twitter
                                      </span>
                                    </Button>

                                    <Button className="flex w-full items-center justify-center gap-3 rounded-md px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]">
                                      <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                      <span className="text-sm font-semibold leading-6">
                                        GitHub
                                      </span>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default SlideOverExample;
