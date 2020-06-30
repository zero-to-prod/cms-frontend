<template>
    <button :type="type"
            class="rounded flex justify-center w-full px-4 py-2 font-medium">
        <slot></slot>
    </button>
</template>
<script>
  export default {
    name: 'SimpleButton',
    props: {
      type: {
        type: String,
        default: 'submit'
      }
    }
  }
</script>
<style scoped>
    button{
        background-color: var(--color-button-background-color-primary);
    }
    button:hover {
        background-color: var(--color-button-background-color-primary-hover);
    }
</style>