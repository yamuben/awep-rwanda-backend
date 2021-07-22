import express from "express";
import ApplicantController from "../controller/applicantController";

const appRoutes =express.Router();

appRoutes.post('/application',ApplicantController.CreateApplication);
appRoutes.get('/application',ApplicantController.GetAllApplication);
appRoutes.get('/application/:id',ApplicantController.GetOneApplication);
appRoutes.post('/application/accept/:id',ApplicantController.ReplyAcceptApplication);
appRoutes.post('/application/decline/:id',ApplicantController.ReplyDeclineApplication);


export default appRoutes;