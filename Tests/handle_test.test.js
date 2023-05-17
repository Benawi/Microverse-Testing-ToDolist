import store from "../src/modules/Store.js";

describe("AddItem", () => {
  test("testAdd", () => {
    const Store = new store(); // Instantiate the Store object
    const obj = { description: "Sample task", completed: false };

    expect(Store.add(obj)).toBe("success");
  });
});
