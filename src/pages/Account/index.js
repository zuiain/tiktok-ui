import { useParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
const cx = classNames.bind(styles);

function AccountPage() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const la = searchParams.get('la');

    console.log(`Type: ${type} -- Language: ${la}`);

    const { nickname } = useParams();

    return (
        <div className={cx('wrapper')}>
            <h1>AccountPage</h1>
            {nickname && <h2>Tài khoản của {nickname}</h2>}
        </div>
    );
}

export default AccountPage;
