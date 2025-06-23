const generateKey = require("../lib/actions/generateKey");

test("Test digit generation", () => {
	const gen = jest.fn(generateKey);
	gen();
	gen({ type: "digit" });
	gen({ length: 8 });
	gen({ type: "digit", length: 1 });
	gen({ type: "digit", length: 16 });
	expect(gen).toHaveReturnedTimes(5);
});

test("Test string generation", () => {
	const gen = jest.fn(generateKey);
	gen({ type: "string" });
	gen({ length: 16 });
	gen({ type: "string", length: 1 });
	gen({ type: "string", length: 32 });
	expect(gen).toHaveReturnedTimes(4);
});

test("Test exceptions", () => {
	expect(() => generateKey({ length: -1 })).toThrow();
	expect(() => generateKey({ type: "digit", length: 17 })).toThrow();
	expect(() => generateKey({ type: "string", length: 33 })).toThrow();
	expect(() => generateKey({ length: "8" })).toThrow();
	expect(() => generateKey({ length: 3.14 })).toThrow();
	expect(() => generateKey({ type: "unspprtd" })).toThrow();
});
