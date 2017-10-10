export const fetchShops = () => (
    $.ajax({
        method: 'GET',
        url: 'api/shops/'
    })
);