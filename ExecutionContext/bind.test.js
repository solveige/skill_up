test('using bind we create a new function with an bound this context', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	function summary() {
		return `${this.name} is ${this.nationality} author.`;
	}

	const bookSummary = summary.bind(book);

	const expectedResult = 'J. R. R. Tolkien is British author.';

	expect(bookSummary()).toBe(expectedResult);
});

test('using bind we pass arguments additionally', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	function summary(book1, book2) {
		return `${this.name} is ${this.nationality} author. ${book1} and ${book2} are the most famous his works`;
	}

	const bookSummary = summary.bind(book, 'The Hobbit', 'The Lord of the Rings');

	const expectedResult = 'J. R. R. Tolkien is British author. The Hobbit and The Lord of the Rings are the most famous his works';

	expect(bookSummary()).toBe(expectedResult);
});

	test('If this arg is passed to bind on invocation of an arrow function it will be ignored', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	const summary = () => `${this.name} is ${this.nationality} author.`;

	const bookSummary = summary.bind(book);

	const expectedResult = 'undefined is undefined author.';

	expect(bookSummary()).toBe(expectedResult);
});