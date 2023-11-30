import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu from '~/layouts/components/Sidebar/Menu';
import AccountsMenu from '~/components/AccountsMenu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={'customize'} />
            <AccountsMenu label="Suggested Accounts" />
            <AccountsMenu label="Following Accounts" isFollowing={true} isSuggest={false} />
        </aside>
    );
}

export default Sidebar;
