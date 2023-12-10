import type { ReactNode } from 'react';
import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { ExclamationTriangleIcon as ExclamationTriangleIconOutline } from '@heroicons/react/24/outline';
import { ExclamationTriangleIcon as ExclamationTriangleIconSolid } from '@heroicons/react/24/solid';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  hint?: ReactNode;
  label?: string;
  isLoading?: boolean;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { hint, className, label, required, isLoading, error, id, ...inputProps },
    ref
  ) => {
    const localId = useId();
    const _id = id ?? localId;
    const isError = Boolean(error);
    const ariaErrorMsg = `${_id}_error`;

    return (
      <div
        className={classNames('w-full', {
          'opacity-50': isLoading,
        })}
      >
        {label && (
          <label
            htmlFor={_id}
            className="err text-14 block font-medium text-primary-darker-grey"
          >
            {label}
            {required && (
              <span
                className="inline-block scale-[1.2] pl-2 text-error"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}
        <div
          className={classNames('relative', {
            'mt-4': label,
          })}
        >
          <input
            id={_id}
            ref={ref}
            type="text"
            className={classNames(
              'block w-full rounded-[6px] leading-normal placeholder:opacity-50 focus:outline-none disabled:cursor-not-allowed disabled:border-neutral-100 disabled:bg-neutral-100 disabled:text-primary-medium-grey',
              {
                'border-primary-medium-sky focus:border-primary-dark-sky focus:ring-primary-dark-sky':
                  !isError,
                // Color schema.
                'border-error-dark focus:border-error-dark focus:ring-error-dark':
                  isError,
                // Padding.
                'pr-40': isError,
              },
              className
            )}
            readOnly={isLoading}
            aria-busy={isLoading}
            aria-invalid={isError}
            aria-errormessage={isError ? ariaErrorMsg : undefined}
            aria-describedby={isError ? ariaErrorMsg : `${_id}-hint`}
            aria-required={required}
            {...inputProps}
          />
        </div>
        {!isError && hint && (
          <p
            id={`${_id}-hint`}
            className="mt-2 text-sm text-primary-medium-grey"
            role="note"
            aria-live="polite"
          >
            {hint}
          </p>
        )}
        {isError && (
          <p
            id={ariaErrorMsg}
            className="mt-2 flex gap-2 text-sm text-error-dark"
            role="alert"
          >
            <span className="relative">
              <ExclamationTriangleIconSolid
                className="h-6 w-6 text-error-light"
                aria-hidden="true"
              />
              <ExclamationTriangleIconOutline
                className="absolute left-0 top-0 h-6 w-6 text-error-dark"
                aria-hidden="true"
              />
            </span>
            {error}
          </p>
        )}
      </div>
    );
  }
);
