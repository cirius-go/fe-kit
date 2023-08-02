import tw from "tailwind-styled-components";
import { ReactElement } from "react";
import ButtonTypes from "./types";

const S = {
  Button: tw.button<ButtonTypes.Styled>``,
  Content: tw.div``,
  WithIcon: tw.div<ButtonTypes.Styled>`
      flex
      gap-4
      ${({ iconPosition }) =>
        iconPosition === ButtonTypes.IconPosition.RIGHT
          ? `flex-row-reverse`
          : `flex-row`}
      `,
};

function Button({
  variant,
  icon,
  iconPosition,
  children,
  ...buttonProps
}: ButtonTypes.Props) {
  const content = <S.Content>{children}</S.Content>;

  const withIcon = (child: ReactElement) => {
    if (typeof icon === "undefined") {
      return child;
    }

    return (
      <S.WithIcon iconPosition={iconPosition}>
        {icon}
        {child}
      </S.WithIcon>
    );
  };

  return (
    <S.Button variant={variant} {...buttonProps}>
      {withIcon(content)}
    </S.Button>
  );
}

export default Button;
