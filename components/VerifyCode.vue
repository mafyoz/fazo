<template>
    <div>
        <div class="verify-autline" v-if="store.verifyCode" @click="store.verifyCode = !store.verifyCode"></div>

        <div class="verify" v-if="store.verifyCode">
            <div class="verify-title__wrap">
                <h3 class="verify-title">
                    Royhatan o'tish
                </h3>
                <button class="verify-btn" @click="store.verifyCode = !store.verifyCode"><span>+</span></button>
            </div>
            <form class="verify-form " @submit.prevent="verifyCode()">
                <h4>Telefonni Tasdiqlash Uchun 4 Raqamli Kodi Jo'natildi</h4>
                <h3>{{ store.phone }}</h3>
                <input v-model="code"  type="text">
                <button class="kirish">tastiqlash</button>
                <button class="royhat" type="button" @click="store.enterPhone = true, store.verifyCode = false">ortga
                    qaytish</button>
            </form>
        </div>
    </div>

</template>

<script setup>
import { useStore } from "~/store/store"
const store = useStore()
const code = ref("")


async function verifyCode() {
    const tel = username.value.split(" ").join("")
    const t = tel.split("-").join("")
    const p = t.split("(").join("")
    const phone = p.split(")").join("")
    const res = await $fetch("https://vadalar.uz/api/auth/register/verify", {
        method: 'POST',
        body: {
            phone: phone,
            code: code.value
        }
    })
    if (res.status == 200) {
        store.code = code.value
        store.verifyCode = false
        store.signUp = true
    }

}





</script>

<style lang="scss" scoped>
input {
    padding: 5px;
    font-size: 16px;
    letter-spacing: 0.5em;
    padding-left: 20px;
}

.verify-autline {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.299);
}

.verify {
    border-radius: 10px;
    position: fixed;
    z-index: 9;
    width: 35%;
    height: 48%;
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

        .verify-title {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
            line-height: 1.5;
        }

        .verify-btn {
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

    .verify-form {
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
            margin: 0 auto;
            border: none;
            margin-top: 5px;
            border-bottom: 1px solid var(--desc-color);
            outline: none;
            width: 50%;
            height: 45px;
            font-size: 36px;
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
    .verify-autline {
        display: none
    }

    .verify {
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

            .verify-title {
                color: #fff;
                font-weight: 600;
                font-size: 18px;
                line-height: 1.5;
            }

            .verify-btn {
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

        .verify-form {
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
                margin: 0 auto;
                border: none;
                margin-top: 5px;
                border-bottom: 1px solid var(--desc-color);
                outline: none;
                width: 50%;
                height: 45px;
                font-size: 36px;
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
</style>