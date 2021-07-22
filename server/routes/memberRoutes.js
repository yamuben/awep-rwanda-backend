import express from "express";
import MemberController from "../controller/memberController";

const memberRoutes =express.Router();

memberRoutes.post('/member',MemberController.registerMember);
memberRoutes.get('/members',MemberController.getAllMembers);
memberRoutes.get('/members/board',MemberController.getAllBoardMembers);
memberRoutes.get('/member/:id',MemberController.getOneMember);
memberRoutes.patch('/member/:id',MemberController.editOneMember);
memberRoutes.patch('/member/activate/:id',MemberController.activateOneMember);
memberRoutes.patch('/member/role/:id',MemberController.changeRoleOneMember);
memberRoutes.delete('/member/:id',MemberController.deleteOneMember);


export default memberRoutes;