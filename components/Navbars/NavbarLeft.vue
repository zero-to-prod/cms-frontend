<template>
    <nav class="flex flex-col h-full fixed top-0">
        <ul>
            <li class="brand mt-auto">
                <h6 class="text-center py-2">
                    <nuxt-link :to="route_index" v-html="APP_NAME"></nuxt-link>
                </h6>
            </li>
            <li>
                <nuxt-link :to="route_users"
                           class="flex transform hover:scale-105 ease-out duration-100 hover:underline">
                    <users-icon/>
                    Users
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="route_home"
                           class="flex transform hover:scale-105 ease-out duration-100 hover:underline">
                    <home-icon/>
                    Home
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="route_dashboard"
                           class="flex transform hover:scale-105 ease-out duration-100 hover:underline">
                    <template-icon/>
                    Dashboard
                </nuxt-link>
            </li>
        </ul>
        <nuxt-link :to="route_products">Products</nuxt-link>
    </nav>
</template>
<script>
  import HomeIcon from '~/components/Icons/HomeIcon'
  import BrandLogo from '~/components/Logo'
  import TemplateIcon from '~/components/Icons/TemplateIcon'
  import UsersIcon from '~/components/Icons/UsersIcon'

  export default {
    name: 'NavbarLeft',
    components: {
      UsersIcon,
      TemplateIcon,
      BrandLogo,
      HomeIcon
    },
    data () {
      return {}
    }
  }
</script>
<style scoped>
    nav {
        width: var(--nav-left-width)
    }

    .brand {
        height: var(--nav-top-height);
    }
</style>
