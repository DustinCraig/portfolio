"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
;// CONCATENATED MODULE: ./src/styles/styles.js


/* harmony default export */ const styles = (external_styled_components_.createGlobalStyle`
${external_styled_normalize_namespaceObject.normalize};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 63%;
  scroll-behavior: smooth;
}

body {
  cursor: default;
  font-size: 1.6rem;
  font-family: ${(props)=>props.theme.fonts.main
};
  background: ${(props)=>props.theme.colors.background
};
  color: ${(props)=>props.theme.colors.primary
};
}

h1,h2,h3,h4,h5,h6,button {
  font-family: ${(props)=>props.theme.fonts.title
};
}

a {
  text-decoration: none;
  color: ${(props)=>props.theme.colors.link
};
}

li {
  list-style: none;
}
`);

;// CONCATENATED MODULE: ./src/themes/default.js
/* harmony default export */ const themes_default = ({
    fonts: {
        title: 'Space Grotesk, sans-serif',
        main: 'Space Grotesk, sans-serif'
    },
    colors: {
        primary: 'hsl(204,23.8%,95.9%)',
        background: '#18191a',
        accent: 'hsl(34.9,98.6%,72.9%)',
        button: 'hsl(205.1,100%,36.1%)',
        background2: 'hsl(232.7,27.3%,23.7%)',
        link: 'hsl(192, 92%, 52%)'
    },
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    }
});

;// CONCATENATED MODULE: ./src/styles/theme.js




const Theme = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: themes_default,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(styles, {
            }),
            children
        ]
    })
;
/* harmony default export */ const theme = (Theme);

;// CONCATENATED MODULE: ./src/pages/_app.js


function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(theme, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(777));
module.exports = __webpack_exports__;

})();