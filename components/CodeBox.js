// src/CodeBlock.js
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import codeTheme from 'prism-react-renderer/themes/okaidia';

export default function CodeBox({ props, children }) {
    return (
        <div className="m-t-30">
            {/* <div className="has-bg-grey-200">
                {children}
            </div> */}

            <Highlight {...defaultProps} code={children} language="html" theme={codeTheme}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, padding: '20px' }}>
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