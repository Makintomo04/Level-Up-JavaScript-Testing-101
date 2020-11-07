import {add, total} from "./App"

test("Should be equal to 10",()=>{
    let result = add(5,5)
expect(result).toBe(10);
})
test("Should total of delivery and subtotal",()=>{
    let result = total(5,40)
expect(result).toBe("£45");
})