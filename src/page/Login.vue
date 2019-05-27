<template>
    <Layout>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" class="login-container">
            <FormItem  prop="user">
                <Input type="password" v-model="formCustom.user" placeholder="请输入账号" ></Input>
            </FormItem>
            <FormItem  prop="passwd">
                <Input type="password" v-model="formCustom.passwd" placeholder="请输入密码" ></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')" >登陆</Button>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
export default {
    data(){
        return {
            formCustom:{
                user:'',
                passwd:''
            },
            ruleCustom:{
                    user: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    passwd: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ],
            }
        }
    },
    methods:{
        handleSubmit(){
           this.$router.push('/')
        }
    }
}
</script>


<style lang="less" scoped>
.ivu-layout{
    height: 100%;
    background: #084f8f;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .login-container{
        width: 80%;
        max-width: 400px;
        .ivu-btn-primary{
            height: 40px;
            margin-top: 10px;
            width: 100%;
            background: #ffffff;
            color: #98dcc1;
        }
    }
}
</style>

<style>
.ivu-input-large{
    height: 40px;
}
</style>
