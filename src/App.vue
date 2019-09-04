<template>
    <div id="app">
        <transition name="router-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="stylus">
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity 0.3s;
}

.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>

/**
  1、内容：Person.vue第五行，实现要求：通过vuex，和上次显示出密码的方式类似
  2、把商品展示方式部分代码封装成组件，采用组件调用的方式显示.配置一行两个商品改为显示一行一个商品
 */
