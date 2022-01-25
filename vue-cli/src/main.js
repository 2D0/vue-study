import Vue from 'vue'
import App from './App.vue' //컴포넌트 파일

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //위의 컴포트 App 파일을 불러오는 것
  /* render: 는 아래의 components와 같다.
    components: {
    'app': App
    } */
}).$mount('#app') //$mount 는 el: 이랑 같다.


