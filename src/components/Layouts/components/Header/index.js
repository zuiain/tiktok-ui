import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faCloudUpload,
    faEllipsisVertical,
    faMagnifyingGlass,
    faPlaneDeparture,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

import images from '~/assets/images';
import styles from './Header.module.scss';
import PopperWrapper from '../Popper';
import Menu from '../Popper/Menu';
import AccountItem from '../AccountItem';
import Button from '../Button';
import { MENU_ITEMS, userMenu } from './Menu';

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

    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setCurrentUser(true);
        }, 5000);

        return () => {
            clearTimeout(timerId);
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
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy content="Send mail" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="./upload">
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/95a7a425b16361c55b1d7fca778abd7d~c5_100x100.jpeg?x-expires=1700103600&x-signature=YaXoHaGvPh6nXhke3U%2BPw3l7wh8%3D"
                                alt="nguyen van a"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
