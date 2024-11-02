<template>
    <header>
        <div class="header__top">
            <div class="container">
                <nuxt-link to="/" class="header__top-logo">
                    MTD
                </nuxt-link>
                <ul class="header__top-nav">
                    <li v-for="item in PageCategory?.data " :key="item" class="header__top-nav__item">
                        <nuxt-link :to="localePath(`/${item?.id}`)"> {{ item?.name }}</nuxt-link>
                    </li>

                </ul>
                <a class="header__top-tel" href="tel:+998945053355">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_98_1823)">
                            <path
                                d="M18.2999 14.1449V16.6539C18.3008 16.8868 18.2531 17.1174 18.1598 17.3308C18.0665 17.5442 17.9297 17.7358 17.758 17.8932C17.5864 18.0507 17.3837 18.1706 17.1631 18.2451C16.9425 18.3198 16.7087 18.3475 16.4767 18.3265C13.9031 18.0469 11.4311 17.1675 9.2591 15.759C7.23837 14.475 5.52515 12.7617 4.24109 10.741C2.82766 8.55916 1.94806 6.07507 1.67354 3.48996C1.65263 3.25868 1.68012 3.02559 1.75425 2.80552C1.82837 2.58545 1.94749 2.38322 2.10406 2.21171C2.26061 2.04021 2.45117 1.90318 2.66358 1.80936C2.876 1.71553 3.10563 1.66696 3.33785 1.66674H5.84686C6.25273 1.66274 6.64622 1.80648 6.95397 2.07114C7.26171 2.33579 7.46272 2.70333 7.51953 3.10524C7.62543 3.90818 7.82182 4.69656 8.10497 5.45534C8.21749 5.75469 8.24184 6.08001 8.17514 6.39278C8.10843 6.70554 7.95348 6.99262 7.72861 7.22001L6.66646 8.28216C7.85704 10.376 9.59065 12.1096 11.6844 13.3002L12.7466 12.238C12.974 12.0131 13.2611 11.8582 13.5739 11.7915C13.8866 11.7248 14.212 11.7492 14.5113 11.8617C15.27 12.1448 16.0584 12.3412 16.8614 12.4471C17.2677 12.5044 17.6387 12.7091 17.904 13.0221C18.1692 13.3351 18.3101 13.7347 18.2999 14.1449Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_98_1823">
                                <rect width="20" height="20" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                    <span>+998 94 505 33 55</span>
                </a>
                <div class="header__lang">

                    <button @click="show = !show, hidding()" class="header__lang-top">
                        <span>{{ locale }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                            <path
                                d="M3.63668 4.35355C3.83194 4.54882 4.14853 4.54882 4.34379 4.35355L7.52577 1.17157C7.72103 0.976311 7.72103 0.659728 7.52577 0.464466C7.33051 0.269204 7.01392 0.269204 6.81866 0.464466L3.99023 3.29289L1.16181 0.464466C0.966545 0.269204 0.649963 0.269204 0.4547 0.464466C0.259438 0.659728 0.259438 0.976311 0.4547 1.17157L3.63668 4.35355ZM3.49023 3V4H4.49023V3H3.49023Z"
                                fill="white" />
                        </svg>
                    </button>

                    <transition>
                        <ul v-if="show" class="language__lis">
                            <li v-for="{ code, name } in locales" :key="code">
                                <NuxtLink :to="switchLocalePath(code)" @click="show = false, set(code)">
                                    {{ name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </transition>
                </div>
            </div>
        </div>

        <div class="header__center">
            <div class="container">
                <nuxt-link class="header__center-logo" :to="localePath('/')">MTD</nuxt-link>
                <button @click="store.showmenu = !store.showmenu" class="header__center-burger-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M6.66675 9.33333H25.3334" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <path d="M6.66675 16H25.3334" stroke="white" stroke-width="2" stroke-linecap="round" />
                        <path d="M6.66675 22.6667H25.3334" stroke="white" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <form action="" class="header__center-form">
                    <input type="text" class="header__center-form__input" v-model="searchVal" placeholder="Qidirish..."
                        @input="search">

                    <button type="submit" class="header__center-form__btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 17.5L13.875 13.875" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>{{ t("search") }}</span>
                    </button>
                </form>

                <ul class="search-infos gap-4" v-if="searchVal">
                    <li v-for="item in searchList?.data?.items" :key="item" class="flex gap-2 items-center ">
                        <router-link :to="localePath(`/product/${item?.slug}`)" @click="searchVal = store.searchMenu">
                            <img :src="item?.imageUrl" alt="" class="search-infos__img w-[60px] h-[60px]">
                            <h3> {{ item?.name }}</h3>
                        </router-link>
                    </li>
                </ul>


                <ul class="header__center-list">
                    <li v-if="!store.token">
                        <button @click="store.login = !store.login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                fill="none">
                                <path
                                    d="M23.5713 24.6429V22.5C23.5713 21.3634 23.1198 20.2733 22.3161 19.4695C21.5123 18.6658 20.4223 18.2143 19.2856 18.2143H10.7142C9.57754 18.2143 8.48745 18.6658 7.68372 19.4695C6.88 20.2733 6.42847 21.3634 6.42847 22.5V24.6429M19.2856 9.64286C19.2856 12.0098 17.3668 13.9286 14.9999 13.9286C12.633 13.9286 10.7142 12.0098 10.7142 9.64286C10.7142 7.27593 12.633 5.35715 14.9999 5.35715C17.3668 5.35715 19.2856 7.27593 19.2856 9.64286Z"
                                    stroke="#202020" stroke-width="2.2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>{{ t("enter") }}</span>
                        </button>
                    </li>
                    <li v-if="store.token">
                        <NuxtLink :to="localePath('profil')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                fill="none">
                                <path
                                    d="M23.5713 24.6429V22.5C23.5713 21.3634 23.1198 20.2733 22.3161 19.4695C21.5123 18.6658 20.4223 18.2143 19.2856 18.2143H10.7142C9.57754 18.2143 8.48745 18.6658 7.68372 19.4695C6.88 20.2733 6.42847 21.3634 6.42847 22.5V24.6429M19.2856 9.64286C19.2856 12.0098 17.3668 13.9286 14.9999 13.9286C12.633 13.9286 10.7142 12.0098 10.7142 9.64286C10.7142 7.27593 12.633 5.35715 14.9999 5.35715C17.3668 5.35715 19.2856 7.27593 19.2856 9.64286Z"
                                    stroke="#202020" stroke-width="2.2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <span>{{ store.userInfo?.lastname }}</span>
                        </NuxtLink>
                    </li>
                    <li v-if="!store.token">
                        <button @click="store.login = !store.login">
                            <img src="/assets/images/svg/like.svg" alt="">
                            <span>{{ t("fav") }}</span>
                            <span v-if="store.like?.data?.items.length"
                                class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">{{
                                    store.like?.data?.items.length }}</span>

                        </button>

                    </li>
                    <li v-if="store.token">
                        <button @click="store.cartLike = true">
                            <img src="/assets/images/svg/like.svg" alt="">
                            <span>{{ t("fav") }}</span>
                            <span v-if="store.like?.data?.items.length"
                                class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">{{
                                    store.like?.data?.items.length }}</span>

                        </button>

                    </li>
                    <li>
                        <button @click="store.cartMenuOpen = true">
                            <span v-if="cartLangth"
                                class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">
                                {{ cartLangth }}</span>
                            <img src="/assets/images/svg/shopping-cart.svg" alt="">
                            <span>{{ t("cart") }}</span>
                        </button>
                    </li>
                </ul>

                <div v-if="store.showmenu" @click="store.showmenu = !store.showmenu"
                    class="header__center-show-menu-overline">
                </div>

                <transition name="showmenu">
                    <div v-if="store.showmenu" class="header__center-show-menu">
                        <div class="header__center-show-menu__header">
                            <button class="header__center-log"><nuxt-link to="/">MTD</nuxt-link></button>
                            <button @click="store.showmenu = !store.showmenu">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18" stroke="#202020" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#202020" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="header__center-show-menu__shaxs">
                            <div class="header__center-show-menu__shaxs__img">
                                <img src="https://mtdmarket.uz/_nuxt/user.5f2dd42a.svg" alt="">
                            </div>
                            <h4 class="header__center-show-menu__shaxs__name">
                                {{ store.userInfo?.lastname, store.userInfo?.firstName }}
                            </h4>
                        </div>
                        <div class="header__menu-nav">
                            <ul>
                                <li v-for="item in PageCategory?.data " :key="item" class="header__top-nav__item">
                                    <nuxt-link :to="`/${item?.id}`"> {{ item?.name }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="header__menu-lang-btns">
                            <li v-for="{ code, name } in locales" :key="code">
                                <NuxtLink :to="switchLocalePath(code)" @click="show = false, set(code)">
                                    <button> {{ name }}</button>
                                </NuxtLink>
                            </li>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

        <div class="header__bottom">
            <div class="container">
                <button
                    @click="store.categorisMenuOpen = !store.categorisMenuOpen, store.carusel = !store.carusel, store.detail = !store.detail"
                    class="header__bottom-category-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M10.7144 8.57143H24.6429M10.7144 15H24.6429M10.7144 21.4286H24.6429" stroke="white"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M6.4285 8.57143C6.4285 9.16316 5.94881 9.64286 5.35707 9.64286C4.76534 9.64286 4.28564 9.16316 4.28564 8.57143C4.28564 7.97969 4.76534 7.5 5.35707 7.5C5.94881 7.5 6.4285 7.97969 6.4285 8.57143Z"
                            stroke="white" />
                        <path
                            d="M6.4285 15C6.4285 15.5917 5.94881 16.0714 5.35707 16.0714C4.76534 16.0714 4.28564 15.5917 4.28564 15C4.28564 14.4083 4.76534 13.9286 5.35707 13.9286C5.94881 13.9286 6.4285 14.4083 6.4285 15Z"
                            stroke="white" />
                        <path
                            d="M6.4285 21.4286C6.4285 22.0203 5.94881 22.5 5.35707 22.5C4.76534 22.5 4.28564 22.0203 4.28564 21.4286C4.28564 20.8368 4.76534 20.3571 5.35707 20.3571C5.94881 20.3571 6.4285 20.8368 6.4285 21.4286Z"
                            stroke="white" />
                    </svg>
                    <span>{{ t("headCategory") }}</span>
                </button>
                <transition name="katgoriy">
                    <div v-if="store.categorisMenuOpen" class="kategoriya">

                        <ul class="katgoriy__list">
                            <li v-for="item in Categories" :key="item">
                                <nuxt-link :to="localePath('/')">
                                    <button>
                                        <img :src="item?.imageUrl" alt="">
                                        <span> {{ item?.name }}</span>
                                    </button>
                                </nuxt-link>
                            </li>

                        </ul>
                    </div>
                    
                </transition>
                <nav>
                    <ul>
                        <li v-for="item in headerCategories?.data" :key="item">
                            <NuxtLink class="li" :to="localePath(`/categorys/${item?.slug}`)">
                                {{ item?.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </header>
    <div v-if="store.categorisMenuOpen2" @click="store.categorisMenuOpen2 = false" class="kategoriy__overlin">
    </div>
    <transition name="katgori">

        <div v-if="store.categorisMenuOpen2" class="kategoriy">
            <div class="kategoriy__title">
                <h2>Kategoriyalar</h2>
                <button @click="store.categorisMenuOpen2 = false"><svg fill="none" height="24" viewBox="0 0 24 24"
                        width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                            fill="currentColor"></path>
                    </svg></button>
            </div>
            <ul class="kategoriy__list">
                <li v-for="item in Categories" :key="item">
                    <button>
                        <img :src="item?.imageUrl" alt="">
                        <span> {{ item?.name }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path
                                d="M7.13911 14.7892C7.04041 14.7898 6.94256 14.7709 6.85118 14.7335C6.75981 14.6962 6.67669 14.6412 6.60661 14.5717C6.53632 14.502 6.48052 14.419 6.44245 14.3276C6.40437 14.2362 6.38477 14.1382 6.38477 14.0392C6.38477 13.9402 6.40437 13.8422 6.44245 13.7508C6.48052 13.6594 6.53632 13.5764 6.60661 13.5067L10.5816 9.5392L6.60661 5.5717C6.53669 5.50177 6.48121 5.41876 6.44337 5.32739C6.40552 5.23602 6.38605 5.1381 6.38605 5.0392C6.38605 4.94031 6.40552 4.84238 6.44337 4.75101C6.48121 4.65965 6.53669 4.57663 6.60661 4.5067C6.67654 4.43677 6.75956 4.3813 6.85093 4.34346C6.94229 4.30561 7.04022 4.28613 7.13911 4.28613C7.23801 4.28613 7.33593 4.30561 7.4273 4.34346C7.51867 4.3813 7.60168 4.43677 7.67161 4.5067L12.1716 9.0067C12.2419 9.07642 12.2977 9.15938 12.3358 9.25077C12.3739 9.34216 12.3935 9.44019 12.3935 9.5392C12.3935 9.63821 12.3739 9.73624 12.3358 9.82763C12.2977 9.91903 12.2419 10.002 12.1716 10.0717L7.67161 14.5717C7.60153 14.6412 7.51842 14.6962 7.42704 14.7335C7.33567 14.7709 7.23782 14.7898 7.13911 14.7892Z"
                                fill="#BABAC0"></path>
                        </svg>
                    </button>
                </li>

            </ul>
        </div>
    </transition>

    <div class="mobile-menu">
        <div class="container">
            <ul class="mobile-menu__wrapper">
                <li class="mobile-menu__wrapper-item">
                    <nuxt-link to="/">
                        <button>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.5 20.5C21.5 21.0523 21.0523 21.5 20.5 21.5H4.5C3.94772 21.5 3.5 21.0523 3.5 20.5V9.98907C3.5 9.68048 3.64247 9.38917 3.88606 9.19972L11.8861 2.97749C12.2472 2.69663 12.7528 2.69663 13.1139 2.97749L21.1139 9.19972C21.3575 9.38917 21.5 9.68048 21.5 9.98907V20.5ZM19.5 19.5V10.4782L12.5 5.03371L5.5 10.4782V19.5H19.5Z"
                                    fill="#AAAAAA" />
                            </svg>
                            <span>Bosh Sahifa</span>
                        </button>
                    </nuxt-link>
                </li>
                <li class="mobile-menu__wrapper-item">
                    <button @click="store.categorisMenuOpen2 = !store.categorisMenuOpen2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M14.5186 13.799C16.5729 13.799 18.2382 12.1337 18.2382 10.0794C18.2382 8.02512 16.5729 6.3598 14.5186 6.3598C12.4643 6.3598 10.799 8.02512 10.799 10.0794C10.799 12.1337 12.4643 13.799 14.5186 13.799ZM18.866 13.5767L23.2281 17.9388C23.5901 18.3008 23.5918 18.8862 23.2261 19.2519C22.863 19.615 22.2745 19.6153 21.913 19.2538L17.4726 14.8135C16.616 15.3492 15.6034 15.6588 14.5186 15.6588C11.4372 15.6588 8.93919 13.1608 8.93919 10.0794C8.93919 6.99798 11.4372 4.5 14.5186 4.5C17.6 4.5 20.098 6.99798 20.098 10.0794C20.098 11.4036 19.6367 12.62 18.866 13.5767ZM1.5 7.75465C1.5 7.24108 1.81596 6.82475 2.19535 6.82475H6.38404C6.76807 6.82475 7.07939 7.2375 7.07939 7.75465C7.07939 8.26821 6.76343 8.68454 6.38404 8.68454H2.19535C1.81132 8.68454 1.5 8.2718 1.5 7.75465ZM1.5 13.334C1.5 12.8205 1.81596 12.4041 2.19535 12.4041H6.38404C6.76807 12.4041 7.07939 12.8169 7.07939 13.334C7.07939 13.8476 6.76343 14.2639 6.38404 14.2639H2.19535C1.81132 14.2639 1.5 13.8512 1.5 13.334ZM1.5 18.9134C1.5 18.3999 1.8059 17.9835 2.19655 17.9835H15.4494C15.834 17.9835 16.1459 18.3963 16.1459 18.9134C16.1459 19.427 15.84 19.8433 15.4494 19.8433H2.19655C1.81186 19.8433 1.5 19.4306 1.5 18.9134Z"
                                fill="#AAAAAA" />
                        </svg>
                        <span>Kategoriyalar</span>
                    </button>
                </li>
                <li class="mobile-menu__wrapper-item">
                    <button class="" @click="store.cartMenuOpen = true">
                        <span v-if="cartLangth"
                            class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">
                            {{ cartLangth }}
                        </span>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.14282 3.21428H6.42854L9.29997 17.5607C9.39794 18.054 9.6663 18.4971 10.0581 18.8125C10.4498 19.1278 10.94 19.2953 11.4428 19.2857H21.8571C22.3599 19.2953 22.8501 19.1278 23.2419 18.8125C23.6336 18.4971 23.902 18.054 24 17.5607L25.7143 8.57142H7.49997M11.7857 24.6428C11.7857 25.2346 11.306 25.7143 10.7143 25.7143C10.1225 25.7143 9.64282 25.2346 9.64282 24.6428C9.64282 24.0511 10.1225 23.5714 10.7143 23.5714C11.306 23.5714 11.7857 24.0511 11.7857 24.6428ZM23.5714 24.6428C23.5714 25.2346 23.0917 25.7143 22.5 25.7143C21.9082 25.7143 21.4285 25.2346 21.4285 24.6428C21.4285 24.0511 21.9082 23.5714 22.5 23.5714C23.0917 23.5714 23.5714 24.0511 23.5714 24.6428Z"
                                stroke="#AAAAAA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span>savat</span>
                    </button>
                </li>
                <li class="mobile-menu__wrapper-item" v-if="!store.token">
                    <button @click="store.login = !store.login">
                        <svg width="35" height="35 " viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.0619 7.06214C23.5383 6.52161 22.9166 6.09282 22.2324 5.80027C21.5481 5.50772 20.8147 5.35715 20.0741 5.35715C19.3334 5.35715 18.6 5.50772 17.9158 5.80027C17.2316 6.09282 16.6099 6.52161 16.0863 7.06214L14.9997 8.18342L13.913 7.06214C12.8554 5.97082 11.4209 5.35771 9.92522 5.35771C8.42952 5.35771 6.99507 5.97082 5.93744 7.06214C4.87981 8.15347 4.28564 9.63363 4.28564 11.177C4.28564 12.7204 4.87981 14.2005 5.93744 15.2919L7.02408 16.4131L14.9997 24.6429L22.9752 16.4131L24.0619 15.2919C24.5857 14.7516 25.0013 14.1101 25.2848 13.4041C25.5683 12.698 25.7142 11.9413 25.7142 11.177C25.7142 10.4128 25.5683 9.65599 25.2848 8.94995C25.0013 8.24391 24.5857 7.60242 24.0619 7.06214V7.06214Z"
                                stroke="#AAAAAA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Sevimlilar</span>
                        <span v-if="store.like?.length"
                            class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">{{
                                store.like?.length }}</span>

                    </button>
                </li>
                <li class="mobile-menu__wrapper-item"v-if="store.token">
                    <button @click="store.cartLike = true">
                        <svg width="35" height="35 " viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M24.0619 7.06214C23.5383 6.52161 22.9166 6.09282 22.2324 5.80027C21.5481 5.50772 20.8147 5.35715 20.0741 5.35715C19.3334 5.35715 18.6 5.50772 17.9158 5.80027C17.2316 6.09282 16.6099 6.52161 16.0863 7.06214L14.9997 8.18342L13.913 7.06214C12.8554 5.97082 11.4209 5.35771 9.92522 5.35771C8.42952 5.35771 6.99507 5.97082 5.93744 7.06214C4.87981 8.15347 4.28564 9.63363 4.28564 11.177C4.28564 12.7204 4.87981 14.2005 5.93744 15.2919L7.02408 16.4131L14.9997 24.6429L22.9752 16.4131L24.0619 15.2919C24.5857 14.7516 25.0013 14.1101 25.2848 13.4041C25.5683 12.698 25.7142 11.9413 25.7142 11.177C25.7142 10.4128 25.5683 9.65599 25.2848 8.94995C25.0013 8.24391 24.5857 7.60242 24.0619 7.06214V7.06214Z"
                                stroke="#AAAAAA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Sevimlilar</span>
                        <span v-if="store.like?.length"
                            class="flex item-center justify-center absolute top-0 right-0 w-[18px] h-[18px] rounded-full bg-indigo-600 translate-y-[-50%] translate-x-[50%] text-white text-xs kurjok-stil">{{
                                store.like?.length }}</span>

                    </button>
                </li>
                <li class="mobile-menu__wrapper-item" v-if="!store.token">
                    <button @click="store.login = !store.login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M23.5713 24.6429V22.5C23.5713 21.3634 23.1198 20.2733 22.3161 19.4695C21.5123 18.6658 20.4223 18.2143 19.2856 18.2143H10.7142C9.57754 18.2143 8.48745 18.6658 7.68372 19.4695C6.88 20.2733 6.42847 21.3634 6.42847 22.5V24.6429M19.2856 9.64286C19.2856 12.0098 17.3668 13.9286 14.9999 13.9286C12.633 13.9286 10.7142 12.0098 10.7142 9.64286C10.7142 7.27593 12.633 5.35715 14.9999 5.35715C17.3668 5.35715 19.2856 7.27593 19.2856 9.64286Z"
                                stroke="#AAAAAA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{{ t("enter") }}</span>
                    </button>
                </li>
                <li class="mobile-menu__wrapper-item" v-if="store.token">
                    <NuxtLink :to="localePath('profil')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M23.5713 24.6429V22.5C23.5713 21.3634 23.1198 20.2733 22.3161 19.4695C21.5123 18.6658 20.4223 18.2143 19.2856 18.2143H10.7142C9.57754 18.2143 8.48745 18.6658 7.68372 19.4695C6.88 20.2733 6.42847 21.3634 6.42847 22.5V24.6429M19.2856 9.64286C19.2856 12.0098 17.3668 13.9286 14.9999 13.9286C12.633 13.9286 10.7142 12.0098 10.7142 9.64286C10.7142 7.27593 12.633 5.35715 14.9999 5.35715C17.3668 5.35715 19.2856 7.27593 19.2856 9.64286Z"
                                stroke="#AAAAAA" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{{ store.userInfo?.lastname }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from "~~/store/store.js";
import services from "~/services/services"
const store = useStore()

const cartLangth = computed(() => {
    let index = 0
    store.cart.forEach(el => {
        index += el.quantity
    })
    return index;
})

const show = ref(false);
const searchVal = ref("")
const searchList = ref({})
const PageCategory = ref({})
const headerCategories = ref({})
const Categories = ref({})
const { locale, locales, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()



async function getUserInfo() {
    const res = await $fetch("https://vadalar.uz/api/profile-manager/profile/index", {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    })
    store.userInfo = res.data;
}

onMounted(() => {
    if (process.client) {
        store.token = localStorage.getItem("authKey") ? localStorage.getItem("authKey") : null
        // console.log(store.token)
        getUserInfo()
    }
})

watch(() => store.token, () => {

    getUserInfo()
})

async function search(l) {
    const res = await services.search(searchVal.value, locale.value);
    searchList.value = res;
}

async function getPageCategory(l) {
    const res = await services.getPageCategory(locale.value);
    PageCategory.value = res;
}

getPageCategory()

async function getHeaderCategories(l) {
    const res = await services.getHeaderCategories(locale.value);
    headerCategories.value = res;
}

getHeaderCategories()


async function getCategory(l) {
    const res = await services.getCategory(locale.value);
    Categories.value = res.data;
    console.log(res.data);
}

getCategory()

watch(() => locale.value, () => {
    getPageCategory()
    getCategory()
    getHeaderCategories()
    search()
})


</script>

<style lang="scss" scoped>
.katgoriy-enter-active,
.katgoriy-leave-active {
    transition: all 0.3s ease;
    translate: 0 0;
}

.katgoriy-enter-from,
.katgoriy-leave-to {
    transition: all 0.3s ease;
    opacity: 0;
    translate: 300 0;
}


.showmenu-enter-active,
.showmenu-leave-active {
    transition: all 0.3s ease;
    translate: 0 0;
}

.showmenu-enter-from,
.showmenu-leave-to {
    transition: all 0.1s ease;
    opacity: 0;
    translate: 100 0;
}
</style>