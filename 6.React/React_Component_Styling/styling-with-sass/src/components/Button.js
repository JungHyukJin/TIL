import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({ children, size, color, outline, fullWidth }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      // props로받아온 outline과 fullWidth값이 트루일 때만, 전체 클래스네임에 포함된다.
      // 즉, 값이 트루일때만 적용된다.
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
