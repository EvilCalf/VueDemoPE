<template>
  <div class="add-reduce">
    <div class="reduce" :style="{color:greyColor}" @click="handleClick('reduce')">-</div>
    <div class="text">{{num}}</div>
    <div class="add" @click="handleClick('add')">+</div>
  </div>
  <!-- <div class="add-reduce">
    <div class="reduce" @click="reduce">-</div>
    <div class="text">{{num}}</div>
    <div class="add" @click="add">+</div>
  </div>-->
</template>
<script>
export default {
  name: "add-reduce",
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      greyColor: "#666"
    };
  },
  watch: {
    num(newVal) {
      if (newVal === 1) this.greyColor = "#999";
      else this.greyColor = "#666";
    }
  },
  methods: {
    handleClick(eventName) {
      this.$emit(eventName);
    }
    /* add() {
        this.num ++
    },
    reduce() {
        this.num --
    } */
  },
  created() {
    if (this.num === 1) this.greyColor = "#999";
  }
};
</script>
<style lang="stylus">
.add-reduce {
  display: flex;
  margin-top: 0.2rem;
  align-items: center;

  .reduce, .add {
    width: 0.6rem;
    border: 1px solid #999;
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    color: #666;
  }

  .reduce {
    border-top-left-radius: 0.04rem;
    border-bottom-left-radius: 0.04rem;
    font-size: 0.48rem;
  }

  .add {
    border-top-right-radius: 0.04rem;
    border-bottom-right-radius: 0.04rem;
    font-size: 0.36rem;
  }

  .text {
    width: 0.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
  }
}
</style>
