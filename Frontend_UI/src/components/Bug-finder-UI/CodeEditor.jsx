import React, { useEffect, useState } from 'react';
import CopyButton from '../CopyButton';
import Editor from '@monaco-editor/react';
import HistorySidebar from './HistorySidebar';
import axios from 'axios'
import 'highlight.js/styles/atom-one-dark.css'
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [review, setReview] = useState(null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false)

  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Rust",
    "TypeScript",
    "HTML/CSS"
  ]

  useEffect(() => {
    const saveCode = localStorage.getItem('code')
    if (saveCode) {
      setCode(JSON.parse(saveCode))
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('code', JSON.stringify(code.toString()))
    }, 1000)

    return () => clearTimeout(timer)
  }, [code])

  const reviewCode = async () => {
    setIsReviewing(true);
    setReview(null)

    // const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

    try {
      const response = await axios.post(`${API_URL}/ai/getReview`, {
        code: code,
        language: selectedLanguage
      })
      setReview(response.data)
    } catch (err) {
      console.error("Review failed: ", err)
      setReview("⚠️ Error: Check backend connection")
    } finally {
      setIsReviewing(false);
    }
  };

  return (

    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">

      {/* LEFT SIDE: Code Editor (50% Width) */}
      <div className="w-1/2 h-full border-r border-slate-700 flex flex-col">
        {/* Header */}
        <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
          <span className="text-sm font-semibold text-slate-400">INPUT CODE</span>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 hover:bg-gray-700 cursor-pointer transition-colors"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsHistoryOpen(true)}
            className="text-gray-400 hover:text-white transition-colors"
            title="View History"
          >
            History📜
          </button>
        </div>

        {/* The Monaco Editor */}
        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              minimap: { enabled: false }, // Hides the mini-map to save space
              fontSize: 16,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE: AI Review (50% Width) */}
      <div className="w-1/2 h-full flex flex-col bg-slate-950">
        {/* Header */}
        <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 justify-between">
          <span className="text-sm font-semibold text-slate-400">AI FEEDBACK</span>
        </div>

        {/* Review Content Area */}
        <div className="flex-1 p-6 overflow-y-auto font-sans">
          {isReviewing ? (
            // Loading State
            <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
              <p>Analyzing logic...</p>
            </div>
          ) : review ? (
            // Result State
            <div className="prose prose-invert">
              <h3 className="text-cyan-400 font-bold text-xl">Code Review</h3>
              <div className="prose prose-invert max-w-none p-6 overflow-y-auto h-full">
                <Markdown
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    //   Main Headings (h2, h3) - For when AI listens to us
                    h2: ({ node, ...props }) => (
                      <h2 className="text-2xl font-bold text-blue-400 mb-4 mt-10 border-b border-gray-700 pb-2" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-xl font-bold text-blue-400 mb-3 mt-8" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <span className="font-bold text-blue-300" {...props} />
                    ),
                    pre: ({ node, children, ...props }) => {
                      // 1. Get the raw text. 
                      // The 'children' of a <pre> is usually a <code> tag. 
                      // We dig inside it to find the actual string of code.
                      const codeText = children?.props?.children || "";

                      return (
                        // 2. We return a "Relative" div. 
                        // This allows us to put the button "Absolute" inside it (top-right corner).
                        <div className="relative group my-6">

                          {/* The actual code block (Scrollable) */}
                          <pre
                            className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto max-h-96 overflow-y-auto border border-gray-700/50 custom-scrollbar"
                            {...props}
                          >
                            {children}
                          </pre>

                          <CopyButton text={String(codeText)} />
                        </div>
                      );
                    },
                    //  Make the lists look cleaner
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="ml-4" {...props} />
                    ),
                  }}
                >
                  {review}
                </Markdown>
              </div>
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
              <p className="text-lg">Ready to review</p>
            </div>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end">
          <button
            onClick={reviewCode}
            disabled={isReviewing}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-md transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isReviewing ? 'Reviewing...' : 'Review Code 🚀'}
          </button>
        </div>
      </div>
      <HistorySidebar
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onLoadReview={(item) => {
          setCode(item.code),
            setReview(item.review),
            setSelectedLanguage(item.language)
          setIsHistoryOpen(false)
        }}
      />
    </div>
  );
};

export default CodeEditor;