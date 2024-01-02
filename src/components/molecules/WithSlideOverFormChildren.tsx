import {
  Fragment,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface WithSlideOverProps {
  formChildren?: NonNullable<ReactNode>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WithSlideOverFormChildren({
  open,
  setOpen,
  formChildren,
}: WithSlideOverProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full bg-white pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl bg-white">
                  {formChildren}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
