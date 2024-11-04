'use client';

import { ChangeEvent, useState } from "react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button";

import { predefinedHtml } from "./predefinedHtml";

const HtmlPreviewer = () => {
  const [htmlCode,setHtmlCode] = useState<string>("");
  const [HtmlPreviewer,setHtmlPreviewer] = useState<string>("");

  const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlCode(e.target.value)
  }

  const handlePreview = () =>{
    setHtmlPreviewer(htmlCode);
  }

  const handlePasteHtml = () => {
    setHtmlCode(predefinedHtml);
  }
  return (
    <div className="flex items-center justify-center h-[100%]">
      <div className="bg-card shadow-lg w-full max-w-2xl p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">HTML Preview</h1>
        <p className="text-gray-500 text-center mb-4">Enter your HTML code and see the preview.</p>
        <div className="grid gap-4 mb-4">
          <Textarea
          value={htmlCode}
          onChange={handleChange}
          className="p-4 rounded-2xl border border-input focus:border-black"
          placeholder="Enter your html code here..."
          rows={8}
          />
          <div className="flex justify-center gap-4">
            <Button className="font-bold rounded-2xl bg-gray-900 hover:bg-gray-800"
            onClick={handlePreview}
            >Generate Preview</Button>
            <Button className="font-bold rounded-2xl bg-gray-900 hover:bg-gray-800"
            onClick={handlePasteHtml}
            >Paste HTML</Button>
          </div>
        </div>
        <div className="p-4 rounded-2xl border border-input">
          <div dangerouslySetInnerHTML={{__html:HtmlPreviewer}}></div>
        </div>
      </div>
    </div>
  )
}

export default HtmlPreviewer
