import * as React from 'react';
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client';
import { getMdxBySlug, getAllFrontMatters } from '../../lib/getMdx';

const BlogPost = ({ post: { code, frontmatter } }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const publishedAt = parseISO(frontmatter.published)
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <time dateTime={publishedAt.toISOString()}>
                {format(publishedAt, 'dd MMM yyyy')}
              </time>
      <div>
        <Component />
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllFrontMatters();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { code, frontmatter } = await getMdxBySlug(context.params.slug);
  return {
    props: {
      post: {
        code,
        frontmatter,
      },
    },
  };
};

export default BlogPost;
