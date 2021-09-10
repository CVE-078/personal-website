import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <span id="contact" className="is-visually-hidden" style={{ top: '-100px' }}>&nbsp;</span>

                <div className="footer__wrapper fade-in">

                    <div className="footer__top">
                        <h2 className="footer__title">get in touch</h2>

                        <div className="footer__text">
                            <p>
                                fancy a collaboration?
                                have a question you really want to ask?
                                or perhaps just want to say hi?
                            </p>

                            <p>
                                feel free to shoot me a message on&nbsp;
                                <a href="https://www.linkedin.com/in/christiaan-van-eijnsbergen/" rel="noreferrer" target="_blank" className="link link--external">LinkedIn</a>
                                &nbsp;or by sending me a&nbsp;
                                <a href="mailto:christiaanvaneijnsbergen@gmail.com" rel="noreferrer" className="link link--external">mail</a>.
                            </p>
                        </div>
                    </div>

                    <div className="footer__bottom">

                        <div className="footer__socials">
                            <a href="https://www.linkedin.com/in/christiaan-van-eijnsbergen/" rel="noreferrer" target="_blank" className="footer__link">
                                <i className="fab fa-fw fa-linkedin-in"></i>
                            </a>

                            <a href="https://github.com/CVE-078" rel="noreferrer" target="_blank" className="footer__link">
                                <i className="fab fa-fw fa-github"></i>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer