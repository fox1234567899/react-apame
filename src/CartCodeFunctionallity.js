function idForCartCode(length =10){
    const ch='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for(let i=0; i<length; i++){
        const randomI=Math.floor(Math.random() * ch.length);
        result +=ch[randomI];
    }
    return result;
}


export const randomNumberForCart=idForCartCode();