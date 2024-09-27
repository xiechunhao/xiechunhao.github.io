/*!  build: Vue Shop Vite 
     copyright: https://vuejs-core.cn/shop-vite   
     time: 2024-09-27 15:50:12 
 */
import c from"./index-LTkvlUT2.js";import{n as p}from"./index-6xtryadw.js";import{a0 as i}from"./vsv-echarts-DDaYnjiH.js";import{d as f,p as l,r as m,a7 as h,E as d,o as u,S as _,u as g}from"./vsv-element-plus-DDEqdpLt.js";const C=f({name:"DataScreenMap",__name:"DataScreenMap",setup(b){const t=l({tooltip:{trigger:"item"},grid:{top:"0%",left:"0%",right:"0%",bottom:"0%"}}),r=m(""),s=()=>{p({url:"https://unpkg.com/echarts@4.9.0/map/json/china.json",method:"get"}).then(({data:o})=>{r.value=o,i("china",r.value),t.geo={map:"china",type:"map",zoom:1.2,roam:!0,label:{show:!0,color:"#ffffff"},emphasis:{label:{show:!0,color:"#ffffff"},itemStyle:{areaColor:"#01022e"}},itemStyle:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"#01022e"},{offset:1,color:"#000"}]},shadowColor:"#00a1ff",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10}},t.series=[{type:"lines",coordinateSystem:"geo",zlevel:2,effect:{show:!0,period:6,trailLength:.7,symbol:"arrow",symbolSize:3},lineStyle:{width:.1,opacity:.5,curveness:.3},data:a}]})},e={台湾:[121.5135,25.0308],黑龙江:[127.9688,45.368],内蒙古:[110.3467,41.4899],吉林:[125.8154,44.2584],北京:[116.4551,40.2539],辽宁:[123.1238,42.1216],河北:[114.4995,38.1006],天津:[117.4219,39.4189],山西:[112.3352,37.9413],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],宁夏:[106.3586,38.1775],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],西藏:[91.11,29.97],四川:[103.9526,30.7617],重庆:[108.384366,30.439702],山东:[117.1582,36.8701],河南:[113.4668,34.6234],江苏:[118.8062,31.9208],安徽:[117.29,32.0581],湖北:[114.3896,30.6628],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],江西:[116.0046,28.6633],湖南:[113.0823,28.2568],贵州:[106.6992,26.7682],云南:[102.9199,25.4663],广东:[113.12244,23.009505],广西:[108.479,23.1152],海南:[110.3893,19.8516],上海:[121.4648,31.2891],香港:[114.109497,22.396428],澳门:[113.5440083,22.20167546],钓鱼岛:[112.071486,26.249452],赤尾屿:[116.271486,25.549452]},a=[];return Object.keys(e).forEach(o=>{a.push({coords:[[...e[o]],[117.1582,36.8701]]},{coords:[[117.1582,36.8701],[...e[o]]]},{coords:[[...e[o]],[116.4551,40.2539]]},{coords:[[116.4551,40.2539],[...e[o]]]})}),h(()=>{s()}),d(()=>{}),(o,w)=>{const n=c;return u(),_(n,{option:g(t)},null,8,["option"])}}});export{C as _};
