
export const handleGetItemHighRate = (productList, number) => {
    if (number <= 0 || number > productList.length) {
        return [];
    }

    const newlist = productList.filter((item) => {
        return Number(item.rating) >= 3;
    })
        .sort(function (a, b) {
            return b.rating - a.rating;
        });
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push(newlist[i]);
    }
    return result;
};