var Vue = require('vue')
import VueRouter from 'vue-router'


var Home = require('./views/Home.vue')
var About = require('./views/About.vue')
var Contacts = require('./views/Contacts.vue'))
var Portfolio = require('./views/Portfolio.vue')
var Work = require('./views/Work.vue')

Vue.use(VueRouter)

var router = new VueRouter({
	hashbang: false,
	history: true,
	linkActiveClass: 'active',
	transitionOnLoad: true,
	root: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/portfolio', component: Portfolio },
    { path: '/work/:id', name: 'work', component: Work }
  ]
})

new Vue({
  el: '#app',
  router: router
})
