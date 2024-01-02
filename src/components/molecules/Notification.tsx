import { Fragment, useState, type MouseEvent } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface NotificationProps {
  message: string;
  show: boolean;
  handleClose?: (e: MouseEvent<HTMLButtonElement>) => void;
  description?: string | null;
  variant?: 'simple' | 'closeable';
  warning?: boolean;
}

export const Notification = ({
  message,
  description,
  show,
  handleClose,
  variant,
  warning,
}: NotificationProps) => {
  const [showNotification, setShowNotification] = useState(show);
  const { t: translation } = useTranslation();

  if (warning) {
    const logMessage = [message, description].filter(Boolean).join(' | ');
  }

  return (
    <Transition
      show={showNotification}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        role="alertdialog"
        aria-describedby="notification-message"
        className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-4 border border-${
          warning ? 'primary-hub-500' : 'secondary-green-900'
        } bg-${
          warning ? 'primary-hub-100' : 'secondary-green-100'
        } shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-6">
          <div
            className={classNames('flex', {
              'items-start': variant !== 'simple',
              'items-center': variant === 'simple',
            })}
          >
            {!warning && (
              <div className="flex-shrink-0">
                <CheckCircleIcon
                  className="h-6 w-6 text-secondary-green-900"
                  aria-hidden="true"
                />
              </div>
            )}
            <div
              className={classNames('ml-6 w-0 flex-1', {
                '-mt-2': variant !== 'simple',
              })}
            >
              <p className="text-dark-grey font-bold" id="notification-message">
                {message}
              </p>
              {description ? (
                <p
                  className="text-14 mt-4 text-primary-medium-grey"
                  data-testid="notification-description"
                >
                  {description}
                </p>
              ) : null}
            </div>
            <div className="ml-6 flex flex-shrink-0">
              {variant === 'closeable' ? (
                <button
                  type="button"
                  className="inline-flex rounded-[6px] text-primary-medium-grey hover:text-primary-medium-grey focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
                  onClick={
                    handleClose
                      ? handleClose
                      : () => {
                          setShowNotification(false);
                        }
                  }
                >
                  <span className="sr-only">
                    {translation('notification.close', 'Close')}
                  </span>
                  <XMarkIcon
                    className="h-6 w-6 text-secondary-green-900"
                    aria-hidden="true"
                  />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};
