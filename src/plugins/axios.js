import axios from 'axios'

let baseURL = 'https://script.google.com/macros/s/AKfycbyVLoAAQszf-Qt9ByktR1YCiDM6HAI9Q6BgEegKrCcTbAr_vBmd/exec'

const instance = axios.create({
    baseURL: baseURL,
    
});

export default {
    getData(action) {
        let url = `${baseURL}`
        url += action
        return instance.get(url)
    },
     postData(action,body) {
        let url = `${baseURL}`
        url += action
        return instance.post(url,body)
    }
}