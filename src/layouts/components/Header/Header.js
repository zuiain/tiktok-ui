import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classname from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Icons from '~/components/Icons/';
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
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tik Tok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    {user.connect ? (
                        <>
                            <Tippy content="Upload Video" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <Icons.UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Send mail" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <Icons.FlyIcon width="32rem" height="32rem" />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom" delay={[0, 300]}>
                                <button className={cx('action-btn')}>
                                    <span className={cx('badge')}>{user.numberMessage}</span>
                                    <Icons.MessageIcon width="32rem" height="32rem" />
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
                    <Menu items={user.connect ? config.menu.userMenu : config.menu.defaultMenu}>
                        {user.connect ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/322334e9bfe072b1639e1b9ecc74bfb8~c5_100x100.jpeg?x-expires=1700708400&x-signature=Jj2CvMRfVM18yc58vRRBQTdYvT4%3D"
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
