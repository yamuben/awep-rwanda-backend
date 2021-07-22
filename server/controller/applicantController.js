import applicantInfos from "../model/applicant";
import Response from "../helpers/response";

class ApplicantController {
  static CreateApplication = async (req, res) => {
    const data = await applicantInfos.create(req.body);

    if (!data) {
      return Response.errorMessage(res, "failed", 404);
    }

    return Response.successMessage(res, "success", data, 200);
  };

  static GetAllApplication =async(req,res)=>{
      const data = await applicantInfos.find();

    if (!data) {
        return Response.errorMessage(res, "failed", 404);
      }
  
      return Response.successMessage(res, "success", data, 200);
  }

  static GetOneApplication = async(req, res)=>{

    const id = req.params.id;
    const data = await applicantInfos.findById(id);

    if (!data) {
        return Response.errorMessage(res, "failed", 404);
      }
  
      return Response.successMessage(res, "success", data, 200);
  }
  static ReplyAcceptApplication = async(req, res)=>{

    const id = req.params.id;
    const data = await applicantInfos.findByIdAndUpdate(id,{status:"accepted"});

    if (!data) {
        return Response.errorMessage(res, "failed", 404);
      }

      const newData = await applicantInfos.findById(id);
      return Response.successMessage(res, "success", newData, 200);
  }
  static ReplyDeclineApplication = async(req, res)=>{

    const id = req.params.id;
    const data = await applicantInfos.findByIdAndUpdate(id,{status:"declined"});

    if (!data) {
        return Response.errorMessage(res, "failed", 404);
      }

      const newData = await applicantInfos.findById(id);
      return Response.successMessage(res, "success", newData, 200);
  }
}

export default ApplicantController;
