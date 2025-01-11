import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>EngineBase</strong> &copy; {new Date().getFullYear()} by <a href="https://github.com/mglo196">Margaux Glovier</a>, <a href="https://github.com/MattFranklin90">Matthew Franklin</a>, <a href="https://github.com/Millpaw">Bruce Millspaugh</a>,  <a href="https://github.com/Jacob-Garland">Jacob Garland</a>,. 
        <br />Made with React, Bulma, and ❤️.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
