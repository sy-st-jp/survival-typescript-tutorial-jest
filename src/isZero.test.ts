import { isZero } from "./isZero";

test("0を渡したらtrueになること", () => {
	const result = isZero(0);
	expect(result).toBe(true);
});

test("1を渡したらfalseになるここと", () => {
	const result = isZero(1);
	expect(result).toBe(false);
});
