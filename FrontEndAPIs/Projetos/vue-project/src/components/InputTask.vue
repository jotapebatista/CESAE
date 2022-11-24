<template>

  <div class="app-title">
   
  </div>
  <div class="input-field"> 
    <h1 class="title">{{ userName }} To Do List</h1>
    <input v-mmodel="userName" placeholder="write your name here"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    }
  }
}
</script>



