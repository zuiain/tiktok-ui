import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';

import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { XMarkIcon, SearchIcon } from '~/components/Icons';

const cx = classname.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        const idTimer = setTimeout(() => {
            setSearchResult([1, 2, 3, 4]);
        }, 0);

        return () => {
            clearTimeout(idTimer);
        };
    }, []);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    return (
        <>
            <HeadlessTippy
                placement="bottom"
                interactive={true}
                visible={showResults && searchResult.length > 0}
                onClickOutside={handleHideResults}
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
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <XMarkIcon />
                        </button>
                    )}
                    {/* <SpinnerIcon className={cx('loading')} /> */}
                    <span className={cx('span-spliter')}></span>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
