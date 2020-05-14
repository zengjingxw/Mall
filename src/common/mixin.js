import { debounce } from './utils'

import BackTop from "components/content/backTop/BackTop"

export const  imgLoad = {
  components: {
    BackTop
  },
  data() {
    return {
      imagesing: null,
      refresh: null, 
      isShowBackTop:false,
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 500)
    this.imagesing = () => {
      this.refresh()
    }
    this.$bus.$on('loaded', this.imagesing)
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0,1000)
    },
    commonContentScroll(position) {
      this.isShowBackTop = (-position.y) > 400
    },
  },
}