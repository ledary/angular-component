// import { Interceptor,InterceptedRequest,InterceptedResponse  } from 'ng2-interceptors';
import {  InterceptedRequest } from '../../../components/ngintercept/intercepted-request';
import {  InterceptedResponse } from '../../../components/ngintercept/intercepted-response';
import {  Interceptor } from '../../../components/ngintercept/interceptor';





export class ServerUrlInterceptor implements Interceptor {
    public interceptBefore(request: InterceptedRequest): InterceptedRequest {
        request.url = "https://virtserver.swaggerhub.com/Library/Andior/1.0.0/" + request.url
        alert(request.url);
        return request;
    }

    public interceptAfter(response: InterceptedResponse): InterceptedResponse {
        return response;
    }
}