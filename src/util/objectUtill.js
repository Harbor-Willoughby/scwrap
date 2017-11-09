export const objectValue = (func, defaultValue) => {
	try {
		return func();
	} catch(err) {
		return defaultValue;
	}
};