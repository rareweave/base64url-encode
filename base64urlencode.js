module.exports = function toUrlSafeBase64(str) {
    var utf8Bytes = new TextEncoder().encode(str);

    var base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

    var base64 = '';
    var padding = 0;
    for (var i = 0; i < utf8Bytes.length; i += 3) {
        var a = utf8Bytes[i];
        var b = utf8Bytes[i + 1];
        var c = utf8Bytes[i + 2];
        if (b === undefined) b = 0, padding++;
        if (c === undefined) c = 0, padding++;

        var index1 = a >> 2;
        var index2 = ((a & 3) << 4) | (b >> 4);
        var index3 = ((b & 15) << 2) | (c >> 6);
        var index4 = c & 63;

        base64 += base64Chars[index1] + base64Chars[index2] + base64Chars[index3] + base64Chars[index4];
    }

    base64 = base64.slice(0, base64.length - padding);

    return base64;
}