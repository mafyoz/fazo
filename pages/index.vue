<template>
    <main>
        
        <div class="hero">
            <div class="container">
                <div class="hero__swiper-wrappe" v-if="store.carusel">
                    <butto class="prev"><svg data-name="Livello 1" width="20" height="20" id="Livello_1"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
                                fill="#4675ff" />
                        </svg></butto>
                    <butto class="next"><svg data-name="Livello 1" width="20" height="20" id="Livello_1"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"
                                fill="#4675ff" />
                        </svg></butto>

                    <Swiper :slides-per-view="'auto'" :modules="[SwiperNavigation, SwiperAutoplay]" :navigation="{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }" :loop="true" :autoplay="true">
                        <Swiper-slide v-for="item in webBanners?.data" :key="item">
                            <img :src="item?.imageUrl" alt="" class="swiper" />
                        </Swiper-slide>

                    </Swiper>
                </div>
            </div>
        </div>

        <div class="products">
            <div class="container">

                <h3 class="products__title">
                    {{ t("title") }}
                </h3>

                <div class="products__wrapper">
                    <Product v-for="item in products?.data" :key="item" :product="item"></Product>
                </div>
            </div>
        </div>

        <div class="popularCategories">
            <div class="container">
                <h2 class="popularCategories__title">
                    {{ t("popCategory") }}
                </h2>
                <div class="popularCategories__swiper-wrapper">
                    <butto class="prev1">
                        <svg data-name="Livello 1" width="20" height="20" id="Livello_1" viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
                                fill="#4675ff" />
                        </svg>
                    </butto>
                    <butto class="next1">
                        <svg data-name="Livello 1" width="20" height="20" id="Livello_1" viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"
                                fill="#4675ff" />
                        </svg>
                    </butto>

                    <Swiper class="popularCategories__swiper" :slides-per-view="'auto'" :modules="[SwiperNavigation]"
                        :navigation="{
                            prevEl: '.prev1',
                            nextEl: '.next1',
                        }" :loop="true">
                        <Swiper-slide v-for="item in popularProducts?.data" :key="item" :products="item">
                            <PapularCart :item="item" />
                        </Swiper-slide>
                    </Swiper>

                </div>
            </div>
        </div>

        <div class="addvertising">
            <div class="container">
                <div class="addvertising__swiper-wrapper">
                    <butto class="prev2"><svg data-name="Livello 1" width="20" height="20" id="Livello_1"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
                                fill="#4675ff" />
                        </svg></butto>
                    <butto class="next2"><svg data-name="Livello 1" width="20" height="20" id="Livello_1"
                            viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"
                                fill="#4675ff" />
                        </svg></butto>

                    <Swiper  :slides-per-view="1" :modules="[SwiperNavigation]" :navigation="{
                        prevEl: '.prev2',
                        nextEl: '.next2',
                    }">
                        <Swiper-slide v-for="item in bodyBanners?.data" :key="item">
                            <div class="addvertising__item-wrapper">
                                <div class="addvertising__item-wrapper__left">
                                    <div class="addvertising__item-wrapper__left-text__wrapper">
                                        <h2>{{ item?.title }}</h2>
                                        <p>{{ item?.description }} </p>
                                    </div>
                                    <div class="addvertising__item-wrapper__left-img">
                                        <img :src="item?.imageUrl"
                                            alt="">
                                    </div>
                                </div>
                                <div class="addvertising__item-wrapper__reight">
                                    <h2 class="addversting-card__price">
                                        {{ item?.price }}
                                    </h2>
                                    <nuxt-link to="/" class="addversting-card__btn">
                                        {{ t("batafsil") }}
                                    </nuxt-link>
                                </div>
                            </div>
                        </Swiper-slide>
                    </Swiper>
                </div>
            </div>
        </div>

        <div class="products">
            <div class="container">

                <h3 class="products__title">
                    {{ t("cheapProducts") }}
                </h3>

                <div class="products__wrapper">
                    <Product v-for="item in cheap?.data" :key="item" :product="item"></Product>
                </div>
            </div>
        </div>

        <div class="brends">
            <div class="container">
                <h2 class="brends__title">
                    {{ t("brand") }}
                </h2>
                <div class="brends__swiper-wrapper">
                    <butto class="prev3">
                        <svg data-name="Livello 1" width="20" height="20" id="Livello_1" viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z"
                                fill="#4675ff" />
                        </svg>
                    </butto>
                    <butto class="next3">
                        <svg data-name="Livello 1" width="20" height="20" id="Livello_1" viewBox="0 0 128 128"
                            xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <path
                                d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"
                                fill="#4675ff" />
                            <path
                                d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z"
                                fill="#4675ff" />
                        </svg>
                    </butto>

                    <Swiper class="brends__swiper" :slides-per-view="'auto'" :modules="[SwiperNavigation]" :navigation="{
                        prevEl: '.prev3',
                        nextEl: '.next3',
                    }" :loop="true">
                        <Swiper-slide v-for="item in brands?.data" :key="item">
                            <div class="brends__img">
                                <img :src="item?.imageUrl"
                                    alt="">
                            </div>
                        </Swiper-slide>
                    </Swiper>

                </div>
            </div>
        </div>

    </main>

</template>

<script setup>
import services from "~/services/services";
import { useStore } from "~/store/store"
const store = useStore()
const products = ref({})
const webBanners = ref({})
const popularProducts = ref({})
const bodyBanners = ref({})
const cheap = ref({})
const brands = ref({})
const PageCategory = ref({})
const {locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()


async function getProducts(l) {
    store.loading = true
    const res = await services.getAllProducts(locale.value)
    products.value = res
    store.loading = false
}
getProducts()

async function getWebBanners(l) {
    store.loading = true
    const res = await services.getWebBanners(locale.value)
    webBanners.value = res
    store.loading = false
}

getWebBanners()

async function getPopularProducts(l) {
    store.loading = true
    const res = await services.getPopularProducts(locale.value);
    popularProducts.value = res;
    store.loading = false

}

getPopularProducts()

async function getBodyBanners(l) {
    store.loading = true
    const res = await services.getBodyBanners(locale.value)
    bodyBanners.value = res
    store.loading = false

}

getBodyBanners()

async function getCheapProducts(l) {
  store.loading = true
  const res = await services.getCheapProducts(locale.value);
  cheap.value = res;
  store.loading = false
}

getCheapProducts()


async function getBrands(l) {
  store.loading = true
  const res = await services.getBrands(locale.value);
  brands.value = res;
  store.loading = false

}

getBrands()



</script>

<style lang="scss" scoped></style>