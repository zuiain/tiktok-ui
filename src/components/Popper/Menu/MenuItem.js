import classname from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classname.bind(styles);

function MenuItem({ data, onClick }) {
    const { icon, title, to, separate } = data;
    return (
        <Button leftIcon={icon} to={to} className={cx('menu-item', { separate })} onClick={onClick}>
            {title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
