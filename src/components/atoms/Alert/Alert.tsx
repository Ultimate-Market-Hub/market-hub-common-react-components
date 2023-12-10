import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { useId } from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

type DivProps = HTMLAttributes<HTMLDivElement>;

export const AlertBase = ({
  children,
  icon,
  className,
  heading,
  onClose,
  ...divProps
}: PropsWithChildren<
  {
    icon: ReactNode;
    heading?: ReactNode;
    onClose?: () => void;
  } & DivProps
>) => {
  const labelId = useId();
  const descriptionId = useId();
  const closeIconId = useId();
  const { t: translation } = useTranslation();
  return (
    <div
      role="region"
      className={classNames(
        'flex items-start gap-4 rounded-[6px] p-4 text-primary-dark-grey',
        className
      )}
      aria-labelledby={heading ? labelId : undefined}
      aria-describedby={descriptionId}
      {...divProps}
    >
      <div className="flex gap-2">
        <div className="flex-shrink-0" role="presentation">
          {icon}
        </div>
      </div>
      <div className="flex grow flex-col gap-2">
        {heading && (
          <h3 className="text-18 leading-2 font-bold" id={labelId}>
            {heading}
          </h3>
        )}
        <div className="text-14" id={descriptionId}>
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="justify-self-end"
          aria-label={translation('alert.close', 'Close')}
          id={closeIconId}
          aria-labelledby={`${closeIconId} ${labelId}`}
        >
          <XMarkIcon className="h-6" />
        </button>
      )}
    </div>
  );
};

export type AlertProps = {
  heading?: ReactNode;
  type: 'warning' | 'error' | 'info' | 'success';
  onClose?: () => void;
  'data-testid'?: string;
} & DivProps;

export const Alert = ({
  type,
  className,
  ...props
}: PropsWithChildren<AlertProps>) => {
  switch (type) {
    case 'success':
      return (
        <AlertBase
          className={classNames('bg-success-light', className)}
          role="alert"
          icon={
            <CheckCircleIcon
              className="h-6 text-success-dark"
              aria-hidden="true"
            />
          }
          {...props}
        />
      );
    case 'info':
      return (
        <AlertBase
          className={classNames('bg-info-light', className)}
          icon={
            <InformationCircleIcon
              className="h-6 text-info-dark"
              aria-hidden="true"
            />
          }
          {...props}
        />
      );
    case 'warning':
      return (
        <AlertBase
          className={classNames('bg-[#fefce8]', className)}
          role="alert"
          icon={
            <ExclamationCircleIcon
              className="h-6 text-[#facc15]"
              aria-hidden="true"
            />
          }
          {...props}
        />
      );
    case 'error':
      return (
        <AlertBase
          role="alert"
          className={classNames('bg-error-light', className)}
          icon={
            <ExclamationTriangleIcon
              className="h-6 text-error-dark"
              aria-hidden="true"
            />
          }
          {...props}
        />
      );
  }
};
