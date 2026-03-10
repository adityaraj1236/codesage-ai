import { response, Router } from "express";
import { reviewService } from "../services/reviewService.ts";



const router = Router();
router.post('/code-review', async (req, res) => {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }
    try {        
        const result = await reviewService(code);
        res.json({ result: result });
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to review code' });
    }
});
export default router;

