<template>
    <div class="product-cart">
        <div  v-if="product?.discount > 0" class="product-card__discount">
            <span >{{Math.floor(product.discount)}} %</span>
        </div>
        
        <nuxt-link to="/" class="product-card__img">
            <img :src="product?.imageUrl" alt="" />
        </nuxt-link>
        <div class="product-card__text-wrapper">
            <div class="product-card__price-wrapper">
                <h4 class="product-card__skidka">
                    <!-- {{ product?.discount }} -->
                </h4>
                <h4 class="product-card__price">
                    {{ product?.priceFormat }}
                </h4>
            </div>

            <nuxt-link :to="localePath(`/product/${product?.slug}`)" class="product-card__title">
                {{ product?.name }}
            </nuxt-link>
        </div>
        <div class="product-card__footer">


            <button class="w-[22px] h-[22px] cart-btn" @click="addToCart(cartProduct)"
                :class="{ 'active-cart': activeCart }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21" fill="none">
                    <path class=""
                        d="M0.714355 1.57141H4.14293L6.44007 13.0486C6.51845 13.4432 6.73313 13.7977 7.04654 14.05C7.35994 14.3022 7.7521 14.4363 8.15436 14.4286H16.4858C16.888 14.4363 17.2802 14.3022 17.5936 14.05C17.907 13.7977 18.1217 13.4432 18.2001 13.0486L19.5715 5.85713H5.00007M8.42864 18.7143C8.42864 19.1877 8.04489 19.5714 7.5715 19.5714C7.09811 19.5714 6.71436 19.1877 6.71436 18.7143C6.71436 18.2409 7.09811 17.8571 7.5715 17.8571C8.04489 17.8571 8.42864 18.2409 8.42864 18.7143ZM17.8572 18.7143C17.8572 19.1877 17.4735 19.5714 17.0001 19.5714C16.5267 19.5714 16.1429 19.1877 16.1429 18.7143C16.1429 18.2409 16.5267 17.8571 17.0001 17.8571C17.4735 17.8571 17.8572 18.2409 17.8572 18.7143Z"
                        stroke="#BDBDBD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>

            <div class="product-card__footer-line"></div>

            <button class="w-[25px] h-[25px] cart-btn-2" @click="savedPost()"
                :class="{ 'active-cart-2': activeCartlike }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path class=""
                        d="M19.2494 5.64964C18.8306 5.21722 18.3332 4.87418 17.7858 4.64014C17.2385 4.4061 16.6517 4.28564 16.0592 4.28564C15.4667 4.28564 14.88 4.4061 14.3326 4.64014C13.7852 4.87418 13.2879 5.21722 12.869 5.64964L11.9997 6.54666L11.1304 5.64964C10.2843 4.77658 9.1367 4.2861 7.94013 4.2861C6.74356 4.2861 5.596 4.77658 4.7499 5.64964C3.9038 6.52271 3.42847 7.70683 3.42847 8.94153C3.42847 10.1762 3.9038 11.3604 4.7499 12.2334L5.61922 13.1304L11.9997 19.7142L18.3801 13.1304L19.2494 12.2334C19.6685 11.8012 20.001 11.288 20.2278 10.7232C20.4546 10.1583 20.5713 9.55293 20.5713 8.94153C20.5713 8.33013 20.4546 7.72472 20.2278 7.15989C20.001 6.59505 19.6685 6.08187 19.2494 5.64964Z"
                        fill="white" stroke="#BDBDBD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
            </button>

        </div>
    </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
import { addToCart } from "~~/composables/addToCart"
import services from "~/services/services";
const localePath = useLocalePath()
const { product } = defineProps(["product"]);
const store = useStore()

const cartProduct = computed(() => {
    const item = {
        name: product?.name,
        id: product?.id,
        imageUrl: product?.imageUrl,
        price: product?.price,
        quantity: 1,
    }
    return item;
})

const activeCart = computed(() => {

    const item = store.cart.find((el) => el.id == product.id)

    if (item) {
        return true
    } else {
        return false
    }

})

// const cartProductlike = computed(() => {
//     const item = {
//         name: product?.name,
//         id: product?.id,
//         imageUrl: product?.imageUrl,
//         price: product?.price,
//     }
//     return item;
// })

const activeCartlike = computed(() => {

    const item = store.like?.data?.items.find((el) => el.id == product.id)

    if (item) {
        return true
    } else {
        return false
    }

})
async function getSave() {
    const res = await services.getSave(store.token);
    store.like = res
}

const savedPost = async function () {
  if (store?.token) {
    const res = await services.postSave(store?.token, product?.slug);
    getSave();
  } else {
    store.login = true;
  }

};


</script>

<style lang="scss" scoped>
.cart-btn {
    &:hover {
        svg {
            path {
                stroke: #4675ff;
                fill: #4675ff;
            }
        }
    }
}

.cart-btn-2 {
    &:hover {
        svg {
            path {
                stroke: #4675ff;
                fill: #4675ff;
            }
        }
    }
}

.active-cart {
    svg {
        path {
            stroke: #4675ff;
            fill: #4675ff;
        }
    }
}

.active-cart-2 {
    svg {
        path {
            stroke: #4675ff;
            fill: #4675ff;
        }
    }
}
</style>