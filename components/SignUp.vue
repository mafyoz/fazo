<template>
    <div>
        <div class="sign-up-autline" v-if="store.signUp" @click="store.signUp = !store.signUp"></div>
        <div class="sign-up" v-if="store.signUp">
            <div class="sign-up-title__wrap">
                <h3 class="sign-up-title">
                    Royhatan o'tish
                </h3>
                <button class="sign-up-btn" @click="store.signUp = !store.signUp"><span>+</span></button>
            </div>
            <form class="sign-up-form" @submit.prevent="signUp()">
                <h4>ism</h4>
                <input v-model="firstName" type="text" placeholder="ism">
                <h4>famliya</h4>
                <input v-model="lastName" type="text" placeholder="famliya">
                <h4>parol</h4>
                <input v-model="password" type="password" placeholder="parol">
                <h4>parolni takrorlash</h4>
                <input v-model="passwordRepeat" type="password" placeholder="parolni takrorlash">
                <button class="kirish" @click=" store.signUp = !store.signUp">Ro'yxatdan
                    o'tish</button>
            </form>
        </div>
    </div>

</template>

<script setup>
import { useStore } from "~/store/store"
const store = useStore()
const firstName = ref("")
const lastName = ref("")
const password = ref("")
const passwordRepeat = ref("")

async function signUp() {
    const res = await $fetch("https://vadalar.uz/api/auth/register/sign-up", {
        method: "POST",
        body: {
            firstName: firstName.value,
            lastName: lastName.value,
            password: password.value,
            password_repeat: passwordRepeat.value,
            code: store.code,
            phone: store.phone,
        }
    })
    if (res.status == 200) {
        localStorage.setItem("authKey", res.data.auth_key);
        store.token = res.data.auth_key;

    }
}
</script>

<style lang="scss" scoped>
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
    height: 75%;
    left: 32.5%;
    top: 15%;
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
</style>