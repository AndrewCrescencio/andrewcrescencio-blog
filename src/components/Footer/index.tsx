import { HtmlContent } from '@components/HtmlContent';
import { Container } from './styles';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Container>
      <HtmlContent html={footerHtml} />
    </Container>
  );
};
