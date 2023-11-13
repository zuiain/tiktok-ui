import classname from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';

const cx = classname.bind(styles);

function MenuItem({ data }) {
    const { icon, title, to } = data;
    return (
        <Button leftIcon={icon} to={to} className={cx('menu-item')}>
            {title}
        </Button>
    );
}

export default MenuItem;
