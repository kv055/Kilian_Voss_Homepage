export function fetchArticles() {
  let fetchedArticles = [
    {
      Title: "Website for Abelian Capital",
      Icons: [
        JavascriptIcon,
        ReactIcon,
        TailwindIcon,
        StrapiIcon,
        AWSIcon,
        DockerIcon,
        AWSS3Icon,
      ],
      Description:
        "In the following blog series, I am going to document the development process of a React WebApp from Start to Finish. It is meant to be a website for a startup that I have been involved in recently.In the following blog series, I am going to document the development process of a React WebApp from Start to Finish. It is meant to be a website for a startup that I have been involved in recently.",
      Url: "abelian.capital",
      Article: `Intro:
      The blog will be split into 5 chapters, divided into sections starting with elaborating on which tech stack I have used and why, then outlining the required functionality of the website, the design, and layout, the process of implementing a cms system, building a login section as well as a blog section and then finally documenting the deployment of the frontend and the backend on Amazon AWS.
     I am writing this blog to demonstrate my development practices, my skill level and furthermore to get some feedback on this project. 
     Objective and Functionality:
     The task was to build a clean and minimalistic web portal for a startup in the financial services industry with the name Abelian Capital. The startup in question is an asset manager specialized in developing and deploying algorithmic trading strategies, it is currently in an early pre-seed investment stage. The idea is that in its early stages, it will be mainly investors and early access users who will test the company’s products and receive news about the company. Considering that funding is tight and also the fact that marketing is not yet considered an important factor, the development of the website should be as cost-effective and time-saving as possible.
     The first page shown to a user is the landing page where only the logo and a navbar are shown, the navbar has links to 4 subpages with information about the Company and its objectives, the founders, a login section where investors and early access customers can view and test the product (more on that in a separate post), and a blog section where news about the company will be shared.
     Given the fact that Abelian Capital is in a very early stage of its lifecycle, the choice of the tech stack needed to account for that. Since growth and rapid change is expected in the future, the tech stack used is expected to scale with it.
     The Tech Stack:
     Pre Requisites and Dev Tools:
     Package Management with PNPM (rather than NPM). The reason to go with PNPM is that it saves disk space in the node modules folder of the React code base and that its use is very similar to NPM, which makes the matter less complicated. Version control is being done the conventional way with git + GitHub.
     Styling and Graphics:
     Logo design with Hatchfull ai. Hatchfull is a free AI tool for simple logo designs, which is the obvious choice in contrast to paying a graphic designer or using paid (but arguably better) services like Looka.
     Styling with Tailwind CSS. Depending on individual needs, there are many good CSS frameworks to choose which range from A: timesaving and easy to use but not customizable up to B: Highly customizable but with a steep learning curve. Considering the objectives listed earlier, I surely could have used Bootstrap and saved a lot of time. On the other hand seeing how aesthetically unpleasing Bootstrap looks and considering that once the company grows and things like marketing and overall appearance become more important, the existing tailwind codebase can be customized and extended without the need for a re-write.
     FrameWorks/Codebases used:
     The main Codebase is written in React JS, the de-facto market leader for frontend frameworks. This choice might seem a little much for such a seemingly small project like a website, but given the fact that the now small startup could very well grow unpredictably in the future, react offers the necessary functionality to integrate technically more sophisticated products without changing the codebase. Another important aspect of choosing to work with React is that it can be easily integrated into a new Next JS project, should the need arise for any form of server-side rendering (search engine optimization for example). 
     Backend CMS implemented with Strapi. There are multiple reasons I chose Strapi compared to the much more popular legacy CMS systems like Wordpress, Drupal, or Joomla. Strapi is much newer and written in JavaScript, compared to the more or less dead language of PHP that the other frameworks use. The areas where this is noticeable is during deployment and configuration where Strapi makes use of the familiar Node architecture (build process and plugin management with NPM, familiar configuration files like package.json, etc.).
     ﻿Deployment:
     Due to its relative ease of use, generous free credits program as well as its ability to further scale, aws was the logical choice for hosting both the frontend as well as the backend. 
     The React static files are hosted on AWS S3, whilst the Strapi backend is built and hosted as a docker image/container AWS Apprunner. Both, setting up and configuring an S3 bucket as well as an Apprunner Service, is easier and less time-consuming than doing it manually with Nginx and Docker run on Linux servers. Another bonus of Apprunner is that even when no custom domain is linked, the access point URL is on HTTPS per default. This is useful for testing and makes it easier to integrate into the frontend (by avoiding default redirects to HTTPS in case an HTTP URL is fetched).
     Design:
     The Logo was designed by the Hatchfull logo designer AI, it's good for very minimalistic and simple logos. After creating the logo in a sort of matte blueish purple, the rest of the site had to match its color and style. For the most part, this was an easy task. I used Tailwind and although I have never used it before, learning Tailwind was not very difficult, and using it was quite enjoyable. I used a mobile-first approach where the site was initially designed for phone-sized screens but then adjusted to bigger screen sizes using Tailwind's inbuilt media queries. The CSS flexbox model is being used as the layout technique and learning it was the most challenging and time-consuming part of the design process.
     The site is a single-page application where each site gets rendered from the app.js component. Navigation within the page is working via a central state variable that gets passed with the context api, whose value can be changed from within every child component rendered at the time. This is a very experimental way of doing things but it gives the illusion of a more classical-looking website where multiple sites are linked and fetched, but without the necessary site reloads of server-side rendered pages or the infinite scrolling architecture used in traditional single-page applications.
     Implementation of a cms system:
     This part was supposed to be the least time-intensive task, since Strapi comes with good documentation and its set-up is therefore pretty straightforward.
     Following the documentation, I created a new project folder + git repo, installing the Create-Strapi-App dev tools via npm, and launching the Strapi dev server on localhost:1337. All subsequent configuration was done via the /admin web portal and no further coding was required. The configuration included setting up an admin user, then a blog content panel and a test user for the login system.
     Building a login section:
     The login system is meant for team members and early users authentication in order to access the trading dashboard. The dashboard is meant for observing all currently deployed trading strategies in real-time, as well as for visualizing Backtesting data sets. Currently, there is no way for users and team members to sign up by themselves, each user must be entered into the database manually by the administrator. This has not been a problem so far, since the number of users consists just of the team members themselves. After logging in, the user gets a token back from Strapi, which then needs to be used in all further requests as the request body’s payload.
     Building a blog section:
     The blog’s page is meant to be the company’s newsroom. Blog articles are created by using the Strapi content type builder plugin. From there, the Strapi API creates an API route so that the contents can be accessed. After being fetched, a custom module uses the array.map method to render each blog post into the front end.
     Deployment:
     Both the frontend and the backend have been deployed on AWS. For the React frontend, the deployment choice fell on S3 Buckets. After finishing the production build and creating a bucket, the build folder with all assets (JS and CSS Files) was quickly dragged and dropped inside, now the last thing to do was to configure a public access point for the S3 Bucket to be reached via the public internet. The only problem I encountered was being greeted by a blank page rather than by the index page after having clicked on the link. After looking into the networking tab of Chrome Devtools, I saw that React used the wrong file paths to get the CSS and JS assets. This was fixed by moving all to the same level (root level) of the bucket. I deployed the Strapi backend using docker on aws Apprunner. The steps for that were building a docker image and testing it locally, uploading the image to an aws ECR repo, and then setting up an app runner service that uses the ECR repo as its source. This time, the aws part was without any inconveniences, but I encountered some problems while writing the docker image. In this part, the Strapi documentation was not very detailed and I had significant problems following it. The documentation lists only one demo docker file, that did not work as I used it on my machine. This particular Dockerfile is using the notoriously difficult Alpine image as its base layer, which is prone to throwing all sorts of complicated errors, and most of the time, solving them requires a sophisticated understanding of Linux to debug. The only convenient option I had was to ask chat gpt to rewrite it to use a Debian base layer instead, and after what felt like 100 failed builds and multiple hours I finally had a working image.
     `,
      Background: AbelianWebpageBackground,
    },
    {
      Title: "Backtesting Dashboard",
      Icons: [JavascriptIcon, ReactIcon],
      Description:
        "A dashboard app with React and Bootstrap that will display price charts and other financial data.The main thing I wanted to achieve with this project was to test different plotting libraries, mainly for displaying price data and to get a grip on data visualization in general.",
      Url: none,
      Article: `In this Blog, I will write about the process of building a dashboard app with React and Bootstrap that will display price charts and other financial data.
      This project was from the beginning meant to be more on the experimental side of things.
      The initial idea behind the Dashboard is to have a central web interface that lets the team monitor the real-time execution of trades on different brokerage platforms and visualize backtesting datasets.
      This project though is just the first sketch of what later could be the dashboard mentioned above.
      The main thing I wanted to achieve with this project was to test different plotting libraries, mainly for displaying price data and to get a grip on data visualization in general.
      Furthermore, the project was very helpful in teaching me more about react js itself.
     
      
      The User experience:
      
      
      When visiting the URL, the user is greeted with a login screen.
      For demonstration purposes, the user just has to click the login button (without entering any credentials) in order to proceed to the Backtesting section.
      Being now greeted with a big empty dashboard, the user is now prompted to select a financial asset in the upper right corner.
      At first, the data provider must be selected, then the asset itself, and then its candle size (timeframe).
      All 3 Parameters must be selected by the user before proceeding by pressing the green button, or else the app will crash (no input validation has been implemented).
      After pressing the green button a graph from the PlotlyJS library gets rendered onto the main screen.
      Having the chart now centered, the user can now choose to select from a list of technical indicators and render them onto the chart.
      To do so one must navigate to the bottom left pane where the indicator name and the necessary parameters get selected.
      The last feature can be seen in the bottom right corner of the screen, in this section the user can make the right selections that will ultimately simulate trades in the past, based on a pre-defined strategy. The Strategy implemented does only buy or sell when two pre-defined moving average indicators cross.
      The user has to select the indicators, in this case, two Simple Moving Averages with different values. After selecting the indicators and their values a list of trades gets rendered both into the Plotly Chart and also as a list in the lower right corner.
      Here the profitability of each strategy can be monitored and adjustments can be made in order to find the most profitable strategy or parameter.
      
      The Tech Stack:
      
      
      This Project was one of my earlier React projects that I did, finishing it well over two years ago (April 2021). My general knowledge of React was more limited than it is today.
      This becomes obvious by looking at a few design and stack decisions I made, the first being to use Create React App instead of Vite as the dev tool, not building any sort of logging and monitoring mechanisms, and not to utilize the React Context API but to instead rely on props passing in order to achieve some sort of global state management. When it comes to the right decisions in this Project, i quickly have to point at using Bootstrap CSS in order to build the user interface.
      Whilst being undeniably ugly, Bootstrap saved me a lot of developing time, and since this project will just be used as a proof of concept, it does not need to look nice. The frontends codebase is written in React JS as previously mentioned, mostly because it is the most popular JS framework.
      The backend is written in Python + Flask, the reason being that TA-Lib, the Library used for rendering the Indicators and for conducting the backtesting is only available in Python. 
      Git + Github was used for version control for, the same reasons as above.
      The deployment was done on AWS, with the Frontend in a S3 Bucket, and the back end as a docker container on AppRunner. Since setting up and maintaining my own server was a headache I tried to avoid, aws was the obvious choice.
      `,
      Background: BacktestingDashboardBackground,
    },
    {
      Title: "Kilian Voss Homepage (this page)",
      Icons: [JavascriptIcon, ReactIcon, TailwindIcon],
      Description:
        "*Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, repellendus cum hic, expedita officiis exercitationem mollitia tenetur quos alias accusantium possimus eius? Vel debitis hic consectetur quod repellat nisi id?",
      Url: "kilianvoss.dev",
      Article: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aperiam unde consequatur earum eligendi error vero deserunt ab pariatur corporis autem, in, sint ex! Vel obcaecati dolor at qui illum?
      Ex maxime laudantium voluptas beatae dolorum, veniam reprehenderit minus aut quaerat vel exercitationem obcaecati vero? Nihil eos similique, sapiente mollitia id corrupti deleniti ad temporibus rerum quas ipsa odio deserunt.
      Pariatur, et. Ut, harum ad quas explicabo earum sequi natus facilis minus? Eos eius rerum, iste eaque assumenda neque accusantium. Omnis earum fuga, eos odit excepturi impedit explicabo delectus iure.
      Cupiditate quos deleniti id minima impedit temporibus, odit quam modi reiciendis eaque, asperiores voluptates eos. Labore quo quidem, quod perferendis repudiandae, nihil earum, harum assumenda alias eos soluta adipisci odit.
      Doloremque nostrum alias provident debitis, perferendis, sunt aspernatur quas libero quasi deleniti optio harum ex quidem, eum magnam reiciendis quia soluta omnis suscipit officiis delectus repellendus id. Ab, culpa cupiditate!
      Consectetur repellat molestias quibusdam adipisci aspernatur nisi error facere, iusto laborum tempora similique porro voluptates ullam. Deserunt similique amet culpa fuga voluptatibus laudantium, aperiam odit quasi corrupti officia dolorem provident!
      Ipsam sed asperiores earum, laboriosam perspiciatis omnis voluptatibus architecto est soluta rem amet. Aliquid quaerat quo enim nesciunt, corrupti id vel? Aliquam impedit, expedita repudiandae explicabo dolor recusandae sit corrupti.
      Sapiente, voluptate. Recusandae totam impedit sit, aliquam ducimus culpa quas temporibus sequi dicta aspernatur molestias doloribus modi nisi blanditiis minus. Illo architecto dolorum vel excepturi eum animi facilis, explicabo asperiores.
      Fuga perferendis pariatur deserunt animi dolores minima at eos laudantium voluptates beatae? Praesentium quod maiores deserunt, atque repellendus labore soluta nisi quibusdam doloremque. Assumenda rem cupiditate aliquid fugiat adipisci expedita?`,
      Background: KilianWebpageBackground,
    },
    {
      Title: "Switchboard Configurator",
      Icons: [JavascriptIcon, ReactIcon, NextJSIcon, SupabaseIcon],
      Description: `The following is a documentation of a react web app that i have recently built for a client.
      The client, a representative of an electrical engineering company asked me to build an online configurator for household switchboards.
      Without getting too much into the nitty gritty of electrical engineering, I will give my best to explain the functionality of the desired application.
      `,
      Url: none,
      Article: `

      The tool is targeted towards the customers who can configure custom switchboards, generate technical drawings of each configuration and download them as PDF documents, save the configuration to a backend database, and then convert the configuration into an actual order.
      Furthermore, the tool should be publicly accessible via the internet and therefore have a login/authentication system including an administration page which lists all previously saved configurations and generated quotes.
      
      The tech stack:
      
      The project started as a frontend standalone, and since the use of various npm packages was necessary, ReactJS was the obvious choice.
      One of these utilized packages is Jspdf, it is responsible for converting the technical drawing that is generated during the configuration into a pdf document.
      Since the client's focus was to just build a functional tool without any customized design preferences, Bootstrap CSS was chosen to keep the looks generic and to accelerate development time.
      To implement the desired login authentication system and the database to save configurations, Supabase was used as a Backend.
      This choice made sense since setting up and hosting Supabase is significantly less time consuming than building a custom db.
      Scaling for many users wasn't an issue either given the size of the client's company, so i chose to use Supabases out of the box deployment since the likelihood of some cloud cost explosion to occur was pretty much non-existent.
      The frontend is hosted via Vercel.
      
      The users perspective:
      
      As with pretty much all webapps these days, the first step for a user when visiting is to log in.
      For security reasons and convenience, a passwordless login was implemented where the user just has to submit their email address, and then clicking the login link that is being sent to them.
      After clicking the login link, the user is being redirected  to an admin page, with 3 sections.
      The signout button, a list of all previously generated configurations, and a window with an text input form to create a new configuration and launch the actual configurator.
      Having launched the actual configurator, the user is prompted to make a few mandatory selections that include, selecting the size and a few other technical parameters of the Switchboard.
      After that the user must select at least one circuit breaker and it's technical parameters.
      Whilst making all the selections, a technical drawing of the configuration is being rendered in real time next to the selection menu.After the configuration is done, the technical drawing can now be rendered on to a pdf document and downloaded.
      
      Code Architecture:
      
      Since Supabase is a low code solution, we will focus on the frontend code architecture instead.
      React code functional, to interact with the Supabase server the Supabase client library (supabase-js) was used.
      Generating the technical drawing was challenging and needed a few attempts to get it right.
      All i got from the client were some pdf files with some finished drawings on them.
      In order to recreate these, i converted the whole pdf into  an svg image and then used a graphics tool (in my case Figma) to isolate each element.
      After having isolated the drawing of each possible part into its own SVG file, they then were integrated into the code so that when the configurator was used, the elements were combined onto a canvas element which then was rendered to the screen.
      To save it, the canvas and its contents is then being converted into an PDF file with the help of the JsPDF library, which then can be saved locally onto the users device.
      For confidentiality reasons, the source code can't be shared here.
      `,
      Background: SwitchboardConfiguratorBackground,
    },
    {
      Title: "Stock Price Database",
      Icons: [PythonIcon, MysqlIcon, AWSIcon],
      Description: `In the following, I will describe the process of building a Python script that creates and updates a MySQL database containing historical price data of over 10.000 different stocks.
      `,
      Url: none,
      Article: `
      Objective:
      The Database is being used to feed a machine-learning framework that will model trading strategies and test them on its historical price data. After many iterations, the goal of the machine learning frameworks will be to come up with historically successful trading strategies.
      In order to reliably serve big datasets to machine learning algos, the script fetches different APIs to gather price data of different stocks and cryptos, formates them all in a unified manner, and then inserts them into a MySQL database. The approach of building a Database layer between the price data API and the machine learning algos was mainly done for a variety of reasons:
      - performance, since making database calls are faster than API calls
      - reliability, in case the APIs are offline so that the machine learning algos don't crash
      - to avoid the API’s rate limits
      - and to be able to serve bigger datasets, since many APIs have limits considering the size of requested datasets
      
      The Stack:
      The script is written in Python, with the utilization of the following libraries:
      -mysql.connector to manage the queries,
      -asyncio to make the API calls more efficient
      -requests running inside the asyncio loop to fetch the APIs
      -alpaca-trade-api running inside asyncio as well to retrieve data from the Alpaca API.
      
      Code Architecture:
      The Database will consist of two tables, one index table containing all assets by ticker name and data provider, and then the actual data table containing many rows of daily price data.
      In order to get the wanted price data for each financial asset, a list of all available assets must first be fetched from each data provider. Having now retrieved all of our assets first they will be inserted into the index table via a join statement, making sure to update the existing records by deleting delisted assets, and inserting newly listed ones.
      The same process then gets applied to the price data as well.
      
      Challenges:
      The most time-consuming errors in this codebase were some SQL strings throwing syntax errors for what was later to be discovered as using the reserved keyword Signal as the column name. Debugging it was not easy since I had no clue about the nature of the error initially.
      Neither the error message nor various syntax checking tools or even chat gpt 4 could help me locate this error. The first attempt into fixing these was by trying to implement SQLAlchemy (via a different branch) and then subsequently implementing ORM models into the code. This approach however brought its whole new set of problems and was therefore abandoned.
      The before-mentioned errors were discovered by a friend of mine and eventually fixed by renaming the said column, additionaly to properly implementing escape functions into the query strings.
      The source repo can be seen on Git Hub, it is linked below.
      It would mean a lot to me to receive some feedback on the code.
      `,
      Background: StockpriceDatabaseBackground,
    },
  ];
  return fetchedArticles;
}
