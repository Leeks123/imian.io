import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

type Props = {
  theme: typeof theme;
};
const GlobalStyle = createGlobalStyle<Props>`
    ${reset}

    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
        margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
        background-color: var(--color-gray-900);
    }
    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
        font-family: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
        isolation: isolate;
        height: 100%;
    }

    html {
        --color-gray-100: hsl(35deg, 5%, 10%);
        --color-gray-200: hsl(35deg, 5%, 20%);
        --color-gray-300: hsl(35deg, 5%, 30%);
        --color-gray-400: hsl(35deg, 5%, 40%);
        --color-gray-500: hsl(35deg, 5%, 50%);
        --color-gray-600: hsl(35deg, 5%, 60%);
        --color-gray-700: hsl(35deg, 5%, 70%);
        --color-gray-800: hsl(35deg, 5%, 80%);
        --color-gray-900: hsl(35deg, 5%, 90%);
    }
`;

export { GlobalStyle };
