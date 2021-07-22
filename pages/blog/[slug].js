import * as React from 'react';
import { format, parseISO } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client';
import { getMdxBySlug, getAllFrontMatters } from '../../lib/getMdx';
import MdxComponents from '../../components/MdxComponents';
import ArticleContainer from '../../components/ArticleContainer';

export const BlogPost = ({ post: { code, frontmatter } }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  const publishedAt = parseISO(frontmatter.published)
  return (
    <>
    <div className="mb-2 lg:mb-4">
    <h2 className="text-4xl text-gray-800 font-black leading-snug mb-2">{frontmatter.title}</h2>
      <time className="text-lg text-gray-500 mb-2 lg:mb-4" dateTime={publishedAt.toISOString()}>
                {format(publishedAt, 'dd MMM yyyy')}
              </time>
    </div>

      <ArticleContainer>
        <Component components={MdxComponents} />
      </ArticleContainer>
    </>
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
