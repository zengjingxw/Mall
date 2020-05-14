<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-contro ref="tabcontrolTwo" :titles="titles" @tabClick="tabClick" class="h-tab-control" v-show="isShowTabControl"/>
    <scroll class="h-content" ref="scroll" :probe-type="3" @pullLoad ='pullLoadMore' @changScroll="contentScroll" :pull-up-load ='true'>
      <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad'></home-swiper>
      <home-recommend-view :recomments="recommends"></home-recommend-view>
      <feature-view />
      <tab-contro ref="tabcontrolOne" :titles="titles" @tabClick="tabClick"  />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    
    <back-top @backClick="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomwSwiper"
  import FeatureView from "./childComps/FeatureView"
  import HomeRecommendView from "./childComps/HomeRecommendView"

  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"

  import TabContro from "components/content/tabcontro/TabContro"
  import GoodsList from "components/content/goods/GoodsList"

  import { getHomeMultidata, getHomeGoods } from "network/home"

  import { imgLoad } from 'common/mixin'

export default {
  mixins: [ imgLoad ],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isPullLodaMore:false,
      tabOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    TabContro,
    HomeSwiper,
    FeatureView,
    Scroll,
    GoodsList,
    HomeRecommendView
  },
  activated() {
    this.playTimer = window.setInterval(() => {
      if(this.$refs.scroll != undefined || this.$refs.scroll !=null) {
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.refresh()
        window.clearInterval(this.playTimer)
      }
    },10)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY() 
    this.$bus.$off('loaded', this.imagesing)
  },
  methods: {
    /**fd
     * 网络请求
     */
    getHomeData() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      });
    },
    getHomeGoodsS(type) {
      const page = this.goods[type].page * 1 + 1;
      getHomeGoods({ type, page }).then(res => {
        this.goods[type].list = this.goods[type].list.concat(res.data.list)
        this.goods[type].page += 1
        this.isPullLodaMore = true
        this.$nextTick(() => {
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.refresh()
        })
      });
    },

    /**
     * 事件监听
     */
    contentScroll(position) {
      this.commonContentScroll(position)
      this.isShowTabControl = (-position.y) > this.tabOffsetTop
    },
    //点变色 
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop"
          break
        case 1:
          this.currentType = "new"
          break
        case 2:
          this.currentType = "sell"
      }
      this.$refs.tabcontrolTwo.currentIndex = index
      this.$refs.tabcontrolOne.currentIndex = index
    },

    //下拉加载更多
    pullLoadMore() {
      if(this.isPullLodaMore) {
        this.isPullLodaMore = false
        this.getHomeGoodsS(this.currentType)
      }
    },
    //获取轮播图信息
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabcontrolOne.$el.offsetTop
    }
  },
  computed: {
    //显示商品信息
    showGoods() {
      return this.goods[ this.currentType ].list
    },
  },
  created() {
    this.getHomeData();
    this.getHomeGoodsS("pop");
    this.getHomeGoodsS("new");
    this.getHomeGoodsS("sell");
  },
  mounted() {

  },

};
</script>

<style lang="less" scoped>
#home {
  display: flex;
  height: 100vh;
  flex-direction: column;
  // padding-top: 44px;
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;
  }

  .h-content {
    height: calc(100% - 93px);
    border: 0px solid red;
    margin-top: 44px;
  }
  .h-tab-control {
    left: 0px;
    right: 0px;
    position: absolute;
    z-index: 9;
    top:44px;
    // color:#ff0000
  }
}
</style>
