import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <header className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">EngineBase</h1>
            <h2 className="subtitle has-text-centered">Your Gateway to Automotive Information</h2>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters has-text-centered">
              <p className="is-size-5">
                Welcome to EngineBase, where we help you find the information you need with cutting-edge automotive APIs.
                Explore our tools to learn more about your vehicles and unleash the power of data for your automotive needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body for APIs */}
      <main className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-full">
              <div className="box">
                <h3 className="title is-4">API to go here</h3>
                <p>
                  This section will be populated with API integrations, data visualization, and
                  more. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
