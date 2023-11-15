import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { MENU_ITEMS, userMenu } from './Menu';
import { FlyIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classname.bind(styles);

function Header() {
    const [user] = useState({ connect: true, numberMessage: 3 });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img src={images.logo} alt="Tik Tok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {user.connect ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Send mail" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <FlyIcon width="32rem" height="32rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <span className={cx('message')}>{user.numberMessage}</span>
                                    <MessageIcon width="32rem" height="32rem" />
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
                    <Menu items={user.connect ? userMenu : MENU_ITEMS}>
                        {user.connect ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/95a7a425b16361c55b1d7fca778abd7d~c5_100x100.jpeg?x-expires=1700103600&x-signature=YaXoHaGvPh6nXhke3U%2BPw3l7wh8%3D"
                                alt="nguyen van a"
                                fallback="https://i.pinimg.com/474x/38/50/1b/38501b71a75d80ffbfd9291d0b3f75ee.jpg"
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
