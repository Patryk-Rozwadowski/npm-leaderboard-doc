// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/leaderboard-table/dist/leaderboard.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Leaderboard",[],t):"object"==typeof exports?exports.Leaderboard=t():e.Leaderboard=t()}(this,(function(){return(()=>{"use strict";var e={334:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"dist/leaderboard.min.css"},194:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(931),n=o(576);class s extends r.default{constructor(e,t,o){super(),this._root=e,this._lbData=t,this._logger=o}execute(){this._isRootContainerValid(),this._isDataStructureValid()}_isRootContainerValid(){var e,t;null===(e=this._logger)||void 0===e||e.log("User's input validation.");const o=void 0===this._root,r=!(this._root instanceof HTMLElement);if(o||r)throw new Error(`${n.ErrorMessage.ROOT_CONTAINER_NOT_FOUND} ${typeof this._root}.`);return null===(t=this._logger)||void 0===t||t.log("Root element is valid."),!0}_isDataStructureValid(){var e;return!(!Array.isArray(this._lbData)||!this._lbData)||(null===(e=this._logger)||void 0===e||e.error("Data is not defined. Pass leaderboard information."),!1)}}t.default=s},916:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{setState(e){return this._isOn=e,this}setContext(e){this._isOn&&(this._context=e,this._contextName=this._context.constructor.name)}log(e){this._isOn&&console.log(`${this._contextName}: ${e}`)}group(e){this._isOn&&console.group(e)}groupEnd(){this._isOn&&console.groupEnd()}warning(e){this._isOn&&console.warn(e)}error(e){this._isOn&&console.trace(e)}}},830:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.lbLogger=void 0;const r=new(o(916).default);t.lbLogger=r},576:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,function(e){e.ROOT_CONTAINER_NOT_FOUND="Expected root element to be an HTMLElement, was"}(o||(o={})),t.ErrorMessage=o},604:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(830),n=o(412),s={CONTENT_FOR_EMPTY_CELLS:"",LOGS:!1,SORT_BY_PLACES:!1,SORT_BY_POINTS:!1,headerPrimaryTag:n.SEMANTIC_TYPOGRAPHY_TAGS.HEADER_PRIMARY_TEXT,headerSubTag:n.SEMANTIC_TYPOGRAPHY_TAGS.SUB_HEADER_TEXT,textPrimaryTag:n.SEMANTIC_TYPOGRAPHY_TAGS.PRIMARY_TEXT,textSecondaryTag:n.SEMANTIC_TYPOGRAPHY_TAGS.SECONDARY_TEXT};t.default=class{constructor(){this._options={contentForEmptyCells:s.CONTENT_FOR_EMPTY_CELLS,sortByPlaces:s.SORT_BY_PLACES,sortByPoints:s.SORT_BY_POINTS,logs:s.LOGS,headerPrimaryTag:s.headerPrimaryTag,headerSubTag:s.headerSubTag,textPrimaryTag:s.textPrimaryTag,textSecondaryTag:s.textSecondaryTag},this._logger=r.lbLogger}setOptions(e,t){if(t){t.sortByPlaces&&this._setSortableOptions(e);for(const[e,o]of Object.entries(t)){if(!o)return void this._setOption(e,this._options[e]);this._setOption(e,o)}this._options.logs&&this._logOptions()}}getOptions(){return this._options}_setOption(e,t){this._options[e]=t}_setSortableOptions(e){e.every((e=>!!e.place))?this._setOption("sortByPlace",!0):this._logger.warning("Place properties have not been found!")}_logOption(e){console.log("Option: "+e.join(" : "))}_logOptions(){Object.entries(this._options).map(this._logOption)}}},827:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.lbOptions=void 0;const r=new(o(604).default);t.lbOptions=r},434:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.SEMANTIC_CONTAINER_TAGS=void 0,function(e){e.LEADERBOARD_ROOT="main",e.CONTAINER_PRIMARY="div"}(o||(o={})),t.SEMANTIC_CONTAINER_TAGS=o},412:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.SEMANTIC_TYPOGRAPHY_TAGS=void 0,function(e){e.HEADER_PRIMARY_TEXT="h3",e.SUB_HEADER_TEXT="h5",e.PRIMARY_TEXT="p",e.SECONDARY_TEXT="p"}(o||(o={})),t.SEMANTIC_TYPOGRAPHY_TAGS=o},586:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.CONTAINER_STYLE_CLASS=void 0,function(e){e.ROOT_CONTAINER="lb",e.COLUMN_CONTAINER="lb_col",e.HEADERS_CONTAINER="lb_headers_container",e.CELL_CONTAINER="lb_cell_container",e.CELL="lb_cell"}(o||(o={})),t.CONTAINER_STYLE_CLASS=o},87:(e,t)=>{var o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_STYLE_CLASS=t.HEADER_STYLE_CLASS=t.TYPOGRAPHY_STYLE_CLASS=void 0,function(e){e.HEADER_PRIMARY="lb_header_text_primary",e.SUB_HEADER="lb_header_text_secondary"}(o||(o={})),t.HEADER_STYLE_CLASS=o,function(e){e.TEXT_PRIMARY="lb_text_primary",e.TEXT_SECONDARY="lb_text_secondary"}(r||(r={})),t.TEXT_STYLE_CLASS=r,t.TYPOGRAPHY_STYLE_CLASS=Object.assign(Object.assign({},o),r)},728:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this._DOMController=e}appendStyles(e){this._DOMController.appendStyles(e)}}},304:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{get getElement(){return this._element}setElementToProcess(e){this._element=e}createDOMElementWithTag(e){return this._element=document.createElement(e),this._element}appendChildrenToContainer(e,...t){return t.forEach((e=>{Array.isArray(e)?e.forEach((e=>this._element.appendChild(e))):this._element.appendChild(e)})),this._element}static appendChildrenToContainer(e,...t){t.forEach((t=>{Array.isArray(t)?t.forEach((t=>e.appendChild(t))):e.appendChild(t)}))}appendStyles(...e){return e.forEach((e=>this._element.classList.add(e))),this._element}}},31:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(304);t.default=class{constructor(){this._DOMController=new r.default}appendHeaderAndCellToColumnContainer(e){const{container:t,cells:o,header:r}=e,n=t,s=o;return this._DOMController.setElementToProcess(n),this._DOMController.appendChildrenToContainer(n,r,s),n}}},503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static getColumnByQuery({columns:e,columnsToCheck:t,query:o}){return e.filter((e=>o(t,e)))}}},387:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(914),n=o(304),s=o(586),a=o(434);t.default=class{constructor(e,t){this._rootContainer=e,this._cellData=t,this._elementCreator=new r.default,this._DOMController=new n.default}create(){return this._cellContainer=this._createCellContainer(),this._createCell(),this._cellContainer}_createCellContainer(){return this._elementCreator.createContainer(a.SEMANTIC_CONTAINER_TAGS.CONTAINER_PRIMARY,s.CONTAINER_STYLE_CLASS.CELL_CONTAINER)}_createCell(){const e=this._createCellContentContainer(),t=this._cellContentText();n.default.appendChildrenToContainer(e,t),this._cellContainer.appendChild(e)}_cellContentText(){return this._elementCreator.createTextPrimary(this._cellData.toString())}_createCellContentContainer(){return this._elementCreator.createContainer(a.SEMANTIC_CONTAINER_TAGS.CONTAINER_PRIMARY,s.CONTAINER_STYLE_CLASS.CELL)}}},47:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(387),n=o(914),s=o(304),a=o(31),l=o(586),i=o(434);t.default=class{constructor(e,t){this._root=e,this._columnData=t,this.DOMController=new s.default,this._elementCreator=new n.default,this._columnController=new a.default}create(){return this._generateColumn()}_generateColumnContainer(){return this._elementCreator.createContainer(i.SEMANTIC_CONTAINER_TAGS.CONTAINER_PRIMARY,l.CONTAINER_STYLE_CLASS.COLUMN_CONTAINER)}_instantiateCellComponent(e){return new r.default(this._root,e).create()}_generateCellElementsArray(e){return e.map((e=>this._instantiateCellComponent(e)))}_generateColumn(){const{header:e,cells:t}=this._columnData,o={container:this._generateColumnContainer(),header:this._elementCreator.createHeaderPrimary(e),cells:this._generateCellElementsArray(t)};return this._columnController.appendHeaderAndCellToColumnContainer(o)}}},35:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this._domController=e}createContainer(e,t){return this._domController.createDOMElementWithTag(e),this._domController.appendStyles(t)}}},879:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(914),n=o(47),s=o(830);t.default=class{constructor(e,t){this._lbData=t,this.root=e,this._elementCreator=new r.default,this._logger=s.lbLogger}render(){return this._prepareColumns()}_prepareColumns(){return this._generateColumnsElements(this._lbData)}_generateColumnsElements(e){return e.map((e=>this._generateColumn(e)))}_generateColumn(e){return new n.default(this.root,e).create()}}},914:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(18),n=o(304),s=o(35);t.default=class{constructor(){this.DOMController=new n.default,this.typographyFactory=new r.default(this.DOMController),this.containerFactory=new s.default(this.DOMController)}createContainer(e,t){return this.containerFactory.createContainer(e,t)}createTextPrimary(e){return this.typographyFactory.createTextPrimary(e)}createTextSecondary(e){return this.typographyFactory.createTextSecondary(e)}createHeaderPrimary(e){return this.typographyFactory.creatHeaderPrimary(e)}createHeaderSub(e){return this.typographyFactory.creatHeaderSub(e)}}},18:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(728),n=o(87),s=o(830),a=o(827);t.default=class{constructor(e){this._domController=e,this._componentStyleController=new r.default(this._domController),this._logger=s.lbLogger}createTextPrimary(e){const t=this._createTextDomElement(a.lbOptions.getOptions().textPrimaryTag),o=this._fillTextWithContent(t,e);return this._componentStyleController.appendStyles(n.TYPOGRAPHY_STYLE_CLASS.TEXT_PRIMARY),o}createTextSecondary(e){const t=this._createTextDomElement(a.lbOptions.getOptions().textSecondaryTag),o=this._fillTextWithContent(t,e);return this._componentStyleController.appendStyles(n.TYPOGRAPHY_STYLE_CLASS.TEXT_SECONDARY),o}creatHeaderPrimary(e){const t=this._createTextDomElement(a.lbOptions.getOptions().headerPrimaryTag),o=this._fillTextWithContent(t,e);return this._componentStyleController.appendStyles(n.TYPOGRAPHY_STYLE_CLASS.HEADER_PRIMARY),o}creatHeaderSub(e){const t=this._createTextDomElement(a.lbOptions.getOptions().headerSubTag),o=this._fillTextWithContent(t,e);return this._componentStyleController.appendStyles(n.TYPOGRAPHY_STYLE_CLASS.SUB_HEADER),o}_createTextDomElement(e){return this._domController.createDOMElementWithTag(e)}_fillTextWithContent(e,t){const o=e;return o.textContent=`${t}`,o}}},39:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(494),n=o(142),s=o(32);o(334);const a=o(586),l=o(830),i=o(827),_=o(194);t.default=class{constructor(e,t,o=i.lbOptions.getOptions()){this._rootContainer=e,this._leaderboardData=t,i.lbOptions.setOptions(t,o),this._logger=i.lbOptions.getOptions().logs?l.lbLogger.setState(!0):l.lbLogger.setState(!1)}init(){this._verifyInputs(),this._addCssStylesToRootContainer(),this._parseData(),this._mountElements()}_addCssStylesToRootContainer(){const e=document.createElement("div");this._rootContainer.appendChild(e),e.classList.add(a.CONTAINER_STYLE_CLASS.ROOT_CONTAINER),this._rootContainer=e}_verifyInputs(){const e=new _.default(this._rootContainer,this._leaderboardData,this._logger);this._phasesContext=new s.default(e,this._logger),this._phasesContext.execute()}_parseData(){const e=new n.default(this._rootContainer,this._leaderboardData);this._phasesContext=new s.default(e,this._logger),this._phasesContext.transitionTo(e),this._parsedData=this._phasesContext.execute()}_mountElements(){const e=new r.default(this._rootContainer,this._parsedData);this._phasesContext.transitionTo(e),this._phasesContext.execute()}}},931:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{setContext(e){this.context=e}}},32:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(931);class n extends r.default{constructor(e,t){super(),this._logger=t,this.transitionTo(e)}transitionTo(e){var t,o,r,n;null===(t=this._logger)||void 0===t||t.groupEnd();const s=e.constructor.name;this._state=e,this._state.setContext(this),null===(o=this._logger)||void 0===o||o.setContext(this._state),null===(r=this._logger)||void 0===r||r.group(this._state.constructor.name),null===(n=this._logger)||void 0===n||n.log(`Transition to ${s}`)}execute(){return this._state.execute()}}t.default=n},494:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(931),n=o(879),s=o(830);class a extends r.default{constructor(e,t){super(),this._rootContainer=e,this._columnsData=t,this._columnsToCreate=[],this._logger=s.lbLogger,this._allColumns=new n.default(this._rootContainer,this._columnsData)}execute(){this._createAndMountAllColumns(),this._mountAllElementsToRoot()}_mountAllElementsToRoot(){var e;this._columnsToCreate.forEach((e=>this._mountComponentToRoot(e))),null===(e=this._logger)||void 0===e||e.log(`${this._columnsToCreate.length} columns mounted.`)}_mountComponentToRoot(e){this._rootContainer.appendChild(e)}_createAndMountAllColumns(){const e=this._allColumns.render();this._addComponentsToMountQueue(e)}_addComponentsToMountQueue(e){e.forEach((e=>this._addComponentToMountQueue(e)))}_addComponentToMountQueue(e){var t;this._columnsToCreate.push(e),null===(t=this._logger)||void 0===t||t.log(`Add ${e.nodeName} to mount queue.`)}}t.default=a},142:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(931),n=o(874),s=o(79),a=o(830),l=o(827);class i extends r.default{constructor(e,t){super(),this._rootContainer=e,this._lbData=t,this._logger=a.lbLogger}execute(){return this._sort(),this._getParsedData()}_getParsedData(){return this._parseData()}_parseData(){var e;return null===(e=this._logger)||void 0===e||e.log("Started parsing data."),this._lbData.reduce(((e,t,o)=>{var r;const n=Object.keys(t),s={clientHeaders:n,columnsAccumulator:e,currentColumn:t,iteration:o};this._parseClientColumns(s);const a={allColumns:e,columnsToCheck:n,indexForEmptyArray:o};return this._fillMissingCellsWithIndex(a),null===(r=this._logger)||void 0===r||r.groupEnd(),e}),[])}_parseClientColumns(e){const{clientHeaders:t,columnsAccumulator:o,currentColumn:r,iteration:n}=e;t.forEach((e=>{const t=-1!==o.findIndex((t=>t.header===e)),s=r[e],a={columnsAccumulator:o,header:e,singleCellValuesForHeader:s};t?this._appendNewCellToExistingHeader(a):this._appendNewHeaderAndCellToAcc(a,n)}))}_sort(){l.lbOptions.getOptions().sortByPlaces&&(this._sorter=new n.default(this._lbData,this._logger),this._lbData=this._sorter.ascendant())}_appendNewCellToExistingHeader(e){const{columnsAccumulator:t,header:o,singleCellValuesForHeader:r}=e,n=t.findIndex((e=>e.header===o));t[n].cells.push(r)}_fillMissingCellsWithIndex(e){const{allColumns:t,indexForEmptyArray:o,columnsToCheck:r}=e,n={columns:s.default.columnsNotInCurrentIteration(t,r),index:o,content:l.lbOptions.getOptions().contentForEmptyCells};this._insertColumnsWithMissingCells(n)}_insertColumnsWithMissingCells(e){const{columns:t,index:o,content:r}=e;t.forEach((e=>e.cells.splice(o,0,r)))}_appendNewHeaderAndCellToAcc({columnsAccumulator:e,header:t,singleCellValuesForHeader:o},r){const n={header:t,cells:[]};this._addEmptyCells(n,r),s.default.insertValuesToColumnCells(n,o),e.push(n)}_addEmptyCells(e,t){const o=s.default.createNOfEmptyArrays(t),r=this._insertContentIntoCells(o);e.cells.push(...r)}_insertContentIntoCells(e){return e.map((()=>l.lbOptions.getOptions().contentForEmptyCells))}}t.default=i},79:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(503);class n{static extractHeadersFromAcc(e){return e.map((({header:e})=>e))}static createNOfEmptyArrays(e){return Array.apply(null,Array(e))}static columnsNotIncludesHeader(e,t){const{header:o}=t;return!e.includes(o)}static insertValuesToColumnCells(e,t){e.cells.push(t)}static columnsNotInCurrentIteration(e,t){return r.default.getColumnByQuery({columns:e,columnsToCheck:t,query:n.columnsNotIncludesHeader})}static findElementWithMostKeys(e){const t=e.map((e=>Object.keys(e).length));return e[t.indexOf(Math.max(...t))]}}t.default=n},874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(e,t){this.dataToSort=e,this._logger=t}ascendant(){var e;return null===(e=this._logger)||void 0===e||e.log("Sorting ascendant places."),o.sortByPlacesAsc(this.dataToSort)}static sortByPlacesAsc(e){return e.map((e=>Object.assign({},e))).sort(((e,t)=>e.place-t.place))}}t.default=o}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})();var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.Leaderboard=void 0;const t=o(39);e.Leaderboard=t.default})(),r})()}));
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/leaderboard-table/dist/leaderboard.min.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/scripts/leaderboardExamples/example_basic.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _leaderboardTable = require("leaderboard-table");

