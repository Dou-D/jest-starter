import { getSearchObj } from "utils/getSearchObj";

describe("getSearchObj", () => {
  it("can get current route params object", () => {
    window.location.assign("https://www.baidu.com?a=1&b=2")

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });
  it("can return null when not pass a param", () => {
    window.location.assign("https://www.baidu.com")
    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});
