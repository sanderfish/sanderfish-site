import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <div className="pv2">
      <h4># Hey, I'm Sander.</h4>
      <p>
        I'm an indie maker and freelance full stack developer. I like working on
        digital products, web applications and websites. I'm from a small town
        in the Netherlands, but am traveling and working across Europe by plane,
        train and van. I tweet{' '}
        <a href="https://twitter.com/fishsander">@fishsander</a> and (sometimes)
        write <a href="https://medium.com/@sandervisser">@sandervisser</a>. Some
        of the projects I've worked on are down here:
      </p>

      <ul className="w-80">
        <li className="pv2">
          <div className="pv1">
            <a href="https://checkoutpage.co">Checkout Page</a>
          </div>
          <div className="pv1">
            Founder / Helping business owners and creators receive money online
            without writing code.
          </div>
          <div className="pv1">
            NodeJS, Koa, ReactJS, Redux, Tailwind CSS, Stripe Connect, Heroku
          </div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="https://www.bookinglayer.com/en/">Bookinglayer Mobile</a>
            <br />
          </div>
          <div className="pv1">
            Freelance / design and development of mobile app for booking
            management (with <a href="http://stay-bold.com">Stay Bold</a>).<br />
          </div>
          <div className="pv1">React Native (cross platform), Redux</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="https://www.bookinglayer.com/en/">Bookinglayer</a>
            <br />
          </div>
          <div className="pv1">
            Freelance / Design and development of marketing website (with{' '}
            <a href="http://stay-bold.com">Stay Bold</a>).<br />
          </div>
          <div className="pv1">Jekyll, Markdown, Sass/Foundation</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="https://convertcalculator.co">
              ConvertCalculator Checkout
            </a>
            <br />
          </div>
          <div className="pv1">
            Freelance / Adding Stripe Connect checkout functionality to existing
            application.<br />
          </div>
          <div className="pv1">Meteor, React, Stripe Connect</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="http://wordeys.com">Wordeys</a>
            <br />
          </div>
          <div className="pv1">
            Founder / Helping people practise vocabulary online.<br />
          </div>
          <div className="pv1">Ruby on Rails, Vanilla JS, Sass, Heroku</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="https://www.bramsparis.com/">Brams Paris</a>
            <br />
          </div>
          <div className="pv1">
            Freelance / e-commerce design and development (with{' '}
            <a href="http://parlor.nl">Parlor</a>).<br />
          </div>
          <div className="pv1">Craft CMS, Twig, Sass/Foundation, jQuery</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="http://cribber.nl">Cribber</a>
            <br />
          </div>
          <div className="pv1">
            Freelance / designing and developing a social platform for stundent
            homes in the Netherlands.<br />
          </div>
          <div className="pv1">PHP, Sass, jQuery</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="http://martmakelaardij.nl">Mart Makelaardij</a>
            <br />
          </div>
          <div className="pv1">
            Freelance / design and development of real estate agent website.<br />
          </div>
          <div className="pv1">Craft CMS, Twig, Sass/Foundation, jQuery</div>
        </li>
        <li className="pv2">
          <div className="pv1">
            <a href="http://fishhq.nl/pickle-app/">Pickle</a>
            <br />
          </div>
          <div className="pv1">
            Bachelor course / Interaction and visual design as student project.
          </div>
          <div className="pv1">Sketch, Framer</div>
        </li>
      </ul>
    </div>

    <div className="pv2">
      <h4># Stay updated.</h4>
      <p>
        <a href="http://eepurl.com/cz6K85">Sign up to my email list</a> to be
        the first to know about my writing and the products I launch.
      </p>
    </div>

    <div className="pv2">
      <h4># Tools and technologies</h4>
      <div>
        <p>
          The tools and technologies I use depend on the project, but my
          currently preferred stack contains:
        </p>

        <ul>
          <li>Pencil & paper</li>
          <li>Sketch/Figma</li>
          <li>HTML/CSS</li>
          <li>Vanilla JavaScript / ReactJS</li>
          <li>NodeJS / Express / Koa</li>
          <li>Tailwind CSS / Tachyons</li>
        </ul>

        <p>
          Tools are just tools though. I'm open to work with anything exciting.
        </p>
      </div>
    </div>

    <div className="pv2">
      <h4># Reach me</h4>
      <p>
        I'm currently available for hire for contract/freelance projects! If you
        have a cool project and want to work together, contact me on Twitter (<a href="https://twitter.com/fishsander">
          @fishsander
        </a>) or send me an email at{' '}
        <a href="mailto:sander@sanderfish.nl">sander@sanderfish.nl</a>.
      </p>
    </div>
  </div>
);

export default IndexPage;
