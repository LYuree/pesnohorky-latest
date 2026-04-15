/**
 * Extended Quill setup: image upload button + HTML source toggle.
 * Usage: const quill = initQuill("#editor", { placeholder: "..." });
 */
const UPLOAD_API = "http://localhost:3001";

function initQuill(selector, options) {
  options = options || {};
  const container = document.querySelector(selector);
  const parent = container.parentElement;

  // Create Quill with standard toolbar (no custom handlers to avoid v2 issues)
  const quill = new Quill(selector, {
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "link"],
        ["clean"],
      ],
    },
    placeholder: options.placeholder || "Содержание...",
  });

  // ── Buttons row ──
  var btnRow = document.createElement("div");
  btnRow.style.cssText = "display:flex;gap:8px;margin:4px 0 8px;";
  parent.appendChild(btnRow);

  // Upload image button
  var uploadBtn = document.createElement("button");
  uploadBtn.type = "button";
  uploadBtn.textContent = "📷 Вставить фото";
  uploadBtn.style.cssText = "padding:4px 12px;border:1px solid #a51312;border-radius:4px;background:#fff;color:#a51312;cursor:pointer;font-size:12px;";
  btnRow.appendChild(uploadBtn);

  uploadBtn.addEventListener("click", function() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function() {
      var file = input.files[0];
      if (!file) return;
      var fd = new FormData();
      fd.append("file", file);
      fetch(UPLOAD_API + "/api/upload", { method: "POST", body: fd })
        .then(function(res) {
          if (!res.ok) throw new Error("Upload failed");
          return res.json();
        })
        .then(function(data) {
          var range = quill.getSelection(true);
          quill.insertEmbed(range ? range.index : 0, "image", UPLOAD_API + data.url);
        })
        .catch(function(err) {
          alert("Ошибка загрузки: " + err.message);
        });
    };
    input.click();
  });

  // HTML source toggle button
  var toggleBtn = document.createElement("button");
  toggleBtn.type = "button";
  toggleBtn.textContent = "< > HTML";
  toggleBtn.style.cssText = "padding:4px 12px;border:1px solid #a51312;border-radius:4px;background:#fff;color:#a51312;cursor:pointer;font-size:12px;";
  btnRow.appendChild(toggleBtn);

  // Source textarea
  var sourceTextarea = document.createElement("textarea");
  sourceTextarea.style.cssText = "width:100%;min-height:200px;font-family:monospace;font-size:13px;padding:12px;border:1px solid #ccc;border-radius:4px;display:none;margin-top:4px;box-sizing:border-box;resize:vertical;";
  parent.appendChild(sourceTextarea);

  var isSourceMode = false;

  toggleBtn.addEventListener("click", function() {
    var toolbar = parent.querySelector(".ql-toolbar");
    if (isSourceMode) {
      quill.root.innerHTML = sourceTextarea.value;
      sourceTextarea.style.display = "none";
      if (toolbar) toolbar.style.display = "";
      container.style.display = "";
      toggleBtn.textContent = "< > HTML";
    } else {
      sourceTextarea.value = quill.root.innerHTML;
      sourceTextarea.style.display = "block";
      if (toolbar) toolbar.style.display = "none";
      container.style.display = "none";
      toggleBtn.textContent = "Визуальный редактор";
    }
    isSourceMode = !isSourceMode;
  });

  quill._getContent = function() {
    if (isSourceMode) {
      quill.root.innerHTML = sourceTextarea.value;
    }
    return quill.root.innerHTML.trim();
  };

  quill._setContent = function(html) {
    quill.root.innerHTML = html || "";
    sourceTextarea.value = html || "";
  };

  quill._reset = function() {
    quill.setContents([]);
    sourceTextarea.value = "";
    if (isSourceMode) {
      var toolbar = parent.querySelector(".ql-toolbar");
      sourceTextarea.style.display = "none";
      if (toolbar) toolbar.style.display = "";
      container.style.display = "";
      toggleBtn.textContent = "< > HTML";
      isSourceMode = false;
    }
  };

  return quill;
}
