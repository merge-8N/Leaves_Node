import response from '../Model/responseModel';

export const handleResponse = (data, httpStatus, httpStatusText, message) => {
    response.data = data;
    response.httpStatus = httpStatus;
    response.httpStatusText = httpStatusText;
    response.message = message;
    return response;
}