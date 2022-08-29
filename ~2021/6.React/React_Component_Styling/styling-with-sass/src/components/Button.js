import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  return (
    <button
      className={classNames(
        'Button',
        size,
        color,
        {
          outline,
          fullWidth,
        },
        className
        // 이런식으로 className도 받아와서 사용할 수 있다.
        // 이렇게 쓰면 App.js에서 className을 추가할 수 있다.
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
