<template>
    <section class="timeline">
        <div class="timeline__node">
            <img src=""/>
            <div class="timeline__node__content">
                <h1 style="margin:0">大型项目前端架构浅谈</h1>
                <p class="timeline__node__content__desc">我在2年之前，写过一篇中小型项目的前端架构浅谈。随着能力的上升，以及在阿里巴巴工作的经验，是时候写一篇大型项目的前端架构分析了。 本篇文章不会更多侧重于具体技术实现，而是尝...</p>
                <div class="timeline__node__actionbar">
                    <span class="timeline__node__action">点赞 </span>
                    <span class="timeline__node__action"> 评论</span>
                    <span class="timeline__node__action"> 分享</span>
                </div>
            </div>
        </div>
    </section>

</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props:{
   name:String
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
    .timeline{
        position:relative;
        padding:20px 20% 20px 10%;
        &__node{
            display: flex;
            position: relative;
            box-sizing: border-box;
            padding: 20px;
            background-color:#fff;
            border-radius: 4px;
            text-align: left;
            & img{
                display:block;
                max-width: 200px;
                max-height: 200px;
                margin-right: 20px;
            }
            &__content{
                display: flex;
                flex-direction: column;
                &__desc{
                    flex:1;
                }

            }
            &__action{
                font-size:12px;
                float:right;
                padding:4px 10px;
                cursor:pointer;
                &:hover{
                    color:#3366ff;
                }
            }

            
            &::after{
                content:'';
                position:absolute;
                top:0;
                right:-5%;
                width:1px;
                height:100%;
                background-color:rgb(93,97,108);
                // box-shadow: 40px 0 0 gray;
            }
            &::before{
                content:'';
                position:absolute;
                top:50%;
                right:-10%;
                width:10%;
                height:1px;
                background-color:rgb(93,97,108);
            }
        }
    }
    //  @media screen and (min-width: 900px){
    //     .timeline{
    //         padding:20px 8% 20px 0;
    //     }
    // }
</style>
