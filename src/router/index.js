
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routers = [
    {
        path: '/',
        component: resolve => require(['@/page/Main'], resolve),
        meta: {
            title: '概况'
        },
        children: [
            {
                path: '/',
                component: resolve => require(['@/page/Home'], resolve),
                name: 'Home',
                meta: {
                    title: '概况'
                }
            }
        ]
    }, {
        path: '/goods',
        component: resolve => require(['@/page/Main'], resolve),
        meta: {
            title: '商品'
        },
        children: [
            {
                path: '/',
                component: resolve => require(['@/page/goods/GoodsAll'], resolve),
                name: 'GoodsAll',
                meta: {
                    title: '全部商品',
                    self: '/goods',
                    parent: '/goods'
                }
            }, {
                path: '/goodsGroup',
                component: resolve => require(['@/page/goods/GoodsGroup'], resolve),
                name: 'GoodsGroup',
                meta: {
                    title: '商品分组',
                    self: '/goodsGroup',
                    parent: '/goods'
                }
            }
        ]
    }, {
        path: '/order',
        component: resolve => require(['@/page/Main'], resolve),
        meta: {
            title: '订单',
            name: 'Order',
            self: '/order'
        },
        children: [
            {
                path: '/',
                component: resolve => require(['@/page/order/OrderAll'], resolve),
                name: 'OrderAll',
                meta: {
                    title: '全部订单',
                    self: '/order',
                    parent: '/order'
                }
            }, {
                path: '/recharge',
                component: resolve => require(['@/page/order/OrderRecharge'], resolve),
                name: 'OrderRecharge',
                meta: {
                    title: '充值订单',
                    self: '/recharge',
                    parent: '/order'
                }
            }
        ]
    }
]

export default new VueRouter({
    routes: routers
})
