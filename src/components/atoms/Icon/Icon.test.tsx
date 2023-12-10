import { render } from '@testing-library/react';
import { Icon, type IconProps } from './Icon';

vi.mock('@heroicons/react/24/solid', () => ({
  CheckIcon: vi.fn((props) => <div data-testid="solid" {...props} />),
}));
vi.mock('@heroicons/react/24/outline', () => ({
  CheckIcon: vi.fn((props) => <div data-testid="outline" {...props} />),
}));

describe('<Icon>', () => {
  it.each<IconProps['version']>(['solid', 'outline', undefined])(
    'should match the snapshot with version: %s',
    (version) => {
      render(<Icon version={version} name={'CheckIcon'} />);

      expect(document.body).toMatchSnapshot();
    }
  );
});
