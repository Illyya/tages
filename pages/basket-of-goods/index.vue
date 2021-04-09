<template>
  <div class="basket-of-goods">
    <ProductInBasket
      v-for="product in products"
      :key="product.id"
      :product="product"
      class="basket-of-goods__product-in-basket"
    />
  </div>
</template>

<script>
import ProductInBasket from "~/components/ProductInBasket.vue";
import AppTitleH3 from "~/components/AppTitleH3";

export default {
  name: "basket-of-goods",
  components: {
    AppTitleH3,
    ProductInBasket,
  },
  computed: {
    products() {
      return this.$store.getters.basket;
    },
  },
};
</script>

<style lang="scss">
.basket-of-goods {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__product-in-basket {
    margin: 10px;
  }
}
</style>