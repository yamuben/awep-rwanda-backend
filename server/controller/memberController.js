import memberInfos from '../model/member';
import Response from "../helpers/response";

class MemberController{
    static registerMember = async (req, res) => {
      const data = await memberInfos.create(req.body);
  
      if (!data) {
        return Response.errorMessage(res, "failed", 404);
      }
  
      return Response.successMessage(res, "success", data, 200);
    };

    static getAllMembers = async (req, res) => {
        const data = await memberInfos.find({status:"active"});
    
        if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        return Response.successMessage(res, "success", data, 200);
      };

      static getAllBoardMembers = async (req, res) => {
        const data = await memberInfos.find({role:"board",status:"active"});
    
        if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        return Response.successMessage(res, "success", data, 200);
      };

      static getOneMember = async (req, res) => {
        const data = await memberInfos.findById(req.params.id);
    
        if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        return Response.successMessage(res, "success", data, 200);
      };
  
      static editOneMember = async (req, res) => {
        const user = await memberInfos.findByIdAndUpdate(req.params.id,req.body);
    
        if (!user) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        const data = await memberInfos.findById(req.params.id);
    
        return Response.successMessage(res, "success", data, 200);
      };
      
      static deleteOneMember = async (req, res) => {
        const data = await memberInfos.findById(req.params.id);
    
        if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }


         await memberInfos.findByIdAndDelete(req.params.id);
    
        return Response.successMessage(res, "success", {}, 200);
      };

      static activateOneMember = async (req, res) => {

        const user = await memberInfos.findById(req.params.id);
    
        if (!user) {
          return Response.errorMessage(res, "failed", 404);
        }

if(user.status ==="active"){
         await memberInfos.findByIdAndUpdate(req.params.id,{status:"inactive"});
   
         const data = await memberInfos.findById(req.params.id);
    
        return Response.successMessage(res, "success", data, 200);
      }
    
    
    
    await memberInfos.findByIdAndUpdate(req.params.id,{status:"active"});
   
    
    const data = await memberInfos.findById(req.params.id);
      return Response.successMessage(res, "success", data, 200);
    
    }
      
    static changeRoleOneMember = async (req, res) => {

        const user = await memberInfos.findById(req.params.id);
    
        if (!user) {
          return Response.errorMessage(res, "failed", 404);
        }

if(user.role ==="member"){
         await memberInfos.findByIdAndUpdate(req.params.id,{role:"board"});
   
         const data = await memberInfos.findById(req.params.id);
    
        return Response.successMessage(res, "success", data, 200);
      }
    
    
    
    await memberInfos.findByIdAndUpdate(req.params.id,{role:"member"});
   
    
    const data = await memberInfos.findById(req.params.id);
      return Response.successMessage(res, "success", data, 200);
    
    }
      
  
  
  
  
}

export default MemberController;