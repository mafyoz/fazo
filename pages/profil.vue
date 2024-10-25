<template>
    <div class="profil">
        <div class="container">
            <div class="profil__left">
                <button class="profil__chiqish" @click="clearItem()">
                    <div class="profil__chiqish-img">
                        <img src="https://mtdmarket.uz/_nuxt/log-out.74d3215c.svg" alt="">
                    </div>
                    <span>Chiqish</span>
                </button>
            </div>
            <div class="profil__right">
                <div class="profil__right__top">
                    <div class="profil__right__top-title">
                        <div class="profil__right__top-title__manzil">
                            <div class="profil__right__top-title__manzil-img">
                                <img src="https://mtdmarket.uz/_nuxt/user.f9b9726e.svg" alt="">
                            </div>
                            <h3>Shaxsiy Ma'lumotlar</h3>
                        </div>
                        <button class="profil__right__top-title__btn" @click="store.sign = true">
                            O'zgartirish
                        </button>
                    </div>
                    <div class="profil__right__top-info">
                        <h2>{{ store.userInfo?.lastname, store.userInfo?.firstName }}</h2>
                        <h4 class="profil__right__top-info-tel">
                            Telefon Raqami: <span>{{ store.userInfo?.username }}</span>
                        </h4>
                    </div>
                </div>

                <div class="profil__right__bottom">
                    <div class="profil__right__bottom-title">
                        <div class="profil__right__bottom-title__manzil">
                            <div class="profil__right__bottom-title__manzil-img">
                                <img src="https://mtdmarket.uz/_nuxt/file-text.9f4ca8f7.svg" alt="">
                            </div>
                            <h3>Mening Buyurtmalarim</h3>
                        </div>
                        <div class="profil__right__bottom-title__btn-wrapper">
                            <button class="profil__right__bottom-title__btn">
                                Hozirgi
                            </button>
                            <button class="profil__right__bottom-title__btn1">
                                Hammasi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sign-up-autline" v-if="store.sign" @click="store.sign = !store.sign"></div>

            <div class="sign-up" v-if="store.sign">
                <div class="sign-up-title__wrap">
                    <h3 class="sign-up-title">
                        Shaxsiy ma'lumot
                    </h3>
                    <button class="sign-up-btn" @click="store.sign = !store.sign"><span>+</span></button>
                </div>
                <form class="sign-up-form" @submit.prevent="signUp()">
                    <h4>ism</h4>
                    <input v-model="firstName" type="text" placeholder="ism">
                    <h4>famliya</h4>
                    <input v-model="lastName" type="text" placeholder="famliya">
                    <button class="Yangilash" @click=" store.sign = !store.sign">Yangilash</button>
                    <button class="nomer" type="button" @click="store.Phone = true, store.sign = false">
                        Telefon raqamni yangilash
                    </button>
                </form>
            </div>

            <div class="register-autline" v-if="store.Phone" @click="store.Phone = !store.Phone"></div>

            <div class="register" v-if="store.Phone">
                <div class="register-title__wrap">
                    <h3 class="register-title">
                        Royhatan o'tish
                    </h3>
                    <button class="register-btn" @click="store.Phone = !store.Phone"><span>+</span></button>
                </div>
                <form class="register-form" @submit.prevent="enterPhone()">
                    <h4>Telefon Raqami</h4>
                    <input v-model="phone" autocomplete="false" @input="mask" @keydown="mask" @focus="mask" @blur="mask"
                        type="text" placeholder="telefon raqam...">
                    <button class="kirish" @click="store.Phone = false"> далее </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "~~/store/store.js";

import services from "~/services/services";




const {locale, locales, t} = useI18n()

function clearItem() {
  localStorage.clear();
  window.location.reload(true);
  window.location.href = "/";
}

const currentProduct = ref({})

async function currentProducts() {
  const res = await services.currentProducts(store.token)
  currentProduct.value = res.data
  console.log(res.data)
}

currentProducts()
const store = useStore()

