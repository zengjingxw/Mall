<template>
  <div class="detail">
    <detail-nav @detaillTabClick='navTabClick' ref="dateillNav"/>
    <scroll ref="scroll" class="detaill-scroll" :probe-type="3"  @changScroll="contentScroll">
      <detail-swiper :top-images='topImages'/>
      <detaill-base-info :goods='goods'/>
      <detail-shop-info :shops='shops'/>
      <detaill-info @detaillImgLoad='detaillImagesLoad' :detailInfo='detailInfo'/>
      <detaill-params-info ref="paramsinfo" :goodsParam='goodsParam'/>
      <detaill-comment ref="comment" :commentInfo='commentInfo'/>
      <detaill-recommend ref="recommend" :recommend='recommend'/>
    </scroll>
    <back-top @backClick="backClick" v-show="isShowBackTop"/>
    <detaill-bottom-bar @addCart='addToCart'/>
  </div>
</template>

<script>
  import DetailNav from './childcomps/DetailNav'
  import DetailSwiper from './childcomps/DetailSwiper.vue'
  import DetaillBaseInfo from './childcomps/DetailBaseInfo'
  import DetailShopInfo from './childcomps/DetailShopInfo'
  import DetaillInfo from './childcomps/DetailInfo'
  import DetaillParamsInfo from './childcomps/DetailParamsInfo'
  import DetaillRecommend from './childcomps/DetaillRecommend'
  import DetaillComment from './childcomps/DetaillComment'
  import DetaillBottomBar from './childcomps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'


  import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail';

  import { imgLoad } from 'common/mixin'
  import { debounce } from 'common/utils'

  export default {
    name: 'Deatail',
    mixins: [ imgLoad ],
    data() {
      return {
        prodId: '', 
        topImages: [],//轮播图
        goods:{}, //商品信息
        shops: {},//商家信息
        detailInfo: {},//详情信息
        goodsParam: {},//参数信息
        commentInfo: {}, //评论信息
        recommend: [], //推荐信息
        themeType: [],
        themeTypeRec: null,
        currentIndex: 0
      };
    },
    components: { 
      DetailNav, 
      DetailSwiper, 
      Scroll, 
      DetaillBaseInfo, 
      DetailShopInfo, 
      DetaillInfo, 
      DetaillParamsInfo,
      DetaillRecommend, 
      DetaillComment, 
      DetaillBottomBar
      },
    created() {
      this.prodId = this.$route.params.id

      this.getItemProdData(this.prodId)
      this.getRecommendZ()
    },
    mounted() {
      this.$nextTick(() => {
        this.themeTypeRec = debounce(() => {
          this.themeType = []
          this.themeType.push(0)
          this.themeType.push(this.$refs.paramsinfo.$el.offsetTop-30)
          this.themeType.push(this.$refs.comment.$el.offsetTop-30)
          this.themeType.push(this.$refs.recommend.$el.offsetTop-30)
        },500)
      })
    },  
    methods: {
      getItemProdData(id) {
        getDetail(id).then( res => {
          this.topImages = res.result.itemInfo.topImages 
          this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
          this.shops = new Shop(res.result.shopInfo)
          this.detailInfo = res.result.detailInfo
          this.goodsParam = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
          this.commentInfo = res.result.rate.cRate == 0? {}: res.result.rate
        })
      },
      getRecommendZ() {
        getRecommend().then(res => {
          this.recommend = res.data.list
        })
      },
      detaillImagesLoad() {
        this.themeTypeRec()
        this.refresh()
      },
      navTabClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeType[index],200)
      },
      contentScroll(position) {
        //设置返回顶部
        this.commonContentScroll(position)
        for(let i in this.themeType) {
          i = i * 1
          if(this.currentIndex != i && (i < this.themeType.length-1 && (-position.y >= this.themeType[i]  && -position.y < this.themeType[i + 1] )) | (i ==this.themeType.length-1 && (-position.y > this.themeType[i] ))) {
            this.currentIndex = i
            this.$refs.dateillNav.currentIndex = this.currentIndex
          }
        }
      },
      addToCart() {
        let product = {}
        product.images = this.topImages[0]
        product.prices = this.goods.realPrice
        product.title = this.goods.title
        product.des = this.goods.desc
        product.id = this.prodId
        this.$store.dispatch('addCart', product).then(res => {
          this.$toast.show(res,1500)
        })
      }
    },
    destroyed() {
      this.$bus.$off('loaded', this.imagesing)
    }
  };
</script>

<style lang="less" scoped>
  .detail {
    width: 100%;
    position: relative;
    z-index: 9;
    height: 100vh;
    overflow: hidden;
    background-color: #ffffff;
    border: 0px solid red;
    .detaill-scroll {
      width: 100%;
      height: calc(100% - 102px);
      background-color: #ffffff;
      border: 0px solid red;
    }
  }
</style>
