const mockResponse = {
    data : [
        {
            category: "men's clothing",
            description: "Slimft for dle round neckline includes a three-button placket.",
            id: 2,
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            price: 22.3
        }
    ]
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}