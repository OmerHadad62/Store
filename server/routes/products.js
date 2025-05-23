import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        res.send(await Product.find());
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post("/",async(req, res) => {
    try{
    const newProduct = new Product (req.body);
    const response = await newProduct.save();
    res.send("product created");}
    catch (error) {
        res.status(500).send(error);
}
});

router.put("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);
        if (!updateProduct) {
            return res.status(404).send("Product not found");
        }
        res.send(updateProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).send("Product not found");
        }
        res.send(deleteProduct);
    } catch (error) {
        res.status(500).send("Server error");
    }
})
export default router;