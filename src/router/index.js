import Vue from 'vue'
import Router from 'vue-router'

import Watermark from '~/modules/watermark'
import CreateWatermark from '~/modules/watermark/createWatermark'
import WatermarkRecordDatabase from '~/modules/watermark/watermarkRecordDatabase'
import WatermarkRecordFile from '~/modules/watermark/watermarkRecordFile'
import TracedTask from '~/modules/watermark/tracedTask'
// 数据脱敏
import Sensitive from '~/modules/sensitive'
import CreateSensitive from '~/modules/sensitive/createSensitive'
import TaskManage from '~/modules/sensitive/taskManage'
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
                    path: '/watermark/watermarkRecordDatabase',
                    name: 'watermarkRecordDatabase',
                    component: WatermarkRecordDatabase
                },
                {
                    path: '/watermark/watermarkRecordFile',
                    name: 'watermarkRecordFile',
                    component: WatermarkRecordFile
                },
                {
                    path: '/watermark/tracedTask',
                    name: 'tracedTask',
                    component: TracedTask
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
                    path: '/sensitive/taskManage',
                    name: 'taskManage',
                    component: TaskManage
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
