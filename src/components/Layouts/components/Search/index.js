import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';

import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { XMarkIcon, SearchIcon, SpinnerIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/api-services/searchServices';

const cx = classname.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const searchResult = await searchServices.search(debounced);
            if (searchResult) {
                setSearchResult(searchResult);
                setLoading(false);
            } else {
                setLoading(false);
            }
        };

        fetchApi();

        //fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`) ...
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleKeyUp = (e) => {
        if (e.code === 'Space' && searchValue === ' ') {
            setSearchValue('');
        }
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
                            {searchResult.length > 0 &&
                                searchResult.map((res) => <AccountItem data={res} key={res.id} />)}
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
                        onKeyUp={handleKeyUp}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <XMarkIcon />
                        </button>
                    )}
                    {loading && <SpinnerIcon className={cx('loading')} />}
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
