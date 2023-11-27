import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import config from '~/config';
import Icons from '~/components/Icons';

const cx = classNames.bind(styles);
const {
    HomeIcon,
    HomeActiveIcon,
    PeopleIcon,
    PeopleActiveIcon,
    CompassIcon,
    CompassActiveIcon,
    CameraIcon,
    CameraActiveIcon,
} = Icons;

function Menu({ className }) {
    return (
        <nav className={cx('menu', className)}>
            <MenuItem
                title="For You"
                to={config.routes.home}
                icons={{ icon: <HomeIcon />, activeIcon: <HomeActiveIcon /> }}
            />

            <MenuItem
                title="Following"
                to={config.routes._following}
                icons={{ icon: <PeopleIcon />, activeIcon: <PeopleActiveIcon /> }}
            />

            <MenuItem
                title="Explore"
                to={config.routes._explore}
                icons={{ icon: <CompassIcon />, activeIcon: <CompassActiveIcon /> }}
            />

            <MenuItem
                title="LIVE"
                to={config.routes._live}
                icons={{ icon: <CameraIcon />, activeIcon: <CameraActiveIcon /> }}
            />
        </nav>
    );
}

Menu.propTypes = {
    className: PropTypes.string,
};

export default Menu;
