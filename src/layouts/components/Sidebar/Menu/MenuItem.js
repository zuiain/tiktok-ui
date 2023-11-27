import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ to, icons, title }) {
    const { icon, activeIcon } = icons;
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {(nav) => {
                return (
                    <>
                        {nav.isActive ? activeIcon : icon}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icons: PropTypes.object.isRequired,
};

export default MenuItem;
