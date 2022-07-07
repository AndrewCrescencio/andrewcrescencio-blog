import { ArticleHeader, ArticleHeaderProps } from '@components/ArticleHeader';
import { HtmlContent } from '@components/HtmlContent';
import { Container } from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  id,
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
  content,
}: PostProps) => {
  return (
    <Container>
      <ArticleHeader
        author={author}
        categories={categories}
        title={title}
        excerpt={excerpt}
        id={id}
        cover={cover}
        createdAt={createdAt}
      />
      <HtmlContent html={content} />
    </Container>
  );
};
