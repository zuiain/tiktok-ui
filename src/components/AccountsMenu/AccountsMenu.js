import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountsMenu.module.scss';
import AccountItem from './AccountItem';
import PreviewFollow from './PreviewFollow';
import { searchService } from '~/services';

const cx = classNames.bind(styles);

function AccountsMenu({ isFollowing = false, label }) {
    const [listSuggestedAccounts, setListSuggestedAccounts] = useState([]);
    const [listFollowingAccounts, setListFollowingAccounts] = useState([]);

    useEffect(() => {
        const searchSuggestedAccounts = async () => {
            const _searchResult = await searchService.searchAccounts('a');
            if (_searchResult.length > 0) {
                setListSuggestedAccounts(_searchResult);
            } else {
                alert('Không có kết quả trả về :)) ');
            }
        };
        searchSuggestedAccounts();

        const searchFollowingAccounts = async () => {
            const _searchResult = await searchService.searchAccounts('hoa');
            if (_searchResult.length > 0) {
                setListFollowingAccounts(_searchResult);
            } else {
                alert('Không có kết quả trả về :)) ');
            }
        };
        searchFollowingAccounts();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {isFollowing
                ? listFollowingAccounts.map((account) => <AccountItem data={account} key={account.id} />)
                : listSuggestedAccounts.map((account) => (
                      <PreviewFollow data={account} key={account.id}>
                          <AccountItem data={account} />
                      </PreviewFollow>
                  ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

AccountsMenu.propTypes = {
    label: PropTypes.string.isRequired,
};

export default AccountsMenu;
