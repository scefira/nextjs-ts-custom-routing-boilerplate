import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/post/hola-esto-es-una-prueba'><a>publicacion holamundo</a></Link></li>
    <li><Link href='//post'><a>Oficial</a></Link></li>
  </ul>
)
