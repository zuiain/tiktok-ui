import { forwardRef, useState } from 'react';
import classNames from 'classnames';
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

export default Image;
