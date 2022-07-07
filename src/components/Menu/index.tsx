import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';

import { Wrapper, Nav, OpenClose } from './styles';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};

export const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Wrapper className={menuVisible ? 'open' : ''} aria-hidden={!menuVisible}>
        <OpenClose
          aria-label="Open or close menu"
          title="Open or close menu"
          onClick={handleOpenCloseMenu}
          className={menuVisible ? 'open' : ''}
        >
          {menuVisible && (
            <span aria-label="Close menu" style={{ fontWeight: 'bold' }}>
              &#x2715;
            </span>
          )}
          {!menuVisible && <span aria-label="Open menu">☰</span>}
        </OpenClose>
        <Nav>
          <LogoLink link="/" srcImg={logo} />

          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Nav>
      </Wrapper>
    </>
  );
};
