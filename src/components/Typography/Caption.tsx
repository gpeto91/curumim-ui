import React, { HTMLAttributes } from 'react';
import { css } from '../../theme';

const CaptionStyle = css({
  fontSize: '$small'
});

interface ICaptionStyle
  extends React.DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  color?: string;
}

const Caption: React.FC<ICaptionStyle> = ({ children, color, ...props }) => {
  return (
    <p {...props} className={CaptionStyle()} style={{ color }}>
      {children}
    </p>
  );
};

Caption.displayName = 'Caption';

export { Caption };
