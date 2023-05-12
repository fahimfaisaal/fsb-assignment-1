import { Router } from "express";
import {
  generateRandomNumberController,
  generateFakePersonController,
  countCharsController
} from './controller';

const router = new Router();

router.get('/random-number', generateRandomNumberController);

router.get('/fake-person', generateFakePersonController);

router.get('/count-chars/:string', countCharsController);

export default router;
