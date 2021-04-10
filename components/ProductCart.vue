<template>
  <div class="card-product">
    <div v-if="discount" class="card-product__discount">Скидка</div>
    <div class="card-product__picture">
      <picture>
        <source :srcset="srcImgWebp" type="image/webp" />
        <img :src="srcImgPng" alt="product-picture" />
      </picture>
    </div>
    <p v-if="code" class="card-product__model">{{ code }}</p>
    <AppTitleH3 :name="name" class="card-product__title-3" />
    <div class="card-product__price-basket-favorites">
      <div class="card-product__price">
        <div v-if="oldPrice" class="card-product__old-price">
          {{ oldPrice }}₽
        </div>
        <div class="card-product__new-price">{{ currentPrice }}₽</div>
      </div>
      <div
        @click="addToBasket"
        v-if="!inTheBasket"
        class="card-product__to-basket"
      ></div>
      <div
        @click="deleteFromBasket"
        v-else
        class="card-product__in-the-basket"
      ></div>
      <div
        @click="toFromFavorites"
        :class="{ 'card-product__in-the-favorites': inTheFavorites }"
        class="card-product__favorites"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppTitleH3 from "./AppTitleH3.vue";
export default Vue.extend({
  components: { AppTitleH3 },
  name: "ProductCart",
  props: {
    name: {
      type: String,
    },
    oldPrice: {
      type: Number,
    },
    currentPrice: {
      type: Number,
    },
    inTheBasket: {
      type: Boolean,
    },
    inTheFavorites: {
      type: Boolean,
    },
    code: {
      type: String,
    },
    discount: {
      type: Number,
    },
    srcImgWebp: {
      type: String,
    },
    srcImgPng: {
      type: String,
    },
  },
  methods: {
    addToBasket() {
      this.$emit("addToBasket");
    },
    deleteFromBasket() {
      this.$emit("deleteFromBasket");
    },
    toFromFavorites() {
      this.$emit("toFromFavorites");
    },
  },
});
</script>

<style lang="scss">
.card-product {
  position: relative;
  padding: 9px 13px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeee;

  &__discount {
    position: absolute;
    padding: 3px 16px;
    display: inline-block;
    top: 8px;
    left: 0;
    font-size: 0.875rem;
    color: #ffffff;
    background-color: #eb5757;
  }

  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;

    picture {
      max-width: 238px;
      max-height: 238px;
    }
  }

  &__model {
    font-size: 0.625rem;
    color: #888888;
    margin-bottom: 6px;
  }

  &__title-3 {
    margin: auto 0 9px 0;
  }

  &__price-basket-favorites {
    display: flex;
  }

  &__price {
    display: flex;
    margin-right: auto;
  }

  &__old-price {
    color: #888888;
    text-decoration: line-through;
    margin-right: 9px;
  }

  &__new-price {
  }

  &__to-basket {
    width: 21px;
    height: 21px;
    background: url(~assets/img/icons/to-basket.svg) no-repeat;
    margin-right: 23px;
    cursor: pointer;
  }

  &__in-the-basket {
    width: 21px;
    height: 21px;
    background: url(~assets/img/icons/in-the-basket.svg) no-repeat;
    margin-right: 23px;
    cursor: pointer;
  }

  &__favorites {
    position: relative;
    width: 21px;
    height: 21px;
    background: url(~assets/img/icons/to-favorites.svg) no-repeat;
    cursor: pointer;
  }

  &__in-the-favorites {
    background: url(~assets/img/icons/in-the-favorites.svg) no-repeat;
  }
}
</style>