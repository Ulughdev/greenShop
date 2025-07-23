import { Request, Response } from "express";
import { T } from "../libs/types/common";

const adminController: T = {};
adminController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page controller Admin");
  } catch (err) {
    console.log("Erorr, goHOME Admin:", err);
  }
};

adminController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("getLogin Page Admin");
  } catch (err) {
    console.log("Erorr, getLogin:", err);
  }
};

adminController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("getSignup Page Admin");
  } catch (err) {
    console.log("Erorr, getSignup:", err);
  }
};

export default adminController;
