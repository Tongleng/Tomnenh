const HttpError = require('../models/http-error');

const Product = require('../models/product');


// =====>Get Products funcion<======
const getProduct = async(req, res, next) => {
    let products;
    try{
        products = await Product.find();
    }
    catch(err) {
        const  error = new HttpError('Could not find the product', 404);
        return next(error);
    }
    res.status(200);
    res.json({ products: products.map((product) => product.toObject( {getter: true}))});
}


// =====>Delete Products funcion<======
const deleteProduct = async(req, res, next) => {
    const productsId = req.params.pid
    let products;
    try {
        products = await Product.findById(productsId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong could not delete the product, please try again', 500);
        return next(error);
    }

    if(!products) {
        const error = new HttpError('Could not find product by this ID, please try again', 404)
        return next(error);
    }

    try {
        products.remove();
    }
    catch(err){
        const error = new HttpError("Somethiing went wrong could not delete products", 500);
        return next(error);
    }
    res.status(200).json({message: 'Delete Products'});
}


exports.getProduct = getProduct;
exports.deleteProduct = deleteProduct;