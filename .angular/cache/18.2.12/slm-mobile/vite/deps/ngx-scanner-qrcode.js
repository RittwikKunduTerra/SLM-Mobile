import {
  Component,
  ElementRef,
  EventEmitter,
  Injectable,
  NgModule,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-R45CJUP5.js";
import "./chunk-KKSL7W6X.js";
import "./chunk-CXNAVVMS.js";
import {
  AsyncSubject,
  BehaviorSubject
} from "./chunk-XQSEKRDZ.js";
import "./chunk-HM5YLMWO.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KBUIKKCC.js";

// node_modules/ngx-scanner-qrcode/fesm2022/ngx-scanner-qrcode.mjs
var _c0 = ["video"];
var _c1 = ["canvas"];
var _c2 = ["resultsPanel"];
var WASMPROJECT = "assets/wasm/index.js";
var WASMREMOTE = "https://cdn.jsdelivr.net/npm/ngx-scanner-qrcode@1.6.9/wasm/index.js";
var WASMREMOTELATEST = "https://cdn.jsdelivr.net/npm/ngx-scanner-qrcode@latest/wasm/index.js";
var BEEP = `data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjI5LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAABQAAAkAAgICAgICAgICAgICAgICAgICAgKCgoKCgoKCgoKCgoKCgoKCgoKCgwMDAwMDAwMDAwMDAwMDAwMDAwMDg4ODg4ODg4ODg4ODg4ODg4ODg4P//////////////////////////AAAAAExhdmM1OC41NAAAAAAAAAAAAAAAACQEUQAAAAAAAAJAk0uXRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAANQAbGeUEQAAHZYZ3fASqD4P5TKBgocg+Bw/8+CAYBA4XB9/4EBAEP4nB9+UOf/6gfUCAIKyjgQ/Kf//wfswAAAwQA/+MYxAYOqrbdkZGQAMA7DJLCsQxNOij///////////+tv///3RWiZGBEhsf/FO/+LoCSFs1dFVS/g8f/4Mhv0nhqAieHleLy/+MYxAYOOrbMAY2gABf/////////////////usPJ66R0wI4boY9/8jQYg//g2SPx1M0N3Z0kVJLIs///Uw4aMyvHJJYmPBYG/+MYxAgPMALBucAQAoGgaBoFQVBUFQWDv6gZBUFQVBUGgaBr5YSgqCoKhIGg7+IQVBUFQVBoGga//SsFSoKnf/iVTEFNRTMu/+MYxAYAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV`;
var MEDIA_STREAM_DEFAULT = {
  audio: false,
  video: true
};
var CANVAS_STYLES_LAYER = {
  lineWidth: 1,
  strokeStyle: "green",
  fillStyle: "#55f02880"
};
var CANVAS_STYLES_TEXT = {
  font: "15px serif",
  strokeStyle: "#fff0",
  fillStyle: "#ff0000"
};
var CONFIG_DEFAULT = {
  src: "",
  fps: 30,
  vibrate: 300,
  decode: "utf-8",
  isBeep: true,
  constraints: MEDIA_STREAM_DEFAULT,
  canvasStyles: [CANVAS_STYLES_LAYER, CANVAS_STYLES_TEXT]
};
var WASM_READY = () => "zbarWasm" in window;
var OVERRIDES = (variableKey, config, defaultConfig) => {
  if (config && Object.keys(config[variableKey]).length) {
    for (const key in defaultConfig) {
      const cloneDeep = JSON.parse(JSON.stringify(__spreadValues(__spreadValues({}, config[variableKey]), {
        [key]: defaultConfig[key]
      })));
      config[variableKey] = config[variableKey].hasOwnProperty(key) ? config[variableKey] : cloneDeep;
    }
    return config[variableKey];
  } else {
    return defaultConfig;
  }
};
var AS_COMPLETE = (as, data, error) => {
  error ? as.error(error) : as.next(data);
  as.complete();
};
var PLAY_AUDIO = (isPlay = false) => {
  if (isPlay === false) return;
  const audio = new Audio(BEEP);
  audio.oncanplaythrough = () => {
    const promise = audio.play();
    if (promise) {
      promise.catch((e) => {
        if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
        }
      });
    }
  };
};
var DRAW_RESULT_APPEND_CHILD = (code, oriCanvas, elTarget, canvasStyles) => {
  let widthZoom;
  let heightZoom;
  let oriWidth = oriCanvas.width;
  let oriHeight = oriCanvas.height;
  let oriWHRatio = oriWidth / oriHeight;
  let imgWidth = parseInt(getComputedStyle(oriCanvas).width);
  let imgHeight = parseInt(getComputedStyle(oriCanvas).height);
  let imgWHRatio = imgWidth / imgHeight;
  elTarget.innerHTML = "";
  if (oriWHRatio > imgWHRatio) {
    widthZoom = imgWidth / oriWidth;
    heightZoom = imgWidth / oriWHRatio / oriHeight;
  } else {
    heightZoom = imgHeight / oriHeight;
    widthZoom = imgHeight * oriWHRatio / oriWidth;
  }
  for (let i = 0; i < code.length; i++) {
    const _code = code[i];
    let cvs = document.createElement("canvas");
    let ctx = cvs.getContext("2d", {
      willReadFrequently: true
    });
    let loc = {};
    let X = [];
    let Y = [];
    let fontSize = 0;
    let svgSize = 0;
    let num = canvasStyles.length === 2 && canvasStyles[1]?.font?.replace(/[^0-9]/g, "");
    if (num && /[0-9]/g.test(num)) {
      fontSize = parseFloat(num);
      svgSize = (widthZoom || 1) * fontSize;
      if (Number.isNaN(svgSize)) {
        svgSize = fontSize;
      }
    }
    const points = _code.points;
    for (let j = 0; j < points.length; j++) {
      const xj = points?.[j]?.x ?? 0;
      const yj = points?.[j]?.y ?? 0;
      loc[`x${j + 1}`] = xj;
      loc[`y${j + 1}`] = yj;
      X.push(xj);
      Y.push(yj);
    }
    let maxX = Math.max(...X);
    let minX = Math.min(...X);
    let maxY = Math.max(...Y);
    let minY = Math.min(...Y);
    cvs.setAttribute("class", "qrcode-polygon");
    if (oriWHRatio > imgWHRatio) {
      cvs.style.top = minY * heightZoom + (imgHeight - imgWidth / oriWHRatio) * 0.5 + "px";
      cvs.style.left = minX * widthZoom + "px";
      cvs.width = (maxX - minX) * widthZoom;
      cvs.height = (maxY - minY) * widthZoom;
    } else {
      cvs.style.top = minY * heightZoom + "px";
      cvs.style.left = minX * widthZoom + (imgWidth - imgHeight * oriWHRatio) * 0.5 + "px";
      cvs.width = (maxX - minX) * heightZoom;
      cvs.height = (maxY - minY) * heightZoom;
    }
    for (const key in canvasStyles[0]) {
      ctx[key] = canvasStyles[0][key];
    }
    const polygon = [];
    for (let k = 0; k < X.length; k++) {
      polygon.push((loc[`x${k + 1}`] - minX) * heightZoom);
      polygon.push((loc[`y${k + 1}`] - minY) * widthZoom);
    }
    const shape = polygon.slice(0);
    ctx.beginPath();
    ctx.moveTo(shape.shift(), shape.shift());
    while (shape.length) {
      ctx.lineTo(shape.shift(), shape.shift());
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if (fontSize) {
      const qrcodeTooltipTemp = document.createElement("div");
      qrcodeTooltipTemp.setAttribute("class", "qrcode-tooltip-temp");
      qrcodeTooltipTemp.innerText = _code.value;
      qrcodeTooltipTemp.style.maxWidth = (oriWidth > window.innerWidth ? window.innerWidth * 0.9 : oriWidth) + "px";
      qrcodeTooltipTemp.style.borderRadius = `clamp(1px, ${widthZoom * fontSize - 10}px, 3px)`;
      qrcodeTooltipTemp.style.paddingBlock = `clamp(1px, ${widthZoom * fontSize - 10}px, 3px)`;
      qrcodeTooltipTemp.style.paddingInline = `clamp(2.5px, ${widthZoom * fontSize - 6}px, 10px)`;
      const xmlString = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 512 512"><rect x="128" y="128" width="336" height="336" rx="57" ry="57"></rect><path d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24"></path></svg>`;
      const xmlDom = new DOMParser().parseFromString(xmlString, "application/xml");
      const svgDom = qrcodeTooltipTemp.ownerDocument.importNode(xmlDom.documentElement, true);
      svgDom.style.marginLeft = `clamp(1px, ${widthZoom * fontSize - 10}px, 3px)`;
      qrcodeTooltipTemp.appendChild(svgDom);
      svgDom.addEventListener("click", () => window.navigator["clipboard"].writeText(_code.value));
      qrcodeTooltipTemp.addEventListener("click", () => window.navigator["clipboard"].writeText(_code.value));
      const qrcodeTooltip = document.createElement("div");
      qrcodeTooltip.setAttribute("class", "qrcode-tooltip");
      qrcodeTooltip.appendChild(qrcodeTooltipTemp);
      heightZoom = imgHeight / oriHeight;
      widthZoom = imgHeight * oriWHRatio / oriWidth;
      qrcodeTooltip.style.fontSize = widthZoom * fontSize + "px";
      qrcodeTooltip.style.top = minY * heightZoom + "px";
      qrcodeTooltip.style.left = minX * widthZoom + (imgWidth - imgHeight * oriWHRatio) * 0.5 + "px";
      qrcodeTooltip.style.width = (maxX - minX) * heightZoom + "px";
      qrcodeTooltip.style.height = (maxY - minY) * heightZoom + "px";
      const resultText = document.createElement("span");
      resultText.innerText = _code.value;
      resultText.style.top = minY * heightZoom + -20 * heightZoom + "px";
      resultText.style.left = minX * widthZoom + (imgWidth - imgHeight * oriWHRatio) * 0.5 + "px";
      const ff = canvasStyles[1]?.font?.split(" ")?.[1];
      resultText.style.fontFamily = ff;
      resultText.style.fontSize = widthZoom * fontSize + "px";
      resultText.style.color = canvasStyles?.[1]?.fillStyle;
      elTarget?.appendChild(qrcodeTooltip);
      elTarget?.appendChild(resultText);
    }
    elTarget?.appendChild(cvs);
  }
  ;
};
var DRAW_RESULT_ON_CANVAS = (code, cvs, canvasStyles) => {
  let ctx = cvs.getContext("2d", {
    willReadFrequently: true
  });
  for (let i = 0; i < code.length; i++) {
    const _code = code[i];
    let loc = {};
    let X = [];
    let Y = [];
    let fontSize = 0;
    const fs = canvasStyles[1]?.font?.split(" ")?.[0];
    let num = fs?.replace(/[^0-9]/g, "");
    if (num && /[0-9]/g.test(num)) {
      fontSize = parseFloat(num);
    }
    const points = _code.points;
    for (let j = 0; j < points.length; j++) {
      const xj = points?.[j]?.x ?? 0;
      const yj = points?.[j]?.y ?? 0;
      loc[`x${j + 1}`] = xj;
      loc[`y${j + 1}`] = yj;
      X.push(xj);
      Y.push(yj);
    }
    let minX = Math.min(...X);
    let minY = Math.min(...Y);
    const styleLayer = () => {
      for (const key in canvasStyles[0]) {
        ctx[key] = canvasStyles[0][key];
      }
      const polygon = [];
      for (let k = 0; k < X.length; k++) {
        polygon.push(loc[`x${k + 1}`]);
        polygon.push(loc[`y${k + 1}`]);
      }
      const shape = polygon.slice(0);
      ctx.beginPath();
      ctx.moveTo(shape.shift(), shape.shift());
      while (shape.length) {
        ctx.lineTo(shape.shift(), shape.shift());
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };
    let cvs2 = document.createElement("canvas");
    const styleText = () => {
      const ff = canvasStyles[1]?.font?.split(" ")?.[1];
      cvs2.height = cvs.height;
      cvs2.width = cvs.width;
      let ctx2 = cvs2.getContext("2d", {
        willReadFrequently: true
      });
      ctx2.font = fontSize + `px ` + ff;
      for (const key in canvasStyles[1]) {
        ctx2[key] = canvasStyles[1][key];
      }
      FILL_TEXT_MULTI_LINE(ctx2, _code.value, minX, minY - 5);
    };
    styleLayer();
    styleText();
    ctx.drawImage(cvs2, 0, 0);
  }
  ;
};
var READ_AS_DATA_URL = (file, configs) => {
  let decode = configs?.decode ?? CONFIG_DEFAULT.decode;
  let canvasStyles = configs?.canvasStyles?.length === 2 ? configs?.canvasStyles : [CANVAS_STYLES_LAYER, CANVAS_STYLES_TEXT];
  let isBeep = configs?.isBeep ?? CONFIG_DEFAULT.isBeep;
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const objectFile = {
        name: file.name,
        file,
        url: URL.createObjectURL(file)
      };
      const image = new Image();
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = () => __async(void 0, null, function* () {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        if (WASM_READY()) {
          const code = yield zbarWasm.scanImageData(imageData);
          if (code?.length) {
            code.forEach((s) => s.value = s.decode(decode?.toLocaleLowerCase()));
            DRAW_RESULT_ON_CANVAS(code, canvas, canvasStyles);
            const blob = yield CANVAS_TO_BLOB(canvas);
            const url = URL.createObjectURL(blob);
            const blobToFile = (theBlob, fileName) => new File([theBlob], fileName, {
              lastModified: (/* @__PURE__ */ new Date()).getTime(),
              type: theBlob.type
            });
            resolve(Object.assign({}, objectFile, {
              data: code,
              url,
              canvas,
              file: blobToFile(blob, objectFile.name)
            }));
            PLAY_AUDIO(isBeep);
          } else {
            resolve(Object.assign({}, objectFile, {
              data: code,
              canvas
            }));
          }
        }
      });
      image.src = objectFile.url;
    };
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsDataURL(file);
  });
};
var CANVAS_TO_BLOB = (canvas, type) => {
  return new Promise((resolve, reject) => canvas.toBlob((blob) => resolve(blob), type));
};
var BLOB_TO_FILE = (theBlob, fileName) => {
  return new File([theBlob], fileName, {
    lastModified: (/* @__PURE__ */ new Date()).getTime(),
    type: theBlob.type
  });
};
var FILES_TO_SCAN = (files = [], configs, percentage, quality, as = new AsyncSubject()) => {
  COMPRESS_IMAGE_FILE(files, percentage, quality).then((_files) => {
    Promise.all(Object.assign([], _files).map((m) => READ_AS_DATA_URL(m, configs))).then((img) => {
      AS_COMPLETE(as, img);
    }).catch((error) => AS_COMPLETE(as, null, error));
  });
  return as;
};
var FILL_TEXT_MULTI_LINE = (ctx, text, x, y) => {
  let lineHeight = ctx.measureText("M").width * 1.2;
  let lines = text.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    ctx.fillText(lines[i], x, y);
    ctx.strokeText(lines[i], x, y);
    y += lineHeight;
  }
};
var COMPRESS_IMAGE_FILE = (files = [], percentage = 100, quality = 100) => {
  if (files.length && (percentage < 100 || quality < 100)) {
    const resizedFiles = [];
    return new Promise((resolve, reject) => {
      for (const file of files) {
        const image = new Image();
        const reader = new FileReader();
        reader.onload = function(event) {
          image.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            const newWidth = Math.round(image.width * (percentage / 100));
            const newHeight = Math.round(image.height * (percentage / 100));
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
            canvas.toBlob((blob) => {
              const resizedFile = new File([blob], file.name, {
                type: file.type
              });
              resizedFiles.push(resizedFile);
              if (files.length === resizedFiles.length) {
                resolve(resizedFiles);
              }
            }, file.type, quality / 100);
          };
          image.src = event.target.result;
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      }
    });
  } else {
    return Promise.resolve(files);
  }
};
var REMOVE_RESULT_PANEL = (element) => {
  Object.assign([], element.childNodes).forEach((el) => element.removeChild(el));
};
var RESET_CANVAS = (canvas) => {
  const context = canvas.getContext("2d", {
    willReadFrequently: true
  });
  context.clearRect(0, 0, canvas.width, canvas.height);
};
var UPDATE_WIDTH_HEIGHT_VIDEO = (video, canvas) => {
  video.style.width = canvas.offsetWidth + "px";
  video.style.height = canvas.offsetHeight + "px";
};
var VIBRATE = (time = 300) => {
  time && IS_MOBILE() && window?.navigator?.vibrate(time);
};
var IS_MOBILE = () => {
  const vendor = navigator.userAgent || navigator["vendor"] || window["opera"];
  const phone = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
  const version = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;
  const isSafari = /^((?!chrome|android).)*safari/i;
  return !!(phone.test(vendor) || version.test(vendor.substr(0, 4))) && !isSafari.test(vendor);
};
var NgxScannerQrcodeService = class _NgxScannerQrcodeService {
  /**
   * loadFiles
   * @param files
   * @param percentage
   * @param quality
   * @returns
   */
  loadFiles(files = [], percentage, quality) {
    const as = new AsyncSubject();
    COMPRESS_IMAGE_FILE(files, percentage, quality).then((_files) => {
      Promise.all(Object.assign([], _files).map((m) => this.readAsDataURL(m))).then((img) => AS_COMPLETE(as, img)).catch((error) => AS_COMPLETE(as, null, error));
    });
    return as;
  }
  /**
   * loadFilesToScan
   * @param files
   * @param config
   * @param percentage
   * @param quality
   * @returns
   */
  loadFilesToScan(files = [], config, percentage, quality) {
    return FILES_TO_SCAN(files, config, percentage, quality);
  }
  /**
   * readAsDataURL
   * @param file
   * @returns
   */
  readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const objectFile = {
          name: file.name,
          file,
          url: URL.createObjectURL(file)
        };
        resolve(objectFile);
      };
      fileReader.onerror = (error) => reject(error);
      fileReader.readAsDataURL(file);
    });
  }
  static {
    this.ɵfac = function NgxScannerQrcodeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScannerQrcodeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgxScannerQrcodeService,
      factory: _NgxScannerQrcodeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScannerQrcodeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LOAD_WASM = (as = new AsyncSubject(), renderer) => {
  let retry = 0;
  const LOAD_WASM_RETRY = (isLoadWasmRemote = false) => {
    const DONE = () => {
      let timeoutId;
      try {
        const L = () => {
          clearTimeout(timeoutId);
          WASM_READY() ? setTimeout(() => AS_COMPLETE(as, true)) : timeoutId = setTimeout(() => L());
        };
        setTimeout(() => L());
        setTimeout(() => clearTimeout(timeoutId), 3e3);
      } catch (error) {
        clearTimeout(timeoutId);
      }
    };
    const scriptRemote = document.querySelectorAll(`script[src="${WASMREMOTE}"]`);
    const scriptRemoteLatest = document.querySelectorAll(`script[src="${WASMREMOTELATEST}"]`);
    if (scriptRemote.length || scriptRemoteLatest.length) {
      DONE();
    } else {
      const scriptProject = document.querySelectorAll(`script[src="${WASMPROJECT}"]`);
      if (scriptProject.length === 1) {
        DONE();
      } else {
        scriptProject.forEach((f) => f.remove());
        if (renderer) {
          const script = renderer.createElement("script");
          renderer.setAttribute(script, "src", isLoadWasmRemote ? WASMREMOTE : WASMPROJECT);
          renderer.setAttribute(script, "type", "text/javascript");
          renderer.setAttribute(script, "async", "");
          renderer.appendChild(document.head, script);
          script.onload = () => DONE();
          script.onerror = () => {
            if (retry < 2) {
              document.head.removeChild(script);
              LOAD_WASM_RETRY(true);
            } else {
              AS_COMPLETE(as, false, "Could not load script " + isLoadWasmRemote ? WASMREMOTE : WASMPROJECT);
            }
          };
          retry += 1;
        } else {
          const mod = document.createElement("script");
          mod.setAttribute("src", isLoadWasmRemote ? WASMREMOTE : WASMPROJECT);
          mod.setAttribute("type", "text/javascript");
          mod.setAttribute("async", "");
          document.head.appendChild(mod);
          mod.onload = () => DONE();
          mod.onerror = () => {
            if (retry < 2) {
              document.head.removeChild(mod);
              LOAD_WASM_RETRY(true);
            } else {
              AS_COMPLETE(as, false, "Could not load script " + isLoadWasmRemote ? WASMREMOTE : WASMPROJECT);
            }
          };
          retry += 1;
        }
      }
    }
  };
  LOAD_WASM_RETRY();
  return as;
};
var NgxScannerQrcodeComponent = class _NgxScannerQrcodeComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.event = new EventEmitter();
    this.src = CONFIG_DEFAULT.src;
    this.fps = CONFIG_DEFAULT.fps;
    this.vibrate = CONFIG_DEFAULT.vibrate;
    this.decode = CONFIG_DEFAULT.decode;
    this.isBeep = CONFIG_DEFAULT.isBeep;
    this.config = CONFIG_DEFAULT;
    this.constraints = CONFIG_DEFAULT.constraints;
    this.canvasStyles = [CANVAS_STYLES_LAYER, CANVAS_STYLES_TEXT];
    this.isStart = false;
    this.isPause = false;
    this.isLoading = false;
    this.isTorch = false;
    this.data = new BehaviorSubject([]);
    this.devices = new BehaviorSubject([]);
    this.deviceIndexActive = 0;
    this.dataForResize = [];
    this.ready = new AsyncSubject();
    this.STATUS = {
      startON: () => this.isStart = true,
      pauseON: () => this.isPause = true,
      loadingON: () => this.isLoading = true,
      startOFF: () => this.isStart = false,
      pauseOFF: () => this.isPause = false,
      loadingOFF: () => this.isLoading = false,
      torchOFF: () => this.isTorch = false
    };
  }
  ngOnInit() {
    this.overrideConfig();
    LOAD_WASM(this.ready, this.renderer).subscribe(() => {
      if (this.src) {
        this.loadImage(this.src);
      }
      this.resize();
    });
  }
  /**
   * start
   * @param playDeviceCustom
   * @returns
   */
  start(playDeviceCustom) {
    const as = new AsyncSubject();
    if (this.isStart) {
      AS_COMPLETE(as, false);
    } else {
      this.safariWebRTC(as, playDeviceCustom);
    }
    return as;
  }
  /**
   * stop
   * @returns
   */
  stop() {
    this.STATUS.pauseOFF();
    this.STATUS.startOFF();
    this.STATUS.torchOFF();
    this.STATUS.loadingOFF();
    const as = new AsyncSubject();
    try {
      clearTimeout(this.rAF_ID);
      this.video.nativeElement.srcObject.getTracks().forEach((track) => {
        track.stop();
        AS_COMPLETE(as, true);
      });
      this.dataForResize = [];
      RESET_CANVAS(this.canvas.nativeElement);
      REMOVE_RESULT_PANEL(this.resultsPanel.nativeElement);
    } catch (error) {
      AS_COMPLETE(as, false, error);
    }
    return as;
  }
  /**
   * play
   * @returns
   */
  play() {
    const as = new AsyncSubject();
    if (this.isPause) {
      this.video.nativeElement.play();
      this.STATUS.pauseOFF();
      this.requestAnimationFrame();
      AS_COMPLETE(as, true);
    } else {
      AS_COMPLETE(as, false);
    }
    return as;
  }
  /**
   * pause
   * @returns
   */
  pause() {
    const as = new AsyncSubject();
    if (this.isStart) {
      clearTimeout(this.rAF_ID);
      this.video.nativeElement.pause();
      this.STATUS.pauseON();
      AS_COMPLETE(as, true);
    } else {
      AS_COMPLETE(as, false);
    }
    return as;
  }
  /**
   * playDevice
   * @param deviceId
   * @param as
   * @returns
   */
  playDevice(deviceId, as = new AsyncSubject()) {
    const constraints = this.getConstraints();
    const existDeviceId = this.isStart && constraints ? constraints.deviceId !== deviceId : true;
    switch (true) {
      case (deviceId === "null" || deviceId === "undefined" || !deviceId):
        stop();
        this.stop();
        AS_COMPLETE(as, false);
        break;
      case (deviceId && existDeviceId):
        stop();
        this.stop();
        this.STATUS.loadingON();
        this.deviceIndexActive = this.devices.value.findIndex((f) => f.deviceId === deviceId);
        const constraints2 = __spreadProps(__spreadValues({}, this.constraints), {
          audio: false,
          video: __spreadValues({
            deviceId
          }, this.constraints.video)
        });
        navigator.mediaDevices.getUserMedia(constraints2).then((stream) => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.onloadedmetadata = () => {
            this.video.nativeElement.play();
            this.requestAnimationFrame();
            AS_COMPLETE(as, true);
            this.STATUS.startON();
            this.STATUS.loadingOFF();
          };
        }).catch((error) => {
          this.eventEmit(false);
          AS_COMPLETE(as, false, error);
          this.STATUS.startOFF();
          this.STATUS.loadingOFF();
        });
        break;
      default:
        AS_COMPLETE(as, false);
        this.STATUS.loadingOFF();
        break;
    }
    return as;
  }
  /**
   * loadImage
   * @param src
   * @returns
   */
  loadImage(src) {
    const as = new AsyncSubject();
    this.STATUS.startOFF();
    this.STATUS.loadingON();
    const image = new Image();
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = () => {
      WASM_READY() && this.drawImage(image, (flag) => {
        AS_COMPLETE(as, flag);
        this.STATUS.startOFF();
        this.STATUS.loadingOFF();
      });
    };
    image.src = src;
    return as;
  }
  /**
   * torcher
   * @returns
   */
  torcher() {
    const as = this.applyConstraints({
      advanced: [{
        torch: this.isTorch
      }]
    });
    as.subscribe(() => false, () => this.isTorch = !this.isTorch);
    return as;
  }
  /**
   * applyConstraints
   * @param constraints
   * @param deviceIndex
   * @returns
   */
  applyConstraints(constraints, deviceIndex = 0) {
    const as = new AsyncSubject();
    if (this.isStart) {
      const stream = this.video.nativeElement.srcObject;
      if (deviceIndex !== null || deviceIndex !== void 0 || !Number.isNaN(deviceIndex)) {
        const videoTrack = stream.getVideoTracks()[deviceIndex];
        const imageCapture = new window.ImageCapture(videoTrack);
        imageCapture.getPhotoCapabilities().then(() => __async(this, null, function* () {
          yield videoTrack.applyConstraints(constraints);
          UPDATE_WIDTH_HEIGHT_VIDEO(this.video.nativeElement, this.canvas.nativeElement);
          AS_COMPLETE(as, true);
        })).catch((error) => {
          switch (error?.name) {
            case "NotFoundError":
            case "DevicesNotFoundError":
              AS_COMPLETE(as, false, "Required track is missing");
              break;
            case "NotReadableError":
            case "TrackStartError":
              AS_COMPLETE(as, false, "Webcam or mic are already in use");
              break;
            case "OverconstrainedError":
            case "ConstraintNotSatisfiedError":
              AS_COMPLETE(as, false, "Constraints can not be satisfied by avb. devices");
              break;
            case "NotAllowedError":
            case "PermissionDeniedError":
              AS_COMPLETE(as, false, "Permission denied in browser");
              break;
            case "TypeError":
              AS_COMPLETE(as, false, "Empty constraints object");
              break;
            default:
              AS_COMPLETE(as, false, error);
              break;
          }
        });
      } else {
        AS_COMPLETE(as, false, "Please check again deviceIndex");
      }
    } else {
      AS_COMPLETE(as, false, "Please start the scanner");
    }
    return as;
  }
  /**
   * getConstraints
   * @param deviceIndex
   * @returns
   */
  getConstraints(deviceIndex = 0) {
    const stream = this.video.nativeElement.srcObject;
    const videoTrack = stream?.getVideoTracks()[deviceIndex];
    return videoTrack?.getConstraints();
  }
  /**
   * download
   * @param fileName
   * @param percentage
   * @param quality
   * @returns
   */
  download(fileName = `ngx_scanner_qrcode_${Date.now()}.png`, percentage, quality) {
    const as = new AsyncSubject();
    (() => __async(this, null, function* () {
      const blob = yield CANVAS_TO_BLOB(this.canvas.nativeElement);
      const file = BLOB_TO_FILE(blob, fileName);
      FILES_TO_SCAN([file], this.config, percentage, quality, as).subscribe((res) => {
        res.forEach((item) => {
          if (item?.data?.length) {
            const link = document.createElement("a");
            link.href = item.url;
            link.download = item.name;
            link.click();
            link.remove();
          }
        });
      });
    }))();
    return as;
  }
  /**
   * resize
   */
  resize() {
    window.addEventListener("resize", () => {
      DRAW_RESULT_APPEND_CHILD(this.dataForResize, this.canvas.nativeElement, this.resultsPanel.nativeElement, this.canvasStyles);
      UPDATE_WIDTH_HEIGHT_VIDEO(this.video.nativeElement, this.canvas.nativeElement);
    });
  }
  /**
   * overrideConfig
   */
  overrideConfig() {
    if ("src" in this.config) this.src = this.config.src;
    if ("fps" in this.config) this.fps = this.config.fps;
    if ("vibrate" in this.config) this.vibrate = this.config.vibrate;
    if ("decode" in this.config) this.decode = this.config.decode;
    if ("isBeep" in this.config) this.isBeep = this.config.isBeep;
    if ("constraints" in this.config) this.constraints = OVERRIDES("constraints", this.config, MEDIA_STREAM_DEFAULT);
    if ("canvasStyles" in this.config && this.config?.canvasStyles?.length === 2) this.canvasStyles = this.config.canvasStyles;
  }
  /**
   * safariWebRTC
   * Fix issue on safari
   * https://webrtchacks.com/guide-to-safari-webrtc
   * @param as
   * @param playDeviceCustom
   */
  safariWebRTC(as, playDeviceCustom) {
    this.STATUS.startOFF();
    this.STATUS.loadingON();
    navigator.mediaDevices.getUserMedia(this.constraints).then((stream) => {
      stream.getTracks().forEach((track) => track.stop());
      this.loadAllDevices(as, playDeviceCustom);
    }).catch((error) => {
      AS_COMPLETE(as, false, error);
      this.STATUS.startOFF();
      this.STATUS.loadingOFF();
    });
  }
  /**
   * loadAllDevices
   * @param as
   * @param playDeviceCustom
   */
  loadAllDevices(as, playDeviceCustom) {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      let cameraDevices = devices.filter((f) => f.kind == "videoinput");
      this.devices.next(cameraDevices);
      if (cameraDevices?.length > 0) {
        AS_COMPLETE(as, cameraDevices);
        playDeviceCustom ? playDeviceCustom(cameraDevices) : this.playDevice(cameraDevices[0].deviceId);
      } else {
        AS_COMPLETE(as, false, "No camera detected.");
        this.STATUS.startOFF();
        this.STATUS.loadingOFF();
      }
    }).catch((error) => {
      AS_COMPLETE(as, false, error);
      this.STATUS.startOFF();
      this.STATUS.loadingOFF();
    });
  }
  /**
   * drawImage
   * @param element
   * @param callback
   */
  drawImage(element, callback = () => {
  }) {
    return __async(this, null, function* () {
      const canvas = this.canvas.nativeElement;
      const ctx = canvas.getContext("2d", {
        willReadFrequently: true
      });
      if (element instanceof HTMLImageElement) {
        canvas.width = element.naturalWidth;
        canvas.height = element.naturalHeight;
        element.style.visibility = "";
        this.video.nativeElement.style.visibility = "hidden";
        this.renderer.setStyle(this.elementRef.nativeElement, "width", canvas.width + "px");
        this.renderer.setStyle(this.elementRef.nativeElement, "maxWidth", "100%");
        this.renderer.setStyle(this.elementRef.nativeElement, "display", "inline-block");
      }
      if (element instanceof HTMLVideoElement) {
        canvas.width = element.videoWidth;
        canvas.height = element.videoHeight;
        element.style.visibility = "";
        this.canvas.nativeElement.style.visibility = "hidden";
      }
      UPDATE_WIDTH_HEIGHT_VIDEO(this.video.nativeElement, canvas);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = yield zbarWasm.scanImageData(imageData);
      if (code?.length) {
        code.forEach((s) => s.value = s.decode(this.decode?.toLocaleLowerCase()));
        DRAW_RESULT_APPEND_CHILD(code, Object.freeze(this.canvas.nativeElement), this.resultsPanel.nativeElement, this.canvasStyles);
        const EMIT_DATA = () => {
          this.eventEmit(code);
          this.dataForResize = code;
        };
        if (element instanceof HTMLImageElement) {
          callback(true);
          EMIT_DATA();
          VIBRATE(this.vibrate);
          PLAY_AUDIO(this.isBeep);
        }
        if (element instanceof HTMLVideoElement) {
          EMIT_DATA();
          VIBRATE(this.vibrate);
          PLAY_AUDIO(this.isBeep);
        }
      } else {
        callback(false);
        REMOVE_RESULT_PANEL(this.resultsPanel.nativeElement);
        this.dataForResize = [];
      }
    });
  }
  /**
   * eventEmit
   * @param response
   */
  eventEmit(response = false) {
    response !== false && this.data.next(response || []);
    response !== false && this.event.emit(response || []);
  }
  /**
   * Single-thread
   * Loop Recording on Camera
   * Must be destroy request
   * Not using: requestAnimationFrame
   * @param delay
   */
  requestAnimationFrame(delay = 100) {
    try {
      clearTimeout(this.rAF_ID);
      this.rAF_ID = setTimeout(
        () => {
          if (this.video.nativeElement.readyState === this.video.nativeElement.HAVE_ENOUGH_DATA) {
            delay = 0;
            WASM_READY() && this.drawImage(this.video.nativeElement);
            this.isStart && !this.isPause && this.requestAnimationFrame(delay);
          }
        },
        /*avoid cache mediaStream*/
        delay || this.fps
      );
    } catch (error) {
      clearTimeout(this.rAF_ID);
    }
  }
  /**
   * isReady
   */
  get isReady() {
    return this.ready;
  }
  ngOnDestroy() {
    this.pause();
  }
  static {
    this.ɵfac = function NgxScannerQrcodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScannerQrcodeComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgxScannerQrcodeComponent,
      selectors: [["ngx-scanner-qrcode"]],
      viewQuery: function NgxScannerQrcodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
          ɵɵviewQuery(_c2, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.video = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resultsPanel = _t.first);
        }
      },
      hostAttrs: [1, "ngx-scanner-qrcode"],
      inputs: {
        src: "src",
        fps: "fps",
        vibrate: "vibrate",
        decode: "decode",
        isBeep: "isBeep",
        config: "config",
        constraints: "constraints",
        canvasStyles: "canvasStyles"
      },
      outputs: {
        event: "event"
      },
      exportAs: ["scanner"],
      decls: 6,
      vars: 0,
      consts: [["resultsPanel", ""], ["canvas", ""], ["video", ""], [1, "origin-overlay"], [1, "origin-canvas"], ["playsinline", "", 1, "origin-video"]],
      template: function NgxScannerQrcodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 3, 0)(2, "canvas", 4, 1)(4, "video", 5, 2);
        }
      },
      styles: [".ngx-scanner-qrcode{display:block;position:relative}.origin-overlay{width:100%;position:absolute}.origin-overlay span{z-index:2;text-align:left;position:absolute}.origin-overlay .qrcode-polygon{z-index:1;position:absolute}.origin-canvas{width:100%;position:absolute}.origin-video{width:100%;background-color:#262626}.qrcode-tooltip{z-index:3;position:absolute}.qrcode-tooltip:hover .qrcode-tooltip-temp{display:block;position:absolute;cursor:copy}.qrcode-tooltip:hover .qrcode-tooltip-temp:active{color:#afafaf}.qrcode-tooltip .qrcode-tooltip-temp{bottom:0;left:50%;color:#fff;text-align:left;display:none;width:max-content;word-wrap:break-word;transform:translate(-50%);transform-style:preserve-3d;background-color:#000000d0;box-shadow:1px 1px 20px #000000e0}.qrcode-tooltip .qrcode-tooltip-temp svg{cursor:pointer}.qrcode-tooltip .qrcode-tooltip-temp svg rect{fill:none;stroke:#fff;stroke-linejoin:round;stroke-width:32px}.qrcode-tooltip .qrcode-tooltip-temp svg path{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px}.qrcode-tooltip .qrcode-tooltip-temp svg:active rect{stroke:#afafaf}.qrcode-tooltip .qrcode-tooltip-temp svg:active path{stroke:#afafaf}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScannerQrcodeComponent, [{
    type: Component,
    args: [{
      selector: "ngx-scanner-qrcode",
      template: `<div #resultsPanel class="origin-overlay"></div><canvas #canvas class="origin-canvas"></canvas><video #video playsinline class="origin-video"></video>`,
      host: {
        "class": "ngx-scanner-qrcode"
      },
      exportAs: "scanner",
      inputs: ["src", "fps", "vibrate", "decode", "isBeep", "config", "constraints", "canvasStyles"],
      outputs: ["event"],
      queries: {
        video: new ViewChild("video"),
        canvas: new ViewChild("canvas"),
        resultsPanel: new ViewChild("resultsPanel")
      },
      encapsulation: ViewEncapsulation$1.None,
      styles: [".ngx-scanner-qrcode{display:block;position:relative}.origin-overlay{width:100%;position:absolute}.origin-overlay span{z-index:2;text-align:left;position:absolute}.origin-overlay .qrcode-polygon{z-index:1;position:absolute}.origin-canvas{width:100%;position:absolute}.origin-video{width:100%;background-color:#262626}.qrcode-tooltip{z-index:3;position:absolute}.qrcode-tooltip:hover .qrcode-tooltip-temp{display:block;position:absolute;cursor:copy}.qrcode-tooltip:hover .qrcode-tooltip-temp:active{color:#afafaf}.qrcode-tooltip .qrcode-tooltip-temp{bottom:0;left:50%;color:#fff;text-align:left;display:none;width:max-content;word-wrap:break-word;transform:translate(-50%);transform-style:preserve-3d;background-color:#000000d0;box-shadow:1px 1px 20px #000000e0}.qrcode-tooltip .qrcode-tooltip-temp svg{cursor:pointer}.qrcode-tooltip .qrcode-tooltip-temp svg rect{fill:none;stroke:#fff;stroke-linejoin:round;stroke-width:32px}.qrcode-tooltip .qrcode-tooltip-temp svg path{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px}.qrcode-tooltip .qrcode-tooltip-temp svg:active rect{stroke:#afafaf}.qrcode-tooltip .qrcode-tooltip-temp svg:active path{stroke:#afafaf}\n"]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, null);
})();
var ScannerQRCodeSymbolType;
(function(ScannerQRCodeSymbolType2) {
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_NONE"] = 0] = "ScannerQRCode_NONE";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_PARTIAL"] = 1] = "ScannerQRCode_PARTIAL";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_EAN2"] = 2] = "ScannerQRCode_EAN2";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_EAN5"] = 5] = "ScannerQRCode_EAN5";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_EAN8"] = 8] = "ScannerQRCode_EAN8";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_UPCE"] = 9] = "ScannerQRCode_UPCE";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_ISBN10"] = 10] = "ScannerQRCode_ISBN10";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_UPCA"] = 12] = "ScannerQRCode_UPCA";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_EAN13"] = 13] = "ScannerQRCode_EAN13";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_ISBN13"] = 14] = "ScannerQRCode_ISBN13";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_COMPOSITE"] = 15] = "ScannerQRCode_COMPOSITE";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_I25"] = 25] = "ScannerQRCode_I25";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_DATABAR"] = 34] = "ScannerQRCode_DATABAR";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_DATABAR_EXP"] = 35] = "ScannerQRCode_DATABAR_EXP";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_CODABAR"] = 38] = "ScannerQRCode_CODABAR";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_CODE39"] = 39] = "ScannerQRCode_CODE39";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_PDF417"] = 57] = "ScannerQRCode_PDF417";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_QRCODE"] = 64] = "ScannerQRCode_QRCODE";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_SQCODE"] = 80] = "ScannerQRCode_SQCODE";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_CODE93"] = 93] = "ScannerQRCode_CODE93";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_CODE128"] = 128] = "ScannerQRCode_CODE128";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_SYMBOL"] = 255] = "ScannerQRCode_SYMBOL";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_ADDON2"] = 512] = "ScannerQRCode_ADDON2";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_ADDON5"] = 1280] = "ScannerQRCode_ADDON5";
  ScannerQRCodeSymbolType2[ScannerQRCodeSymbolType2["ScannerQRCode_ADDON"] = 1792] = "ScannerQRCode_ADDON";
})(ScannerQRCodeSymbolType || (ScannerQRCodeSymbolType = {}));
var ScannerQRCodeConfigType;
(function(ScannerQRCodeConfigType2) {
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_ENABLE"] = 0] = "ScannerQRCode_CFG_ENABLE";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_ADD_CHECK"] = 1] = "ScannerQRCode_CFG_ADD_CHECK";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_EMIT_CHECK"] = 2] = "ScannerQRCode_CFG_EMIT_CHECK";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_ASCII"] = 3] = "ScannerQRCode_CFG_ASCII";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_BINARY"] = 4] = "ScannerQRCode_CFG_BINARY";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_NUM"] = 5] = "ScannerQRCode_CFG_NUM";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_MIN_LEN"] = 32] = "ScannerQRCode_CFG_MIN_LEN";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_MAX_LEN"] = 33] = "ScannerQRCode_CFG_MAX_LEN";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_UNCERTAINTY"] = 64] = "ScannerQRCode_CFG_UNCERTAINTY";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_POSITION"] = 128] = "ScannerQRCode_CFG_POSITION";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_TEST_INVERTED"] = 129] = "ScannerQRCode_CFG_TEST_INVERTED";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_X_DENSITY"] = 256] = "ScannerQRCode_CFG_X_DENSITY";
  ScannerQRCodeConfigType2[ScannerQRCodeConfigType2["ScannerQRCode_CFG_Y_DENSITY"] = 257] = "ScannerQRCode_CFG_Y_DENSITY";
})(ScannerQRCodeConfigType || (ScannerQRCodeConfigType = {}));
var ScannerQRCodeOrientation;
(function(ScannerQRCodeOrientation2) {
  ScannerQRCodeOrientation2[ScannerQRCodeOrientation2["ScannerQRCode_ORIENT_UNKNOWN"] = -1] = "ScannerQRCode_ORIENT_UNKNOWN";
  ScannerQRCodeOrientation2[ScannerQRCodeOrientation2["ScannerQRCode_ORIENT_UP"] = 0] = "ScannerQRCode_ORIENT_UP";
  ScannerQRCodeOrientation2[ScannerQRCodeOrientation2["ScannerQRCode_ORIENT_RIGHT"] = 1] = "ScannerQRCode_ORIENT_RIGHT";
  ScannerQRCodeOrientation2[ScannerQRCodeOrientation2["ScannerQRCode_ORIENT_DOWN"] = 2] = "ScannerQRCode_ORIENT_DOWN";
  ScannerQRCodeOrientation2[ScannerQRCodeOrientation2["ScannerQRCode_ORIENT_LEFT"] = 3] = "ScannerQRCode_ORIENT_LEFT";
})(ScannerQRCodeOrientation || (ScannerQRCodeOrientation = {}));
var ScannerQRCodeTypePointer = class {
  constructor(ptr, buf) {
    this.ptr = ptr;
    this.ptr32 = ptr >> 2;
    this.buf = buf;
    this.HEAP8 = new Int8Array(buf);
    this.HEAPU32 = new Uint32Array(buf);
    this.HEAP32 = new Int32Array(buf);
  }
};
var ScannerQRCodeSymbolPtr = class _ScannerQRCodeSymbolPtr extends ScannerQRCodeTypePointer {
  get type() {
    return this.HEAPU32[this.ptr32];
  }
  get data() {
    const len = this.HEAPU32[this.ptr32 + 4];
    const ptr = this.HEAPU32[this.ptr32 + 5];
    return Int8Array.from(this.HEAP8.subarray(ptr, ptr + len));
  }
  get points() {
    const len = this.HEAPU32[this.ptr32 + 7];
    const ptr = this.HEAPU32[this.ptr32 + 8];
    const ptr32 = ptr >> 2;
    const res = [];
    for (let i = 0; i < len; ++i) {
      const x = this.HEAP32[ptr32 + i * 2];
      const y = this.HEAP32[ptr32 + i * 2 + 1];
      res.push({
        x,
        y
      });
    }
    return res;
  }
  get orientation() {
    return this.HEAP32[this.ptr32 + 9];
  }
  get next() {
    const ptr = this.HEAPU32[this.ptr32 + 11];
    if (!ptr) return null;
    return new _ScannerQRCodeSymbolPtr(ptr, this.buf);
  }
  get time() {
    return this.HEAPU32[this.ptr32 + 13];
  }
  get cacheCount() {
    return this.HEAP32[this.ptr32 + 14];
  }
  get quality() {
    return this.HEAP32[this.ptr32 + 15];
  }
};
var SymbolSetPtr = class extends ScannerQRCodeTypePointer {
  get head() {
    const ptr = this.HEAPU32[this.ptr32 + 2];
    if (!ptr) return null;
    return new ScannerQRCodeSymbolPtr(ptr, this.buf);
  }
};
var ScannerQRCodeResult = class _ScannerQRCodeResult {
  constructor(ptr) {
    this.value = "";
    this.type = ptr.type;
    this.typeName = ScannerQRCodeSymbolType[this.type];
    this.data = ptr.data;
    this.points = ptr.points;
    this.orientation = ptr.orientation;
    this.time = ptr.time;
    this.cacheCount = ptr.cacheCount;
    this.quality = ptr.quality;
  }
  static createSymbolsFromPtr(ptr, buf) {
    if (ptr == 0) return [];
    const set = new SymbolSetPtr(ptr, buf);
    let symbol = set.head;
    const res = [];
    while (symbol !== null) {
      res.push(new _ScannerQRCodeResult(symbol));
      symbol = symbol.next;
    }
    return res;
  }
  decode(encoding) {
    const decoder = new TextDecoder(encoding);
    return decoder.decode(this.data);
  }
};
var NgxScannerQrcodeModule = class _NgxScannerQrcodeModule {
  static {
    this.ɵfac = function NgxScannerQrcodeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScannerQrcodeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgxScannerQrcodeModule,
      declarations: [NgxScannerQrcodeComponent],
      exports: [NgxScannerQrcodeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [NgxScannerQrcodeService]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScannerQrcodeModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxScannerQrcodeComponent],
      exports: [NgxScannerQrcodeComponent],
      providers: [NgxScannerQrcodeService]
    }]
  }], null, null);
})();
export {
  LOAD_WASM,
  NgxScannerQrcodeComponent,
  NgxScannerQrcodeModule,
  NgxScannerQrcodeService,
  ScannerQRCodeConfigType,
  ScannerQRCodeOrientation,
  ScannerQRCodeResult,
  ScannerQRCodeSymbolType
};
//# sourceMappingURL=ngx-scanner-qrcode.js.map
