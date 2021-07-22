class Response{
    

/**
 * Success Response
 * @Params  res, message, data, status
 * @return {Object} response of success request 
 */
    static successMessage(res, message, data= null, status){
        res.status(status).json(
            data ? 
            {
                status:status,
                message,
                data
            }
            :
            {
                status:status,
                message, 
            }
        )

    };

    static errorMessage(res,error, status){
        res.status(status).json(
            {
                status:status,
                error
            }
        )
    
    }
}
export default Response;