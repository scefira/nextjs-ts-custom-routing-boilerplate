import React from "react";
 
export default class Header extends React.Component{
    public render(){
        return (
            <div className="header">
                <style jsx>
                    {`.header{
                        display:block;
                        width:100%;
                        height:80px;
                        background-color:#000000;
                        color:#FFFFFF;
                    }
                    p{
                        font-size:16px;
                    }
                    `}

                </style>

                Scefira NextJS Typescript Boilerplate<input type="text"/>
            </div>
        );
    }
}