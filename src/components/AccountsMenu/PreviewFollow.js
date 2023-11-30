import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './AccountsMenu.module.scss';
import PopperWrapper from '~/components/Popper/';
import Image from '~/components/Image';
import Button from '../Button';
import Icons from '~/components/Icons/';

const cx = classNames.bind(styles);
const { CheckIcon } = Icons;

function PreviewFollow({ data, children }) {
    const { avatar, full_name, nickname, followers_count, likes_count } = data;

    const previewRender = (attrs) => (
        <PopperWrapper>
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <div className={cx('preview-top')}>
                    <Image className={cx('preview-avatar')} src={avatar} alt={full_name} />
                    <Button primary className={cx('preview-follow-btn')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('preview-content')}>
                    <p className={cx('preview-name')}>
                        <strong>{full_name}</strong>
                        <CheckIcon className={cx('check-icon')} />
                    </p>
                    <p className={cx('preview-nickname')}>{nickname}</p>
                </div>
                <div className={cx('preview-bottom')}>
                    <strong>{followers_count}M</strong>
                    <span className={cx('preview-followers')}>Followers</span>
                    <strong>{likes_count}M</strong>
                    <span className={cx('preview-likes')}>Likes</span>
                </div>
            </div>
        </PopperWrapper>
    );

    return (
        <Tippy appendTo={document.body} interactive placement="bottom-start" delay={[0, 0]} render={previewRender}>
            {children}
        </Tippy>
    );
}

PreviewFollow.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};

export default PreviewFollow;
