// const express = require("express");
import express from 'express';
import { welcomeController } from '../App/Controllers/welcome';
import { checkTokenAndGetUser } from '../App/Middlewares/auth-middleware';
const router = express.Router();

router.get("/welcome", welcomeController);

module.exports = router;
