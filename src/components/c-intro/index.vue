<template>
  <div class="page">
        <section id="main">
		    <header>
			    <span class="avatar">
                    <img :src="avatar" alt="avatar" />
                </span>
				<h1> {{name}} </h1>
                <p> {{desc}} </p>
            </header>
            <footer>
                <ul class="icons">
                    <li><a href="https://www.cnblogs.com/mthz/" target="_blank">
                        <svg class="icon" aria-hidden="true" width="30px" height="30px">
                            <use xlink:href="#icon-blogger"></use>
                        </svg>
                    </a></li>
                    <li><a href="https://codepen.io/bluehat999/" target="_blank">
                        <svg class="icon" aria-hidden="true" width="30px" height="30px">
                            <use xlink:href="#icon-codepen"></use>
                        </svg>
                        </a></li>
                    <li><a href="https://github.com/bluehat999" target="_blank">
                        <svg class="icon" aria-hidden="true" width="30px" height="30px">
                            <use xlink:href="#icon-github"></use>
                        </svg>
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
       default: "src/assets/images/pic02.jpg"
   },
   name: {
       type: String,
       default: "Welcome to my blog"
   },
   desc: {
       type: String,
       default: "junior front-end engineer, will focuse on learning React recently "
   }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">



    #main{
        transition: opacity 1s ease, transform 1s ease;
        padding: 4.5em 3em 3em 3em;
        background: #ffffff;
        border-radius: 4px;
        cursor: pointer;
        max-width: 100%;
        opacity: 0.95;
        text-align: center;
        width: 27em;
        margin:auto;
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
        & .icons{
      
        }
    }
</style>
