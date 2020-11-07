import {addNumbers} from "./App"

test("Should be equal to 10",()=>{
    let result = addNumbers(5,5)
expect(result).toBe(10);
})