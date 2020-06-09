export default class DbService {

  _apiBase = 'http://dweb/wp-json/wp/v2';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
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
    let result = {};
    result.json = await res_json.map(this._transformVoice);
    result.totalCount  = res.headers.get( 'x-wp-total' );
    result.pagesCount       = res.headers.get( 'x-wp-totalpages' );
    return await result;
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
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
