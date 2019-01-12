import React, { Component } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const BigButton = styled.button`
    display: block;
    padding: 10px;
    color: black;
    border-radius: 6px;
    border: 2px solid black;
    width: 50%;
    min-width: 300px;
    margin: 30px auto;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background: black;
        color: white;
        padding: 15px;
        font-size: 20px;
        width: 75%;
    }
`

export default class Portfolio extends Component {

  images = {
    1: `${process.env.PUBLIC_URL}/prebuilt/images/jumbotron.jpg`,
    2: `${process.env.PUBLIC_URL}/prebuilt/images/mbr-774x1080.jpg`,
    3: `${process.env.PUBLIC_URL}/prebuilt/images/background5.jpg`
  }

  render() {
    return (
        <Element name="portfolio">
            <section className="features13 cid-reFlzoEQMR" id="features13-s" data-rv-view="237">
                    <div className="container">
                        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                        <h2 className="mbr-section-title pb-3 mbr-fonts-style display-2">
                            Portfolio 🍊</h2>

                        <div className="media-container-row container">
                            <div className="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">
                                <div className="card-img">
                                    <img src={this.images[1]} alt="bulk-mail-cli" media-simple="true" />
                                </div>
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    bulk-mail-cli</h4>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    A command line interface (cli) application that sends automated and dynamic emails to the list.</p>
                            </div>
                            <div className="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">
                                <div className="card-img">
                                    <img src={this.images[2]} alt="iconic-input" media-simple="true" />
                                </div>
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    iconic-input</h4>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    A react-native input component library which deals with appealing and attractive input boxes.</p>
                            </div>
                            <div className="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">
                                <div className="card-img">
                                    <img src={this.images[3]} alt="kumarabhirup.com" media-simple="true" />
                                </div>
                                <h4 className="card-title py-2 mbr-fonts-style display-5">
                                    kumarabhirup.com</h4>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    This website itself is a part of my portfolio... It is created in React.JS and uses GraphQL to empower the content.</p>
                            </div>    
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                        <BigButton>Wanna see more? ☕</BigButton>
                </div>
            </section>
        </Element>
    )
  }

}
