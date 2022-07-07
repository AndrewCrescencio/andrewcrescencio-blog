import Link from 'next/link';
import Image from 'next/image';

import { Card, CardImage, CardBody, CardTitle, CardText } from './styles';

import { StrapiImage } from '@shared-types/strapi-image';

export type PostCardProps = {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Link href={`/post/${slug}`}>
      <Card>
        <CardImage>
          <Image
            src={cover.url}
            alt={title}
            width={320}
            height={180}
            layout="responsive"
          />
        </CardImage>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{excerpt}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
