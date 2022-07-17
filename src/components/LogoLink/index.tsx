import { Container, AltText } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaFileSignature } from 'react-icons/fa';

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
  const [hide, setHide] = useState(false);
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Link href={link} passHref className={hide ? 'hide' : ''}>
        <Container target={target} className="logo-link">
          {!!srcImg && (
            <Image
              onError={() => setHide(true)}
              src={srcImg}
              alt="blog logo"
              width={150}
              height={150}
            />
          )}
        </Container>
      </Link>
    );
  }

  return (
    <Container
      href={link}
      target={target}
      className={hide ? 'logo-link hide' : 'logo-link'}
    >
      {!!srcImg && (
        <Image
          onError={() => setHide(true)}
          src={srcImg}
          alt="blog logo"
          width={150}
          height={150}
        />
      )}
    </Container>
  );
};
