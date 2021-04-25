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