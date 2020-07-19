/**
 * @Author: Brogan Miner <Brogan>
 * @Date:   2018-12-20T10:38:57-08:00
 * @Email:  brogan.miner@oregonstate.edu
 * @Last modified by:   Brogan
 * @Last modified time: 2019-02-04T11:42:51-08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import notfound from '@/components/extras/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: notfound
    }
  ]
})
