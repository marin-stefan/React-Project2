import React from "react";
import Layout from "../../components/Layout/Layout";

function About() {
  return (
    <div>
      <Layout>
        <div>
          <h1 className="text-center ">
            E - commerce platform - React - Redux - Project 2
          </h1>
          <br />
        </div>
        <div>
          <ul>
            <li>
              <h5>
                This is a larger project that covers the second half of the
                course.
              </h5>
            </li>
            <br />
            <li>
              <h5>It is a SPA e-commerce platform.</h5>
            </li>
            <br />
            <li>
              <h5>
                It displays Header, NavBar, the Main section and a Footer.
              </h5>
            </li>
            <br />
            <li>
              <h5>
                The Header has a custom logo, a login section, a SVG and counter
                with link to the favorites list and a SVG and counter with link
                to the shopping cart. Also It displays the User's name once
                logged in.
              </h5>
            </li>
            <br />
            <li>
              <h5>The Navbar gives access to the Home page from any page.</h5>
            </li>
            <br />
            <li>
              <h5>
                The Main section displays product categories , products and the
                filter sidebar or details about one product, The Favorites list
                or the Shopping Cart depending on the route.
              </h5>
            </li>
            <br />
            <li>
              <h5>
                Each product has four click-able images, a description and two
                buttons for adding the product to The Favorites list or to The
                Shopping Cart.
              </h5>
            </li>
            <br />
            <li>
              <h5>
                Once a product is added to The Shopping Cart or The Favorites
                List it can be moved/added to either one using the buttons
                implemented for each product item.
              </h5>
            </li>
            <br />
            <li>
              <h5>
                The Footer section displays info for the Project and the
                developer.
              </h5>
            </li>
            <br />
            <li>
              <h5>
                For more information check out the Git Repository &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/marin-stefan/React-Project2.git"
                >
                  here
                </a>
                .
              </h5>
              <br />
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}

export default About;
