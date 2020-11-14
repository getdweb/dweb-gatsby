export default class HtmlEntitiesService {

    decodeHtmlEntity(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
    };
    
    encodeHtmlEntity(str) {
        var buf = [];
        for (var i=str.length-1;i>=0;i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return buf.join('');
    };

}
