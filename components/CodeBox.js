// src/CodeBlock.js
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import codeTheme from 'prism-react-renderer/themes/okaidia';

export default function CodeBox({ source }) {
    return (
        <div className="m-t-30">
            <div className="has-bg-grey-200 br-lg overflow-hidden m-b-20">
                <iframe style={{width: '100%'}} srcDoc={`
                    <head>
                        <style>
                            body {
                                background: transparent !important;
                            }
                        </style>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/denali-css/css/denali.css">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/denali-icon-font/dist/denali-icon-font.css">
                    </head>
                    <body class='p-20'>
                        ${source}
                    </body>
                `} />
            </div>
                            
            <Highlight {...defaultProps} code={source} language="html" theme={codeTheme}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, padding: '20px', overflow: 'scroll' }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    )
}