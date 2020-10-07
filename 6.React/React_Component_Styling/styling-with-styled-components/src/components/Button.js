import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, color)};
      }
      &:active {
        background: ${darken(0.1, color)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  /* 공통 스타일  */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {/* color가 rest안에 들어가기 때문에 color={color}는 생략해도 되지만 */}
      {/* 어떠한 props들이 따로 들어가는지 명시하면 좋기 때문에 따로 명시한다 */}
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
};

export default Button;
