import express from "express";
import partenerController from "../controller/partenerController";

const appRoutes =express.Router();

appRoutes.post('/partener',partenerController.registerPartener);
appRoutes.get('/parteners',partenerController.GetAllParteners);
appRoutes.patch('/partener/status/:id',partenerController.changePartenerStatus);
appRoutes.patch('/partener/:id',partenerController.updatePartener);


export default appRoutes;