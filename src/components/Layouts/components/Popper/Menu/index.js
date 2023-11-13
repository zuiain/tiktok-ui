import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';
import styles from './Menu.module.scss';
import PopperWrapper from '../';
import MenuItem from './MenuItem';
import HeaderMenu from './Header';
import { useState } from 'react';

const cx = classname.bind(styles);
const defaultFNC = () => {};

function Menu({ items = [], onChange = defaultFNC, children }) {
    const [listMenu, setListMenu] = useState([{ data: items }]);
    const current = listMenu[listMenu.length - 1];
    console.log(onChange);
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setListMenu((pre) => [...pre, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            visible
            delay={[0, 1000]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-box')}>
                        {listMenu.length > 1 && (
                            <HeaderMenu
                                title={current.title}
                                onBack={() => {
                                    setListMenu((pre) => pre.slice(0, pre.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('main-menu')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
