export default {
    get: (reqUrl, params, successCb, errorCb) => {
        var url = new URL(reqUrl);

        if (params) {
            url.search = new URLSearchParams(params);
        }

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                successCb && successCb(data);
            })
            .catch(error => errorCb && errorCb(error));
    }
}