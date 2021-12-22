test('using bind we create a new function with an bound this context', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	const expectedResult = `${book.name} is ${book.nationality} author.`;

	function summary() {
		return `${this.name} is ${this.nationality} author.`;
	}

	const bookSummary = summary.bind(book);

	expect(bookSummary()).toBe(expectedResult);
});

test('If this arg is passed to bind on invocation of an arrow function it will be ignored', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	const expectedResult = `${book.name} is ${book.nationality} author.`;

	const summary = () => `${this.name} is ${this.nationality} author.`;

	const bookSummary = summary.bind(book);

	expect(bookSummary()).not.toBe(expectedResult);
});

test('using bind we pass arguments additionally', () => {
	const book = {
		nationality: 'British',
		name: 'J. R. R. Tolkien'
	};

	const firstBook = 'The Hobbit';
	const secondBook = 'The Lord of the Rings';

	const expectedResult = `${book.name} is ${book.nationality} author. ${firstBook} and ${secondBook} are the most famous his works`;

	function summary(book1, book2) {
		return `${this.name} is ${this.nationality} author. ${book1} and ${book2} are the most famous his works`;
	}

	const bookSummary = summary.bind(book, firstBook, secondBook);

	expect(bookSummary()).toBe(expectedResult);
});

test('bind arguments', () => {
	const author = 'J. R. R. Tolkien'
	const firstBook = 'The Hobbit';
	const expectedResult = `${firstBook} was written by ${author}`;

	function summary(author, book) {
		return `${book} was written by ${author}`;
	}

	const summaryTolkien = summary.bind(null, author);

	expect(summaryTolkien(firstBook)).toBe(expectedResult);
});