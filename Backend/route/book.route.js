import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();  // Capitalized 'Router'

router.get("/", getBook);

export default router;
