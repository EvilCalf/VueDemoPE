<template>
  <div id="myitemshopcomponent">
    <div class="item-shop" v-for="item in shops" :key="item.id" @click="tapDetail(item)" v-bind:style="{width: widthData}">
      <div class="item-panel">
        <span>{{item.icon}}</span>
        <img :src="item.img" alt="商品" />
        <div class="title">{{item.title}}</div>
        <div class="describe">{{item.describe}}</div>
        <div class="price">¥{{item.price}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myitemshopcomponent",
  props: {
    widthData: Number,
    shops: Array,
  },
  methods: {
    tapDetail(item) {
      this.$router.push(`shopdetail/${item.id}`);
    },
    created() {
      this.$store.dispatch("users/getShops").then(res => {
        this.shops = res.data;
      });
    }
  }
};
</script>
<style lang="stylus">
  .item-shop {
    float: left;
    box-sizing: border-box;
    padding-bottom: 4px;
    position: relative;

    .item-panel {
      overflow: hidden;
      margin: 0 0.1rem;

      img {
        width: 100%;
      }
    } 
}
</style>
