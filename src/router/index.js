import Vue from 'vue'
import Router from 'vue-router'

import Watermark from '~/modules/watermark'
import CreateWatermark from '~/modules/watermark/createWatermark'
import WatermarkTaskManage from '~/modules/watermark/watermarkTaskManage'
// 数据脱敏
import Sensitive from '~/modules/sensitive'
import CreateSensitive from '~/modules/sensitive/createSensitive'
import SensitiveTaskManage from '~/modules/sensitive/sensitiveTaskManage'
import AlgorithmManage from '~/modules/sensitive/algorithmManage'
import SensitiveWordsManage from '~/modules/sensitive/sensitiveWordsManage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {// 路由重定向
            path: '/',
            redirect: '/sensitive/createSensitive'
        },
        {
            path: '/watermark',
            name: 'watermark',
            component: Watermark,
            children: [
                {
                    path: '/watermark/createWatermark',
                    name: 'createWatermark',
                    component: CreateWatermark
                },
                {
                    path: '/watermark/watermarkTaskManage',
                    name: 'watermarkTaskManage',
                    component: WatermarkTaskManage
                }
            ]
        },
        {
            path: '/sensitive',
            name: 'sensitive',
            component: Sensitive,
            children: [
                {
                    path: '/sensitive/createSensitive',
                    name: 'createSensitive',
                    component: CreateSensitive
                },
                {
                    path: '/sensitive/sensitiveTaskManage',
                    name: 'sensitiveTaskManage',
                    component: SensitiveTaskManage
                },
                {
                    path: '/sensitive/algorithmManage',
                    name: 'algorithmManage',
                    component: AlgorithmManage
                },
                {
                    path: '/sensitive/sensitiveWordsManage',
                    name: 'sensitiveWordsManage',
                    component: SensitiveWordsManage
                }
            ]
        }
    ]
})
