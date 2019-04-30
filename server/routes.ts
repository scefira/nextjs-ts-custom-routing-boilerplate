import NRoutes from "next-routes";

const NRoutesInstance = (require('next-routes')()
    .add('index','/','index')
    .add('post', '/post/:slug','post')
) as NRoutes;

export const Link = NRoutesInstance.Link;
export const Router = NRoutesInstance.Router;
export default NRoutesInstance;

