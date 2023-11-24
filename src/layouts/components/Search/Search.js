import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classname from 'classnames/bind';

import PopperWrapper from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import Icons from '~/components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

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
            if (searchResult.length > 0) {
                setSearchResult(searchResult);
                setLoading(false);
            } else {
                alert('Không có kết quả trả về :)) ');
                setLoading(false);
            }
        };

        fetchApi();

        //encodeURIComponent -- chuyển ký tự đặc biệt như &, ^ , # sang kiểu khác tránh làm lỗi url
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    // const handleKeyUp = (e) => {
    //     if (e.code === 'Space' && searchValue === ' ') {
    //         setSearchValue('');
    //     }
    // };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        <>
            <HeadlessTippy
                appendTo={() => document.body}
                placement="bottom"
                interactive={true}
                visible={showResults && searchResult.length > 0}
                onClickOutside={handleHideResults}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.length > 0 &&
                                searchResult.map((result) => <AccountItem data={result} key={result.id} />)}
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
                        onChange={handleChange}
                        // onKeyUp={handleKeyUp}
                        onFocus={() => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <Icons.XMarkIcon />
                        </button>
                    )}
                    {loading && <Icons.SpinnerIcon className={cx('loading')} />}
                    <span className={cx('span-splitter')}></span>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <Icons.SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
