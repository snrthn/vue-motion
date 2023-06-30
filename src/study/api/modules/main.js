/**
 * @files 主页面相关接口
 * @author yanghuning 2021-05-07
 */

import { postRequest, getRequest } from 'api';

/**
 * L1：销售任务情况
 */
export let getL1Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/salesTask',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * L2：HR人员分析
 */
export let getL2Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/education',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * L3：OA决策分析
 */
export let getL3Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/check',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * C1：销售实时动态数字
 */
export let getC1Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/totalData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * C2：全国主要销售城市分布
 */
export let getC2Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/customerData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * C3：客户增减情况
 */
export let getC3Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/customerTypeData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * C3-detail：客户增减情况详情
 */
 export let getC3Detail = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/provinceData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R1：大区销售分析
 */
export let getR1Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/productSalesData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R2：产品销售情况
 */
export let getR2Data = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/productSalesData',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R3-1：产品出库情况
 */
export let getR3OutData = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/outInventoryDate',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R3-2：产品入库情况
 */
export let getR3InData = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/putInventoryDate',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R3-3：产品库存情况
 */
export let getR3AllData = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/inventory',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}

/**
 * R3-1 Rate：当日订单出库率
 */
 export let getCurDayRate = (options = {}) => {
    return postRequest({
        // 请求URL
        url: '/screen/orderRate',
        // URL请求参数
        params: options.params,
        // 请求体参数
        data: options.data
    })
}


/**
 * oa登录
 */
export let getTokenFromServer = (options = {}) => {
  return getRequest({
    // 请求URL
    url: '/auth/oalogin',
    // URL请求参数
    params: options.params,
    // 请求体参数
    data: options.data
  })
}
