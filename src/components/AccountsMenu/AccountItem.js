import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Image from '~/components/Image';
import { forwardRef } from 'react';

import styles from './AccountsMenu.module.scss';
import Icons from '~/components/Icons/';

const cx = classNames.bind(styles);
const { CheckIcon } = Icons;

const AccountItem = forwardRef(({ data }, ref) => {
    const { avatar, full_name, nickname } = data;
    return (
        <div className={cx('account-item')} ref={ref}>
            <Image className={cx('avatar')} src={avatar} alt={full_name} />
            <div className={cx('item-info')}>
                <p className={cx('name')}>
                    <strong>{full_name}</strong>
                    <CheckIcon className={cx('check-icon')} />
                </p>
                <p className={cx('nickname')}>{nickname}</p>
            </div>
        </div>
    );
});

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
