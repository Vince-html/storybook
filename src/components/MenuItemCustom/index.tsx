import React, {
  CSSProperties,
  MutableRefObject,
  useRef,
  useState
} from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { Menu } from '@mui/material';
import { PopoverOrigin } from '@mui/material';
import { ButtonPopoverMenu, MenuItemStyle } from './style';

interface MenuItemCustomProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  iconEnd?: boolean;
  iconStart?: boolean;
  titleStyle?: CSSProperties;
  customStyle?: CSSProperties | object;
  divider?: boolean;
  iconArrow?: boolean;
  showPopover?: boolean;
  showAnyModal?: boolean;
  rigthDirection?: boolean;
}

const MenuItemCustom = ({
  children,
  icon,
  title,
  iconEnd,
  divider,
  iconStart,
  titleStyle,
  showPopover,
  customStyle,
  rigthDirection,
  showAnyModal = false,
  iconArrow = false
}: MenuItemCustomProps) => {
  const [anchorComponent, setAnchorComponent] = useState<
    HTMLLIElement | null | undefined
  >(null);

  const divRef = useRef() as MutableRefObject<HTMLLIElement>;

  const openComponent = Boolean(anchorComponent);
  const id = openComponent ? 'menu-item-custom' : undefined;
  const handleClickComponent = () => {
    setAnchorComponent(divRef?.current);
  };
  const Icon = icon;
  const setDirectionPopoverRight: PopoverOrigin = {
    vertical: 'center',
    horizontal: 'right'
  };
  const setDirectionPopoverLeft: PopoverOrigin = {
    vertical: 'center',
    horizontal: 'left'
  };

  const handleCloseComponent = () => {
    setAnchorComponent(null);
  };

  return (
    <MenuItemStyle
      ref={divRef}
      id={id}
      autoFocus={openComponent}
      selected={openComponent}
      divider={divider}
      customStyle={customStyle}
    >
      {iconStart ? Icon : ''}
      <ButtonPopoverMenu
        style={titleStyle}
        type="button"
        onClick={handleClickComponent}
      >
        {title}
        {!showPopover && children}
      </ButtonPopoverMenu>
      {iconEnd ? Icon : ''}
      {iconArrow &&
        (openComponent ? (
          <MdArrowLeft size={20} />
        ) : (
          <MdArrowRight size={20} />
        ))}
      {showPopover && (
        <Menu
          open={openComponent}
          anchorEl={anchorComponent}
          onClose={handleCloseComponent}
          anchorOrigin={
            rigthDirection ? setDirectionPopoverRight : setDirectionPopoverLeft
          }
          transformOrigin={
            !rigthDirection ? setDirectionPopoverRight : setDirectionPopoverLeft
          }
          style={{ opacity: showAnyModal ? 0 : 1 }}
        >
          {children}
        </Menu>
      )}
    </MenuItemStyle>
  );
};

export { MenuItemCustom };
