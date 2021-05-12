import axios from 'axios'

let baseURL = 'https://sheet.best/api/sheets/a89c093d-1ae5-476c-acc4-9dc599153fae'

const instance = axios.create({
    baseURL: baseURL,
    headers: {'X-Api-Key': '5VEIa9NMHRVVTSN3Z%2RR4kRgBcHs9_-tGPHwZ%Qov_rgF6$juQA--Fg@BhGR85R','Content-Type' : 'application/json'}
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