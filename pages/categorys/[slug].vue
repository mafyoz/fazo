
<template>
  <div class="container">
    <h1>{{ categoryDetail?.data?.category?.name }}</h1>
    <div class="head-wrp flex gap-2">
      <div class="wrp">
        <div class="wr2">
          <!-- <p>{{ t("sum") }}</p> -->
          <div class="range_container">
            <div class="form_control">
              <div class="form_control_container">
                <div class="form_control_container__time">Min</div>
                <input
                  v-model.number="minPrice"
                  type="text"
                  :min="min"
                  :max="max"
                  @input="updateFromInput"
                  class="input"
                />
              </div>
              <div class="form_control_container">
                <div class="form_control_container__time">Max</div>
                <input
                  v-model.number="maxPrice"
                  type="text"
                  :min="min"
                  :max="max"
                  @input="updateToInput"
                  class="input"
                />
              </div>
            </div>
            <div class="sliders_control">
              <input
                v-model="minPrice"
                type="range"
                :min="min"
                :max="max"
                @input="updateFromSlider"
              />
              <input
                v-model="maxPrice"
                type="range"
                :min="min"
                :max="max"
                @input="updateToSlider"
              />
            </div>
          </div>

          <div>
            <!-- Brands Toggle -->
            <button class="character-name" @click="toggleBrands">Brands</button>
            <transition name="cartMenu">
              <ul v-if="brandsVisible" class="ul">
                <li
                  class="li"
                  v-for="brand in categoryDetail?.data?.brands"
                  :key="brand?.id"
                >
                  <input
                    type="checkbox"
                    @input="selectBrand(brand?.id, brand)"
                    :id="`check-${brand?.name}`"
                  />
                  <label :for="`check-${brand?.name}`">{{ brand?.name }}</label>
                </li>
              </ul>
            </transition>

            <!-- Characters List -->
            <div
              v-for="item in categoryDetail?.data?.characters"
              :key="item.characterId"
            >
              <button
                @click="toggleDropdown(item.characterId)"
                class="character-tog"
              >
                <li
                  class="character-list"
                  :product="item"
                  @click="toggleRotation(item.characterId)"
                >
                  <span
                    :class="{ 'active-class': itemID[item.characterId] }"
                    class="character-name"
                  >
                    {{ item?.characterName }}
                  </span>
                  <span
                    :class="{ rotate: rotatedCharacters[item.characterId] }"
                    class="svg"
                    > <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span
                  >
                </li>
              </button>
              <transition name="cartMenu">
                <ul v-if="activeCharacterId === item.characterId" class="ul">
                  <li
                    class="li"
                    v-for="assign in item?.assigns"
                    :key="assign?.value"
                    :id="`check-${assign.value}`"
                  >
                    <input
                      type="checkbox"
                      @input="selectCharacter(item?.characterId, assign)"
                      :id="`check-${assign.value}`"
                    />
                    <label :for="`check-${assign.value}`">{{
                      assign?.value
                    }}</label>
                  </li>
                </ul>
              </transition>
            </div>
            
          </div>
          <button @click="filter(), filterCategory(), (checkFilter = false)" class="show">{{ t("show") }}</button>
          <!-- <pre>{{filterCategory1}}</pre> -->
        </div>
      </div>
      <div class="wr" v-if="checkFilter">
        <product-card
          v-for="product in categoryDetail?.data?.products?.items"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="wr" v-if="!checkFilter">
        <product-card
          v-for="product in filterCategory1?.data?.products?.items"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
import services from "~/services/services";
import ProductCard from "~/components/Product.vue";

const { locale, locales, t } = useI18n();
const { product } = defineProps(["product"]);
const switchLocalePath = useSwitchLocalePath();
const store = useStore();
const check1 = ref(false);
const { slug } = useRoute().params;
const categoryDetail = ref({});
const min = ref(1550000);
const max = ref(18400000);
const minPrice = ref(1550000);
const maxPrice = ref(18400000);
const queryString = ref();
const filterCategory1 = ref();
let brandsId = ref([]);
const activeCharacterLength = ref(null);
const isDropdownOpen = ref(false);
const brands = ref(false);
let checkedCharacters = ref([]);
const filterString = ref();
const checkFilter = ref(true);
const itemID = ref({});
const brandsVisible = ref(false); // State to manage brand list visibility
const activeCharacterId = ref();
const toggleBrands = () => {
  brandsVisible.value = !brandsVisible.value;
};

const rotatedCharacters = ref({});

const toggleRotation = (characterId) => {
  // Element bosilganda svg aylanish holatini o'zgartiramiz
  rotatedCharacters.value[characterId] = !rotatedCharacters.value[characterId];
};
// Function to toggle dropdown of a specific character
const toggleDropdown = (characterId) => {
  activeCharacterId.value =
    activeCharacterId.value === characterId ? null : characterId;
};

// Function to handle brand selection
const selectBrand = (id, brand) => {
  console.log("Selected brand:", id, brand);
};

// Function to handle character selection
const selectCharacter = (characterId, assign) => {
  console.log("Selected character:", characterId, assign);
};

