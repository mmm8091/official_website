module.exports = {
    title: "RCIT 红码工合社",
    theme: "antdocs",
    description: "一个致力于先进集体所有制经济模式的组织",
    base: "/",
    head: [
        ["link", { rel: "icon", href: "/assets/logo.png" }],
        ["meta", { name: "referrer", content: "never" }],
        [
            "meta",
            {
                name: "keywords",
                content: "合作社，RCIT，RCIT，红码合作社，红码，RedCode"
            }
        ]
    ],

    markdown: {
        lineNumbers: false,
        anchor: {
            permalinkBefore: false
        }
    },
    themeConfig: {
        backToTop: true,
        smoothScroll: true,
        logo: "/assets/logo.png",
        nav: require("./config/nav"),
        sidebar: require("./config/sidebar"),
        sidebarDepth: 0,
        editLinks: false
    },
};
