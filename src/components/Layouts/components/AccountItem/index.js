import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccounItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a5a524bbc450759df4e985c70e317973~c5_100x100.jpeg?x-expires=1699779600&x-signature=ROTd1vIaeD1Ba%2FoYpEGb3nI9GG4%3D"
                alt="Ảnh bị lỗi"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
