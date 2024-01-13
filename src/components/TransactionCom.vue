<template>
  <li>
    <p>{{ name }}</p>
    <p>{{ quantity }}</p>
  </li>
</template>

<script>
export default {
  props: ["name", "quantity", "type"],
};
</script>

<style></style>
