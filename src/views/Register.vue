<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const email = ref('');
const password = ref('');

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert('User registered successfully');
  } catch (error: any) {
    alert('Error: ' + error.message);
  }
};
</script>
