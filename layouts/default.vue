<template>
  <div class="app">
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem('items')) {
      this.$store.commit('dataFromLocalStorage')
    };
  }
} 
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  border: 0;
}
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;font-size: inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a{color: inherit;}
a, a:visited, a:hover{text-decoration: none;}
ul li{list-style: none;}
img{max-width: 100%;}

h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: 400;}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  padding: 32px 0;
  height: 100%;
}

.container {
  max-width: 1449px;
  padding: 0 20px;
  margin: 0 auto;
}

.title-2 {
  font-weight: 600;
  font-size: 2.25rem;
}

.bread-crumbs {
  color: #828282;
  margin-bottom: 32px;

  &__current-page {
    color: rgb(0, 0, 0);
  }
}
</style>
