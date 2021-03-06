var allProducts = getAllProducts();

var conferenceType = {

    cpp: [
        allProducts.clion,
        allProducts.resharperCpp,
        allProducts.general
    ],

    dotnet: [
        allProducts.resharper,
        allProducts.resharperCpp,
        allProducts.dottrace,
        allProducts.dotcover,
        allProducts.dotmemory,
        allProducts.dotpeek,
        allProducts.rider
    ],

    java: [
        allProducts.intellijIdea,
        allProducts.kotlin,
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm
    ],

    go: [
        allProducts.goland,
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm
    ],

    team: [
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack
    ],

    velocity: [
        allProducts.teamcity,
        allProducts.webstorm,
        allProducts.youtrack,
        allProducts.upsource
    ],

    database: [
        allProducts.datagrip,
        allProducts.resharper,
        allProducts.rider,
        allProducts.youtrack
    ],

    web: [
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack,
        allProducts.webstorm,
        allProducts.rubymine
    ],

    mobile: [
        allProducts.appcode,
        allProducts.kotlin,
        allProducts.intellijIdea,
        allProducts.webstorm
    ],

    ios: [
        allProducts.appcode
    ],

    python: [
        allProducts.pycharm
    ],

    php: [
        allProducts.phpstorm
        // allProducts.datagrip,
        // allProducts.webstorm
    ],

    gaming: [
        allProducts.GameDevIntro,
        allProducts.GameDevUnityIntro,
        allProducts.riderUnity,
        allProducts.GameDevUnrealIntro,
        allProducts.resharperCpp,
        allProducts.clion,
        allProducts.GameDevTeamIntro,
        allProducts.teamcity,
        allProducts.upsource,
        allProducts.youtrack
    ]
};

// to switch on a playlist for a specific conference type,ª
// assign it to the currentPlaylist variable, i.e.:
// var currentPlaylist = conferenceType.dotnet;
var currentPlaylist = conferenceType.java;
