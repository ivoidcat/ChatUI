import React from 'react';
import clsx from 'clsx';
import DOMPurify from 'dompurify';

export type RichTextProps = {
  className?: string;
  content: string;
  options?: DOMPurify.Config;
};

export const RichText = React.forwardRef<HTMLDivElement, RichTextProps>((props, ref) => {
  const { className, content, options = {}, ...other } = props;
  const html = {
    __html: DOMPurify.sanitize(content, options) as string,
  };

  return (
    <div
      className={clsx('RichText', className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={html}
      ref={ref}
      {...other}
    />
  );
});
