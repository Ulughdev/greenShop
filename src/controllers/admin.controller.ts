import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const adminController: T = {};
adminController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page controller Admin");
  } catch (err) {
    console.log("Erorr, goHOME Admin:", err);
  }
};

adminController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("getLogin Page Admin");
  } catch (err) {
    console.log("Erorr, getLogin:", err);
  }
};

adminController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSingup");
    res.send("getSignup Page Admin");
  } catch (err) {
    console.log("Erorr, getSignup:", err);
  }
};

export default adminController;
