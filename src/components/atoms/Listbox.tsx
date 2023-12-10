import { forwardRef, Fragment, type ReactNode } from 'react';
import { Listbox as HeadlessListbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export type ListboxOption<TValue = string, TName = string> = {
  value: TValue;
  name: TName;
  disabled?: boolean;
};

type GetOptionsParams<TValue = string, TName = string> = {
  options: ListboxOption<TValue, TName>[];
  excluded?: ListboxOption<TValue, TName>[];
  emptyMessage?: string;
};

export function getOptions<TValue = string, TName = string>({
  options,
  excluded,
}: GetOptionsParams<TValue, TName>): ListboxOption<TValue, TName>[] {
  const excludedIds = excluded?.map((item) => item.value);

  const filteredItems = options?.filter(
    (option) => !excludedIds?.includes(option.value)
  );

  return filteredItems;
}

interface GetDisplayValueArgs {
  placeholder?: string | null;
  options: ListboxOption[];
  value?: ListboxOption | ListboxOption[];
}

const getDisplayValue = ({
  placeholder,
  options,
  value,
}: GetDisplayValueArgs) => {
  const isMultiple = Array.isArray(value);
  if (!options?.length) {
    return 'No options available';
  }

  if (!isMultiple && value?.name) {
    return value.name;
  }

  if (isMultiple && value?.length) {
    return `Selected (${value.length})`;
  }

  if (placeholder) {
    return <span className="text-neutral-700">{placeholder}</span>;
  }

  return <div className="h-20" />;
};

export interface BaseListboxProps {
  label?: string | null;
  isRequired?: boolean;
  options: ListboxOption[];
  placeholder?: string | null;
  disabled?: boolean;
  error?: string | null;
  name?: string;
  optionsHeaderRender?: ReactNode;
  fixPosition?: 'left' | 'right';
}

export interface ListboxProps extends BaseListboxProps {
  value?: ListboxOption | null;
  defaultValue?: ListboxOption;
  onChange?: (option: ListboxOption) => void;
  multiple?: false;
}

export interface MultiListboxProps extends BaseListboxProps {
  value?: ListboxOption[] | null;
  defaultValue?: ListboxOption[];
  onChange?: (option: ListboxOption[]) => void;
  multiple: true;
}

export const Listbox = forwardRef<any, ListboxProps | MultiListboxProps>(
  (
    {
      label,
      isRequired,
      options,
      value,
      defaultValue,
      placeholder,
      disabled,
      error,
      onChange,
      multiple,
      name,
      optionsHeaderRender,
      fixPosition,
    },
    ref // eslint-disable-line @typescript-eslint/no-unused-vars
  ) => (
    <div className="w-full">
      <HeadlessListbox
        by="value"
        value={value}
        defaultValue={value || defaultValue}
        onChange={onChange}
        disabled={disabled || !options.length}
        multiple={multiple}
        name={name}
      >
        {({ open, disabled }) => (
          <>
            {label && (
              <HeadlessListbox.Label className="text-14 block font-medium text-primary-darker-grey">
                {label}
                {isRequired && (
                  <span className="inline-block scale-[1.2] pl-4 text-error">
                    *
                  </span>
                )}
              </HeadlessListbox.Label>
            )}
            <div
              className={classNames('relative', {
                'mt-4': label,
              })}
            >
              <HeadlessListbox.Button
                className={classNames(
                  'focus:ring-primary-hub-500500 relative h-[42px] w-full rounded-[6px] border py-8 pl-12 pr-40 text-left shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm',
                  {
                    'border-error': error,
                    'border-primary-light-grey': !error,
                    'cursor-default bg-primary-white': !disabled,
                    'cursor-not-allowed bg-neutral-100 text-primary-medium-grey':
                      disabled,
                    'border-primary-hub text-error placeholder-error-light focus:border-error focus:ring-error':
                      error,
                    'rounded-s-0': fixPosition === 'right',
                    'rounded-e-0': fixPosition === 'left',
                  }
                )}
              >
                {({ value: uncontrolledValue }) => (
                  <>
                    <span className="block truncate">
                      {getDisplayValue({
                        placeholder,
                        options,
                        value: value || uncontrolledValue,
                      })}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8">
                      <ChevronUpDownIcon
                        className="h-20 w-20 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </>
                )}
              </HeadlessListbox.Button>
              <Transition
                as={Fragment}
                show={open && options.length > 0}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <HeadlessListbox.Options className="text-16 absolute z-10 mt-4 max-h-[240px] w-full overflow-auto rounded-[6px] bg-primary-white py-4 shadow-lg ring-1 ring-primary-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {optionsHeaderRender}
                  {options.map((option) => (
                    <HeadlessListbox.Option
                      key={option.value}
                      value={option}
                      disabled={option.disabled}
                      className={({ active, disabled }) =>
                        classNames(
                          'relative select-none py-8 pl-12 pr-[36px]',
                          {
                            'text-neutral-900': !active,
                            'bg-primary-hub-700 text-primary-white': active,
                            'cursor-not-allowed text-primary-light-grey':
                              disabled,
                          }
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={classNames('block truncate', {
                              'font-normal': !selected,
                              'font-semibold': selected,
                            })}
                          >
                            {option.name}
                          </span>
                          {selected ? (
                            <span
                              className={classNames(
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                                {
                                  'text-primary-hub-700': !active,
                                  'text-primary-white': active,
                                }
                              )}
                            >
                              <CheckIcon
                                aria-hidden="true"
                                className="h-20 w-20"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </HeadlessListbox.Option>
                  ))}
                </HeadlessListbox.Options>
              </Transition>
            </div>
          </>
        )}
      </HeadlessListbox>
      {error && <p className="mt-8 text-sm text-error">{error}</p>}
    </div>
  )
);
