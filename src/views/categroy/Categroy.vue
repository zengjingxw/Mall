<template>
  <div class="categroy">
    <nav-bar class="categroy-nav-bar">
      <div slot="center">
        商品分类
      </div>
    </nav-bar>
    <div class="content">
      <tab-menu :categroyList='categories' @selectItme='selectItme' class="categroy-menu" ref="menu"/>
      <scroll class="categroy-right-scroll" ref="scroll">
        <tab-grid-view-container :subcategories='getSubcategories' @gridImgLoad='gridImgLoad'/>
        <tab-conto :titles='["综合","流行","销量"]' @tabClick='tabClick'/>
        <taba-categroy-list :goodsItem='getCategoryDetail' class="categroy-right-scroll-rec"/>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabConto from 'components/content/tabcontro/TabContro'

  import TabMenu from './childComps/TabMenu'
  import TabGridViewContainer  from './childComps/TabGridViewContainer'
  import TabaCategroyList from './childComps/TabaCategroyList';
  

  import { imgLoad } from 'common/mixin'

  import { debounce } from 'common/utils'

  import { getCategory, getSubcategory, getCategoryDetail} from 'network/category'

  import { POP, NEW, SELL } from 'common/const'

  export default {
    mixins: [ imgLoad ],
    data() {
      return {
        categories: [],
        categorieDate: [],
        currentIndex: -1,
        currentType: ['pop','new','sell'],
        currentTypeIndex: 0,
        gridImgLoadSign: null
      }
    },
    created() {
      this._getCategroy()
    },
    mounted() {
      this.gridImgLoadSign = debounce(this.$refs.scroll.refresh,500)
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$refs.menu.ref()
    },
    methods: {
      _getCategroy() {
        getCategory().then( res => {
          this.categories = res.data.category.list.filter( item => item.title != '内衣')
          for(let i  in this.categories) {
            this.categorieDate[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell':[]
              }
            }
          }
          this._getSubcategory(0)
        })  
      },
      _getSubcategory(index) {
        this.currentIndex = index
        const mailKey = this.categories[index].maitKey
        getSubcategory(mailKey).then(res => {
          this.categorieDate[index].subcategories = res.data
          this.categorieDate = { ...this.categorieDate }
          this._getCategoryDetail(POP)
          this._getCategoryDetail(NEW)
          this._getCategoryDetail(SELL)
        })
      },
      _getCategoryDetail(type) {
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey,type).then(res => {
          this.categorieDate[this.currentIndex].categoryDetail[type] = res
          this.categoryData = { ...this.categoryData };
        })
      },
      selectItme(index) {
        this. _getSubcategory(index)
      },
      tabClick(index) {
        this.currentTypeIndex = index
      },
      gridImgLoad() {
        // console.log('grid图片加载了')
        this.gridImgLoadSign()
      }
    },
    computed: {
      getSubcategories() {
        return this.categorieDate[this.currentIndex]?this.categorieDate[this.currentIndex].subcategories:{}
      },
      getCategoryDetail() {
        return this.categorieDate[this.currentIndex]?this.categorieDate[this.currentIndex].categoryDetail[this.currentType[this.currentTypeIndex]]:[]
      }
    },
    components: {
      NavBar,
      TabMenu, 
      Scroll, 
      TabGridViewContainer, 
      TabConto,
      TabaCategroyList
    }
  }
</script>

<style lang="less" scoped>
  .categroy {
    height: 100%;
    border: 0px solid red;
    overflow: hidden;
    .categroy-nav-bar {
      position: relative;
      z-index: 10;
      color: #ffff;
      background-color: var(--color-tint);
    }
    .content {
      height: calc(100% - 93px);
      display: flex;
      flex-direction: row;

      .categroy-menu {
        width: 100px;
        border: 0px solid red;
      }
      .categroy-right-scroll {
        width: calc(100% - 100px);
        height: 100%;

      }
    }
  }
</style>
