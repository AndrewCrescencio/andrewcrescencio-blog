import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should open/close menu on button click', () => {
    renderTheme(<Menu {...props} links={undefined} />);
    const buttonLInk = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLInk).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should render button link', () => {
    renderTheme(<Menu {...props} />);
    const buttonLInk = screen.getByRole('link', { name: 'Open or close menu' });

    fireEvent.click(buttonLInk);

    expect(screen.queryByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Andrew Crescencio' }));
    expect(screen.getByRole('img', { name: 'Andrew Crescencio' }));

    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);
    fireEvent.click(buttonLInk);
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
