import { InterceptedRequest } from "./intercepted-request";
import { InterceptedResponse } from "./intercepted-response";
import { Observable } from 'rxjs/Observable';

export interface Interceptor {
	interceptBefore?(request: InterceptedRequest): Observable<InterceptedRequest> | InterceptedRequest
	interceptAfter?(response: InterceptedResponse): Observable<InterceptedResponse> | InterceptedResponse
}
