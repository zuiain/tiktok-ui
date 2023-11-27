import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from '~/layouts/components/Sidebar/Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={'customize'}></Menu>
        </aside>
    );
}

export default Sidebar;
