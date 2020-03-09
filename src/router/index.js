import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/', 
      redirect: '/login'
    },
    {
      path: '/login', // 登录
      name: 'login',
      component: () => import('@/pages/login/Login')
    },
    {
      path: '/register', // 注册
      name: 'register',
      component: () => import('@/pages/register/Register')
    },
    {
      path: '/editor', // 注册编辑
      name: 'editor',
      component: () => import('@/pages/registerEditor/Editor')
    },

    {
      path: '/test', // 测试
      name: 'test',
      component: () => import('@/pages/home/children/test.vue')
    },



    {
      path: '/home', //首页
      redirect: '/home',
      component: () => import('@/components/Home'),
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/pages/home/Home'),
          meta: {
            title: '首页'
          },
        }
      ]
    },
    {
      path: 'personal', //个人信息
      redirect: '/personal',
      component: () => import('@/components/Home'),
      meta: {
        title: '个人信息'
      },
      children: [
        {
          path: '/personal',
          name: 'personal',
          component: () => import('@/pages/personal/Personal'),
          meta: {
            title: '个人信息'
          }
        }
      ]
    },
    {
      path: 'task', //任务管理
      redirect: '/task',
      component: () => import('@/components/Home'),
      meta: {
        title: '任务管理'
      },
      children: [
        {
          path: '/task',
          name: 'task',
          component: () => import('@/pages/task/Task'),
          meta: {
            title: '任务管理'
          }
        }
      ]
    },
    {
      path: 'recommend', //推荐管理
      redirect: '/recommend',
      component: () => import('@/components/Home'),
      meta: {
        title: '推荐管理'
      },
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: () => import('@/pages/recommend/Recommend'),
          meta: {
            title: '推荐管理'
          }
        }
      ]
    },
    {
      path: 'group', //群主管理
      redirect: '/group',
      component: () => import('@/components/Home'),
      meta: {
        title: '群主管理'
      },
      children: [
        {
          path: '/group',
          name: 'group',
          component: () => import('@/pages/group/Group'),
          meta: {
            title: '群主管理'
          }
        }
      ]
    },
    {
      path: 'commission', //佣金管理
      redirect: '/commission',
      component: () => import('@/components/Home'),
      meta: {
        title: '佣金管理'
      },
      children: [
        {
          path: '/commission',
          name: 'commission',
          component: () => import('@/pages/commission/Commission'),
          meta: {
            title: '佣金管理'
          }
        }
      ]
    },

    {
      path: 'withdraw', //提现
      redirect: '/withdraw',  // 绑定银行卡
      component: () => import('@/components/Home'),
      meta: {
        title: '提现'
      },
      children: [
        {
          path: '/withdraw',
          name: 'withdraw',
          component: () => import('@/pages/withdraw/Withdraw'),
          meta: {
            title: '提现'
          }
        }
      ]
    },
    {
      path: 'safety', //安全中心
      redirect: '/safety',
      component: () => import('@/components/Home'),
      meta: {
        title: '安全中心'
      },
      children: [
        {
          path: '/safety',
          name: 'safety',
          component: () => import('@/pages/safety/Safety'),
          meta: {
            title: '安全中心'
          }
        }
      ]
    },
  ]
})