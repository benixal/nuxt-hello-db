<script setup lang="ts">

  const nameInput = ref('');
  const emailInput = ref('');

  const users = ref<any>([]);
  users.value = await $fetch("/api/listUsers");

  function submit() {

    $fetch("/api/addUser", {
      method: "POST",
      body: {
        name: nameInput.value,
        email: emailInput.value
      }
    }).then( async ()=> {
      users.value = await $fetch("/api/listUsers");
    })

  }

</script>

<template>
  <div>
    <input v-model="nameInput" type="text" placeholder="Name">
    <input v-model="emailInput" type="text" placeholder="Email">
    <br>
    <button @click="submit">Add</button>
    <li v-for="user in users">
      {{ user.Name }} , {{ user.Email }}
    </li>
  </div>
</template>
