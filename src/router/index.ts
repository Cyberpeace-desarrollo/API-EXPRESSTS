import express from "express";
import TkController from "../controllers/ticket.controller"
export const router = express.Router();

router.get('/',(req,res) => {
    res.send('Api notifications is running');
})


router.post('/ticket',TkController.handleTicketField);
