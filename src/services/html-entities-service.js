export default class HtmlEntitiesService {

    decodeHtmlEntity(str) {
        return str.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
    };
    
    encodeHtmlEntity(str) {
        const buf = [];
        for (let i=str.length-1;i>=0;i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return buf.join('');
    };

}
