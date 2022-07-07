import { Container, AltText } from './styles';
import Link from 'next/link';
import Image from 'next/image';

export type LogoLinkProps = {
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Container target={target} className="logo-link">
          {!!srcImg && <Image src={srcImg} alt="" width={150} height={150} />}
        </Container>
      </Link>
    );
  }

  return (
    <Container href={link} target={target} className="logo-link">
      {!!srcImg && <Image src={srcImg} alt="" width={150} height={150} />}
    </Container>
  );
};
