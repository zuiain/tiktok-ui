import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';
const cx = classNames.bind(style);

function Button({
    to,
    href,
    // Các dạng buttons
    text = false,
    primary = false,
    outline = false,
    rounded = false,
    // Các kích thước buttons, default là medium
    small = false,
    large = false,
    // Trạng thái button
    disabled = false,
    // Icon cho button
    leftIcon = false,
    rightIcon = false,
    // Thêm custom class cho button
    className,
    // Nội dung button
    children,
    ...rest
}) {
    let Comp = 'button';

    const props = {
        ...rest,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { primary, outline, text, rounded, small, large, disabled, [className]: className });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
