const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/404winry.jpg" alt="404 lost kitty" />
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
