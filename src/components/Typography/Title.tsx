import React, { HTMLAttributes } from 'react';
import { css } from '../../theme';

const TitleStyle = css({
  fontSize: '$heading'
});

interface ITitleProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const Title: React.FC<ITitleProps> = ({ children, ...props }) => {
  return (
    <h1 {...props} className={TitleStyle()}>
      {children}
    </h1>
  );
};

Title.displayName = 'Title';

export { Title };
