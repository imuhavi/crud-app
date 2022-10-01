import Product from "../models/productModels.js";
 
export const getAllProducts = async (req, res) => {
    try {
        const page =req.query.page;
        const limit = req.query.limit;
        if(page && limit === null){
            page =1;
            limit = 10;
            const startIndex = (page -1) * limit;
            const endIndex = page * limit;
            const products = await Product.findAll();
            const result = products.slice(startIndex, endIndex);
            res.json(result);
        }else{
            const startIndex = (page -1) * limit;
            const endIndex = page * limit;
            const products = await Product.findAll();
            const result = products.slice(startIndex, endIndex);
            res.json(result);
        }
        
        
        
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 