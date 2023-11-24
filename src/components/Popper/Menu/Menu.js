import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import PopperWrapper from '../';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';

const cx = classname.bind(styles);

function Menu({ items = [], hideOnClick = false, children }) {
    const [listMenu, setListMenu] = useState([{ data: items }]);

    useEffect(() => {
        setListMenu([{ data: items }]);
    }, [items]);

    // menu hiện tại - menu cuối cùng của dãy
    const currentMenu = listMenu[listMenu.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (!!item.children) {
                            setListMenu((pre) => [...pre, item.children]);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            offset={[10, 10]}
            delay={[0, 1000]}
            interactive
            placement="bottom-end"
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-box')}>
                        {listMenu.length > 1 && (
                            <HeaderMenu
                                title={currentMenu.title}
                                onBack={() => {
                                    setListMenu((pre) => pre.slice(0, pre.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('main-menu')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setListMenu((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
export default Menu;
