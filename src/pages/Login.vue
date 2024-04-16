<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LaguageSelector from '@/components/LaguageSelector.vue'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = () => {
  if (email.value && password.value) {
    const token = 'xyz'

    localStorage.setItem('token', token)

    router.push('/dashboard')
  } else {
    alert('Please enter email and password')
  }
}
</script>

<template>
  <LaguageSelector />
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
/* Your styles here */
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

input[type='email'],
input[type='password'],
button {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}
</style>
