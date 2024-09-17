'use client';
// Import necessary hooks from React
import { useState,ChangeEvent } from "react";
// Import custom UI components from the UI directory
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { predefinedHtml } from "./predefinedHtml";

const HtmlPreviewer = () => {
      // State hooks for managing HTML code input and preview
    const [htmlCode,setHtmlCode] = useState<string>("");
    const [previewCode,setPreviewCode] = useState<string>("");

      // Handler for updating HTML code state on textarea change
    const handleChange = (e : ChangeEvent<HTMLTextAreaElement>) : void => {
         setHtmlCode(e.target.value);
    }

      // Handler to generate HTML preview
    const handlePreview = () : void => {
        setPreviewCode(htmlCode);
    }

      // Handler to paste predefined HTML into the textarea
    const handlePasteHtml = () : void => {
        setHtmlCode(predefinedHtml);
    }

  return (
    <div className="flex justify-center items-center h-screen bg-background">
        {/* Center the HTML previewer card within the screen */}
      <div className="w-full bg-card rounded-2xl p-6 shadow-lg max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">HTML Previewer</h1>
        <p className="text-center text-muted-foreground mb-4">
        Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
        {/* Textarea for entering HTML code */}
        <Textarea 
        value={htmlCode}
        onChange={handleChange}
        placeholder="Enter your html code here ..."
        className="rounded-lg p-4 text-muted-foreground bg-background border border-input"
        rows={8}
        />
        {/* Buttons to generate preview and paste predefined HTML */}
        <div className="flex justify-center gap-2">
            <Button className="rounded-2xl font-bold" onClick={handlePreview}>Generate Preview</Button>
            <Button className="rounded-2xl font-bold" onClick={handlePasteHtml}>Paste HTML</Button>
        </div>
        {/* Div to display the HTML preview */}
        <div className="p-4 rounded-lg border border-input bg-background text-muted-foreground">
            <div dangerouslySetInnerHTML={{__html:previewCode}}></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlPreviewer
