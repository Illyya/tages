<template>
  <div class="app">
    <div class="container">
      <nav class="app__menu menu">
        <ul class="menu__list">
          <li class="menu__li">
            Главная

            <ul class="menu__submenu">
              <li class="menu__li">
                Системы хранения

                <ul class="menu__submenu">
                  <li class="menu__li">
                    <NuxtLink to="/storage-systems/shelving-systems-kits">
                      Комплекты стеллажных систем
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <NuxtLink to="/basket-of-goods">
        <div
          v-if="numberOfGoods"
          class="app__recycle-bin-icon recycle-bin-icon"
        >
          <p class="recycle-bin-icon__number-of-goods">{{ numberOfGoods }}</p>
        </div>
      </NuxtLink>

      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    numberOfGoods() {
      return this.$store.getters.basket.length;
    },
  },
  mounted() {
    if (localStorage.getItem("items")) {
      this.$store.commit("dataFromLocalStorage");
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1.2;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a {
  color: inherit;
}
a,
a:visited,
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.app {
  padding: 32px 0;
  height: 100%;

  &__menu {
    margin-bottom: 50px;
  }

  &__recycle-bin-icon {
  }
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

.menu {
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;

  & > .menu__list {
    background-color: #6e7dce;
  }

  &__list {
  }

  &__submenu {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    .menu__li {
      transition: 0.2s ease-out;

      &:hover {
        background-color: rgb(104, 79, 133);
      }
    }
  }

  &__li {
    position: relative;
    padding: 5px 10px;
    white-space: nowrap;

    & > ul {
      position: absolute;
      visibility: hidden;
      background-color: #6e7dce;
      opacity: 0;
      transition: 0.3s ease-in;
      z-index: 10;
    }

    &:hover > ul {
      visibility: visible;
      opacity: 1;
    }
  }
}

.recycle-bin-icon {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 20px;
  right: 20px;
  background: url(~assets/img/icons/to-basket.svg) no-repeat;
  background-size: contain;
  cursor: pointer;

  &__number-of-goods {
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(0, 26, 255);
    font-weight: 900;
    font-size: 1.2rem;
  }
}
</style>
