function _need(arr) {
  let _newArr = [];
  let _arr = arr.queryResp;
  _arr.map(item => {
    let _newObj = {};
    _newObj._id = item.id;
    _newObj._small = item.images.downsized_medium.url;
    _newObj._fixed = item.images.fixed_width.url;
    _newObj._big = item.embed_url;
    //console.log(item);
    _newArr.push(_newObj);
  });
  //console.log(_newArr);
  return _newArr;
}

import Api from '@/api';

const giphy = {
  namespaced: true,
  state: {
    queryResp: [],
  },
  getters: {
    _needInfo(queryResp) {
      return _need(queryResp);
    },
  },
  mutations: {
    ADD_SEARCH(state, payload) {
      state.queryResp = payload;
    },
  },
  actions: {
    getGiphy(context, giphySearch) {
      console.log(giphySearch);
      Api.getGip(giphySearch).then(response =>
        context.commit('ADD_SEARCH', response.data.data)
      );
    },
  },
};

export default giphy;
