import storage, { KEY_NAME } from "utils/storage";

describe('storage', () => {
    it('can cache a value', () => {
        storage.set("newKey", "hello");
        expect(localStorage.getItem(`${KEY_NAME}newKey`)).toEqual("hello");
    });

    it('can set a value', () => {
        localStorage.setItem(`${KEY_NAME}newKey`, "hello");
        expect(storage.get("newKey")).toEqual("hello");
    })
})