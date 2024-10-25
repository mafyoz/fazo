<template>
    <div>
        <div v-if="store.cartLike" class="fixed inset-0 z-20 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"></div>

        <transition name="cartMenu">
            <div v-if="store.cartLike" class="fixed z-20 inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                            <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                                            Sevimlilar
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="store.cartLike = false" type="button"
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
                                            <!-- <pre>{{ save?.data }}</pre> -->
                                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                <li class="flex py-6" v-for="item in store.like?.data?.items" :key="item">
                                                    <div
                                                        class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      
                                                        <img :src="item?.imageUrl" :alt="item?.name"
                                                            class="h-full w-full object-cover object-center" />
                                                    </div>

                                                    <div class="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div
                                                                class="flex justify-between text-base font-medium text-gray-900">
                                                                <h6 class="text-sm">

                                                                    <NuxtLink :to="`/product/${item.id}`"
                                                                        @click="store.likeMenu = false">
                                                                        {{ item?.name }}
                                                                    </NuxtLink>
                                                                </h6>
                                                                <p class="ml-4 text-sm">

                                                                    {{ item?.price }} so'm
                                                                </p>
                                                            </div>
                                                            <p class="mt-1 text-xs text-gray-500">
                                                                {{ item?.category }}
                                                            </p>
                                                        </div>
                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                            <div class="flex">
                                                                <button @click="savedPost(item)"
                                                                 type="button"
                                                                    class="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <!-- More products... -->
                                            </ul>
                                            <!-- <pre>{{ store.like?.data?.items  }}</pre> -->
                                            <p class="flex items-center justify" v-if="!store.like?.data?.items?.length">
                                                Your purchases will appear here
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { deleteLike } from "~/composables/deleteLike"
import services from "~/services/services"
import { useStore } from "~/store/store";
const store = useStore();
const save = ref({})



async function getSave() {
    const res = await services.getSave(store.token);
    store.like = res
}
const savedPost = async function(product) {
    const res = await services.postSave(store?.token, product?.slug)
    getSave()
}



onMounted(()=> {
    if(process.client) {
getSave()
    }
})
watch(() => store.token, () => {

    getSave()
})

</script>

<style lang="scss">
.cartMenu-enter-active,
.cartMenu-leave-active {
    transition: all 0.3s ease;
    translate: 0 0;
}

.cartMenu-enter-from,
.cartMenu-leave-to {
    transition: all 0.3s ease;
    opacity: 0;
    translate: 300px 0;
}
</style>