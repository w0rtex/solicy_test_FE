import React from "react";
import Styled from "styled-components";

// Styles
const FooterStyled = Styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    text-align: center;
    padding-top: 15px;
    font-size: 14px;
    color: #666;
`;

const Footer = () => {
    return (
        <FooterStyled>
            <p>
                © {new Date().getFullYear()} Solicy test task. Inspired and made
                in Getapnya gyux.
            </p>
        </FooterStyled>
    );
};

export default Footer;
