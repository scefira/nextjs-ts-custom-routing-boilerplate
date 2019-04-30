import React from 'react'
import routes, { Link } from "../server/routes";

export default () => (
  <ul>
    <li><Link route='post' params={{slug:"hola-mundo-cruel"}}><a>publicacion holamundo</a></Link></li>
    <li><Link route='post'  params={{slug:"hola-mundo-cruel-x2"}} ><a>Oficial</a></Link></li>
    <li><Link route='anidated'  params={{slug:"hola-mundo-cruel-x2"}} ><a>Anidated</a></Link></li>
  </ul>
)
