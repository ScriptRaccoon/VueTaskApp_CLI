<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style scoped>
button {
  font-family: inherit;
  font-size: inherit;
  display: inline-block;
  background-color: var(--main-color);
  padding: 10px 20px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 150ms linear;
}

button:hover {
  opacity: 0.8;
}
</style>