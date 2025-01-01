export const pascalCase = (str: string): string => {
	const split_string = str.split('-');

	const formatted_string = split_string
		.map((s) => {
			const first_letter = s.charAt(0).toUpperCase();
			const remainder = s.slice(1);

			return `${first_letter}${remainder}`;
		})
		.reduce((previousValue, currentValue) => {
			return `${previousValue}${currentValue}`;
		}, '');

	return formatted_string;
};
