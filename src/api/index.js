import baseURL from '@/api/baseURL';

export default {
  getGip(_param) {
    return baseURL().get(
      '/v1/gifs/search?&api_key=2bmYlOMUnYb8MZLeRSNBabgeTLPljcNY&limit=15&q=' +
        _param
    );
  },
};
