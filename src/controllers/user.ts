import { Request, Response } from "express";
import { Controller, Get } from "@overnightjs/core";

@Controller("api/users")
export class UserController {
  @Get()
  get(req: Request, res: Response): any {
    console.log(req.params.id);
    return res.status(200).json({ msg: "get_called" });
  }
  // @Get()
  // @Middleware(middleware)
  // private getAll(req: Request, res: Response): void {
  //     res.status(200).json({msg: 'get_all_called'});
  // }
}
