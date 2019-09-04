<template>
    <div class="panel-person">
        <div class="person-info">
            <img src="/images/photo/MrXu.jpg" alt>
            <!-- 把下面的Mr显示为用户的手机号，如果用户还没有登录，默认显示admin -->
            <span class="name">{{ ww?"123":"admin" }}</span>
        </div>
        <mt-cell @click="toCoupons" title="卡券包" icon="more" value="带 icon"></mt-cell>
        <mt-cell title="收藏地址" icon="more" value="带 icon"></mt-cell>
        <mt-cell title="投诉建议" icon="more" value="带 icon"></mt-cell>
        <mt-cell title="更多内容敬请期待" icon="more" value="带 icon"></mt-cell>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/_footer'
import { Cell } from 'mint-ui'
export default {
    data(){
        return{
            ww:11
        }
    },
    components: { Cell, Footer },
    methods: {
        toCoupons() {
            this.$router.push(`coupons`)
        }
    }
}
</script>

<style lang="stylus">
.panel-person {
    .person-info {
        height: 1.8rem;
        display: flex;
        align-items: center;
        background: url('../assects/images/decorate/wd-beijing.png');
        padding: 0.4rem;

        img {
            margin-right: 0.2rem;
            height: 1.6rem;
            border-radius: 50%;
        }

        .name {
            color: white;
        }
    }

    .describe {
        margin-top: 0.4rem;
        background: white;
        padding: 10%;
        text-align: center;
    }
}
</style>

