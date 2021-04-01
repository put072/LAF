import axios from 'axios'

let baseURL = 'https://sheet.best/api/sheets/3a6d321c-131d-4b94-8c62-16da51d15b34'

const instance = axios.create({
    baseURL: baseURL,
    headers: {'X-Api-Key': 'NQ_ZPNNDxTAuAV#yhEYNP97CqrBJHbif-rDPlm8Q5tbwegaFji36bz!hQAo$hO8P','Content-Type' : 'application/json'}
});

export default {
    getData(action) {
        let url = `${baseURL}`
        url += action
        return instance.get(url)
    },
    patchData(action,body) {
        let url = `${baseURL}`
        url += action
        return instance.patch(url,body)
    }
}