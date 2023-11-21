import { useState, useEffect } from 'react';

// nhận 2 đối số -  giá trị và độ trễ
// sau thời gian độ trễ -> giá trị sẽ được tạo
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timerID = setTimeout(() => setDebounceValue(value), delay);
        return () => {
            clearTimeout(timerID);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce;
