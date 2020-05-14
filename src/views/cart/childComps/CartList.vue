<template>
    <div>
      <cart-list-item v-for="item in getList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import { mapGetters } from 'vuex'
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters([
        'getList'
      ])
    }
  }
</script>

<style lang="less" scoped>
</style>
