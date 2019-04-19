export function formDataToJson(formData) {
    if (formData instanceof FormData) {
        let ret = {};
        for (let [key, value] of FormData.prototype.entries.call(formData)) {
            ret[key] = value;
        }
        return ret;
    }
    return formData
}