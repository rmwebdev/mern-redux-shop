import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler';

// @desc Fetch all products
//@route GET /api/v1/products
//@access Public
import Product from '../models/productModel.js'

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // res.status(401)
    // throw new Error('Sorry bray tidak ada izin')
    res.json(products);
}));

// @desc Fetch sigle products
//@route GET /api/v1/products/:id
//@access Public
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product);
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
}));

export default router;