const mask = (event) => {
    let keyCode;
    event.keyCode && (keyCode = event.keyCode);
    let pos = event.target.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+998 (__) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = event.target.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
    i = newValue.indexOf("_");
    if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
    }
    let reg = matrix.substr(0, event.target.value.length).replace(/_+/g,
        function (a) {
            return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(event.target.value) || event.target.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
        event.target.value = newValue;
    }
    if (event.type === "blur" && event.target.value.length < 5) {
        event.target.value = "";
    }
};


</script>

<style lang="scss" scoped>
.profil {
    padding: 20px 0;

    .container {
        display: flex;
        gap: 30px;
    }

    .profil__left {
        width: 360px;
        border-right: 1px solid #F2F2F2;

        .profil__chiqish {
            width: 100%;
            padding: 20px 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;

            &-img {
                height: 50px;
                width: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #F7F7F7;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                line-height: 1.4;
            }
        }

        .profil__chiqish:hover {
            background-color: #F2F2F2;
        }
    }

    .profil__right {
        display: flex;
        gap: 30px;
        flex-direction: column;

        .profil__right__top {
            border: 1px solid #F2F2F2;
            border-radius: 5px;
            width: 800px;
            height: 200px;

            &-title {
                border-bottom: 1px solid #F2F2F2;
                padding: 20px 10px;
                display: flex;
                justify-content: space-between;

                &__manzil {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    &-img {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #F7F7F7;
                    }

                    h3 {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.4;
                    }
                }

                &__btn {
                    padding: 5px 15px;
                    border-radius: 5px;
                    background-color: #4675ff;
                    color: #fff;
                    border: 1px solid #4675ff;
                }

                &__btn:hover {
                    background-color: #fff;
                    color: #4675ff;
                    border: 1px solid #4675ff;
                }
            }

            &-info {
                padding: 10px 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    font-size: 15px;
                    line-height: 1.2;
                    font-weight: 900;
                }

                h4 {
                    font-size: 14px;
                    line-height: 1.2;
                    font-weight: 400;
                }
            }
        }

        .profil__right__bottom {
            border: 1px solid #F2F2F2;
            border-radius: 5px;
            width: 800px;
            height: 200px;

            &-title {
                border-bottom: 1px solid #F2F2F2;
                padding: 20px 10px;
                display: flex;
                justify-content: space-between;

                &__manzil {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    &-img {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #F7F7F7;
                    }

                    h3 {
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.4;
                    }
                }

                .profil__right__bottom-title__btn-wrapper {
                    display: flex;
                    gap: 10px;

                    .profil__right__bottom-title__btn {
                        padding: 0px 15px;
                        border-radius: 5px;
                        background-color: #fff;
                        color: #4675ff;
                        border: 1px solid #4675ff;
                    }

                    .profil__right__bottom-title__btn:hover {
                        background-color: #4675ff;
                        color: #fff;
                        border: 1px solid #4675ff;
                    }

                    .profil__right__bottom-title__btn1 {
                        padding: 0px 15px;
                        border-radius: 5px;
                        background-color: #4675ff;
                        color: #fff;
                        border: 1px solid #4675ff;
                    }

                    .profil__right__bottom-title__btn1:hover {
                        background-color: #fff;
                        color: #4675ff;
                        border: 1px solid #4675ff;
                    }
                }
            }

            &-info {
                padding: 10px 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;

                h2 {
                    font-size: 15px;
                    line-height: 1.2;
                    font-weight: 900;
                }

                h4 {
                    font-size: 14px;
                    line-height: 1.2;
                    font-weight: 400;
                }
            }
        }

    }
}

.sign-up-autline {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.299);
}

