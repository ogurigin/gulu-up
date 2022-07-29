import { createApp } from 'vue'

/* 导入根组件 */
import App from './App.vue'

import router from './router/index'
import { FormInst, FormItemRule, useMessage } from 'naive-ui'

createApp(App)//创建应用实例
    .use(router)
    .mount('#app');//mount方法接收一个 容器参数，实际DOM或者css的选择器 字符串均可
    // 返回值是根组件实例 而非应用实例


