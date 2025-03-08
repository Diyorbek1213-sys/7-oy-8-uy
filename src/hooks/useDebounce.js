import { useEffect, useState } from 'react';

const useDebounce = initialValue => {
	const [value, setValue] = useState(initialValue);
	useEffect(() => {
		let s = setTimeout(() => {
			setValue(initialValue);
		}, 1000);

		return () => clearTimeout(s);
	}, [initialValue]);

	return value;
};

export default useDebounce;
