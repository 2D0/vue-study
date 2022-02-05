<template>
<!--<vue를 치고 엔터를 치면 기본적인 템플릿이 생성된다.-->
<!--템플릿 아래 자식 태그는 root 때문에 div 하나만 해야하나 vue3 부터는 꼭 그러지 않아도 된다.  
    다만 추천하지는 않는다. -->
  <div>
    <!-- 
    <app-header 
    v-bind:전달받을 프롭스 속성 이름="상위 컴포넌트(지금파일)의 데이터 이름"
    v-on:전달받을 이벤트 이름="상위 메소드 이벤트 이름"></app-header> -->
    <app-header 
    :propsdata="str"
    @renew="renewStr"></app-header><!-- AppHeader에 설정한 프롭스(propsdata) 및 이벤트(renew) 데이터를 가져옴 -->
  </div>
</template>

<script>
// AppHeader는 import from 문법으로 들고 온 변수이고 파일의 내용이 변수에 담겼다. 그리고 아래 component로 변수의 내용을 연결했다.
import AppHeader from './components/AppHeader.vue';

export default {
  // data를 쓸 때는 new Vue 속에 처럼 간단히 객체(이름:) 만 적는 게 아니라
  // 컴포넌트 단위로 개발할 때는 컴포넌트 간의 데이터가 공유되지 않게 function(){ return {}} 넣어줘야 한다.
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header' : AppHeader //위의 import 변수 연결
  },
  methods: {
    renewStr: function() {
      this.str = 'hi'; //this로 해당 데이터를 바라볼 수 있다.
    }
  }
}
</script>

<style>

</style>