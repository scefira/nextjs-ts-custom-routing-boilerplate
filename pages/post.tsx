import React from "react";
import { NextContext } from "next";

export default class extends React.Component<any>{

    public static async getInitialProps (context:NextContext) {
        return { slug: context.query.slug };
    }

    public render(){
        return <div>hola post!! x2 {this.props.slug}</div>
    }
    
}