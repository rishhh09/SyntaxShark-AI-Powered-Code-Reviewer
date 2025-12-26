import React, { useState } from 'react'

const CopyButton = ({ text }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)

        setTimeout = (() => {
            setCopied(false)
        }, 2000)
    }
    
    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-all opacity-0 group-hover:opacity-100"
            title="Copy to clipboard"
        >
            {copied ? (
                // Checkmark Icon (Success)
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                // Copy Icon (Default)
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )}
        </button>
    )
}

export default CopyButton