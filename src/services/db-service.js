export default class DbService {

  async getResource(url) {
    const res = await fetch(`${process.env.GATSBY_API_URL}${url}`, {
      crossDomain: true,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res;
  }

  async getVoices(perPage = false, page = 1) {
    const perPageCondition = perPage ? `per_page=${perPage}` : "";
    const res = await this.getResource(`/voices?${perPageCondition}&page=${page}`);
    const res_json = await res.json();
    console.log(res_json);
    let result = {};
    result.json = await res_json.map(this._transformVoice);
    result.totalCount  = res.headers.get( 'x-wp-total' );
    result.pagesCount       = res.headers.get( 'x-wp-totalpages' );
    return await result;
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformVoice(voice) {
    const newVoice = voice;
    newVoice.acf.image = 
      newVoice.acf.image 
      ? { localFile: { url: newVoice.acf.image.sizes.large } }
      : null;
    // newVoice.acf.voice_category 
    //   ? { localFile: { url: newVoice.acf.image.sizes.large } }
    //   : null;
    return newVoice;
  }
}
