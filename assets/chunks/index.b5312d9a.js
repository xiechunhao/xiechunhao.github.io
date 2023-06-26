import{L as v}from"./leaflet-src.347f22be.js";import{c as x}from"./commonjsHelpers.042e6b4d.js";import{A as k}from"./index.a511ac44.js";import{d as b,p as O,a3 as G,o as A,c as B,_ as z}from"./framework.efc265d9.js";var S={exports:{}};(function(P,d){(function(p,M){M(d)})(x,function(p){var M=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(t){L.Util.setOptions(this,t),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var e=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,e?this._withAnimation:this._noAnimation),this._markerCluster=e?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(t){if(t instanceof L.LayerGroup)return this.addLayers([t]);if(!t.getLatLng)return this._nonPointGroup.addLayer(t),this.fire("layeradd",{layer:t}),this;if(!this._map)return this._needsClustering.push(t),this.fire("layeradd",{layer:t}),this;if(this.hasLayer(t))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(t,this._maxZoom),this.fire("layeradd",{layer:t}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var e=t,i=this._zoom;if(t.__parent)for(;e.__parent._zoom>=i;)e=e.__parent;return this._currentShownBounds.contains(e.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(t,e):this._animationAddLayerNonAnimated(t,e)),this},removeLayer:function(t){return t instanceof L.LayerGroup?this.removeLayers([t]):(t.getLatLng?this._map?t.__parent&&(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(t)),this._removeLayer(t,!0),this.fire("layerremove",{layer:t}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),t.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(t)&&(this._featureGroup.removeLayer(t),t.clusterShow&&t.clusterShow())):(!this._arraySplice(this._needsClustering,t)&&this.hasLayer(t)&&this._needsRemoving.push({layer:t,latlng:t._latlng}),this.fire("layerremove",{layer:t})):(this._nonPointGroup.removeLayer(t),this.fire("layerremove",{layer:t})),this)},addLayers:function(t,e){if(!L.Util.isArray(t))return this.addLayer(t);var i,r=this._featureGroup,n=this._nonPointGroup,s=this.options.chunkedLoading,o=this.options.chunkInterval,a=this.options.chunkProgress,h=t.length,l=0,u=!0;if(this._map){var c=new Date().getTime(),_=L.bind(function(){var m=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();l<h;l++){if(s&&l%200==0){var g=new Date().getTime()-m;if(o<g)break}if((i=t[l])instanceof L.LayerGroup)u&&(t=t.slice(),u=!1),this._extractNonGroupLayers(i,t),h=t.length;else if(i.getLatLng){if(!this.hasLayer(i)&&(this._addLayer(i,this._maxZoom),e||this.fire("layeradd",{layer:i}),i.__parent&&i.__parent.getChildCount()===2)){var y=i.__parent.getAllChildMarkers(),w=y[0]===i?y[1]:y[0];r.removeLayer(w)}}else n.addLayer(i),e||this.fire("layeradd",{layer:i})}a&&a(l,h,new Date().getTime()-c),l===h?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(_,this.options.chunkDelay)},this);_()}else for(var f=this._needsClustering;l<h;l++)(i=t[l])instanceof L.LayerGroup?(u&&(t=t.slice(),u=!1),this._extractNonGroupLayers(i,t),h=t.length):i.getLatLng?this.hasLayer(i)||f.push(i):n.addLayer(i);return this},removeLayers:function(t){var e,i,r=t.length,n=this._featureGroup,s=this._nonPointGroup,o=!0;if(!this._map){for(e=0;e<r;e++)(i=t[e])instanceof L.LayerGroup?(o&&(t=t.slice(),o=!1),this._extractNonGroupLayers(i,t),r=t.length):(this._arraySplice(this._needsClustering,i),s.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push({layer:i,latlng:i._latlng}),this.fire("layerremove",{layer:i}));return this}if(this._unspiderfy){this._unspiderfy();var a=t.slice(),h=r;for(e=0;e<h;e++)(i=a[e])instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),h=a.length):this._unspiderfyLayer(i)}for(e=0;e<r;e++)(i=t[e])instanceof L.LayerGroup?(o&&(t=t.slice(),o=!1),this._extractNonGroupLayers(i,t),r=t.length):i.__parent?(this._removeLayer(i,!0,!0),this.fire("layerremove",{layer:i}),n.hasLayer(i)&&(n.removeLayer(i),i.clusterShow&&i.clusterShow())):(s.removeLayer(i),this.fire("layerremove",{layer:i}));return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(t){t.off(this._childMarkerEventHandlers,this),delete t.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var t=new L.LatLngBounds;this._topClusterLevel&&t.extend(this._topClusterLevel._bounds);for(var e=this._needsClustering.length-1;0<=e;e--)t.extend(this._needsClustering[e].getLatLng());return t.extend(this._nonPointGroup.getBounds()),t},eachLayer:function(t,e){var i,r,n,s=this._needsClustering.slice(),o=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(s),r=s.length-1;0<=r;r--){for(i=!0,n=o.length-1;0<=n;n--)if(o[n].layer===s[r]){i=!1;break}i&&t.call(e,s[r])}this._nonPointGroup.eachLayer(t,e)},getLayers:function(){var t=[];return this.eachLayer(function(e){t.push(e)}),t},getLayer:function(t){var e=null;return t=parseInt(t,10),this.eachLayer(function(i){L.stamp(i)===t&&(e=i)}),e},hasLayer:function(t){if(!t)return!1;var e,i=this._needsClustering;for(e=i.length-1;0<=e;e--)if(i[e]===t)return!0;for(e=(i=this._needsRemoving).length-1;0<=e;e--)if(i[e].layer===t)return!1;return!(!t.__parent||t.__parent._group!==this)||this._nonPointGroup.hasLayer(t)},zoomToShowLayer:function(t,e){var i=this._map;typeof e!="function"&&(e=function(){});var r=function(){!i.hasLayer(t)&&!i.hasLayer(t.__parent)||this._inZoomAnimation||(this._map.off("moveend",r,this),this.off("animationend",r,this),i.hasLayer(t)?e():t.__parent._icon&&(this.once("spiderfied",e,this),t.__parent.spiderfy()))};t._icon&&this._map.getBounds().contains(t.getLatLng())?e():t.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",r,this),this._map.panTo(t.getLatLng())):(this._map.on("moveend",r,this),this.on("animationend",r,this),t.__parent.zoomToBounds())},onAdd:function(t){var e,i,r;if(this._map=t,!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(t),this._nonPointGroup.addTo(t),this._gridClusters||this._generateInitialClusters(),this._maxLat=t.options.crs.projection.MAX_LATITUDE,e=0,i=this._needsRemoving.length;e<i;e++)(r=this._needsRemoving[e]).newlatlng=r.layer._latlng,r.layer._latlng=r.latlng;for(e=0,i=this._needsRemoving.length;e<i;e++)r=this._needsRemoving[e],this._removeLayer(r.layer,!0),r.layer._latlng=r.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i,!0)},onRemove:function(t){t.off("zoomend",this._zoomEnd,this),t.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(t){for(var e=t;e&&!e._icon;)e=e.__parent;return e||null},_arraySplice:function(t,e){for(var i=t.length-1;0<=i;i--)if(t[i]===e)return t.splice(i,1),!0},_removeFromGridUnclustered:function(t,e){for(var i=this._map,r=this._gridUnclustered,n=Math.floor(this._map.getMinZoom());n<=e&&r[e].removeObject(t,i.project(t.getLatLng(),e));e--);},_childMarkerDragStart:function(t){t.target.__dragStart=t.target._latlng},_childMarkerMoved:function(t){if(!this._ignoreMove&&!t.target.__dragStart){var e=t.target._popup&&t.target._popup.isOpen();this._moveChild(t.target,t.oldLatLng,t.latlng),e&&t.target.openPopup()}},_moveChild:function(t,e,i){t._latlng=e,this.removeLayer(t),t._latlng=i,this.addLayer(t)},_childMarkerDragEnd:function(t){var e=t.target.__dragStart;delete t.target.__dragStart,e&&this._moveChild(t.target,e,t.target._latlng)},_removeLayer:function(t,e,i){var r=this._gridClusters,n=this._gridUnclustered,s=this._featureGroup,o=this._map,a=Math.floor(this._map.getMinZoom());e&&this._removeFromGridUnclustered(t,this._maxZoom);var h,l=t.__parent,u=l._markers;for(this._arraySplice(u,t);l&&(l._childCount--,l._boundsNeedUpdate=!0,!(l._zoom<a));)e&&l._childCount<=1?(h=l._markers[0]===t?l._markers[1]:l._markers[0],r[l._zoom].removeObject(l,o.project(l._cLatLng,l._zoom)),n[l._zoom].addObject(h,o.project(h.getLatLng(),l._zoom)),this._arraySplice(l.__parent._childClusters,l),l.__parent._markers.push(h),h.__parent=l.__parent,l._icon&&(s.removeLayer(l),i||s.addLayer(h))):l._iconNeedsUpdate=!0,l=l.__parent;delete t.__parent},_isOrIsParent:function(t,e){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},fire:function(t,e,i){if(e&&e.layer instanceof L.MarkerCluster){if(e.originalEvent&&this._isOrIsParent(e.layer._icon,e.originalEvent.relatedTarget))return;t="cluster"+t}L.FeatureGroup.prototype.fire.call(this,t,e,i)},listens:function(t,e){return L.FeatureGroup.prototype.listens.call(this,t,e)||L.FeatureGroup.prototype.listens.call(this,"cluster"+t,e)},_defaultIconCreateFunction:function(t){var e=t.getChildCount(),i=" marker-cluster-";return i+=e<10?"small":e<100?"medium":"large",new L.DivIcon({html:"<div><span>"+e+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var t=this._map,e=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,r=this.options.zoomToBoundsOnClick,n=this.options.spiderfyOnEveryZoom;(e||r||n)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),t.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(t){var e=t.layer,i=e;if(t.type!=="clusterkeypress"||!t.originalEvent||t.originalEvent.keyCode===13){for(;i._childClusters.length===1;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===e._childCount&&this.options.spiderfyOnMaxZoom?e.spiderfy():this.options.zoomToBoundsOnClick&&e.zoomToBounds(),this.options.spiderfyOnEveryZoom&&e.spiderfy(),t.originalEvent&&t.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(t){var e=this._map;this._inZoomAnimation||(this._shownPolygon&&e.removeLayer(this._shownPolygon),2<t.layer.getChildCount()&&t.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),e.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var t=this.options.spiderfyOnMaxZoom,e=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,r=this.options.spiderfyOnEveryZoom,n=this._map;(t||i||r)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),e&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var t=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),t),this._currentShownBounds=t}},_generateInitialClusters:function(){var t=Math.ceil(this._map.getMaxZoom()),e=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,r=i;typeof i!="function"&&(r=function(){return i}),this.options.disableClusteringAtZoom!==null&&(t=this.options.disableClusteringAtZoom-1),this._maxZoom=t,this._gridClusters={},this._gridUnclustered={};for(var n=t;e<=n;n--)this._gridClusters[n]=new L.DistanceGrid(r(n)),this._gridUnclustered[n]=new L.DistanceGrid(r(n));this._topClusterLevel=new this._markerCluster(this,e-1)},_addLayer:function(t,e){var i,r,n=this._gridClusters,s=this._gridUnclustered,o=Math.floor(this._map.getMinZoom());for(this.options.singleMarkerMode&&this._overrideMarkerIcon(t),t.on(this._childMarkerEventHandlers,this);o<=e;e--){i=this._map.project(t.getLatLng(),e);var a=n[e].getNearObject(i);if(a)return a._addChild(t),void(t.__parent=a);if(a=s[e].getNearObject(i)){var h=a.__parent;h&&this._removeLayer(a,!1);var l=new this._markerCluster(this,e,a,t);n[e].addObject(l,this._map.project(l._cLatLng,e)),a.__parent=l;var u=t.__parent=l;for(r=e-1;r>h._zoom;r--)u=new this._markerCluster(this,r,u),n[r].addObject(u,this._map.project(a.getLatLng(),r));return h._addChild(u),void this._removeFromGridUnclustered(a,e)}s[e].addObject(t,i)}this._topClusterLevel._addChild(t),t.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(t){t instanceof L.MarkerCluster&&t._iconNeedsUpdate&&t._updateIcon()})},_enqueue:function(t){this._queue.push(t),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var t=0;t<this._queue.length;t++)this._queue[t].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var t=Math.round(this._map._zoom);this._processQueue(),this._zoom<t&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,t)):this._zoom>t?(this._animationStart(),this._animationZoomOut(this._zoom,t)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(t){var e=this._maxLat;return e!==void 0&&(t.getNorth()>=e&&(t._northEast.lat=1/0),t.getSouth()<=-e&&(t._southWest.lat=-1/0)),t},_animationAddLayerNonAnimated:function(t,e){if(e===t)this._featureGroup.addLayer(t);else if(e._childCount===2){e._addToMap();var i=e.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else e._updateIcon()},_extractNonGroupLayers:function(t,e){var i,r=t.getLayers(),n=0;for(e=e||[];n<r.length;n++)(i=r[n])instanceof L.LayerGroup?this._extractNonGroupLayers(i,e):e.push(i);return e},_overrideMarkerIcon:function(t){return t.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[t]}})}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(t,e){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(t,e){this._animationAddLayerNonAnimated(t,e)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(t,e){var i,r=this._getExpandedVisibleBounds(),n=this._featureGroup,s=Math.floor(this._map.getMinZoom());this._ignoreMove=!0,this._topClusterLevel._recursively(r,t,s,function(o){var a,h=o._latlng,l=o._markers;for(r.contains(h)||(h=null),o._isSingleParent()&&t+1===e?(n.removeLayer(o),o._recursivelyAddChildrenToMap(null,e,r)):(o.clusterHide(),o._recursivelyAddChildrenToMap(h,e,r)),i=l.length-1;0<=i;i--)a=l[i],r.contains(a._latlng)||n.removeLayer(a)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(r,e),n.eachLayer(function(o){o instanceof L.MarkerCluster||!o._icon||o.clusterShow()}),this._topClusterLevel._recursively(r,t,e,function(o){o._recursivelyRestoreChildPositions(e)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(r,t,s,function(o){n.removeLayer(o),o.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(t,e){this._animationZoomOutSingle(this._topClusterLevel,t-1,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,e,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),t,this._getExpandedVisibleBounds())},_animationAddLayer:function(t,e){var i=this,r=this._featureGroup;r.addLayer(t),e!==t&&(2<e._childCount?(e._updateIcon(),this._forceLayout(),this._animationStart(),t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),t.clusterHide(),this._enqueue(function(){r.removeLayer(t),t.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(e,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(t,e,i){var r=this._getExpandedVisibleBounds(),n=Math.floor(this._map.getMinZoom());t._recursivelyAnimateChildrenInAndAddSelfToMap(r,n,e+1,i);var s=this;this._forceLayout(),t._recursivelyBecomeVisible(r,i),this._enqueue(function(){if(t._childCount===1){var o=t._markers[0];this._ignoreMove=!0,o.setLatLng(o.getLatLng()),this._ignoreMove=!1,o.clusterShow&&o.clusterShow()}else t._recursively(r,i,n,function(a){a._recursivelyRemoveChildrenFromMap(r,n,e+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(t){return new L.MarkerClusterGroup(t)};var C=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(t,e,i,r){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:t.options.clusterPane}),this._group=t,this._zoom=e,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),r&&this._addChild(r)},getAllChildMarkers:function(t,e){t=t||[];for(var i=this._childClusters.length-1;0<=i;i--)this._childClusters[i].getAllChildMarkers(t,e);for(var r=this._markers.length-1;0<=r;r--)e&&this._markers[r].__dragStart||t.push(this._markers[r]);return t},getChildCount:function(){return this._childCount},zoomToBounds:function(t){for(var e,i=this._childClusters.slice(),r=this._group._map,n=r.getBoundsZoom(this._bounds),s=this._zoom+1,o=r.getZoom();0<i.length&&s<n;){s++;var a=[];for(e=0;e<i.length;e++)a=a.concat(i[e]._childClusters);i=a}s<n?this._group._map.setView(this._latlng,s):n<=o?this._group._map.setView(this._latlng,o+1):this._group._map.fitBounds(this._bounds,t)},getBounds:function(){var t=new L.LatLngBounds;return t.extend(this._bounds),t},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(t,e){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(t),t instanceof L.MarkerCluster?(e||(this._childClusters.push(t),t.__parent=this),this._childCount+=t._childCount):(e||this._markers.push(t),this._childCount++),this.__parent&&this.__parent._addChild(t,!0)},_setClusterCenter:function(t){this._cLatLng||(this._cLatLng=t._cLatLng||t._latlng)},_resetBounds:function(){var t=this._bounds;t._southWest&&(t._southWest.lat=1/0,t._southWest.lng=1/0),t._northEast&&(t._northEast.lat=-1/0,t._northEast.lng=-1/0)},_recalculateBounds:function(){var t,e,i,r,n=this._markers,s=this._childClusters,o=0,a=0,h=this._childCount;if(h!==0){for(this._resetBounds(),t=0;t<n.length;t++)i=n[t]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(t=0;t<s.length;t++)(e=s[t])._boundsNeedUpdate&&e._recalculateBounds(),this._bounds.extend(e._bounds),i=e._wLatLng,r=e._childCount,o+=i.lat*r,a+=i.lng*r;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(t){t&&(this._backupLatlng=this._latlng,this.setLatLng(t)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(t,e,i){this._recursively(t,this._group._map.getMinZoom(),i-1,function(r){var n,s,o=r._markers;for(n=o.length-1;0<=n;n--)(s=o[n])._icon&&(s._setPos(e),s.clusterHide())},function(r){var n,s,o=r._childClusters;for(n=o.length-1;0<=n;n--)(s=o[n])._icon&&(s._setPos(e),s.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(t,e,i,r){this._recursively(t,r,e,function(n){n._recursivelyAnimateChildrenIn(t,n._group._map.latLngToLayerPoint(n.getLatLng()).round(),i),n._isSingleParent()&&i-1===r?(n.clusterShow(),n._recursivelyRemoveChildrenFromMap(t,e,i)):n.clusterHide(),n._addToMap()})},_recursivelyBecomeVisible:function(t,e){this._recursively(t,this._group._map.getMinZoom(),e,null,function(i){i.clusterShow()})},_recursivelyAddChildrenToMap:function(t,e,i){this._recursively(i,this._group._map.getMinZoom()-1,e,function(r){if(e!==r._zoom)for(var n=r._markers.length-1;0<=n;n--){var s=r._markers[n];i.contains(s._latlng)&&(t&&(s._backupLatlng=s.getLatLng(),s.setLatLng(t),s.clusterHide&&s.clusterHide()),r._group._featureGroup.addLayer(s))}},function(r){r._addToMap(t)})},_recursivelyRestoreChildPositions:function(t){for(var e=this._markers.length-1;0<=e;e--){var i=this._markers[e];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(t-1===this._zoom)for(var r=this._childClusters.length-1;0<=r;r--)this._childClusters[r]._restorePosition();else for(var n=this._childClusters.length-1;0<=n;n--)this._childClusters[n]._recursivelyRestoreChildPositions(t)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(t,e,i,r){var n,s;this._recursively(t,e-1,i-1,function(o){for(s=o._markers.length-1;0<=s;s--)n=o._markers[s],r&&r.contains(n._latlng)||(o._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())},function(o){for(s=o._childClusters.length-1;0<=s;s--)n=o._childClusters[s],r&&r.contains(n._latlng)||(o._group._featureGroup.removeLayer(n),n.clusterShow&&n.clusterShow())})},_recursively:function(t,e,i,r,n){var s,o,a=this._childClusters,h=this._zoom;if(e<=h&&(r&&r(this),n&&h===i&&n(this)),h<e||h<i)for(s=a.length-1;0<=s;s--)(o=a[s])._boundsNeedUpdate&&o._recalculateBounds(),t.intersects(o._bounds)&&o._recursively(t,e,i,r,n)},_isSingleParent:function(){return 0<this._childClusters.length&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var t=this.options.opacity;return this.setOpacity(0),this.options.opacity=t,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(t){this._cellSize=t,this._sqCellSize=t*t,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(t,e){var i=this._getCoord(e.x),r=this._getCoord(e.y),n=this._grid,s=n[r]=n[r]||{},o=s[i]=s[i]||[],a=L.Util.stamp(t);this._objectPoint[a]=e,o.push(t)},updateObject:function(t,e){this.removeObject(t),this.addObject(t,e)},removeObject:function(t,e){var i,r,n=this._getCoord(e.x),s=this._getCoord(e.y),o=this._grid,a=o[s]=o[s]||{},h=a[n]=a[n]||[];for(delete this._objectPoint[L.Util.stamp(t)],i=0,r=h.length;i<r;i++)if(h[i]===t)return h.splice(i,1),r===1&&delete a[n],!0},eachObject:function(t,e){var i,r,n,s,o,a,h=this._grid;for(i in h)for(r in o=h[i])for(n=0,s=(a=o[r]).length;n<s;n++)t.call(e,a[n])&&(n--,s--)},getNearObject:function(t){var e,i,r,n,s,o,a,h,l=this._getCoord(t.x),u=this._getCoord(t.y),c=this._objectPoint,_=this._sqCellSize,f=null;for(e=u-1;e<=u+1;e++)if(n=this._grid[e]){for(i=l-1;i<=l+1;i++)if(s=n[i])for(r=0,o=s.length;r<o;r++)a=s[r],((h=this._sqDist(c[L.Util.stamp(a)],t))<_||h<=_&&f===null)&&(_=h,f=a)}return f},_getCoord:function(t){var e=Math.floor(t/this._cellSize);return isFinite(e)?e:t},_sqDist:function(t,e){var i=e.x-t.x,r=e.y-t.y;return i*i+r*r}},L.QuickHull={getDistant:function(t,e){var i=e[1].lat-e[0].lat;return(e[0].lng-e[1].lng)*(t.lat-e[0].lat)+i*(t.lng-e[0].lng)},findMostDistantPointFromBaseLine:function(t,e){var i,r,n,s=0,o=null,a=[];for(i=e.length-1;0<=i;i--)r=e[i],0<(n=this.getDistant(r,t))&&(a.push(r),s<n&&(s=n,o=r));return{maxPoint:o,newPoints:a}},buildConvexHull:function(t,e){var i=[],r=this.findMostDistantPointFromBaseLine(t,e);return r.maxPoint?i=(i=i.concat(this.buildConvexHull([t[0],r.maxPoint],r.newPoints))).concat(this.buildConvexHull([r.maxPoint,t[1]],r.newPoints)):[t[0]]},getConvexHull:function(t){var e,i=!1,r=!1,n=!1,s=!1,o=null,a=null,h=null,l=null,u=null,c=null;for(e=t.length-1;0<=e;e--){var _=t[e];(i===!1||_.lat>i)&&(i=(o=_).lat),(r===!1||_.lat<r)&&(r=(a=_).lat),(n===!1||_.lng>n)&&(n=(h=_).lng),(s===!1||_.lng<s)&&(s=(l=_).lng)}return u=r!==i?(c=a,o):(c=l,h),[].concat(this.buildConvexHull([c,u],t),this.buildConvexHull([u,c],t))}},L.MarkerCluster.include({getConvexHull:function(){var t,e,i=this.getAllChildMarkers(),r=[];for(e=i.length-1;0<=e;e--)t=i[e].getLatLng(),r.push(t);return L.QuickHull.getConvexHull(r)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var t,e=this.getAllChildMarkers(null,!0),i=this._group._map.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),t=(this._group._spiderfied=this)._group.options.spiderfyShapePositions?this._group.options.spiderfyShapePositions(e.length,i):e.length>=this._circleSpiralSwitchover?this._generatePointsSpiral(e.length,i):(i.y+=10,this._generatePointsCircle(e.length,i)),this._animationSpiderfy(e,t)}},unspiderfy:function(t){this._group._inZoomAnimation||(this._animationUnspiderfy(t),this._group._spiderfied=null)},_generatePointsCircle:function(t,e){var i,r,n=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+t)/this._2PI,s=this._2PI/t,o=[];for(n=Math.max(n,35),o.length=t,i=0;i<t;i++)r=this._circleStartAngle+i*s,o[i]=new L.Point(e.x+n*Math.cos(r),e.y+n*Math.sin(r))._round();return o},_generatePointsSpiral:function(t,e){var i,r=this._group.options.spiderfyDistanceMultiplier,n=r*this._spiralLengthStart,s=r*this._spiralFootSeparation,o=r*this._spiralLengthFactor*this._2PI,a=0,h=[];for(i=h.length=t;0<=i;i--)i<t&&(h[i]=new L.Point(e.x+n*Math.cos(a),e.y+n*Math.sin(a))._round()),n+=o/(a+=s/n+5e-4*i);return h},_noanimationUnspiderfy:function(){var t,e,i=this._group,r=i._map,n=i._featureGroup,s=this.getAllChildMarkers(null,!0);for(i._ignoreMove=!0,this.setOpacity(1),e=s.length-1;0<=e;e--)t=s[e],n.removeLayer(t),t._preSpiderfyLatlng&&(t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng),t.setZIndexOffset&&t.setZIndexOffset(0),t._spiderLeg&&(r.removeLayer(t._spiderLeg),delete t._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:s}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(t,e){var i,r,n,s,o=this._group,a=o._map,h=o._featureGroup,l=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<t.length;i++)s=a.layerPointToLatLng(e[i]),r=t[i],n=new L.Polyline([this._latlng,s],l),a.addLayer(n),r._spiderLeg=n,r._preSpiderfyLatlng=r._latlng,r.setLatLng(s),r.setZIndexOffset&&r.setZIndexOffset(1e6),h.addLayer(r);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:t})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(t,e){var i,r,n,s,o,a,h=this,l=this._group,u=l._map,c=l._featureGroup,_=this._latlng,f=u.latLngToLayerPoint(_),m=L.Path.SVG,g=L.extend({},this._group.options.spiderLegPolylineOptions),y=g.opacity;for(y===void 0&&(y=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),m?(g.opacity=0,g.className=(g.className||"")+" leaflet-cluster-spider-leg"):g.opacity=y,l._ignoreMove=!0,i=0;i<t.length;i++)r=t[i],a=u.layerPointToLatLng(e[i]),n=new L.Polyline([_,a],g),u.addLayer(n),r._spiderLeg=n,m&&(o=(s=n._path).getTotalLength()+.1,s.style.strokeDasharray=o,s.style.strokeDashoffset=o),r.setZIndexOffset&&r.setZIndexOffset(1e6),r.clusterHide&&r.clusterHide(),c.addLayer(r),r._setPos&&r._setPos(f);for(l._forceLayout(),l._animationStart(),i=t.length-1;0<=i;i--)a=u.layerPointToLatLng(e[i]),(r=t[i])._preSpiderfyLatlng=r._latlng,r.setLatLng(a),r.clusterShow&&r.clusterShow(),m&&((s=(n=r._spiderLeg)._path).style.strokeDashoffset=0,n.setStyle({opacity:y}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:h,markers:t})},200)},_animationUnspiderfy:function(t){var e,i,r,n,s,o,a=this,h=this._group,l=h._map,u=h._featureGroup,c=t?l._latLngToNewLayerPoint(this._latlng,t.zoom,t.center):l.latLngToLayerPoint(this._latlng),_=this.getAllChildMarkers(null,!0),f=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=_.length-1;0<=i;i--)(e=_[i])._preSpiderfyLatlng&&(e.closePopup(),e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng,o=!0,e._setPos&&(e._setPos(c),o=!1),e.clusterHide&&(e.clusterHide(),o=!1),o&&u.removeLayer(e),f&&(s=(n=(r=e._spiderLeg)._path).getTotalLength()+.1,n.style.strokeDashoffset=s,r.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var m=0;for(i=_.length-1;0<=i;i--)(e=_[i])._spiderLeg&&m++;for(i=_.length-1;0<=i;i--)(e=_[i])._spiderLeg&&(e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),1<m&&u.removeLayer(e),l.removeLayer(e._spiderLeg),delete e._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:_})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(t){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(t))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(t){this._spiderfied&&this._spiderfied.unspiderfy(t)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(t){t._spiderLeg&&(this._featureGroup.removeLayer(t),t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),this._map.removeLayer(t._spiderLeg),delete t._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(t){return t?t instanceof L.MarkerClusterGroup?t=t._topClusterLevel.getAllChildMarkers():t instanceof L.LayerGroup?t=t._layers:t instanceof L.MarkerCluster?t=t.getAllChildMarkers():t instanceof L.Marker&&(t=[t]):t=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(t),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(t),this},_flagParentsIconsNeedUpdate:function(t){var e,i;for(e in t)for(i=t[e].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshSingleMarkerModeMarkers:function(t){var e,i;for(e in t)i=t[e],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(t,e){var i=this.options.icon;return L.setOptions(i,t),this.setIcon(i),e&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),p.MarkerClusterGroup=M,p.MarkerCluster=C,Object.defineProperty(p,"__esModule",{value:!0})})})(S,S.exports);const Z={id:"map"},I=b({__name:"index",setup(P){let d=null,p=null;const M=()=>{d=v.map("map",{crs:v.CRS.EPSG3857,center:[30.5217,114.3948],zoom:18}),v.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:k}).addTo(d),v.tileLayer("http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=55b4d4eaef95384c946e9bd1b99c5610",{noWrap:!0,attribution:k}).addTo(d);const C=v.markerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,zoomToBoundsOnClick:!1});function t(){for(let i=0;i<100;i++){const r=v.marker(e(d));C.addLayer(r)}return!1}function e(i){const r=i.getBounds(),n=r.getSouthWest(),s=r.getNorthEast(),o=s.lng-n.lng,a=s.lat-n.lat;return v.latLng(n.lat+a*Math.random(),n.lng+o*Math.random())}C.on("clustermouseover",function(i){d&&(p&&(d.removeLayer(p),p=null),p=v.polygon(i.layer.getConvexHull()),d.addLayer(p))}),C.on("clustermouseout",function(){d&&p&&(d.removeLayer(p),p=null)}),d.on("zoomend",function(){d&&p&&(d.removeLayer(p),p=null)}),t(),d.addLayer(C)};return O(()=>{M()}),G(()=>{d&&(d.remove(),d=null)}),(C,t)=>(A(),B("div",Z))}});const D=z(I,[["__scopeId","data-v-619f3cfa"]]);export{D as default};
