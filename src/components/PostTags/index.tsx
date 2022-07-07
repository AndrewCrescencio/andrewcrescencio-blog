import Link from 'next/link';

import { Container } from './styles';

import type { TPostTag } from 'src/shared-types/post-tag';

export type PostTagsProps = {
  tags?: TPostTag[];
};
export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <Container>
      tags:
      {tags.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Container>
  );
};
