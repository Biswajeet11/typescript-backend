import { Router } from "express";
import IndexController from "../controller/IndexController";
import IRoute from "../interfaces/IRoute";

class IndexRoute implements IRoute {
    public path = '/';
    public router = Router();
    public indexController = new IndexController();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(`${this.path}`, this.indexController.index);
    }
  }
  
  export default IndexRoute;