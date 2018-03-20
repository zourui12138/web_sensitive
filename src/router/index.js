import Vue from 'vue'
import Router from 'vue-router'

import Watermark from '~/modules/watermark/watermark'
// 数据脱敏
import Sensitive from '~/modules/sensitive/sensitive'
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
            redirect: '/sensitive/taskManage'
        },
        {
            path: '/watermark',
            name: 'watermark',
            component: Watermark
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
