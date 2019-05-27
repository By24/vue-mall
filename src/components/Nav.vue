<template>
    <Layout>
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
</template>
