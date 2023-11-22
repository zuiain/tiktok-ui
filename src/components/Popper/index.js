import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);

function PopperWrapper({ className, children }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    classNames: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default PopperWrapper;
