import Tippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';
import styles from './Menu.module.scss';
import PopperWrapper from '../';
import MenuItem from './MenuItem';

const cx = classname.bind(styles);

function Menu({ items = [], children }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            delay={[0, 1000]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-box')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
