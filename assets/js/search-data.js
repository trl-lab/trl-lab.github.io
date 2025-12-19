// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "People",
          description: "Members and collaborators of the TRL lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-open-positions",
          title: "Open positions",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/open-positions/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-trl-seminar",
              title: "TRL seminar",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/trl-seminar/";
              },
            },{id: "dropdown-trl-reading-group",
              title: "TRL reading group",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/trl-reading-group/";
              },
            },{id: "post-have-your-queries-already-seen-the-data-data-privilege-in-tabular-benchmarks",
        
          title: 'Have your Queries Already Seen the Data? Data-Privilege in Tabular Benchmarks <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We take a look at how many popular benchmarks for evaluating natural language interfaces to tabular data contain &quot;data-privileged&quot; queries—questions that reference specific components of the data that real users wouldn&#39;t know about in open-domain settings.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.daniel-gomm.com/blog/2025/Have-you-Queries-Already-Seen-the-Data/", "_blank");
          
        },
      },{id: "post-trl-reading-group-discussion-quot-large-language-models-llms-on-tabular-data-prediction-generation-and-understanding-a-survey-quot",
        
          title: "TRL reading group discussion: &quot;Large Language Models(LLMs) on Tabular Data: Prediction, Generation, and...",
        
        description: "Discussion protocol and results of the TRL reading group on the paper &quot;Large Language Models(LLMs) on Tabular Data: Prediction, Generation, and Understanding - A Survey&quot; by X. Fang et al. (2024).",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/reading_group_session/";
          
        },
      },{id: "news-announcing-the-trl-lab-and-website",
          title: 'Announcing the TRL Lab and website!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250329/";
            },},{id: "news-attending-acl-in-vienna",
          title: 'Attending ACL in Vienna!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250730/";
            },},{id: "news-ai-for-tabular-data-workshop-at-eurips",
          title: 'AI for Tabular Data workshop at EurIPS!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250915/";
            },},{id: "news-working-with-the-united-nations-on-detecting-sensitive-data-in-humainitarian-datasets",
          title: 'Working with the United Nations on detecting sensitive data in humainitarian datasets',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250920/";
            },},{id: "news-we-39-re-hiring-through-the-ellis-phd-program",
          title: 'We&amp;#39;re hiring through the ELLIS PhD program!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250930/";
            },},{id: "news-two-papers-at-the-aitd-workshop-at-eurips-2025",
          title: 'Two papers at the AITD workshop at EurIPS 2025!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251125/";
            },},{id: "news-liang-telkamp-awarded-an-amsterdam-ai-thesis-award",
          title: 'Liang Telkamp awarded an Amsterdam AI Thesis Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20251207/";
            },},{id: "people-ahmedomar",
          title: 'Ahmedomar',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/ahmedomar/";
            },},{id: "people-corneliuswolff",
          title: 'Corneliuswolff',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/corneliuswolff/";
            },},{id: "people-danieldedios",
          title: 'Danieldedios',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/danieldedios/";
            },},{id: "people-danielgomm",
          title: 'Danielgomm',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/danielgomm/";
            },},{id: "people-hongqianxia",
          title: 'Hongqianxia',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/hongqianxia/";
            },},{id: "people-janhenrikbertrand",
          title: 'Janhenrikbertrand',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/janhenrikbertrand/";
            },},{id: "people-liangtelkamp",
          title: 'Liangtelkamp',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/liangtelkamp/";
            },},{id: "people-lisavanoosten",
          title: 'Lisavanoosten',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/lisavanoosten/";
            },},{id: "people-louisgehringer",
          title: 'Louisgehringer',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/louisgehringer/";
            },},{id: "people-madelonhulsebos",
          title: 'Madelonhulsebos',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/madelonhulsebos/";
            },},{id: "people-nikolaselic",
          title: 'Nikolaselic',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/nikolaselic/";
            },},{id: "people-rohithprakabaran",
          title: 'Rohithprakabaran',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/rohithprakabaran/";
            },},{id: "people-wenjinglin",
          title: 'Wenjinglin',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/wenjinglin/";
            },},{id: "people-wojciechkosiuk",
          title: 'Wojciechkosiuk',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/wojciechkosiuk/";
            },},{id: "people-xingyucarlji",
          title: 'Xingyucarlji',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/xingyucarlji/";
            },},{id: "people-xueeffyli",
          title: 'Xueeffyli',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/xueeffyli/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
