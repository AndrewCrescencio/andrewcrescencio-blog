import { Container, Content, Description, Heading } from './styles';

import { LogoLink } from '@components/LogoLink';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Container>
      <LogoLink
        link={'https://github.com/andrewcrescencio'}
        srcImg={logo}
        newTab={true}
      />
      {showText && (
        <Content>
          <Heading>{blogName}</Heading>
          <Description>{blogDescription}</Description>
        </Content>
      )}
    </Container>
  );
};
