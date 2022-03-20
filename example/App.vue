<script setup>
import README from './README.md'
</script>

<template>
  <main>
    <div class="container">
      <README />
    </div>
  </main>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

main {
  padding: 40px;
}

.container {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}
</style>
