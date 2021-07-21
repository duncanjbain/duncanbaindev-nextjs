/* eslint-disable jsx-a11y/heading-has-content */
import Link from 'next/link';
import Anchor from './Anchor';

const MdxComponents = {
  h2: ({ ...props }) => {
    return <h2 {...props} className="articleH2" />;
  },
  h3: ({ ...props }) => {
    return <h3 {...props} className="articleH3" />;
  },
  h4: ({ ...props }) => {
    return <h4 {...props} className="articleH4" />;
  },
  h5: ({ ...props }) => {
    return <h5 {...props} className="articleH5" />;
  },
  a: ({href, children, ...props}) => {
      return (
      <Link {...props} passHref href={href}>
          <Anchor className="articleLink">
          {children}
          </Anchor>
      </Link>
      )
  },
  p: ({ ...props }) => {
    return <p {...props} className="articleP" />;
  },
  strong: ({ ...props }) => {
    return <strong {...props} className="articleStrong" />;
  },
  blockquote: ({ ...props }) => {
    return <blockquote {...props} className="articleBlockQuote" />;
  },
  ul: ({ ...props }) => {
    return <ul {...props} className="articleUl" />;
  },
  ol: ({ ...props }) => {
    return <ol {...props} className="articleOl" />;
  },
  li: ({ ...props }) => {
    return <li {...props} className="articleLi" />;
  },
  em: ({ ...props }) => {
    return <em {...props} className="articleEm" />;
  },
};

export default MdxComponents;
