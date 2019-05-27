<template>
    <Layout>
        <Sider hide-trigger width="120">
            <Menu :active-name="activeName" width="120">
                <MenuItem  v-for="(item, index) in route" :key="index" :to="item.path" :name="handleRoute(item)">
                    <Icon type="md-document" />
                    {{ item.meta.title }}
                </MenuItem>
            </Menu>
        </Sider>
        <Layout>
            <Header>Header</Header>
            <Content>
                <Layout v-if="navNew">
                    <Sider hide-trigger width="130" class="ivu-layout-sider-2">
                        <Menu :active-name="sbuActiveName" width="130">
                            <MenuGroup title="内容管理">
                                <MenuItem  v-for="(item, index) in sbuNavList" :key="index" :to="item.meta.self" :name="item.meta.self">
                                    <Icon type="md-document" />
                                    {{ item.meta.title }}
                                </MenuItem>
                            </MenuGroup>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <div style="padding:10px">
                                <router-view></router-view>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                <div v-else style="padding:10px">
                    <router-view></router-view>
                </div>
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
            navNew: true,
            activeName: '',
            sbuActiveName: '',
            sbuNavList: []
        }
    },
    created () {
        this.activeName = this.$route.meta.parent
        this.sbuActiveName = this.$route.meta.self
        // console.log(this.$route.meta)
        // this.handleRouteEach()
    },
    computed: {
        route (){
            return this.$router.options.routes
        }
    },
    methods: {
        handleRoute(item){
            if(this.$route.path == item.path){
                if(item.children && item.children.length >= 2){
                    this.navNew = true;
                    this.sbuNavList = item.children
                    this.activeName = this.$route.meta.parent
                    this.sbuActiveName = this.$route.meta.self
                }else{
                    this.navNew = false;
                    this.sbuNavList = []
                }
            }
            return item.path
        },
        handleRouteEach(){
            this.route.forEach(item => {
                if(item.path == this.activeName){
                    console.log(item)
                    this.sbuNavList = item.children
                }
            });
        }
    },
    watch: {
        $route (val){
            // this.activeName = this.$route.meta.parent
            // this.sbuActiveName = this.$route.meta.self
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