.sign-up {
    border-radius: 10px;
    position: fixed;
    z-index: 9;
    width: 35%;
    height: 60%;
    left: 32.5%;
    top: 25%;
    background-color: #fff;

    &-title__wrap {
        border-radius: 10px 10px 0px 0px;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 100%;
        background-color: var(--site-color);

        .sign-up-title {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
            line-height: 1.5;
        }

        .sign-up-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transform: rotate(50%);

            span {
                font-size: 20px;
                transform: rotate(135deg);
            }
        }
    }

    .sign-up-form {
        padding: 10px 22px;
        display: flex;
        flex-direction: column;

        h4 {
            margin-top: 20px;
            font-weight: 300;
            font-size: 16px;
            line-height: 1.5;
        }

        input {
            margin-top: 5px;
            border: 1px solid var(--desc-color);
            outline: none;
            width: 100%;
            height: 45px;
            border-radius: 5px;
            padding: 12px 24px;
        }

        .Yangilash {
            width: 100%;
            height: 45px;
            margin-top: 40px;
            border-radius: 5px;
            cursor: pointer;
            background-color: var(--site-color);
            border: 1px solid var(--site-color);
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;
        }

        .Yangilash:hover {
            background-color: #fff;
            color: var(--site-color);
            border: 1px solid var(--site-color);
        }

        .nomer {
            width: 100%;
            height: 45px;
            margin-top: 20px;
            border-radius: 5px;
            cursor: pointer;
            background-color: #fff;
            border: 1px solid var(--site-color);
            color: var(--site-color);
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;

        }

    }
}

.register-autline {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.299);
}

.register {
    border-radius: 10px;
    position: fixed;
    z-index: 9;
    width: 35%;
    height: 38%;
    left: 32.5%;
    top: 30%;
    background-color: #fff;

    &-title__wrap {
        border-radius: 10px 10px 0px 0px;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        width: 100%;
        background-color: var(--site-color);

        .register-title {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
            line-height: 1.5;
        }

        .register-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            span {
                font-size: 20px;
                transform: rotate(135deg);
            }
        }
    }

    .register-form {
        padding: 10px 22px;
        display: flex;
        flex-direction: column;

        h4 {
            margin-top: 20px;
            font-weight: 300;
            font-size: 16px;
            line-height: 1.5;
        }

        input {
            margin-top: 5px;
            border: 1px solid var(--desc-color);
            outline: none;
            width: 100%;
            height: 45px;
            border-radius: 5px;
            padding: 12px 24px;
        }

        .kirish {
            width: 100%;
            height: 45px;
            margin-top: 40px;
            border-radius: 5px;
            cursor: pointer;
            background-color: var(--site-color);
            border: 1px solid var(--site-color);
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;

        }

        .royhat {
            width: 100%;
            height: 45px;
            margin-top: 20px;
            border-radius: 5px;
            cursor: pointer;
            background-color: #fff;
            border: 1px solid var(--site-color);
            color: var(--site-color);
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;

        }
    }
}

@media (max-width: 720px) {
    .sign-up-autline {
        display: none
    }

    .sign-up {
        border-radius: 0px;
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #fff;

        &-title__wrap {
            border-radius: 0px;
            padding: 5px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 60px;
            width: 100%;
            background-color: var(--site-color);

            .sign-up-title {
                color: #fff;
                font-weight: 600;
                font-size: 18px;
                line-height: 1.5;
            }

            .sign-up-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: none;
                cursor: pointer;
                transform: rotate(50%);

                span {
                    font-size: 20px;
                    transform: rotate(135deg);
                }
            }
        }

        .sign-up-form {
            padding: 10px 22px;
            display: flex;
            flex-direction: column;

            h4 {
                margin-top: 20px;
                font-weight: 300;
                font-size: 16px;
                line-height: 1.5;
            }

            input {
                margin-top: 5px;
                border: 1px solid var(--desc-color);
                outline: none;
                width: 100%;
                height: 45px;
                border-radius: 5px;
                padding: 12px 24px;
            }

            .kirish {
                width: 100%;
                height: 45px;
                margin-top: 40px;
                border-radius: 5px;
                cursor: pointer;
                background-color: var(--site-color);
                border: 1px solid var(--site-color);
                color: #fff;
                font-weight: 600;
                font-size: 16px;
                line-height: 1.5;

            }


        }
    }
}

