import { useMemo } from 'react';
import { Dialog } from '@headlessui/react';

export const Modal = ({
  title,
  children,
  open,
  handleClose,
  width,
  className = '',
}: ModalProps) => {
  const memoizedMaxWidth = useMemo(() => `max-w-${width ?? '2xl'}`, [width]);

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-40">
      <div className="fixed inset-0 bg-primary-dark-grey" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel
            className={`w-full rounded-2 bg-white p-4 shadow-xl ${memoizedMaxWidth} ${className}`}
          >
            {title && (
              <Dialog.Title className="mb-12 text-lg font-bold">
                {title}
              </Dialog.Title>
            )}
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export interface ModalProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  width?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';
  className?: string;
}
