import { defineStore } from "pinia"

export const useStore = defineStore("store", () => {
    const loading = ref(true)
    const phone = ref("")
    const code = ref("")
    const enterPhone = ref(false)
    const verifyCode = ref(false)
    const signUp = ref(false)
    const token = ref("")
    const login = ref(false)
    const userInfo = ref({})
    const showmenu = ref(false)
    const carusel = ref(true)
    const cartMenuOpen = ref(false)
    const categorisMenuOpen = ref(false)
    const categorisMenuOpen2 = ref(false)
    const cartLike = ref(false)
    const likeMenu = ref(false)
    const count = ref(0);
    const cart = ref([])
    const like = ref([])
    const Aravachalar = false
    const eshtish = false
    const yuris = false
    const xassalar = false
    const ehtiyot = false
    const aksessuarlar = false
    const searchMenu = false
    const detail = true
    const sign = false
    const Phone = false
    const filterSwitch = ref(false)
    return {
        loading,
        phone,
        enterPhone,
        verifyCode,
        code,
        signUp,
        token,
        userInfo,
        login,
        showmenu,
        cartMenuOpen,
        count,
        cart,
        cartLike,
        likeMenu,
        like,
        categorisMenuOpen,
        carusel,
        Aravachalar,
        eshtish,
        yuris,
        xassalar,
        ehtiyot,
        aksessuarlar,
        searchMenu,
        detail,
        categorisMenuOpen2,
        sign,
        Phone,
        filterSwitch
    }
})

