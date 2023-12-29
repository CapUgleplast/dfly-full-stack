export default function pageParams(){
    return [
        {
            path: '/arts',
            style: '--dark'
        },
        {
            path: '/arts/[id]',
            style: '--light'
        },
        {
            path: '/manifest',
            style: '--light'
        },
        {
            path: '/contacts',
            style: '--dark'
        },
        {
            path: '/about',
            style: '--light'
        }
    ]
}