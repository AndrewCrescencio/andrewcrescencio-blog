import Link from 'next/link';

import { Container } from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;
  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Container target={target}>{children}</Container>
      </Link>
    );
  }

  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};
