/**
 * @files 动态设置文档头部 favicon.ico
 * @author yanghuning 2021-09-29
 */

let headerChildList = document.head ? document.head.children : document.all;
let linkNode = null;
Array.from(headerChildList).map(item => {
    if (item.nodeName === 'LINK' && item.getAttribute('rel') === 'icon') {
        linkNode = item;
    }
})

if (!linkNode) {
    linkNode = document.createElement('link');
    linkNode.setAttribute('rel', 'icon');
}

try {
    let iconPath = require('assets/favicon.ico');
    linkNode.setAttribute('href', iconPath);
} catch (err) {
    console.log(err);
}