import { css } from "@emotion/react";
import tw from "twin.macro";

const customGlobalStyles = css`
    html,
    body {
        ${tw`font-mono text-gray-1000`}
    }
    
    h1 {
        ${tw`text-5xl font-display font-bold`}
    }
    
    h2 {
        ${tw`text-4xl font-display font-bold uppercase`}
    }
    
    h3 {
        ${tw`text-2xl font-display font-bold uppercase tracking-wider`}
    }
    
    h4 {
        ${tw`text-xl font-display font-bold uppercase`}
    }
    
    h5 {
        ${tw`text-lg font-display font-bold uppercase`}
    }
`

export default customGlobalStyles