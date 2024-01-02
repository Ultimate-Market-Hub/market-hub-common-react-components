import classnames from 'classnames';
import { Button } from 'components/atoms/Button';

export const DangerZone = ({ items }: DangerZoneProps) =>
  items?.length ? (
    <div className="mt-24">
      <h2 className="mb-8 text-lg font-bold">Danger Zone</h2>
      <div className="inline-flex w-full items-center rounded-4 border border-primary-hub bg-white">
        <ul className="w-full">
          {items.map(({ title, body, buttonText, onClickHandler }, i) => (
            <li
              key={i}
              className="align-center border-light-grey/40 flex justify-between border-b-[1px] p-8 last-of-type:border-none"
            >
              <span className="self-center">
                <p
                  className={classnames('font-bold', {
                    'mb-4': Boolean(body),
                  })}
                >
                  {title}
                </p>
                {body ? <p className="text-sm">{body}</p> : null}
              </span>
              <Button onClick={onClickHandler}>{buttonText}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;

interface DangerZoneProps {
  items: DangerZoneItem[];
}

interface DangerZoneItem {
  title: string;
  buttonText: string;
  body?: string | null;
  onClickHandler: () => void;
}
