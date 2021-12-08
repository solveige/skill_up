test('with call we can invoke a function with a specified this context', () => {
	const book = {
		title: 'Hobbit',
		author: 'J. R. R. Tolkien'
	};

	function summary() {
		return `${this.title} was written by ${this.author}.`;
	}

	const bookSummary = summary.call(book);

	const expectedResult = 'Hobbit was written by J. R. R. Tolkien.';

	expect(bookSummary).toBe(expectedResult);
});

test('with using call we pass arguments additionally', () => {
	const book = {
		title: 'Hobbit',
		author: 'J. R. R. Tolkien'
	};

	function summary(genre, year) {
		return `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`;
	};

	const bookSummary = summary.call(book, 'fantasy', '1937');

	const expectedResult = 'Hobbit was written by J. R. R. Tolkien. It is a fantasy novel written in 1937.';

	expect(bookSummary).toBe(expectedResult);
});

test('If this arg is passed to call on invocation of an arrow function it will be ignored', () => {
	const book = {
		title: 'Hobbit',
		author: 'J. R. R. Tolkien'
	};

	const summary = () => `${this.title} was written by ${this.author}.`;

	const bookSummary = summary.call(book);

	const expectedResult = 'undefined was written by undefined.';

	expect(bookSummary).toBe(expectedResult);
});