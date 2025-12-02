"use client";

import React, { useEffect, useRef, useState } from "react";

type ToolbarPos = { top: number; left: number };

export default function BlogEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);

  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPos, setToolbarPos] = useState<ToolbarPos>({ top: 0, left: 0 });

  const [showMediaMenu, setShowMediaMenu] = useState(false);
  const [mediaPos, setMediaPos] = useState<ToolbarPos>({ top: 0, left: 0 });

  useEffect(() => {
    const onSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) {
        setShowToolbar(false);
        setShowMediaMenu(false);
        return;
      }

      // 🔥 CHECK: If selection is NOT inside editor, hide toolbars
      if (!editorRef.current || !editorRef.current.contains(sel.anchorNode)) {
        setShowToolbar(false);
        setShowMediaMenu(false);
        return;
      }

      // Selection is INSIDE editor
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const isCollapsed = sel.isCollapsed;

      // If caret only → show media trigger
      if (isCollapsed) {
        setShowToolbar(false);
        if (rect && (rect.top || rect.left)) {
          setMediaPos({
            top: rect.top + window.scrollY - 8,
            left: rect.left + window.scrollX + rect.width + 8,
          });
        }
        return;
      }

      // If selecting text → show full toolbar
      if (rect && (rect.top || rect.left)) {
        const top = rect.top + window.scrollY - 48;
        const left = rect.left + window.scrollX + rect.width / 2;
        setToolbarPos({ top, left });
        setShowToolbar(true);
        setShowMediaMenu(false);
      } else {
        setShowToolbar(false);
      }
    };

    document.addEventListener("selectionchange", onSelectionChange);
    return () =>
      document.removeEventListener("selectionchange", onSelectionChange);
  }, []);

  const exec = (command: string, value?: string | null) => {
    try {
      // some commands accept null/undefined for no value
      document.execCommand(command, false, value ?? undefined);
    } catch (e) {
      // reference e so linters don't warn about unused variable
      void e;
    }
    setShowToolbar(false);
    editorRef.current?.focus();
  };

  const toggleHeading = (tag: "H1" | "H2" | "P") => {
    exec("formatBlock", tag);
  };

  const insertHtmlAtCaret = (html: string) => {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      // append at end
      if (editorRef.current) {
        editorRef.current.insertAdjacentHTML("beforeend", html);
      }
      return;
    }
    const range = sel.getRangeAt(0);
    range.deleteContents();
    const fragment = range.createContextualFragment(html);
    const lastNode = fragment.lastChild;
    range.insertNode(fragment);
    // place caret after inserted content
    if (lastNode) {
      const newRange = document.createRange();
      newRange.setStartAfter(lastNode);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);
    }
    editorRef.current?.focus();
  };

  const onMediaTriggerClick = () => {
    setShowMediaMenu((s) => !s);
    editorRef.current?.focus();
  };

  const insertImageByUrl = () => {
    const url = prompt("Image URL");
    if (url) {
      const html = `<img src="${url}" alt="" style="max-width:100%;height:auto;" />`;
      insertHtmlAtCaret(html);
      setShowMediaMenu(false);
    }
  };

  const insertVideoByUrl = () => {
    const url = prompt("Video URL");
    if (url) {
      const html = `<video controls src="${url}" style="max-width:100%;height:auto;"></video>`;
      insertHtmlAtCaret(html);
      setShowMediaMenu(false);
    }
  };

  const onImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const html = `<img src="${url}" alt="${file.name}" style="max-width:100%;height:auto;" />`;
    insertHtmlAtCaret(html);
    e.currentTarget.value = "";
    setShowMediaMenu(false);
  };

  const onVideoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const html = `<video controls src="${url}" style="max-width:100%;height:auto;"></video>`;
    insertHtmlAtCaret(html);
    e.currentTarget.value = "";
    setShowMediaMenu(false);
  };

  const createLink = () => {
    const url = prompt("Enter URL");
    if (url) exec("createLink", url);
  };

  const unlink = () => exec("unlink");

  const removeFormat = () => exec("removeFormat");

  return (
    <div className="w-full mx-auto">
      <span className="mb-2 block">Blog details</span>
      {/* Formatting toolbar */}
      {showToolbar && (
        <div
          ref={toolbarRef}
          className="fixed z-50 transform -translate-x-1/2 bg-[#1D1B26] border border-primary rounded shadow px-2 py-1 flex gap-1"
          style={{ top: toolbarPos.top, left: toolbarPos.left }}>
          <button
            type="button"
            onClick={() => exec("bold")}
            className="px-2 py-1 text-sm"
            title="Bold">
            B
          </button>
          <button
            type="button"
            onClick={() => exec("italic")}
            className="px-2 py-1 text-sm"
            title="Italic">
            I
          </button>
          <button
            type="button"
            onClick={() => exec("underline")}
            className="px-2 py-1 text-sm"
            title="Underline">
            U
          </button>
          <button
            type="button"
            onClick={() => toggleHeading("H1")}
            className="px-2 py-1 text-sm"
            title="H1">
            H1
          </button>
          <button
            type="button"
            onClick={() => toggleHeading("H2")}
            className="px-2 py-1 text-sm"
            title="H2">
            H2
          </button>
          <button
            type="button"
            onClick={() => toggleHeading("P")}
            className="px-2 py-1 text-sm"
            title="Paragraph">
            P
          </button>
          <button
            type="button"
            onClick={createLink}
            className="px-2 py-1 text-sm"
            title="Link">
            Link
          </button>
          <button
            type="button"
            onClick={unlink}
            className="px-2 py-1 text-sm"
            title="Unlink">
            Unlink
          </button>
          <button
            type="button"
            onClick={removeFormat}
            className="px-2 py-1 text-sm"
            title="Clear formatting">
            Clear
          </button>
        </div>
      )}

      {/* Editor */}
      <div className="">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="min-h-[300px] bg-[#1D1B26] outline-none px-4 py-3 rounded-lg"
          onFocus={() => {
            // ensure media position updates on focus
            const sel = window.getSelection();
            if (sel && sel.rangeCount) {
              const rect = sel.getRangeAt(0).getBoundingClientRect();
              setMediaPos({
                top: rect.top + window.scrollY - 8,
                left: rect.left + window.scrollX + rect.width + 8,
              });
            }
          }}
        />

        {/* Small floating media trigger (appears near caret when no selection) */}
        <div
          ref={mediaRef}
          style={{ top: mediaPos.top, left: mediaPos.left }}
          className={`fixed z-40 transform ${showToolbar ? "hidden" : ""}`}>
          <button
            type="button"
            onClick={onMediaTriggerClick}
            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow"
            title="Insert media">
            <i className="ph ph-plus text-lg"></i>
          </button>

          {showMediaMenu && (
            <div className="mt-2 bg-[#1D1B26] border border-primary rounded shadow-lg p-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => imageInputRef.current?.click()}
                className="text-sm px-2 py-1 hover:bg-primary duration-500 rounded text-left">
                Upload Image
              </button>

              <button
                type="button"
                onClick={() => videoInputRef.current?.click()}
                className="text-sm px-2 py-1 hover:bg-primary duration-500 rounded text-left">
                Upload Video
              </button>

              <div className="border-t border-primary my-1" />

              <button
                type="button"
                onClick={insertImageByUrl}
                className="text-sm px-2 py-1 hover:bg-primary duration-500 rounded text-left">
                Insert Image by URL
              </button>

              <button
                type="button"
                onClick={insertVideoByUrl}
                className="text-sm px-2 py-1 hover:bg-primary duration-500 rounded text-left">
                Insert Video by URL
              </button>
            </div>
          )}
        </div>

        {/* Hidden file inputs */}
        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageFile}
        />
        <input
          ref={videoInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={onVideoFile}
        />
      </div>
    </div>
  );
}
