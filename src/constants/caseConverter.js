function snakeToCamelCase(string) {
    return string.replace(/(_\w)/g, function(m){
        return m[1].toUpperCase();
    });
}

function camelToSnakeCase(string) {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}

export const objectKeysToSnake = function(body) {
    const newBody = {};
    Object.keys(body).forEach((key) => {
        newBody[camelToSnakeCase(key)] = body[key];
    });
    return newBody;
};

export const objectKeysToCamel = function(body) {
    const newBody = {};
    Object.keys(body).forEach((key) => {
        newBody[snakeToCamelCase(key)] = body[key];
    });
    return newBody;
};
