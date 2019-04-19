export function share(option) {
    if (navigator.share) {
        navigator.share(option)
    } else {
        alert("不支持share功能")
    }
}