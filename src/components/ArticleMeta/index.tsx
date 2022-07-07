import Link from 'next/link';

import { Container } from './styles';

import { formatDate } from 'src/utils/format-date';

import { TAuthor } from '@shared-types/author';
import { TCategory } from '@shared-types/category';

export type ArticleMetaProps = {
  createdAt: string;
  author?: TAuthor;
  categories?: TCategory[];
};

export const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Container>
      <p>
        {author && typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories && categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => {
                return (
                  <span key={`article-meta-cat-${category.id}`}>
                    <Link href={`/category/${category.slug}`}>
                      <a>{category.displayName}</a>
                    </Link>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Container>
  );
};
