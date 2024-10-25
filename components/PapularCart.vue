<template>
    <div>
        <div class="popular-card">
            <nuxt-link to="/" class="popularCategories_swiper-slide">
                <h5 class="popularCategories-card__title ">{{ item?.name }}</h5>
                <div class="popularCategories-card__img"><img :src="item?.imageUrl" alt=""></div>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
const { item } = defineProps(["item"]);
</script>

<style></style>