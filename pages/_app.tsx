import React from 'react';
import App, { Container } from 'next/app';
import Header from '../src/structs/Header';

export default class RootApp extends App {
    static async getInitialProps({ Component, ctx }:any) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }
  
      return { pageProps }
    }
  
    render() { 
      const { Component, pageProps } = this.props
  
      return (
        <Container>
            <style jsx global>{`
              html,document,body{
                margin:0px;
                padding:0px;
              }
            `}</style>
            <Header/>
            <Component {...pageProps} />
        </Container>
      )
    }
  }