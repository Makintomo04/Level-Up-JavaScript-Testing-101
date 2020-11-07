export const add = (a,b) => {
    let sum =  a+b;
    return sum
}
export const total = (delivery,subTotal) => {
    let total =  add(delivery, subTotal);
    return "£" + total
}