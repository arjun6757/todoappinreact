import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>&copy; {year} Arjun Banerjee. All rights reserved.</footer>
}

export default Footer;