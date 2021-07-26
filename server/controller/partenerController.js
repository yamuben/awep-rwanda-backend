import partenerInfos from "../model/partener";

import Response from "../helpers/response";
class Partener{

    static registerPartener = async (req, res) => {
        const data = await partenerInfos.create(req.body);
    
        if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        return Response.successMessage(res, "success", data, 200);
      };


      static GetAllParteners=async(req,res)=>{
        const data = await partenerInfos.find({status:"active"});
  
      if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }
    
        return Response.successMessage(res, "success", data, 200);
    }


    static changePartenerStatus =async(req,res)=>{
        const user = await partenerInfos.findById(req.params.id);
        if (!user) {
            return Response.errorMessage(res, "failed", 404);
          }
  var data;
      if(user.status==="active"){
          data = await partenerInfos.findByIdAndUpdate(req.params.id,{status:"inactive"});
  
      }
      else{
      data = await partenerInfos.findByIdAndUpdate(req.params.id,{status:"active"});
      }
       
      return Response.successMessage(res, "success", data, 200);
  }
  
  
  static updatePartener =async(req,res)=>{
    const data = await partenerInfos.findByIdAndUpdate(req.params.id,req.body);

      if (!data) {
          return Response.errorMessage(res, "failed", 404);
        }

    return Response.successMessage(res, "success", data, 200);
}

}

export default Partener;