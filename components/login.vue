<template>
    <div>
        <div class="login-autline" v-if="store.login" @click="store.login = !store.login"></div>
        <div class="login" v-if="store.login">
            <div class="login-title__wrap">
                <h3 class="login-title">
                    Kirish
                </h3>
                <button class="login-btn" @click="store.login = !store.login"><span>+</span></button>
            </div>
            <form class="login-form" @submit.prevent="login()">
                <h4>Telefon Raqami</h4>
                <input v-model="username" autocomplete="false" @input="mask" @keydown="mask" @focus="mask" @blur="mask"
                    type="text" placeholder="Raqam">
                <h4>Parol</h4>

                <input v-model="password" type="password" placeholder="parol">
                <button class="kirish">Kirish</button>
                
                <button class="royhat" type="button"
                    @click="store.enterPhone = !store.enterPhone, store.login = !store.login">Royhatan
                    o'tish</button>
            </form>
        </div>
    </div>
</template>

<script setup>

import { useStore } from "~/store/store"
const store = useStore()

const username = ref("")
const password = ref("")


const login = async () => {
    const tel = username.value.split(" ").join("")
    const t = tel.split("-").join("")
    const p = t.split("(").join("")
    const phone = p.split(")").join("")
    const res = await $fetch('https://vadalar.uz/api/auth/login/index', {
        method: "POST",
        body: {
            username: phone,
            password: password.value
        }
    })
    console.log(res);
    if (res.status == 200) {
        localStorage.setItem("authKey", res.data.auth_key)
        store.token = res.data.auth_key;
        store.login = false
    }
}
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
.login-autline {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 8;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.299);
}

.login {
    border-radius: 10px;
    position: fixed;
    z-index: 9;
    width: 35%;
    height: 58%;
    left: 32.5%;
    top: 22%;
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

        .login-title {
            color: #fff;
            font-weight: 600;
            font-size: 18px;
            line-height: 1.5;
        }

        .login-btn {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            background-color: #fff;

            span {
                line-height: 1;
                font-weight: 100;
                font-size: 20px;
                transform: rotate(135deg);
            }
        }
    }

    .login-form {
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
    .login-autline {
        display: none;
    }

    .login {
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

            .login-title {
                color: #fff;
                font-weight: 600;
                font-size: 18px;
                line-height: 1.5;
            }

            .login-btn {
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;
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

        .login-form {
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
</style>