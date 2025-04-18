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
              window.location.href = "/news/20250331/";
            },},{id: "people-corneliuswolff",
          title: 'Corneliuswolff',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/corneliuswolff/";
            },},{id: "people-danielgomm",
          title: 'Danielgomm',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/danielgomm/";
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
            },},{id: "people-madelonhulsebos",
          title: 'Madelonhulsebos',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/madelonhulsebos/";
            },},{id: "people-wenjinglin",
          title: 'Wenjinglin',
          description: "",
          section: "People",handler: () => {
              window.location.href = "/people/wenjinglin/";
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
