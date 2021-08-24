import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';

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
    <Styled.Wrapper>
      <LogoLink
        link={'https://github.com/andrewcrescencio'}
        srcImg={logo}
        text={`${blogName} - ${blogDescription}`}
        newTab={true}
      />
      {showText && (
        <Styled.Content>
          <Heading size="medium" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
