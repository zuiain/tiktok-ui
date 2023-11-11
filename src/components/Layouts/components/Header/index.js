import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';

import images from '~/assets/images';
import styles from './Header.module.scss';
import PopperWrapper from '../Popper';
import AccountItem from '../AccountItem';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classname.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const idTimer = setTimeout(() => {
            setSearchResult([]);
        }, 0);

        return () => {
            clearTimeout(idTimer);
        };
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Tik Tok" />
                    </Link>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem /> <AccountItem /> <AccountItem /> <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                        <span className={cx('span-spliter')}></span>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text to="./upload">
                        Upload
                    </Button>
                    <Button primary onClick={() => alert('ok')}>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