const filter = async () => {
  const params = new URLSearchParams();

  brandsId.value.forEach(({ id, value }) => {
    params.append(`brandlds[]`, id);
  });
  params.append("page", 1);
  params.append("slugKey", slug);
  params.append("minPrice", minPrice.value);
  params.append("maxPrice", maxPrice.value);
  checkedCharacters.value.forEach(({ id, value }) => {
    params.append(`filter[${id}]`, value);
  });
  params.append("priceSort", []);
  params.append("nameSort", []);
  queryString.value = decodeURIComponent(params.toString());
  console.log(queryString.value);
};
const fetchCategoryDetail = async () => {
  const response = await services.getDetailCategory(slug, locale.value);
  categoryDetail.value = response;
};
const filterCategory = async () => {
  const response = await services.getFilterCategory(
    locale.value,
    queryString.value
  );
  filterCategory1.value = response;
};

const updateFromInput = () => {
  if (minPrice > maxPrice) {
    minPrice = maxPrice;
  }
  fillSlider();
};

const updateToInput = () => {
  if (minPrice > maxPrice) {
    minPrice = maxPrice;
  }
  fillSlider();
};

const updateFromSlider = () => {
  if (minPrice > maxPrice) {
    minPrice = maxPrice;
  }
  fillSlider();
};

const updateToSlider = () => {
  if (minPrice > maxPrice) {
    maxPrice = minPrice;
  }
  fillSlider();
};

const fillSlider = () => {
  const fromPosition = ((minPrice - min.value) / (max.value - min.value)) * 100;
  const toPosition = ((maxPrice - min.value) / (max.value - min.value)) * 100;
  const slider = document.querySelector('.sliders_control input[type="range"]');

  if (slider) {
    slider.style.background = `linear-gradient(
      to right,
      #C6C6C6 0%,
      #C6C6C6 ${fromPosition}%,
      #25daa5 ${fromPosition}%,
      #25daa5 ${toPosition}%,
      #C6C6C6 ${toPosition}%,
      #C6C6C6 100%
    )`;
  }
};

onMounted(() => {
  fetchCategoryDetail();
  fillSlider();
});

watch(
  () => locale.value,
  () => {
    fetchCategoryDetail();
  }
);
</script>

<style lang="scss" scoped>
.show {
  width: 300px;
  height: 45px;
  background-color: #4675ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 900;
  border: 1px solid #4675ff;

}
.show:hover{
  background-color: #fff;
  color: #4675ff;
  border: 1px solid #4675ff;

}

.wrp {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 20px;
}
.active-class {
  .svg {
    rotate: -90deg;
  }
}
.character-tog {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.svg {
  transition: transform 0.3s ease;
}
.rotate {
  transform: rotate(-90deg);
}
.character-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // text-align: center;
  // justify-content: center;
  width: 1000%;
  max-width: 300px;
}
.wr2 {
  border: 1px solid #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  height: fit-content;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  .character-name {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 20px;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.2;
    font-family: sans-serif;
  }

  .ul {
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  .li {
    display: flex;
    margin-left: 5px;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    font-family: sans-serif;
    input {
      margin-right: 5px;
      width: 15px;
      height: 15px;
    }
  }
}
.filter {
  background-color: #4675ff;
  color: #fff;
  border-radius: 5px;
  padding: 10px 0px 10px 0px;
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  text-transform: capitalize;
}
.cartMenu-enter-active,
.cartMenu-leave-active {
  transition: all 0.3s ease;
  translate: 0 0;
}

.cartMenu-enter-from,
.cartMenu-leave-to {
  transition: all 0.3s ease;
  opacity: 0;
  translate: 0px -10px;
}
.wr {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-bottom: 60px;
}

.range_container {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
}


.sliders_control {
  position: relative;
  min-height: 10px;
}

.form_control {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 380px;
  color: #4675ff;
  .input {
    font-size: 16px;
    margin-left: 10px;
    font-weight: 400;
    width: 100%;
    max-width: 105px;
    outline: none
  }

  &_container {
    padding: 10px;
    display: flex;
    gap: 7px;
    width: 100%;
    max-width: 190px;
    height: 60px;
    border: 1px solid #4675ff;
    align-items: center;
    color: #4675ff;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }

  &_container:first-child {
    border-start-start-radius: 5px;
    border-end-start-radius: 5px;
  }

  &_container:last-child {
    border-start-end-radius: 5px;
    border-end-end-radius: 5px;
  }
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #4675ff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #387bbe;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  pointer-events: all;
  width: 24px;
  height: 24px;
  background-color: #4675ff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #4675ff;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #4675ff;
}

input[type="range"]::-webkit-slider-thumb:active {
  box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
  -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;
}

input[type="number"] {
  color: #4675ff;
  width: 50px;
  height: 30px;
  font-size: 20px;
  border: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  opacity: 1;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: #4675ff;
  pointer-events: none;
}

#fromSlider {
  height: 0;
  z-index: 1;
}
@media (min-width: 1450px) {
  .wr {
    grid-template-columns: repeat(4, 1fr);
    height: 800px;
    overflow: hidden;
  }
}
@media (max-width: 1450px) {
  .wr {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1250px) {
  .wr {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 1000px) {
  .wr2 {
    display: none;
  }
  .wr {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1250px) {
  .wr {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
  }
}
@media (max-width: 645px) {
  .wr {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    margin: 0 auto;
  }
}
</style>