<template>

  <header>
    <h1>{{ propsdata }}</h1>
    <button @click="senEvent">send</button>
  </header>
</template>

<script>
export default {
  //프롭스 데이터를 만들어서 App.vue로 넘김
  props: ['propsdata'],
  methods: {
    senEvent: function(){
      this.$emit('renew'); //this.$emit 부모 컴포넌트에 이벤트 데이터 보내기 - 정의한 이벤트가 윗쪽 컴포넌트(App.vue)로 전달이 됨
    }
  }
}
</script>

<style>
/*prop
  prop는 상위 컴포넌트의 정보를 하위 컴포넌트로 전달하기 위한 사용자 지정 특성입니다. 
  하위 컴포넌트는props 옵션을 사용하여 수신 할 것으로 기대되는 props를 명시적으로 선언해야합니다. 
  emit
  emit은 다른 컴포넌트에게 이벤트를 전달하기 위해 사용할 수 있다. 
  예를 들어 자식 컴포넌트에서 사용자지정 이벤트를 만들어 부모 컴포넌트에게 전달할 수 있다. 
  부모 컴포넌트는 자식 컴포넌트에서 만들어진 사용자지정 이벤트를 받아(v-on) 특정 동작을 수행할 수 있다.*/
</style>
