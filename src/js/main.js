import Vue from 'vue'
import VueRouter from 'vue-router'
import Lottera from './LotterA.vue'
import Lotterb from './LotterB.vue'
import Happy10mina from './Happy10mina.vue'
import Happy10minb from './Happy10minb.vue'
import Happy10minc from './Happy10minc.vue'
import Happy10mind from './Happy10mind.vue'
import Pk10 from './Pk10.vue'
import Lukyairship from './LukyAirShip.vue'
import Elevenlist from './ElevenList.vue'
import Order3 from './Order3.vue'
import Fu3d from './Fu3d.vue'
import Shanghai from './Shanghai.vue'

Vue.use(VueRouter)

var menuList=[
    {name:'重庆时时彩',data:'Lottera'},
    {name:'天津时时彩',data:'Lotterb'},
    {name:'广东快乐十分',data:'Happy10mina'},
    {name:'广西快乐十分',data:'Happy10minb'},
    {name:'天津快乐十分',data:'Happy10minc'},
    {name:'重庆快乐十分',data:'Happy10mind'},
    {name:'北京赛车PK10',data:'Pk10'},
    {name:'幸运飞艇',data:'LukyAirShip'},
    {name:'广东11选5',data:'ElevenList'},
    {name:'排列三',data:'Order3'},
    {name:'福彩3D',data:'Fu3d'},
    {name:'上海时时乐',data:'Shanghai'}
]
export default new Vue({
    el:'#app',
    created(){
        this.$nextTick(function(){
            var navHeight=$('.navbar').outerHeight();
            var lastHeight=$('.last-open-box').outerHeight();
            var nowHeight=$('.now-open-box').outerHeight();
            var playHeight=$('.play-box').outerHeight()||0;
            var swiperHeight=$('.swiper-wrapper').outerHeight()||0;
            var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
            var wHeight=$(window).height();
            $('.mainbody-box').height(wHeight-saveHeight+'px')
            $('.menu-group').height(wHeight+'px')
            $('.game-list-menu').height(wHeight-saveHeight+'px')
            console.log('created')
        })
    },
    components:{
        Lottera,
        Lotterb,
        Happy10mina,
        Happy10minb,
        Happy10minc,
        Happy10mind,
        Pk10,
        Lukyairship,
        Elevenlist,
        Order3,
        Fu3d,
        Shanghai
    },
    methods:{
        menuListSelect(event){
            var _event=event
            this.game_name=event.currentTarget.dataset.menu
            event.currentTarget.parentNode.classList.remove('show')
            setTimeout(function(){
                _event.target.parentNode.parentNode.classList.remove('show')
            },300)
            console.log(this.game_name)
        }
    },
    data(){
        return{
            menuList:menuList,
            game_name:'Lottera',
        }
    },
})
$(function(){
    var navHeight=$('.navbar').outerHeight();
    var lastHeight=$('.last-open-box').outerHeight();
    var nowHeight=$('.now-open-box').outerHeight();
    var playHeight=$('.play-box').outerHeight()||0;
    var swiperHeight=$('.swiper-wrapper').outerHeight()||0;
    var saveHeight=navHeight+lastHeight+nowHeight+playHeight+swiperHeight;
    var wHeight=$(window).height();
    $('.mainbody-box').height(wHeight-saveHeight+'px')
    $('.menu-group').height(wHeight+'px')
    $('.game-list-menu').height(wHeight-saveHeight+'px')
    console.log(nowHeight)
})