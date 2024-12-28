import {Router} from "express";
import{
    addUser,
    getUser,
} from "../Controllers/User.js";
const route=Router();
route.post("/addUser",addUser);
route.post("/getUser",getUser);
export default route;