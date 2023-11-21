import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const { full_name, avatar, nickname, tick } = data;
    return (
        <Link to={`/${nickname}`}>
            <div className={cx('wrapper')}>
                <Image src={avatar} alt={avatar} className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{full_name}</span>
                        {tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                    </p>
                    <span className={cx('username')}>{nickname}</span>
                </div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
