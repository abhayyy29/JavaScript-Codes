const shoppingCart = [
    {
        courseName : "java",
        price : 5999
    },
    {
        courseName : "javascript",
        price : 999
    },
    {
        courseName : "DSA",
        price : 12999
    }
    

]

const totalPrice = shoppingCart.reduce( (acc,details) => acc + details.price , 0 )
console.log(totalPrice);