@media (max-width: 720px) {
    .register-autline {
        display: none;
    }

    .register {
        border-radius: 0px;
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #fff;

        &-title__wrap {
            border-radius: 0px;
            padding: 5px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 60px;
            width: 100%;
            background-color: var(--site-color);

            .register-title {
                color: #fff;
                font-weight: 600;
                font-size: 18px;
                line-height: 1.5;
            }

            .register-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: none;
                cursor: pointer;


                span {
                    font-size: 20px;
                    transform: rotate(135deg);
                }
            }
        }

        .register-form {
            padding: 10px 22px;
            display: flex;
            flex-direction: column;

            h4 {
                margin-top: 20px;
                font-weight: 300;
                font-size: 16px;
                line-height: 1.5;
            }

            input {
                margin-top: 5px;
                border: 1px solid var(--desc-color);
                outline: none;
                width: 100%;
                height: 45px;
                border-radius: 5px;
                padding: 12px 24px;
            }

            .kirish {
                width: 100%;
                height: 45px;
                margin-top: 40px;
                border-radius: 5px;
                cursor: pointer;
                background-color: var(--site-color);
                border: 1px solid var(--site-color);
                color: #fff;
                font-weight: 600;
                font-size: 16px;
                line-height: 1.5;

            }

            .royhat {
                width: 100%;
                height: 45px;
                margin-top: 20px;
                border-radius: 5px;
                cursor: pointer;
                background-color: #fff;
                border: 1px solid var(--site-color);
                color: var(--site-color);
                font-weight: 600;
                font-size: 16px;
                line-height: 1.5;

            }
        }
    }

}

@media (max-width: 1020px) {
    .profil {
        padding: 20px 0;

        .container {
            display: flex;
            padding: 0 20px;
            flex-direction: column-reverse;
            gap: 30px;
        }

        .profil__left {
            width: 360px;
            border-right: 1px solid #F2F2F2;

            .profil__chiqish {
                width: 100%;
                padding: 20px 10px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 10px;

                &-img {
                    height: 50px;
                    width: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #F7F7F7;
                }

                span {
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1.4;
                }
            }

            .profil__chiqish:hover {
                background-color: #F2F2F2;
            }
        }

        .profil__right {
            display: flex;
            gap: 30px;
            flex-direction: column;

            .profil__right__top {
                border: 1px solid #F2F2F2;
                border-radius: 5px;
                width: 100%;
                height: 200px;

                &-title {
                    border-bottom: 1px solid #F2F2F2;
                    padding: 20px 10px;
                    display: flex;
                    justify-content: space-between;

                    &__manzil {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        &-img {
                            height: 50px;
                            width: 50px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #F7F7F7;
                        }

                        h3 {
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 1.4;
                        }
                    }

                    &__btn {
                        padding: 5px 15px;
                        border-radius: 5px;
                        background-color: #4675ff;
                        color: #fff;
                        border: 1px solid #4675ff;
                    }

                    &__btn:hover {
                        background-color: #fff;
                        color: #4675ff;
                        border: 1px solid #4675ff;
                    }
                }

                &-info {
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h2 {
                        font-size: 15px;
                        line-height: 1.2;
                        font-weight: 900;
                    }

                    h4 {
                        font-size: 14px;
                        line-height: 1.2;
                        font-weight: 400;
                    }
                }
            }

            .profil__right__bottom {
                border: 1px solid #F2F2F2;
                border-radius: 5px;
                width: 100%;
                height: 200px;

                &-title {
                    border-bottom: 1px solid #F2F2F2;
                    padding: 20px 10px;
                    display: flex;
                    justify-content: space-between;

                    &__manzil {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        &-img {
                            height: 50px;
                            width: 50px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #F7F7F7;
                        }

                        h3 {
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 1.4;
                        }
                    }

                    .profil__right__bottom-title__btn-wrapper {
                        display: flex;
                        gap: 10px;

                        .profil__right__bottom-title__btn {
                            padding: 0px 15px;
                            border-radius: 5px;
                            background-color: #fff;
                            color: #4675ff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn:hover {
                            background-color: #4675ff;
                            color: #fff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn1 {
                            padding: 0px 15px;
                            border-radius: 5px;
                            background-color: #4675ff;
                            color: #fff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn1:hover {
                            background-color: #fff;
                            color: #4675ff;
                            border: 1px solid #4675ff;
                        }
                    }
                }

                &-info {
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h2 {
                        font-size: 15px;
                        line-height: 1.2;
                        font-weight: 900;
                    }

                    h4 {
                        font-size: 14px;
                        line-height: 1.2;
                        font-weight: 400;
                    }
                }
            }

        }
    }

}

