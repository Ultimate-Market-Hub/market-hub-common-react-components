import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CollapsibleDetails } from './CollapsibleDetails';

describe('<CollapsibleDetails>', () => {
  it('should show header but not the content', () => {
    render(
      <CollapsibleDetails heading={<div data-testid="heading" />}>
        <div data-testid="content" />
      </CollapsibleDetails>
    );

    expect(screen.getByTestId('heading')).toBeVisible();
    expect(screen.getByTestId('content')).not.toBeVisible();
  });

  it('should show header and the content when defaultIsOpen is true', () => {
    render(
      <CollapsibleDetails defaultIsOpen heading={<div data-testid="heading" />}>
        <div data-testid="content" />
      </CollapsibleDetails>
    );

    expect(screen.getByTestId('heading')).toBeVisible();
    expect(screen.getByTestId('content')).toBeVisible();
  });

  it('should open the content when clicking the header', async () => {
    const user = userEvent.setup();

    render(
      <CollapsibleDetails heading={<div data-testid="heading" />}>
        <div data-testid="content" role="form" />
      </CollapsibleDetails>
    );

    const collapseButton = screen.getByTestId('heading');
    expect(collapseButton).toBeInTheDocument();

    await user.click(collapseButton);

    expect(screen.queryByTestId('content')).toBeVisible();
  });
});
