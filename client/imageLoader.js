export default function myImageLoader({src, local}) {
    if(src.includes('static/') || src.includes('.svg')){
        return `http://localhost:3000/${src}`
    }
    return `http://localhost:3333/${src}`
}