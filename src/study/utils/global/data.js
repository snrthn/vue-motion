/**
 * @files 自助注册方法 该目录下方法定义即注册到全局
 * @author yanghuning
 */

/**
 * 测试方法
 * 使用方法 项目所有组件中调用定法 this.testDemo()
 */
export let testDemo = () => {
    console.log('这是一个全局测试方法');
}

/**
 * 添加DOM二级事件
 */
export let addEvent = (ele, type, handle) => {
	if (ele.addEventListener) {
		ele.addEventListener(type, handle, false);
	} else if (ele.attachEvent) {
		ele.attachEvent('on' + type, function () {
			handle.call(ele);
		})
	} else {
		ele['on' + type] = handle;
	}
}

/**
 * 移除DOM二级事件
 */
export let removeEvent = (ele, type, handle) => {
	if (ele.removeEventListener) {
		ele.removeEventListener(type, handle, false);
	} else if (ele.detachEvent) { 
		ele.detachEvent('on' + type, handle);
	} else {
		ele['on' + type] = null;
	}
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

/**
 * 人民币金额打点
 * 1000000000 => 1,000,000,000
 */
 export function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 判断金额数字精简展示
 */
 export let handleAmount = (num = 0, int) => {

    let isMinus = +num < 0;

    let n = Math.abs(+num);

    let res = null;

    if (n >= 10000) {
        res = ((n / 10000).toFixed(2) || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')) + '万';
    } else {
        res = ((n * 1).toFixed(2)).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
		if (int) res = res.replace(/\.00$/, '');
    }

    return isMinus ? ('-' + res) : res;

}