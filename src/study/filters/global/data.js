/**
 * @files 数字相关过滤器
 * @author yanghuning
 */


/**
 * 保留小数点，定义即自动注册到全局
 * 使用方法 <div>{{ 200 | toFixed(n) }}</div>
 */
export let toFixed = (number, n) => {
    let num = Number(number || 0);
    let bit = Number(n || 0);
    return num.toFixed(bit);
}

/**
 * 转换为星期
 */
export let toWeek = (n) => {
    let w = n * 1;
    if (typeof w !== 'number' && w > 6) return '-';
    switch (w) {
        case 0:
            return '周日'
        case 1:
            return '周一'
        case 2:
            return '周二'
        case 3:
            return '周三'
        case 4:
            return '周四'
        case 5:
            return '周五'
        case 6:
            return '周六'
    }
}