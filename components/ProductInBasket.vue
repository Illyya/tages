<template>
  <div class="product-in-basket">
    <div class="product-in-basket__picture">
      <picture>
        <source :srcset="product.image.srcImgWebp" type="image/webp" />
        <img :src="product.image.srcImgPng" alt="product-picture" />
      </picture>
    </div>

    <p v-if="product.code" class="product-in-basket__model">
      {{ product.code }}
    </p>

    <AppTitleH3 :name="product.name" class="product-in-basket__title-3" />

    <div class="product-in-basket__price">
      <div v-if="product.price.old_price" class="product-in-basket__old-price">
        {{ product.price.old_price }}₽
      </div>
      <div class="product-in-basket__new-price">
        {{ product.price.current_price }}₽
      </div>
    </div>

    <div class="product-in-basket__quantity">
      <button
        @click="quantityLess(product.id)"
        :disabled="product.quantity <= 1"
        class="product-in-basket__quantity-less"
      >
        &lsaquo;
      </button>

      <p class="product-in-basket__quantity-number">{{ product.quantity }}</p>

      <button
        @click="quantityMore(product.id)"
        class="product-in-basket__quantity-more"
      >
        &rsaquo;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "productInBasket",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    quantityMore(id) {
      this.$store.commit("quantityMore", id);
    },
    quantityLess(id) {
      this.$store.commit("quantityLess", id);
    },
  },
};
</script>

<style lang="scss">
.product-in-basket {
  position: relative;
  padding: 9px 13px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eeeeee;

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

  &__price {
    display: flex;
  }

  &__old-price {
    color: #888888;
    text-decoration: line-through;
    margin: 0 9px 20px 0;
  }

  &__new-price {
  }

  &__quantity {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }

  &__quantity-less,
  &__quantity-more {
    width: 20px;
    background-color: transparent;
  }

  &__quantity-less {
  }

  &__quantity-number {
  }

  &__quantity-more {
  }
}
</style>