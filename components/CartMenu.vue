<template>
    <div v-if="store.cartMenuOpen" @click="store.cartMenuOpen = false"
        class="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true">
    </div>

    <transition name="cartModal">
        <div v-if="store.cartMenuOpen" class="fixed inset-0 z-10 overflow-hidden ">
            <div class="absolute inset-0 overflow-hidden">
                <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div class="pointer-events-auto w-screen max-w-md">
                        <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                                        savat
                                    </h2>
                                    <div class="ml-3 flex h-7 items-center">
                                        <button @click="store.cartMenuOpen = false" type="button"
                                            class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="absolute -inset-0.5"></span>
                                            <span class="sr-only">Close panel</span>

                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div class="mt-8 flex flex-col h-full">
                                    <div class="flow-root flex flex-col h-full">
                                        <ul v-if="store.cart.length" role="list" class="-my-6 divide-y divide-gray-200">
                                            <li class="flex py-6" v-for="item in store.cart" :key="item">
                                                <div
                                                    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img :src="item?.imageUrl" :alt="item?.name"
                                                        class="h-full w-full object-cover object-center">
                                                </div>

                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div
                                                            class="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <nuxt-link :to="`/product/${item.id}`">{{ item?.name
                                                                    }}</nuxt-link>
                                                            </h3>
                                                            <p class="ml-4">{{ (item?.price *
                                                                item?.quantity)?.toFixed() }} so'm</p>
                                                        </div>

                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <div
                                                            class="text-gray-500 flex item-center gap-2 py-[4px] px-[12px] rounded-sm border-2 border-indigo-300 ">
                                                            <button class="flex  text-indigo-600"
                                                                @click="remCauntCart(item)">-</button>
                                                            <span>{{ item.quantity }}</span>
                                                            <button class="flex text-indigo-600 "
                                                                @click="addCauntCart(item)">+</button>
                                                        </div>

                                                        <div class="flex">
                                                            <button type="button" @click="deleteToCart(item)"
                                                                class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <p class="h-full flex items-center justify-center" v-if="!store.cart.length">
                                            Don't have anything</p>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>{{ allProductPrice?.toFixed() }} so'm</p>
                                </div>

                                <div class="mt-6">
                                    <nuxt-link @click="store.cartMenuOpen = false" to="/paymet" class="flex items-center justify-center rounded-md border border-transparent
                                        bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm
                                        hover:bg-indigo-700 ">Checkout</nuxt-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>



</template>

<script setup>
import { useStore } from '~/store/store';
const store = useStore();

import { addCauntCart } from '~/composables/addCauntCart';
import { remCauntCart } from '~/composables/remCauntCart';
import { deleteToCart } from '~/composables/deleteToCart';
import { computed } from 'vue';


const allProductPrice = computed(() => {
    let price = 0
    store.cart.forEach(el => {
        price += (el.quantity * el.price)
    })
    return price
})

</script>

<style lang="scss">
/* we will explain what these classes do next! */
.cartModal-enter-active,
.cartModal-leave-active {
    transition: all .3s ease;
    transition: 0 0;

}

.cartModal-enter-from,
.cartModal-leave-to {
    transition: all 0.3s ease;
    opacity: 0;
    transition: 250px 0;
}

@media (max-width: 720px){

}
</style>