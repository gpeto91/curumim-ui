import React, { HTMLAttributes } from 'react';
import { css } from '../../theme';

const TextStyle = css({
  fontSize: '$base'
});

interface ITextProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

const Text: React.FC<ITextProps> = ({ children, ...props }) => {
  return (
    <p {...props} className={TextStyle()}>
      {children}
    </p>
  );
};

Text.displayName = 'Text';

export { Text };
