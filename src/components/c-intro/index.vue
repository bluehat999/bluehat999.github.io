<template>
  <div class="page">
        <section id="main">
		    <header>
			    <span class="avatar">
                    <img :src="avatar" />
                </span>
            </header>
            <article>
                <h1> {{name}} </h1>
                <p> {{desc}} </p>
            </article>
            <footer>
                <ul class="icons">
                    <li><a href="https://www.cnblogs.com/mthz/" target="_blank">
                        <i class="iconfont icon-blogger"></i>
                    </a></li>
                    <li><a href="https://codepen.io/bluehat999/" target="_blank">
                        <i class="iconfont icon-codepen"></i>
                    </a></li>
                    <li><a href="https://github.com/bluehat999" target="_blank">
                        <i class="iconfont icon-github"></i>
                    </a></li>
                </ul>
            </footer>

        </section>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'c-intro',
  data() {
    return {
    }
  },
  props: {
    avatar: {
       type: String,
       default: 'https://hbimg.huabanimg.com/589079ed5a1f088f0aa6fd114d4c61c5f685010f80b45-2rkzgt_fw658'
    },
    name: {
       type: String,
       default: '桑桑'
    },
    desc: {
        type: String,
        default: '前端工程师，最近在写微信小程序以及React项目'
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
    #main{
        transition: opacity 1s ease, transform 1s ease;
        padding: 3em;
        background: #ffffff;
        border-radius: 4px;
        max-width: 100%;
        opacity: 0.95;
        text-align: center;
        width: 27em;
        height:18em;
        margin:auto;
        display:flex;
        flex-direction: column;
        &>article{
            flex:1;
            & h1{
                font-size:2em;
                font-weight: bold;
                margin: 0;
            }
            & p{
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        & .avatar {
            position: relative;
            display: block;
            margin-bottom: 1.5em;
            &>img {
                display: block;
                margin: 0 auto;
                border-radius: 100%;
                box-shadow: 0 0 0 1.5em #ffffff;
                height:120px;
                width:120px;
                background-color: #fff;
            }
            &:before {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: -3em;
                width: calc(100% + 6em);
                height: 1px;
                z-index: -1;
                background: #c8cccf;
            }
        }
        & .icons {
            cursor: pointer;
            & a{
                padding: 0 1em;
                text-decoration: none;
            }
            & i{
                font-size: 2.5em;
                color:#333;
            }
        }
    }
</style>
