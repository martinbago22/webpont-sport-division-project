<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LaguageSelector from '@/components/LaguageSelector.vue'


let id = 0
const userDetails = ref([
  { id: id++, name: 'Mock1', age: '23' },
  { id: id++, name: 'Mock2', age: '30' },
  { id: id++, name: 'Mock3', age: '45' }
]);
const router = useRouter();
const logout = () => {

  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
    <LaguageSelector />
  <div>
    <h1>Dashboard</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userDetails" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="logout">Logout</button>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
