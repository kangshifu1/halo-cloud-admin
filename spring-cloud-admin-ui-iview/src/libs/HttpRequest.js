import config from "@/config";
import axios from "axios";


class HttpRequest {
    constructor(basePath = config.basePath){
        this.basePath = basePath
        this.queue = {}
    }
    getGlobalConfig(){
        return {
            baseURL: this.basePath,
            headers: {
                //
            }
        }
    }
    destroy (url) {
        delete this.queue[url]
    }
    interceptors(instance,url){
        instance.interceptors.request.use(config => {
            this.queue[url] = true
            return config;
        }, error => {
            return Promise.reject(error)
        });
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const { data, status } = res
            return { data, status }
        },error => {
            this.destroy(url)
            return Promise.reject(error);
        });
    }
    request (options) {
        const instance = axios.create()
        options = Object.assign(this.getGlobalConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default new HttpRequest(config.basePath);