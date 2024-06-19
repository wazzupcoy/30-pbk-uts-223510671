<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-toolbar-title class="header-title">UAS PBK HAN</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="button-container">
        <q-btn-group push>
          <q-btn flat label="Todos" @click="navigateTo('/todos')" class="custom-button" />
          <q-btn flat label="Post" @click="navigateTo('/post')" class="custom-button" />
          <q-btn flat label="Albums" @click="navigateTo('/albums')" class="custom-button" />
        </q-btn-group>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
.header {
  background-color: black;
  color: white;
}

.header-title {
  text-align: center;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.custom-button {
  background: linear-gradient(45deg, #42a5f5, #478ed1) !important;
  color: white !important;
  border: none;
  border-radius: 8px;
  margin: 0 5px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    background 0.2s;
  font-weight: bold;
  letter-spacing: 0.5px;
}

.custom-button:hover {
  background: linear-gradient(45deg, #478ed1, #42a5f5) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.custom-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.q-page-container {
  background-color: #333;
}
</style>
