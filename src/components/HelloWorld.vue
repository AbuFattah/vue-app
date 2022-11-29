<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

// fetch("http://202.4.117.56:89/authapi/api/auth/login", {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     LoginId: "erikson",
//     Password: "erikson12345@",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// fetch("http://202.4.117.56:89/coreApi/api/designation/all", {
//   method: "GET",
//   //mode: "no-cors",
//   headers: {
//     "Content-type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5Z…hEIn0.UyVZXuHYAVEGRtZl0Wz8y-1MT6sfAfb-c3ifHsvy78w",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5Z…hEIn0.H222f-wST-zEk-Tk_xP62gBRTzdbBBgKtxTJFb0e4qk'
const token=key.toString()

// fetch("http://202.4.117.56:89/coreApi/api/designation/all", {
//   method: "GET", // or 'PUT'
//   mode:"no-cors",
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization":`Bearer ${token}`,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


  fetch('http://202.4.117.56:89/coreApi/api/designation/all', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    "Authorization":`Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
