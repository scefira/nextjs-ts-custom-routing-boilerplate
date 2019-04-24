const routes = require('next-routes')()
 
routes
.add('/','/','index')
.add('post', '/post/:slug','post')

export default routes;