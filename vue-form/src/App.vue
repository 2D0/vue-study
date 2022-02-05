<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
//axios란 브라우저에서 서버로 데이터를 주고받기 위한 라이브러리
import axios from 'axios';

export default {
  data: function(){
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function(){
      //event.preventDefault(); <- 바닐라 자바스크립트에서 쓰는 클릭 이벤트 막는 메소드이다. 
      //뷰에서도 사용가능하지만 뷰 명령어인 .prevent을 붙여주면 똑같이 클릭 이벤트를 막아준다.  ex) @click.prevent="submitForm"
      console.log(this.username, this.password);

      let url = 'https://jsonplaceholder.typicode.com/users';
      let data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data) //post는 데이터를 생성하거나 조작할 때 쓰는 메소드이다. 쓰는 방법은 첫 번째로 주소(url)를 보내고 두 번째로 데이터()를 넘기면 된다.
       //post 요청으로 성공으로 보냈는지 확인은 then catch를 이용하면 된다.
      .then( function(response){ // then 제대로 전달 됐는지 확인
        console.log(response);
      })
      .catch(function(error){ // catch 에러 나면 실패한 이유를 볼 수 있음
        console.log(error);
      });
    }
  },
}
</script>

<style>

</style>