require("leaderboard-table/dist/leaderboard.min.css");

var lbRootExampleBasic = document.querySelector(".lb_root_example_basic");
var dataColumns = [{
  name: "Peter",
  score: 20
}, {
  name: "Bob",
  score: 50
}];

if (!lbRootExampleBasic) {
  console.log(lbRootExampleBasic.name + "Not found");
}

var lb = new _leaderboardTable.Leaderboard(lbRootExampleBasic, dataColumns);
var _default = lb;
exports.default = _default;
},{"leaderboard-table":"node_modules/leaderboard-table/dist/leaderboard.min.js","leaderboard-table/dist/leaderboard.min.css":"node_modules/leaderboard-table/dist/leaderboard.min.css"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _example_basic = _interopRequireDefault(require("./scripts/leaderboardExamples/example_basic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packageVersionElement = document.getElementById("package-version"); // packageVersionElement.textContent = packageVersion;

var copyNpm = {
  text: document.getElementById("npm-install"),
  button: document.getElementById("copy-npm")
};
var copyYarn = {
  text: document.getElementById("yarn-install"),
  button: document.getElementById("copy-yarn")
};
var copyCdnJs = {
  text: document.getElementById("cdn-install-js"),
  button: document.getElementById("copy-cdn-js")
};
var copyCdnCss = {
  text: document.getElementById("cdn-install-css"),
  button: document.getElementById("copy-cdn-css")
};
var installationCopy = [copyNpm, copyYarn, copyCdnJs, copyCdnCss];
installationCopy.forEach(function (copyElement) {
  return copyElement.button.addEventListener("click", function () {
    window.navigator.clipboard.writeText(copyElement.text.textContent);
  });
});

_example_basic.default.init();
},{"./scripts/leaderboardExamples/example_basic":"src/scripts/leaderboardExamples/example_basic.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62607" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map