@media (max-width: 500px) {
    .profil {
        padding: 20px 0;

        .container {
            display: flex;
            padding: 0 20px;
            flex-direction: column-reverse;
            gap: 30px;
        }

        .profil__left {
            width: 100%;
            border-right: 1px solid #F2F2F2;

            .profil__chiqish {
                width: 100%;
                padding: 20px 10px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                gap: 10px;

                &-img {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #F7F7F7;
                }

                span {
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.4;
                }
            }

            .profil__chiqish:hover {
                background-color: #F2F2F2;
            }
        }

        .profil__right {
            display: flex;
            gap: 30px;
            flex-direction: column;

            .profil__right__top {
                border: 1px solid #F2F2F2;
                border-radius: 5px;
                width: 100%;
                height: 200px;

                &-title {
                    border-bottom: 1px solid #F2F2F2;
                    padding: 20px 10px;
                    display: flex;
                    justify-content: space-between;

                    &__manzil {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        &-img {
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #F7F7F7;
                        }

                        h3 {
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 1.4;
                        }
                    }

                    &__btn {
                        padding: 5px 15px;
                        border-radius: 5px;
                        background-color: #4675ff;
                        color: #fff;
                        border: 1px solid #4675ff;
                    }

                    &__btn:hover {
                        background-color: #fff;
                        color: #4675ff;
                        border: 1px solid #4675ff;
                    }
                }

                &-info {
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h2 {
                        font-size: 13px;
                        line-height: 1.2;
                        font-weight: 900;
                    }

                    h4 {
                        font-size: 12px;
                        line-height: 1.2;
                        font-weight: 400;
                    }
                }
            }

            .profil__right__bottom {
                border: 1px solid #F2F2F2;
                border-radius: 5px;
                width: 100%;
                height: 200px;

                &-title {
                    border-bottom: 1px solid #F2F2F2;
                    padding: 20px 10px;
                    display: flex;
                    justify-content: space-between;

                    &__manzil {
                        display: flex;
                        align-items: center;
                        gap: 10px;

                        &-img {
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #F7F7F7;
                        }

                        h3 {
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 1.4;
                        }
                    }

                    .profil__right__bottom-title__btn-wrapper {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        .profil__right__bottom-title__btn {
                            padding: 0px 15px;
                            border-radius: 5px;
                            background-color: #fff;
                            color: #4675ff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn:hover {
                            background-color: #4675ff;
                            color: #fff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn1 {
                            padding: 0px 15px;
                            border-radius: 5px;
                            background-color: #4675ff;
                            color: #fff;
                            border: 1px solid #4675ff;
                        }

                        .profil__right__bottom-title__btn1:hover {
                            background-color: #fff;
                            color: #4675ff;
                            border: 1px solid #4675ff;
                        }
                    }
                }

                &-info {
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    h2 {
                        font-size: 13px;
                        line-height: 1.2;
                        font-weight: 900;
                    }

                    h4 {
                        font-size: 12px;
                        line-height: 1.2;
                        font-weight: 400;
                    }
                }
            }

        }
    }

}
</style>