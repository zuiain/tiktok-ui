import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import images from '~/assets/images/';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [errImgSrc, setErrImgSrc] = useState('');
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={errImgSrc || src}
            alt={alt}
            {...props}
            onError={() => setErrImgSrc(fallback)}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
