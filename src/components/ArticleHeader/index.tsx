import Image from 'next/image';

import { Container, Cover, Excerpt, Heading } from './styles';

import type { TStrapiImage } from '@shared-types/strapi-image';
import { ArticleMeta, ArticleMetaProps } from '@components/ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: TStrapiImage;
} & ArticleMetaProps;

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Excerpt>{excerpt}</Excerpt>
      <Cover>
        <Image
          src={cover.url}
          alt="post cover image"
          width={320}
          height={180}
          layout="responsive"
        />
      </Cover>
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Container>
  );
};
