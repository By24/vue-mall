<template>
    <Layout>
        <Sider hide-trigger width="120">
            <Menu active-name="1" width="120">
                <MenuItem name="1" to="/">
                    <Icon type="md-document" />
                    文章
                </MenuItem>
                <MenuItem name="2" to="order">
                    <Icon type="md-chatbubbles" />
                    评论
                </MenuItem>
            </Menu>
        </Sider>
        <Layout>
            <Header>Header</Header>
            <Content>
                <Layout v-if="navNew">
                    <Sider hide-trigger width="130" class="ivu-layout-sider-2">
                        <Menu  active-name="1" width="130">
                            <MenuGroup title="内容管理">
                                <MenuItem name="1" to="goods">
                                    <Icon type="md-document" />
                                    文章管理
                                </MenuItem>
                                <MenuItem name="2" to="goodsGroup">
                                    <Icon type="md-chatbubbles" />
                                    评论管理
                                </MenuItem>
                            </MenuGroup>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <router-view></router-view>
                        </Content>
                    </Layout>
                </Layout>
                <router-view v-else></router-view>
            </Content>
        </Layout>
    </Layout>
</template>

<script>
export default {
    components: {
    },
    data (){
        return {
            navNew: true
        }
    },
    created () {},
    watch: {
        $route (val){
            console.log(val)
        }
    }
}
</script>

<style lang="less" scoped>
.ivu-layout{
    height: 100%;
    .ivu-layout-header{
        height: 50px;
        background: #ffffff;
        box-shadow: 0 2px 20px 0 rgba(15,12,70,.1);
        .ivu-menu-light{
            background: #000000
        }
    }
    .ivu-layout-sider{
        background: #222430;
    }
   .ivu-layout-content{
        height: calc(100% - 50px);
    }
    .ivu-menu-item{
    }
    .ivu-layout-sider-2{
        background: transparent;
        .ivu-menu-item{
            color: #000000
        }
    }
}
.ivu-menu{
    background: transparent;
    .ivu-menu-item{
        padding: 12px 10px;
    }
}
.ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
}

</style>
