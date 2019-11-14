const RS_API_KEY = 'RS-API-KEY';

export default function applyDefaultInterceptors(apiService) {
  apiService.requestInterceptors.use(request => {
    request.headers = { ...request.headers, [RS_API_KEY]: process.env.RS_API_KEY };
    return request;
  });
}
