/* var appHeader = {
  template: '<div>header</div>',
  methods: {
    addNum: function(){

    }
  }
} */


<template> <!-- 위의 template: 속에 넣는 것을 template 태그에 넣으면 된다. 둘이 같은 의미 -->
  <div>
    header
  </div>
</template>

<script>
  export default { //methods나 computed 같은 속성 처럼 자바스크립트에 관련된 속성들은 export default 안에 넣어주면 된다. 
    methods: {
      addNum: function(){
        
      }
    }
  }
</script>

<style>
  
</style>