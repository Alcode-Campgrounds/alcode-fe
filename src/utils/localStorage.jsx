
export function getStorage(KEY){
    const stringCart = localStorage.getItem(KEY);
    const cart = JSON.parse(stringCart) || [];
    return cart;
}
export function setStorage(KEY, cart){
    localStorage.setItem(KEY, JSON.stringify(cart));
}