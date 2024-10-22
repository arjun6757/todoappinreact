import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return <footer>&copy; {year} <a title="github" href="https://github.com/arjun6757">Arjun Banerjee</a>. All rights reserved.</footer>
}

export default Footer;