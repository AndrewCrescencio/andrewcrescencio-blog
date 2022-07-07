import { MenuPropsLinks } from '@components/Menu';
import { TStrapiImage } from './strapi-image';

export type TSettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: TStrapiImage;
  menuLink: MenuPropsLinks[];
  text: string;
};
