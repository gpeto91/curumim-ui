import React, { HTMLAttributes } from 'react';
import { css } from '../../theme';

const SubtitleStyle = css({
  fontSize: '$subheading'
});

interface ITitleProps
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const Subtitle: React.FC<ITitleProps> = ({ children, ...props }) => {
  return (
    <h2 {...props} className={SubtitleStyle()}>
      {children}
    </h2>
  );
};

Subtitle.displayName = 'Subtitle';

export { Subtitle };
