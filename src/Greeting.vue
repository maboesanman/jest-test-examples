<template>
  <p>{{greeting}}</p>
</template>
<script>
module.exports = {
  props: { name: String },
  computed: {
    greeting() {
      return `Hello ${this.name}`;
    },
  },
};
</script>