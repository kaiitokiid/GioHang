

var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'Samsung Galaxy',
        image: '',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 11,
        rating: 1,
    },
    {
        id: 3,
        name: 'Mi',
        image: '',
        description: 'Sản phẩm do Mi sản xuất',
        price: 500,
        inventory: 100,
        rating: 4,
    },
]

const products = (state = initialState, action) => {
    switch (action.type) {

        default: return [...state];
    }
}

export default products;