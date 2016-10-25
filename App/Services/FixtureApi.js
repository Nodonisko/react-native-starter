export default {
  // Functions return fixtures
  getCity: (city) => {
    const torontoData = require('../Fixtures/toronto.json')
 
    return {
      ok: true,
      data: torontoData
    }
  }
}
