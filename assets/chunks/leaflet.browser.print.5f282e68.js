/*!
 * 
 *  leaflet.browser.print - v2.0.2 (https://github.com/Igor-Vladyka/leaflet.browser.print) 
 *  A leaflet plugin which allows users to print the map directly from the browser
 *  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2022  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
 * 
 */(function(){(function(o){var i={};function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return o[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=i,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(r&1&&(t=n(t)),r&8||r&4&&typeof t=="object"&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),r&2&&typeof t!="string")for(var a in t)n.d(e,a,function(s){return t[s]}.bind(null,a));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)})({"./src/leaflet.browser.print.control.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
L.Control.BrowserPrint = L.Control.extend({\r
	options: {\r
		title: 'Print map',\r
		position: 'topleft',\r
		printModes: ["Portrait", "Landscape", "Auto", "Custom"],\r
	},\r
	browserPrint: undefined,\r
	initialize: function(options,browserPrint){\r
		L.setOptions(this,options);\r
		if(browserPrint) {\r
			this.browserPrint = browserPrint;\r
			L.setOptions(this.browserPrint, options);\r
		}\r
	},\r
	onAdd: function (map) {\r
		if(!this.browserPrint){\r
			this.browserPrint = new L.BrowserPrint(map,this.options);\r
		}\r
\r
		var container = L.DomUtil.create('div', 'leaflet-control-browser-print leaflet-bar leaflet-control');\r
		L.DomEvent.disableClickPropagation(container);\r
\r
\r
		if (this.options.printModes.length > 1) {\r
			L.DomEvent.on(container, 'mouseover', this._displayPageSizeButtons, this);\r
			L.DomEvent.on(container, 'mouseout', this._hidePageSizeButtons, this);\r
		} else {\r
			container.style.cursor = "pointer";\r
		}\r
\r
		if (this.options.position.indexOf("left") > 0) {\r
			this._createIcon(container);\r
			this._createMenu(container);\r
		} else {\r
			this._createMenu(container);\r
			this._createIcon(container);\r
		}\r
\r
		map.printControl = this; // Make control available from the map object itself;\r
		return container;\r
	},\r
	\r
	cancel: function () {\r
		this.browserPrint.cancel();\r
	},\r
\r
	_createIcon: function (container) {\r
		this.__link__ = L.DomUtil.create('a', '', container);\r
		this.__link__.className = "leaflet-browser-print";\r
		if (this.options.title) {\r
			this.__link__.title = this.options.title;\r
		}\r
		return this.__link__;\r
	},\r
\r
	_createMenu: function (container) {\r
		var domPrintModes = [];\r
\r
		for (var i = 0; i < this.options.printModes.length; i++) {\r
			var mode = this.options.printModes[i];\r
\r
			/*\r
				Mode:\r
					Mode: Portrait/Landscape/Auto/Custom\r
					Title: 'Portrait'/'Landscape'/'Auto'/'Custom'\r
					PageSize: 'A3'/'A4'\r
					Action: '_printPortrait'/...\r
					InvalidateBounds: true/false\r
			*/\r
			if (mode.length) {\r
				var key = mode[0].toUpperCase() + mode.substring(1).toLowerCase();\r
\r
				mode = L.BrowserPrint.Mode[mode]('A4',this._getDefaultTitle(key));\r
\r
			} else if (mode instanceof L.BrowserPrint.Mode) {\r
				// Looks like everythin is fine.\r
			} else {\r
				throw "Invalid Print Mode. Can't construct logic to print current map."\r
			}\r
\r
			var clickContainer = container;\r
			if (this.options.printModes.length === 1) {\r
				mode.Element = container;\r
			} else {\r
				clickContainer = L.DomUtil.create('ul', 'browser-print-holder', container);\r
				mode.Element = L.DomUtil.create('li', 'browser-print-mode', clickContainer);\r
				mode.Element.innerHTML = mode.options.title;\r
			}\r
\r
			L.DomEvent.on(clickContainer, 'click', mode.options.action(this.browserPrint, mode), this.browserPrint);\r
\r
			domPrintModes.push(mode);\r
		}\r
\r
		this.options.printModes = domPrintModes;\r
	},\r
\r
	_getDefaultTitle: function(key) {\r
		return this.options.printModesNames && this.options.printModesNames[key] || key;\r
	},\r
\r
    _displayPageSizeButtons: function() {\r
		if (this.options.position.indexOf("left") > 0) {\r
	        this.__link__.style.borderTopRightRadius = "0px";\r
	    	this.__link__.style.borderBottomRightRadius = "0px";\r
		} else {\r
			this.__link__.style.borderTopLeftRadius = "0px";\r
	    	this.__link__.style.borderBottomLeftRadius = "0px";\r
		}\r
\r
		this.options.printModes.forEach(function(mode){\r
			mode.Element.style.display = "inline-block";\r
		});\r
    },\r
\r
    _hidePageSizeButtons: function () {\r
		if (this.options.position.indexOf("left") > 0) {\r
	    	this.__link__.style.borderTopRightRadius = "";\r
	    	this.__link__.style.borderBottomRightRadius = "";\r
		} else {\r
	    	this.__link__.style.borderTopLeftRadius = "";\r
	    	this.__link__.style.borderBottomLeftRadius = "";\r
		}\r
\r
		this.options.printModes.forEach(function(mode){\r
			mode.Element.style.display = "";\r
		});\r
    },\r
});\r
\r
\r
L.control.browserPrint = function(options, browserPrint) {\r
	if (!options || !options.printModes) {\r
		options = options || {};\r
		options.printModes = [\r
			L.BrowserPrint.Mode.Portrait(),\r
			L.BrowserPrint.Mode.Landscape(),\r
			L.BrowserPrint.Mode.Auto(),\r
			L.BrowserPrint.Mode.Custom()\r
		]\r
	}\r
\r
	if (options && options.printModes && (!options.printModes.filter || !options.printModes.length)) {\r
		throw "Please specify valid print modes for Print action. Example: printModes: [L.BrowserPrint.Mode.Portrait(), L.control.BrowserPrint.Mode.Auto('Automatic'), 'Custom']";\r
	}\r
\r
	return new L.Control.BrowserPrint(options,browserPrint);\r
};\r


//# sourceURL=webpack:///./src/leaflet.browser.print.control.js?`)},"./src/leaflet.browser.print.helpers.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
L.BrowserPrint.Helper = {\r
	getPageMargin: function (mode,type) {\r
		var margin = mode.options.margin;\r
		var size = this.getPaperSize(mode);\r
		var marginInMm = ((size.Width + size.Height) / 39.9);\r
		if (!type && type !== 0) {\r
			type = "";\r
		}\r
\r
		if (margin >= 0) {\r
			margin = {\r
				top: margin,\r
				right: margin,\r
				bottom: margin,\r
				left: margin\r
			}\r
		} else if (!margin) {\r
			margin = {};\r
		}\r
\r
		var faktor = 1;\r
		if (type === "in") {\r
			faktor = 25.4;\r
		}\r
\r
		var topMargin = margin.top >= 0 ? margin.top : marginInMm;\r
		var rightMargin = margin.right >= 0 ? margin.right : marginInMm;\r
		var bottomMargin = margin.bottom >= 0 ? margin.bottom : marginInMm;\r
		var leftMargin = margin.left >= 0 ? margin.left : marginInMm;\r
\r
\r
		var top = (topMargin / faktor).toFixed(2) + type;\r
		var right = (rightMargin / faktor).toFixed(2) + type;\r
		var bottom = (bottomMargin / faktor).toFixed(2) + type;\r
		var left = (leftMargin / faktor).toFixed(2) + type;\r
\r
		return {\r
			top,\r
			right,\r
			bottom,\r
			left\r
		};\r
	},\r
	getPaperSize: function (mode) {\r
		if (mode.options.pageSeries) {\r
			var series = L.BrowserPrint.Size[mode.options.pageSeries];\r
			var w = series.Width;\r
			var h = series.Height;\r
			var switchSides = false;\r
			if (mode.options.pageSeriesSize && mode.options.pageSeriesSize !== '0') {\r
				mode.options.pageSeriesSize = +mode.options.pageSeriesSize;\r
				switchSides = mode.options.pageSeriesSize % 2 === 1;\r
				if (switchSides) {\r
					w = w / (mode.options.pageSeriesSize - 1 || 1);\r
					h = h / (mode.options.pageSeriesSize + 1);\r
				} else {\r
					w = w / mode.options.pageSeriesSize;\r
					h = h / mode.options.pageSeriesSize;\r
				}\r
			}\r
\r
			return {\r
				Width: switchSides ? h : w,\r
				Height: switchSides ? w : h\r
			};\r
		} else {\r
			var size = L.BrowserPrint.Size[mode.options.pageSeriesSize];\r
			return {\r
				Width: size.Width,\r
				Height: size.Height\r
			};\r
		}\r
	},\r
	getSize: function (mode, orientaion = 'Portrait') {\r
		var size = this.getPaperSize(mode);\r
		var pageMargin = this.getPageMargin(mode, 0);\r
\r
		var topbottom = orientaion === 'Portrait' ? parseFloat(pageMargin.top) + parseFloat(pageMargin.bottom) : parseFloat(pageMargin.left) + parseFloat(pageMargin.right);\r
		var leftright = orientaion === 'Portrait' ? parseFloat(pageMargin.left) + parseFloat(pageMargin.right) : parseFloat(pageMargin.top) + parseFloat(pageMargin.bottom);\r
\r
		var height = Math.floor(size.Height - topbottom);\r
		var width = Math.floor(size.Width - leftright);\r
\r
		size.Width = width * (window.devicePixelRatio || 1) + 'mm';\r
		size.Height = height * (window.devicePixelRatio || 1) + 'mm';\r
\r
		return size;\r
	}\r
};\r
\r


//# sourceURL=webpack:///./src/leaflet.browser.print.helpers.js?`)},"./src/leaflet.browser.print.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
L.BrowserPrint = L.Class.extend({\r
	options: {\r
		documentTitle: '',\r
		printLayer: null,\r
		closePopupsOnPrint: true,\r
		contentSelector: "[leaflet-browser-print-content]",\r
		pagesSelector: "[leaflet-browser-print-pages]",\r
		manualMode: false,\r
		customPrintStyle: { color: "gray", dashArray: '5, 10', pane: "customPrintPane" },\r
		cancelWithEsc: true,\r
		printFunction: window.print,\r
		debug: false\r
	},\r
	initialize: function(map, options){\r
		this._map = map;\r
		L.setOptions(this,options);\r
\r
		if (this.options.customPrintStyle.pane && !map.getPane(this.options.customPrintStyle.pane)) {\r
			map.createPane(this.options.customPrintStyle.pane).style.zIndex = 9999;\r
		}\r
\r
		if(!document.getElementById('browser-print-css')) {\r
			this._appendControlStyles(document.head);\r
		}\r
	},\r
	cancel: function(){\r
		this._printCancel();\r
	},\r
	print: function(pageMode) {\r
		pageMode.options.action(this, pageMode)(pageMode);\r
	},\r
\r
	_getMode: function(expectedOrientation, mode) {\r
		return new L.BrowserPrint.Mode(expectedOrientation, mode.options);\r
	},\r
\r
	_printLandscape: function (mode) {\r
		this._addPrintClassToContainer(this._map, "leaflet-browser-print--landscape");\r
		this._print(mode);\r
	},\r
\r
	_printPortrait: function (mode) {\r
		this._addPrintClassToContainer(this._map, "leaflet-browser-print--portrait");\r
		this._print(mode);\r
	},\r
\r
	_printAuto: function (mode) {\r
		this._addPrintClassToContainer(this._map, "leaflet-browser-print--auto");\r
\r
		var autoBounds = this._getBoundsForAllVisualLayers();\r
		var orientation;\r
		if(mode.options.orientation === "Portrait" || mode.options.orientation === "Landscape" ){\r
			orientation = mode.options.orientation;\r
		}else {\r
			orientation = this._getPageSizeFromBounds(autoBounds);\r
		}\r
		this._print(this._getMode(orientation, mode), autoBounds);\r
	},\r
\r
	_printCustom: function (mode, options) {\r
		this._addPrintClassToContainer(this._map, "leaflet-browser-print--custom");\r
		this.options.custom = { mode: mode, options: options};\r
		this._map.on('mousedown', this._startAutoPolygon, this);\r
	},\r
\r
	_addPrintClassToContainer: function (map, printClassName) {\r
		var container = map.getContainer();\r
\r
		if (container.className.indexOf(printClassName) === -1) {\r
			container.className += " " + printClassName;\r
		}\r
	},\r
\r
	_removePrintClassFromContainer: function (map, printClassName) {\r
		var container = map.getContainer();\r
\r
		if (container.className && container.className.indexOf(printClassName) > -1) {\r
			container.className = container.className.replace(" " + printClassName, "");\r
		}\r
	},\r
\r
	_startAutoPolygon: function (e) {\r
		L.DomEvent.stop(e);\r
\r
		this._map.dragging.disable();\r
\r
		this.options.custom.start = e.latlng;\r
\r
		this._map.getPane(this.options.customPrintStyle.pane).style.display = "initial";\r
\r
		this._map.off('mousedown', this._startAutoPolygon, this);\r
		this._map.on('mousemove', this._moveAutoPolygon, this);\r
		this._map.on('mouseup', this._endAutoPolygon, this);\r
	},\r
\r
	_moveAutoPolygon: function (e) {\r
		if (this.options.custom) {\r
			L.DomEvent.stop(e);\r
			if (this.options.custom.rectangle) {\r
				this.options.custom.rectangle.setBounds(L.latLngBounds(this.options.custom.start, e.latlng));\r
			} else {\r
				this.options.custom.rectangle = L.rectangle([this.options.custom.start, e.latlng], this.options.customPrintStyle);\r
			}\r
			this.options.custom.rectangle.addTo(this._map);\r
		}\r
	},\r
\r
	_endAutoPolygon: function (e) {\r
		L.DomEvent.stop(e);\r
		this._removeAutoPolygon();\r
\r
		if (this.options.custom && this.options.custom.rectangle) {\r
			var autoBounds = this.options.custom.rectangle.getBounds();\r
\r
			this._map.removeLayer(this.options.custom.rectangle);\r
\r
			var orientation;\r
			if(this.options.custom.mode.options.orientation === "Portrait" || this.options.custom.mode.options.orientation === "Landscape" ){\r
				orientation = this.options.custom.mode.options.orientation;\r
			}else {\r
				orientation = this._getPageSizeFromBounds(autoBounds);\r
			}\r
			this._print(this._getMode(orientation, this.options.custom.mode), autoBounds);\r
\r
			delete this.options.custom;\r
		} else {\r
			this._clearPrint();\r
		}\r
	},\r
	_removeAutoPolygon: function(){\r
\r
		this._map.off('mousedown', this._startAutoPolygon, this);\r
		this._map.off('mousemove', this._moveAutoPolygon, this);\r
		this._map.off('mouseup', this._endAutoPolygon, this);\r
\r
		this._map.dragging.enable();\r
\r
		// we hide the pane because it destorys sometimes interactions with layers if printing is finished\r
		this._map.getPane(this.options.customPrintStyle.pane).style.display = "none";\r
	},\r
\r
	_getPageSizeFromBounds: function(bounds) {\r
		var height = Math.abs(bounds.getNorth() - bounds.getSouth());\r
		var width = Math.abs(bounds.getEast() - bounds.getWest());\r
		if (height > width) {\r
			return "Portrait";\r
		} else {\r
			return "Landscape";\r
		}\r
	},\r
\r
	_setupPrintPagesWidth: function(pagesContainer, size, pageOrientation) {\r
		pagesContainer.style.width = pageOrientation === "Landscape" ? size.Height : size.Width;\r
	},\r
\r
	_setupPrintMapHeight: function(mapContainer, size, pageOrientation, options) {\r
		var header = options.header && options.header.enabled && options.header.size && !options.header.overTheMap ? options.header.size+" - 1mm" : "0mm";\r
		var footer = options.footer && options.footer.enabled && options.footer.size && !options.footer.overTheMap ? options.footer.size+" - 1mm" : "0mm";\r
\r
		mapContainer.style.height =  "calc("+(pageOrientation === "Landscape" ? size.Width : size.Height) + " - "+header+" - " +footer+ ")";\r
	},\r
\r
	_printCancel: function() {\r
		clearInterval(self.printInterval);\r
		L.DomEvent.off(document,'keyup',this._keyUpCancel,this);\r
		var activeMode = this.activeMode;\r
		delete this.options.custom;\r
		this._removeAutoPolygon();\r
		this.activeMode = null;\r
		delete this.cancelNextPrinting;\r
		this._map.fire(L.BrowserPrint.Event.PrintCancel, { mode: activeMode });\r
		this._printEnd();\r
	},\r
\r
	_keyUpCancel: function(e){\r
		if(e.which === 27){ //ESC\r
			this.cancel();\r
		}\r
	},\r
\r
	_printMode: function(mode){\r
		if(this._map.isPrinting){\r
			console.error("printing is already active");\r
			return;\r
		}\r
		this._map.isPrinting = true;\r
		this.cancelNextPrinting = false;\r
		this.activeMode = mode;\r
		this['_print' + mode.mode](mode);\r
	},\r
\r
	_print: function (printMode, autoBounds) {\r
		this._map.fire(L.BrowserPrint.Event.PrintInit, { mode: printMode });\r
		if(this.options.cancelWithEsc) {\r
			L.DomEvent.on(document, 'keyup', this._keyUpCancel, this);\r
		}\r
		L.BrowserPrint.Utils.initialize();\r
\r
		var self = this;\r
		var mapContainer = this._map.getContainer();\r
		var options = printMode.options;\r
		var pageOrientation = options.orientation;\r
\r
		var origins = {\r
			bounds: autoBounds || this._map.getBounds(),\r
			width: mapContainer.style.width,\r
			height: mapContainer.style.height,\r
			documentTitle: document.title,\r
			printLayer: L.BrowserPrint.Utils.cloneLayer(this.options.printLayer),\r
			panes: []\r
		};\r
\r
		var mapPanes = this._map.getPanes();\r
		for (var pane in mapPanes) {\r
			origins.panes.push({name: pane, container: undefined});\r
		}\r
\r
		origins.printObjects = this._getPrintObjects(origins.printLayer);\r
\r
		this._map.fire(L.BrowserPrint.Event.PrePrint, { printLayer: origins.printLayer, printObjects: origins.printObjects, pageOrientation, printMode: options.mode, pageBounds: origins.bounds});\r
\r
		if (this.cancelNextPrinting) {\r
			this._printCancel();\r
			return;\r
		}\r
\r
		var overlay = this._addPrintMapOverlay(printMode, pageOrientation, origins);\r
\r
		if (this.options.documentTitle) {\r
			document.title = this.options.documentTitle;\r
		}\r
\r
		this._map.fire(L.BrowserPrint.Event.PrintStart, { printLayer: origins.printLayer, printMap: overlay.map, printObjects: overlay.objects });\r
\r
		if (options.invalidateBounds) {\r
			overlay.map.fitBounds(origins.bounds, overlay.map.options);\r
			overlay.map.invalidateSize({reset: true, animate: false, pan: false});\r
		} else {\r
			overlay.map.setView(this._map.getCenter(), this._map.getZoom());\r
		}\r
\r
		if(options.zoom){\r
			overlay.map.setZoom(options.zoom);\r
		}else if(!options.enableZoom){\r
			overlay.map.setZoom(this._map.getZoom());\r
		}\r
\r
		if(!this.options.debug) {\r
			this.printInterval = setInterval(function () {\r
				if (self.cancelNextPrinting || !self._map.isPrinting) {\r
					clearInterval(self.printInterval);\r
				} else if (self._map.isPrinting && !self._isTilesLoading(overlay.map)) {\r
					clearInterval(self.printInterval);\r
					if (self.options.manualMode) {\r
						self._setupManualPrintButton(overlay.map, origins, overlay.objects);\r
					} else {\r
						self._completePrinting(overlay.map, origins, overlay.objects);\r
					}\r
				}\r
			}, 50);\r
		}\r
	},\r
\r
	_completePrinting: function (overlayMap, origins, printObjects) {\r
		var self = this;\r
		setTimeout(function(){\r
			if(!self._map.isPrinting){\r
				return;\r
			}\r
			self._map.fire(L.BrowserPrint.Event.Print, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r
			var printFunction = self.options.printFunction || window.print;\r
			var printPromise = printFunction();\r
			if (printPromise) {\r
				Promise.all([printPromise]).then(function(){\r
					self._printEnd(overlayMap, origins);\r
					self._map.fire(L.BrowserPrint.Event.PrintEnd, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r
				})\r
			} else {\r
				self._printEnd(overlayMap, origins);\r
				self._map.fire(L.BrowserPrint.Event.PrintEnd, { printLayer: origins.printLayer, printMap: overlayMap, printObjects: printObjects });\r
			}\r
		}, 1000);\r
	},\r
\r
	_getBoundsForAllVisualLayers: function () {\r
		var fitBounds = null;\r
\r
		// Getting all layers without URL -> not tiles.\r
		for (var layerId in this._map._layers){\r
			var layer = this._map._layers[layerId];\r
			if (!layer._url && !layer._mutant) {\r
				if (fitBounds) {\r
					if (layer.getBounds) {\r
						fitBounds.extend(layer.getBounds());\r
					} else if(layer.getLatLng){\r
						fitBounds.extend(layer.getLatLng());\r
					}\r
				} else {\r
					if (layer.getBounds) {\r
						fitBounds = layer.getBounds();\r
					} else if(layer.getLatLng){\r
						fitBounds = L.latLngBounds(layer.getLatLng(), layer.getLatLng());\r
					}\r
				}\r
			}\r
		}\r
\r
		if (!fitBounds || !fitBounds._southWest) {\r
			fitBounds = this._map.getBounds();\r
		}\r
\r
		return fitBounds;\r
	},\r
\r
	_clearPrint: function () {\r
		this._removePrintClassFromContainer(this._map, "leaflet-browser-print--landscape");\r
		this._removePrintClassFromContainer(this._map, "leaflet-browser-print--portrait");\r
		this._removePrintClassFromContainer(this._map, "leaflet-browser-print--auto");\r
		this._removePrintClassFromContainer(this._map, "leaflet-browser-print--custom");\r
	},\r
\r
	_printEnd: function (overlayMap, origins) {\r
		this._clearPrint();\r
\r
		if (overlayMap) {\r
			overlayMap.remove();\r
			overlayMap = null;\r
		}\r
\r
		if (this.__overlay__) {\r
			document.body.removeChild(this.__overlay__);\r
			this.__overlay__ = null;\r
		}\r
\r
		document.body.className = document.body.className.replace(" leaflet--printing", "");\r
		if (this.options.documentTitle) {\r
			document.title = origins.documentTitle;\r
		}\r
\r
		this._map.invalidateSize({reset: true, animate: false, pan: false});\r
		this._map.isPrinting = false;\r
	},\r
\r
	_getPrintObjects: function(printLayer) {\r
		var printObjects = {};\r
		for (var id in this._map._layers){\r
			var layer = this._map._layers[id];\r
			if (!printLayer || !layer._url || layer instanceof L.TileLayer.WMS) {\r
				var type = L.BrowserPrint.Utils.getType(layer);\r
				if (type) {\r
					if (!printObjects[type]) {\r
						printObjects[type] = [];\r
					}\r
					printObjects[type].push(layer);\r
				}\r
			}\r
		}\r
\r
		return printObjects;\r
	},\r
\r
	_addPrintCss: function (pageSize, pageMargin, pageOrientation) {\r
\r
		var printStyleSheet = document.createElement('style');\r
		printStyleSheet.className = "leaflet-browser-print-css";\r
		printStyleSheet.setAttribute('type', 'text/css');\r
		printStyleSheet.innerHTML = ' @media print { .leaflet-popup-content-wrapper, .leaflet-popup-tip { box-shadow: none; }';\r
		printStyleSheet.innerHTML += ' .leaflet-browser-print--manualMode-button { display: none; }';\r
		printStyleSheet.innerHTML += ' * { -webkit-print-color-adjust: exact!important; printer-colors: exact!important; color-adjust: exact!important; }';\r
\r
		if (pageMargin) {\r
			var margin = pageMargin.top+" "+pageMargin.right+" "+pageMargin.bottom+" "+pageMargin.left;\r
			printStyleSheet.innerHTML += ' @page { margin: ' + margin + '; }';\r
		}\r
		printStyleSheet.innerHTML += ' @page :first { page-break-after: always; }';\r
\r
		switch (pageOrientation) {\r
			case "Landscape":\r
				printStyleSheet.innerText += " @page { size : " + pageSize + " landscape; }";\r
				break;\r
			default:\r
			case "Portrait":\r
				printStyleSheet.innerText += " @page { size : " + pageSize + " portrait; }";\r
				break;\r
		}\r
\r
		return printStyleSheet;\r
	},\r
\r
	_addPrintMapOverlay: function (printMode, pageOrientation, origins) {\r
		this.__overlay__ = document.createElement("div");\r
		this.__overlay__.className = this._map.getContainer().className + " leaflet-print-overlay";\r
		document.body.appendChild(this.__overlay__);\r
\r
		if(this.options.debug){\r
			var cancelBtn = L.DomUtil.create("button","",this.__overlay__);\r
			cancelBtn.innerHTML = "Cancel";\r
			L.DomEvent.on(cancelBtn,"click",()=>{this.cancel()});\r
		}\r
\r
		var options = printMode.options;\r
\r
		var pageSize = options.pageSize;\r
		var pageMargin = L.BrowserPrint.Helper.getPageMargin(printMode,"mm");\r
		var printSize = L.BrowserPrint.Helper.getSize(printMode,pageOrientation);\r
		var rotate = options.rotate;\r
		var scale = options.scale;\r
\r
		this.__overlay__.appendChild(this._addPrintCss(pageSize, pageMargin, pageOrientation));\r
\r
		if(options.header && options.header.enabled) {\r
			var headerContainer = document.createElement("div");\r
			headerContainer.id = "print-header";\r
			if(options.header.overTheMap){\r
				headerContainer.className = "over-the-map";\r
			}\r
			headerContainer.style.height = options.header.size;\r
			headerContainer.style.lineHeight = options.header.size;\r
			var header = document.createElement("span");\r
			header.innerHTML = options.header.text;\r
			headerContainer.appendChild(header);\r
			this._setupPrintPagesWidth(headerContainer, printSize, pageOrientation);\r
			this.__overlay__.appendChild(headerContainer);\r
		}\r
\r
		var gridContainer = document.createElement("div");\r
		gridContainer.className = "grid-print-container";\r
		gridContainer.style.width = "100%";\r
		gridContainer.style.display = "grid";\r
		this._setupPrintMapHeight(gridContainer, printSize, pageOrientation, options);\r
\r
		if (this.options.contentSelector) {\r
			var content = document.querySelectorAll(this.options.contentSelector);\r
			if (content && content.length) {\r
				for (var i = 0; i < content.length; i++) {\r
					var printContentItem = content[i].cloneNode(true);\r
					gridContainer.appendChild(printContentItem);\r
				}\r
			}\r
		}\r
\r
		var isMultipage = this.options.pagesSelector && document.querySelectorAll(this.options.pagesSelector).length;\r
		if (isMultipage) {\r
			var pagesContainer = document.createElement("div");\r
			pagesContainer.className = "pages-print-container";\r
			pagesContainer.style.margin = "0!important";\r
			this._setupPrintPagesWidth(pagesContainer, printSize, pageOrientation);\r
\r
			this.__overlay__.appendChild(pagesContainer);\r
			pagesContainer.appendChild(gridContainer);\r
\r
			var pages = document.querySelectorAll(this.options.pagesSelector);\r
			if (pages && pages.length) {\r
				for (var i = 0; i < pages.length; i++) {\r
					var printPageItem = pages[i].cloneNode(true);\r
					pagesContainer.appendChild(printPageItem);\r
				}\r
			}\r
		} else {\r
			this._setupPrintPagesWidth(gridContainer, printSize, pageOrientation);\r
			this.__overlay__.appendChild(gridContainer);\r
		}\r
\r
		var overlayMapDom = document.createElement("div");\r
		overlayMapDom.id = this._map.getContainer().id + "-print";\r
		overlayMapDom.className = "grid-map-print";\r
		overlayMapDom.style.width = "100%";\r
		overlayMapDom.style.height = "100%";\r
\r
		if(scale && scale !== 1){\r
			overlayMapDom.style.transform += " scale("+scale+")";\r
		}\r
		if(rotate){\r
			overlayMapDom.style.transform += " rotate("+(90*rotate)+"deg)";\r
		}\r
\r
		gridContainer.appendChild(overlayMapDom);\r
\r
		if(options.footer && options.footer.enabled) {\r
			var footerContainer = document.createElement("div");\r
			footerContainer.id = "print-footer";\r
			if(options.footer.overTheMap){\r
				footerContainer.className = "over-the-map";\r
				footerContainer.style.bottom = "0";\r
			}\r
			footerContainer.style.height = options.footer.size;\r
			footerContainer.style.lineHeight = options.footer.size;\r
			var footer = document.createElement("span");\r
			footer.innerHTML = options.footer.text;\r
			footerContainer.appendChild(footer);\r
			this._setupPrintPagesWidth(footerContainer, printSize, pageOrientation);\r
			this.__overlay__.appendChild(footerContainer);\r
		}\r
\r
		document.body.className += " leaflet--printing";\r
\r
		return this._setupPrintMap(overlayMapDom.id, this._combineBasicOptions(origins.printLayer), origins.printLayer, origins.printObjects, origins.panes);\r
	},\r
\r
	_combineBasicOptions: function (printLayer) {\r
		var options = L.BrowserPrint.Utils.cloneBasicOptionsWithoutLayers(this._map.options);\r
\r
		if (printLayer) {\r
			options.maxZoom = printLayer.options.maxZoom;\r
		} else {\r
			options.maxZoom = this._map.getMaxZoom();\r
		}\r
\r
		options.zoomControl = false;\r
		options.dragging = false;\r
		options.zoomAnimation = false;\r
		options.fadeAnimation = false;\r
		options.markerZoomAnimation = false;\r
		options.keyboard = false;\r
		options.scrollWheelZoom = false;\r
		options.tap = false;\r
		options.touchZoom = false;\r
\r
		return options;\r
	},\r
\r
	_setupPrintMap: function (id, options, printLayer, printObjects, panes) {\r
		var overlayMap = L.map(id, options);\r
\r
		if (printLayer) {\r
			printLayer.addTo(overlayMap);\r
		}\r
\r
		panes.forEach(function(p) { overlayMap.createPane(p.name, p.container); });\r
		var clones = {};\r
		var popupsToOpen = [];\r
		for (var type in printObjects){\r
			var closePopupsOnPrint = this.options.closePopupsOnPrint;\r
			printObjects[type] = printObjects[type].map(function(pLayer){\r
				var clone = L.BrowserPrint.Utils.cloneLayer(pLayer);\r
\r
				if (clone) {\r
					/* Workaround for apropriate handling of popups. */\r
					if (pLayer instanceof L.Popup){\r
						if(!pLayer.isOpen) {\r
							pLayer.isOpen = function () { return this._isOpen; };\r
						}\r
						if (pLayer.isOpen() && !closePopupsOnPrint) {\r
							popupsToOpen.push({source: pLayer._source, popup: clone});\r
						}\r
					} else {\r
						clone.addTo(overlayMap);\r
					}\r
\r
					clones[pLayer._leaflet_id] = clone;\r
\r
					if (pLayer instanceof L.Layer) {\r
						var tooltip = pLayer.getTooltip();\r
						if (tooltip) {\r
							clone.bindTooltip(tooltip.getContent(), tooltip.options);\r
							if (pLayer.isTooltipOpen()) {\r
								clone.openTooltip(tooltip.getLatLng());\r
							}\r
						}\r
					}\r
\r
					return clone;\r
				}\r
			});\r
		}\r
\r
		for (var p = 0; p < popupsToOpen.length; p++) {\r
			var popupModel = popupsToOpen[p];\r
			if (popupModel.source) {\r
				var element = clones[popupModel.source._leaflet_id];\r
				if (element && element.bindPopup && element.openPopup) {\r
					clones[popupModel.source._leaflet_id].bindPopup(popupModel.popup).openPopup(popupModel.popup.getLatLng());\r
				}\r
			}\r
		}\r
\r
		return {map: overlayMap, objects: printObjects};\r
	},\r
\r
	// Get all layers that is tile layers and is still loading;\r
	_isTilesLoading: function(overlayMap){\r
		var isLoading = false;\r
		var mapMajorVersion = parseFloat(L.version);\r
		if (mapMajorVersion > 1) {\r
			isLoading = this._getLoadingLayers(overlayMap);\r
		} else {\r
			isLoading = overlayMap._tilesToLoad || overlayMap._tileLayersToLoad;\r
		}\r
\r
		return isLoading;\r
	},\r
\r
	_getLoadingLayers: function(map) {\r
		for (var l in map._layers) {\r
			var layer = map._layers[l];\r
			if ((layer._url || layer._mutant) && layer._loading) {\r
				return true;\r
			}\r
		}\r
\r
		return false;\r
	},\r
\r
	_appendControlStyles:  function (container) {\r
		var printControlStyleSheet = document.createElement('style');\r
		printControlStyleSheet.setAttribute('type', 'text/css');\r
		printControlStyleSheet.id = "browser-print-css";\r
		printControlStyleSheet.innerHTML += " .leaflet-control-browser-print { display: flex; } .leaflet-control-browser-print a { background: #fff url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gcCCi8Vjp+aNAAAAGhJREFUOMvFksENgDAMA68RC7BBN+Cf/ZU33QAmYAT6BolAGxB+RrrIsg1BpfNBVXcPMLMDI/ytpKozMHWwK7BJJ7yYWQbGdBea9wTIkRDzKy0MT7r2NiJACRgotCzxykFI34QY2Ea7KmtxGJ+uX4wfAAAAAElFTkSuQmCC') no-repeat 5px; background-size: 16px 16px; display: block; border-radius: 2px; }";\r
		printControlStyleSheet.innerHTML += " .leaflet-control-browser-print a.leaflet-browser-print { background-position: center; }";\r
		printControlStyleSheet.innerHTML += " .browser-print-holder { background-color: #919187; margin: 0px; padding: 0px; list-style: none; white-space: nowrap; align-items: center; display: flex; } .browser-print-holder-left li:last-child { border-top-right-radius: 2px; border-bottom-right-radius: 2px; } .browser-print-holder-right li:first-child { border-top-left-radius: 2px; border-bottom-left-radius: 2px; }";\r
		printControlStyleSheet.innerHTML += " .browser-print-mode { display: none; color: #FFF; text-decoration: none; padding: 0 10px; text-align: center; } .browser-print-holder:hover { background-color: #757570; cursor: pointer; }";\r
		printControlStyleSheet.innerHTML += " .leaflet-browser-print--custom, .leaflet-browser-print--custom path { cursor: crosshair!important; }";\r
		printControlStyleSheet.innerHTML += " .leaflet-print-overlay { width: 100%; height:auto; min-height: 100%; position: absolute; top: 0; background-color: white!important; left: 0; z-index: 1001; display: block!important; } ";\r
		printControlStyleSheet.innerHTML += " .leaflet--printing { height:auto; min-height: 100%; margin: 0px!important; padding: 0px!important; } body.leaflet--printing > * { display: none; box-sizing: border-box; }";\r
		printControlStyleSheet.innerHTML += " .grid-print-container { grid-template: 1fr / 1fr; box-sizing: border-box; overflow: hidden; } .grid-map-print { grid-row: 1; grid-column: 1; } body.leaflet--printing .grid-print-container [leaflet-browser-print-content]:not(style) { display: unset!important; }";\r
		printControlStyleSheet.innerHTML += " .pages-print-container { box-sizing: border-box; }";\r
		printControlStyleSheet.innerHTML += ' #print-header, #print-footer { text-align: center; font-size: 20px; }';\r
		printControlStyleSheet.innerHTML += ' .over-the-map { position: absolute; left: 0; z-index: 10000; }';\r
\r
		container.appendChild(printControlStyleSheet);\r
	},\r
	_setupManualPrintButton: function(map, origins, objects) {\r
		var manualPrintButton = document.createElement('button');\r
		manualPrintButton.className = "leaflet-browser-print--manualMode-button";\r
		manualPrintButton.innerHTML = "Print";\r
		manualPrintButton.style.position = "absolute";\r
		manualPrintButton.style.top = "20px";\r
		manualPrintButton.style.right = "20px";\r
		this.__overlay__.appendChild(manualPrintButton);\r
\r
		var self = this;\r
		L.DomEvent.on(manualPrintButton, 'click', function () {\r
			self.browserPrint._completePrinting(map, origins, objects);\r
		});\r
	},\r
});\r
\r
\r
L.browserPrint = function(map,options){\r
	return new L.BrowserPrint(map,options);\r
};\r
\r
\r
L.BrowserPrint.Event =  {\r
	PrintInit: 'browser-print-init',\r
	PrePrint: 'browser-pre-print',\r
	PrintStart: 'browser-print-start',\r
	Print: 'browser-print',\r
	PrintEnd: 'browser-print-end',\r
	PrintCancel: 'browser-print-cancel'\r
};\r


//# sourceURL=webpack:///./src/leaflet.browser.print.js?`)},"./src/leaflet.browser.print.modes.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
L.BrowserPrint.Mode = L.Class.extend({\r
	options: {\r
		title: '',\r
		invalidateBounds: false,\r
		margin: {},\r
		enableZoom: true,\r
		zoom: 0,\r
		rotate: 0,\r
		scale: 1,\r
		orientation: '',\r
		pageSize: 'A4',\r
		pageSeries: '',\r
		pageSeriesSize: '',\r
		action: null,\r
		header: {\r
			enabled: false,\r
			text: "",\r
			size: "10mm",\r
			overTheMap: false,\r
		},\r
		footer: {\r
			enabled: false,\r
			text: "",\r
			size: "10mm",\r
			overTheMap: false,\r
		},\r
	},\r
	initialize: function (mode, options = {}) {\r
		if (!mode) {\r
			throw 'Print mode have to be set. Default modes: "Portrait", "Landscape", "Auto" or "Custom". The shortcut functions "L.BrowserPrint.Mode.Portrait" are preferred.';\r
		}\r
\r
		this.mode = mode;\r
		this.setOptions(options);\r
	},\r
    setOptions: function(options){\r
        L.setOptions(this, options);\r
\r
        if(!this.options.title){\r
            this.options.title = this.mode;\r
        }\r
\r
        if(this.mode === "Portrait" || this.mode === "Landscape"){\r
            this.options.orientation = this.mode;\r
        }\r
\r
        this.options.pageSize = (this.options.pageSize || 'A4').toUpperCase();\r
        this.options.pageSeries = ["A", "B", "C", "D"].indexOf(this.options.pageSize[0]) !== -1 ? this.options.pageSize[0] : "";\r
        this.options.pageSeriesSize = this.options.pageSize.substring(this.options.pageSeries.length);\r
        this.options.action = this.options.action || function (context, element) {\r
            return function () {\r
                context._printMode(element)\r
            };\r
        };\r
    }\r
});\r
\r
L.browserPrint.mode = function(mode, options){\r
	return new L.BrowserPrint.Mode(mode,options);\r
};\r
\r
L.BrowserPrint.Mode.Name = {\r
	Landscape: "Landscape",\r
	Portrait: "Portrait",\r
	Auto: "Auto",\r
	Custom: "Custom",\r
};\r
\r
\r
L.BrowserPrint.Mode.Portrait = function(pageSize, options = {}) {\r
	options.pageSize = pageSize;\r
	options.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : false;\r
	return new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Portrait, options);\r
};\r
L.BrowserPrint.Mode.Landscape = function(pageSize, options = {}) {\r
	options.pageSize = pageSize;\r
	options.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : false;\r
	return new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Landscape, options);\r
};\r
L.BrowserPrint.Mode.Auto = function(pageSize, options = {}) {\r
	options.pageSize = pageSize;\r
	options.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : true;\r
	return new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Auto, options);\r
};\r
L.BrowserPrint.Mode.Custom = function(pageSize, options = {}) {\r
	options.pageSize = pageSize;\r
	options.invalidateBounds = options.invalidateBounds === true || options.invalidateBounds === false ?  options.invalidateBounds : true;\r
	return new L.BrowserPrint.Mode(L.BrowserPrint.Mode.Name.Custom, options);\r
};\r


//# sourceURL=webpack:///./src/leaflet.browser.print.modes.js?`)},"./src/leaflet.browser.print.sizes.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
/* Portrait mode sizes in mm for 0 lvl*/\r
L.BrowserPrint.Size =  {\r
	A: {\r
		Width: 840,\r
		Height: 1188\r
	},\r
	B: {\r
		Width: 1000,\r
		Height: 1414\r
	},\r
	C: {\r
		Width: 916,\r
		Height: 1296\r
	},\r
	D: {\r
		Width: 770,\r
		Height: 1090\r
	},\r
	LETTER: {\r
		Width: 216,\r
		Height: 279\r
	},\r
	HALFLETTER: {\r
		Width: 140,\r
		Height: 216\r
	},\r
	LEGAL: {\r
		Width: 216,\r
		Height: 356\r
	},\r
	JUNIORLEGAL: {\r
		Width: 127,\r
		Height: 203\r
	},\r
	TABLOID: {\r
		Width: 279,\r
		Height: 432\r
	},\r
	LEDGER: {\r
		Width: 432,\r
		Height: 279\r
	}\r
};\r


//# sourceURL=webpack:///./src/leaflet.browser.print.sizes.js?`)},"./src/leaflet.browser.print.utils.js":function(module,exports){eval(`/**\r
	MIT License http://www.opensource.org/licenses/mit-license.php\r
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.browser.print)\r
**/\r
\r
L.BrowserPrint.Utils = {\r
\r
	_ignoreArray: [],\r
\r
	_cloneFactoryArray: [],\r
	_cloneRendererArray: [],\r
	_knownRenderers: {},\r
\r
	cloneOptions: function(options) {\r
		var utils = this;\r
	    var retOptions = {};\r
	    for (var name in options) {\r
	        var item = options[name];\r
			if (item && item.clone) {\r
				retOptions[name] = item.clone();\r
			} else if (item && item.onAdd) {\r
				retOptions[name] = utils.cloneLayer(item);\r
			} else {\r
				retOptions[name] = item;\r
			}\r
	    }\r
	    return retOptions;\r
	},\r
\r
	cloneBasicOptionsWithoutLayers: function(options) {\r
	    var retOptions = {};\r
		var optionNames = Object.getOwnPropertyNames(options);\r
		if (optionNames.length) {\r
			for (var i = 0; i < optionNames.length; i++) {\r
				var optName = optionNames[i];\r
				if (optName && optName != "layers") {\r
			        retOptions[optName] = options[optName];\r
				}\r
			}\r
\r
		    return this.cloneOptions(retOptions);\r
		}\r
\r
		return retOptions;\r
	},\r
\r
	cloneInnerLayers: function (layer) {\r
		var utils = this;\r
		var layers = [];\r
\r
		layer.eachLayer(function (inner) {\r
			var l = utils.cloneLayer(inner);\r
\r
			if (l) {\r
				layers.push(l);\r
			}\r
		});\r
\r
		return layers;\r
	},\r
\r
	initialize: function () {\r
\r
		this._knownRenderers = {};\r
\r
		// Renderers\r
		this.registerRenderer(L.SVG, 'L.SVG');\r
		this.registerRenderer(L.Canvas, 'L.Canvas');\r
\r
		this.registerLayer(L.TileLayer.WMS, 'L.TileLayer.WMS', function(layer, utils) { 	return L.tileLayer.wms(layer._url, utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.TileLayer, 'L.TileLayer', function(layer, utils) { 			return L.tileLayer(layer._url, utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.GridLayer, 'L.GridLayer', function(layer, utils) { 			return L.gridLayer(utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.ImageOverlay, 'L.ImageOverlay', function(layer, utils) { 		return L.imageOverlay(layer._url, layer._bounds, utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.Marker, 'L.Marker', function(layer, utils) { 					return L.marker(layer.getLatLng(), utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.Popup, 'L.Popup', function(layer, utils) { 					return L.popup(utils.cloneOptions(layer.options)).setLatLng(layer.getLatLng()).setContent(layer.getContent()); });\r
		this.registerLayer(L.Circle, 'L.Circle', function(layer, utils) { 					return L.circle(layer.getLatLng(), layer.getRadius(), utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.CircleMarker, 'L.CircleMarker', function(layer, utils) { 		return L.circleMarker(layer.getLatLng(), utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.Rectangle, 'L.Rectangle', function(layer, utils) { 			return L.rectangle(layer.getBounds(), utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.Polygon, 'L.Polygon', function(layer, utils) { 				return L.polygon(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r
\r
		// MultiPolyline is removed in leaflet 1.0.0\r
		this.registerLayer(L.MultiPolyline, 'L.MultiPolyline', function(layer, utils) { 	return L.polyline(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r
		// MultiPolygon is removed in leaflet 1.0.0\r
		this.registerLayer(L.MultiPolygon, 'L.MultiPolygon', function(layer, utils) { 		return L.multiPolygon(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r
\r
		this.registerLayer(L.Polyline, 'L.Polyline', function(layer, utils) { 				return L.polyline(layer.getLatLngs(), utils.cloneOptions(layer.options)); });\r
		this.registerLayer(L.GeoJSON, 'L.GeoJSON', function(layer, utils) { 				return L.geoJson(layer.toGeoJSON(), utils.cloneOptions(layer.options)); });\r
\r
		this.registerIgnoreLayer(L.FeatureGroup, 'L.FeatureGroup');\r
		this.registerIgnoreLayer(L.LayerGroup, 'L.LayerGroup');\r
\r
		// There is no point to clone tooltips here;  L.tooltip(options);\r
		this.registerLayer(L.Tooltip, 'L.Tooltip', function(){	return null; });\r
	},\r
\r
	_register: function(array, type, identifier, builderFunction) {\r
		if (type &&\r
			!array.filter(function(l){ return l.identifier === identifier; }).length) {\r
\r
			array.push({\r
				type: type,\r
				identifier: identifier,\r
				builder: builderFunction || function (layer) { return new type(layer.options); }\r
			});\r
		}\r
	},\r
\r
	registerLayer: function(type, identifier, builderFunction) {\r
		this._register(this._cloneFactoryArray, type, identifier, builderFunction);\r
	},\r
\r
	registerRenderer: function(type, identifier, builderFunction) {\r
		this._register(this._cloneRendererArray, type, identifier, builderFunction);\r
	},\r
\r
	registerIgnoreLayer: function(type, identifier) {\r
		this._register(this._ignoreArray, type, identifier);\r
	},\r
\r
	cloneLayer: function(layer) {\r
		if (!layer) return null;\r
\r
		// First we check if this layer is actual renderer\r
		var renderer = this.__getRenderer(layer);\r
		if (renderer) {\r
			return renderer;\r
		}\r
\r
		var factoryObject;\r
		if (layer._group) { // Exceptional check for L.MarkerClusterGroup\r
			factoryObject = this.__getFactoryObject(layer._group, true);\r
		} else {\r
			factoryObject = this.__getFactoryObject(layer);\r
		}\r
\r
		// We clone and recreate layer if it's simple overlay\r
		if (factoryObject) {\r
			factoryObject = factoryObject.builder(layer, this);\r
		}\r
\r
		return factoryObject;\r
	},\r
\r
	getType: function(layer) {\r
		if (!layer) return null;\r
\r
		var factoryObject = this.__getFactoryObject(layer);\r
		if (factoryObject) {\r
			factoryObject = factoryObject.identifier;\r
		}\r
\r
		return factoryObject;\r
	},\r
\r
	__getRenderer: function(oldRenderer) {\r
		var renderer = this._knownRenderers[oldRenderer._leaflet_id];\r
		if (!renderer) {\r
			for (var i = 0; i < this._cloneRendererArray.length; i++) {\r
				var factoryObject = this._cloneRendererArray[i];\r
				if (oldRenderer instanceof factoryObject.type) {\r
					this._knownRenderers[oldRenderer._leaflet_id] = factoryObject.builder(oldRenderer.options);\r
					break;\r
				}\r
			}\r
\r
			renderer = this._knownRenderers[oldRenderer._leaflet_id];\r
		}\r
\r
		return renderer;\r
	},\r
\r
	__getFactoryObject: function (layer, skipIgnore) {\r
		if (!skipIgnore) {\r
			for (var i = 0; i < this._ignoreArray.length; i++) {\r
				var ignoreObject = this._ignoreArray[i];\r
				if (ignoreObject.type && layer instanceof ignoreObject.type) {\r
					return null;\r
				}\r
			}\r
		}\r
\r
		for (var i = 0; i < this._cloneFactoryArray.length; i++) {\r
			var factoryObject = this._cloneFactoryArray[i];\r
			if (factoryObject.type && layer instanceof factoryObject.type) {\r
				return factoryObject;\r
			}\r
		}\r
\r
		for (var i = 0; i < this._cloneRendererArray.length; i++) {\r
			var factoryObject = this._cloneRendererArray[i];\r
			if (factoryObject.type && layer instanceof factoryObject.type) {\r
				return null;\r
			}\r
		}\r
\r
		this.__unknownLayer__();\r
\r
		return null;\r
	},\r
\r
	__unknownLayer__: function(){\r
	   console.warn('Unknown layer, cannot clone this layer. Leaflet version: ' + L.version);\r
	   console.info('For additional information please refer to documentation on: https://github.com/Igor-Vladyka/leaflet.browser.print.');\r
	   console.info('-------------------------------------------------------------------------------------------------------------------');\r
   }\r
};\r


//# sourceURL=webpack:///./src/leaflet.browser.print.utils.js?`)},0:function(module,exports,__webpack_require__){eval(`__webpack_require__(/*! ./src/leaflet.browser.print.js */"./src/leaflet.browser.print.js");
__webpack_require__(/*! ./src/leaflet.browser.print.control.js */"./src/leaflet.browser.print.control.js");
__webpack_require__(/*! ./src/leaflet.browser.print.utils.js */"./src/leaflet.browser.print.utils.js");
__webpack_require__(/*! ./src/leaflet.browser.print.sizes.js */"./src/leaflet.browser.print.sizes.js");
__webpack_require__(/*! ./src/leaflet.browser.print.modes.js */"./src/leaflet.browser.print.modes.js");
module.exports = __webpack_require__(/*! ./src/leaflet.browser.print.helpers.js */"./src/leaflet.browser.print.helpers.js");


//# sourceURL=webpack:///multi_./src/leaflet.browser.print.js_./src/leaflet.browser.print.control.js_./src/leaflet.browser.print.utils.js_./src/leaflet.browser.print.sizes.js_./src/leaflet.browser.print.modes.js_./src/leaflet.browser.print.helpers.js?`)}})})();
