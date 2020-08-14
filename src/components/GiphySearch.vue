<template>
  <div class="giphy">
    <div class>
      <label class="search__label" for="search">Search:</label>
      <input
        class="search__input"
        placeholder="Search your Giphy"
        v-model="giphySearch"
        type="text"
      />
      <button class="btn" @click="sendThis(giphySearch)">Send</button>
      <div class="search__wrap">
        <div class v-for="item in newQuery" :key="item.id">
          <div class="search__img">
            <img :src="item._fixed" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "GiphySearch",
  data() {
    return {
      giphySearch: "",
      gip: [],
    };
  },
  computed: {
    ...mapState({
      queryResp: (state) => state.giphy.queryResp,
    }),
    ...mapGetters({
      newQuery: "giphy/_needInfo",
    }),
  },
  methods: {
    sendThis() {
      this.$store.dispatch("giphy/getGiphy", this.giphySearch);
    },
  },
};
</script>

<style lang="scss" scoped>
.search__input {
  box-sizing: border-box;
  width: 300px;
  height: 30px;
  margin: 0 10px;
  border: 1px solid rgb(92, 68, 148);
  border-radius: 3px;
  padding: 5px;
}
.btn {
  width: 100px;
  height: 30px;
  border: none;
  color: aliceblue;
  background: linear-gradient(
      to right,
      rgb(49, 145, 255),
      rgb(0, 230, 204),
      rgb(49, 145, 255)
    )
    0% 100% / 300%;
  cursor: pointer;
}
.search__wrap {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
