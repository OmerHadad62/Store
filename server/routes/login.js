import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        res.send("login");    
    } catch (error) {
        res.status(500).send(error);
    }
}); 

export default router;