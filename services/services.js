const baseURL = ref("https://vadalar.uz/api");

export default {

    getAllProducts(l) {
        return $fetch(`${baseURL.value}/product-manager/our-offers/index`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getWebBanners(l) {
        return $fetch(`${baseURL.value}/banner/web-site-banners`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getPopularProducts(l) {
        return $fetch(`${baseURL.value}/category-manager/category/popular-categories`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getDetailProduct(slug, l) {
        return $fetch(`${baseURL.value}/product-manager/product/detail?productKey=${slug}`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    search(searchVal, l) {
        return $fetch(`${baseURL.value}/product-manager/product/search?searchKey=${searchVal}`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getBodyBanners(l) {
        return $fetch(`${baseURL.value}/banner/body-banners`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getCheapProducts(l) {
        return $fetch(`${baseURL.value}/product-manager/cheap-product/index`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getBrands(l) {
        return $fetch(`${baseURL.value}/brand/index`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getPageCategory(l) {
        return $fetch(`${baseURL.value}/page-info/category`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    pageCategoryDet(id, l) {
        return $fetch(`${baseURL.value}/page-info/category-detail?category_id=${id}`, {
            headers: {
                "Accept-Language": l,
            }

        })
    },

    getDetailCategory(slug, l) {
        return $fetch(`${baseURL.value}/product-manager/category-product/category?slugKey=${slug}`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getHeaderCategories(l) {
        return $fetch(`${baseURL.value}/category-manager/category/header-categories`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getCategory(l) {
        return $fetch(`${baseURL.value}/category-manager/category/index?searchKey=sm`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getCategorysProducts(params, lang) {
        return $fetch(`${baseURL.value}product-manager/category-product/category?${params}`, {
            headers: {
                "Accept-Language": lang
            },

        })
    },

    getPaymet(l) {
        return $fetch(`${baseURL.value}/order-manager/store/payment-types`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getStores(l) {
        return $fetch(`${baseURL.value}/order-manager/store/index`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getDastafka(l) {
        return $fetch(`${baseURL.value}/order-manager/store/home-delivery-sum`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getRegions(l) {
        return $fetch(`${baseURL.value}/order-manager/region/index`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },

    getRegionsDis(l, id) {
        return $fetch(`${baseURL.value}/order-manager/region/districts?region_id=${id}`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },


    postSave(token, slug) {
        return $fetch(`${baseURL.value}/product-manager/product-save/create?productKey=${slug}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            method: "POST"
        })
    },

    getSave(token) {
        return $fetch(`${baseURL.value}/product-manager/product-save/index`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
    },
    
    getFilterCategory(l, queryString) {
        return $fetch(`${baseURL.value}/product-manager/category-product/category?${queryString}`, {
            headers: {
                "Accept-Language": l,
            }
        })
    },


} 

