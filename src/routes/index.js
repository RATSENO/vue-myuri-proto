import Vue from 'vue';
import VueRouter from 'vue-router'

//router view component
import JoinView from '../view/JoinView.vue'
import LoginView from '../view/LoginView.vue'
import MyPageView from '../view/MyPageView.vue'
import MainView from '../view/MainView.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : MainView
        },
        {
            path : '/join',
            component : JoinView
        },
        {
            path : '/login',
            component : LoginView
        },
        {
            path : '/my',
            component : MyPageView
        }
    ]
})