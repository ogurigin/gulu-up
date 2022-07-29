<template>
    <div class="login-box">
        <div class="login-left">
            <n-form 
            ref="formRef"
            :model="loginInfo"
            :rules="rules"
            label-width="auto"
            require-mark-placement="right-hanging"
            size="large"
            type="warning"
        >
            <n-form-item label="用户名" path="userName">
                <n-input v-model:value="loginInfo.userName" placeholder="请输入用户名" />
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input v-model:value="loginInfo.password" placeholder="请输入密码" type="password"/>
            </n-form-item>
            <n-button color="#000" class="login-btn" size="large" @click="login">开始 </n-button>
        </n-form> 
        </div>
        
    </div>
</template>
<script  setup lang="ts">
import { useMessage ,FormInst} from 'naive-ui'
import {useRouter} from  'vue-router'
import {ref } from 'vue';
const  router = useRouter();
interface LoginType  {
    userName:string | null,
    password:string | null,
}

const message = useMessage();
const formRef = ref<FormInst | null>(null);
let loginInfo = ref<LoginType>({
    userName:null,
    password:null,
})
const rules = {
    userName:{ required: true,trigger: ['blur', 'input'],message: '怎么样都得输入用户名！'},
    password:{ required: true,trigger: ['blur', 'input'],message: '没有密码怎么能行？'},
}

function login(e: MouseEvent){
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            router.push({path:'/'})
        } 
    })
}
</script>
<style lang="scss" scoped>
    .login-box{
        width: 860px;
        margin: 100px auto;
        box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
        padding: 80px 0;
        border-radius: 4px;
        border-color:#000;
        .login-left{
            max-width:380px;
            padding:0 40px;
        }
        .login-btn{
            width:100%;
            margin-top:20px;
        }
    }
</style>