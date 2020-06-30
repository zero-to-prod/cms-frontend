<template>
    <button :type="type"
            class="border border-transparent button-custom flex justify-center w-full px-4 py-2 text-sm font-medium rounded-m">
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
      },
      component_class: {
        type: String
      }
    }
  }
</script>
<style scoped>
    .button-custom:hover {
        background-color: var(--color-button-primary-hover);
        color: var(--color-text-secondary);
        border-color: var(--color-button-primary);
    }
</style>