import{s as t}from"./index-BF2fBoPb.js";async function s(e){const a=await t.get("/system/organization/page",{params:e});return a.data.code===0?a.data.data:Promise.reject(new Error(a.data.message))}async function n(e){const a=await t.get("/system/organization",{params:e});return a.data.code===0&&a.data.data?a.data.data:Promise.reject(new Error(a.data.message))}async function o(e){const a=await t.post("/system/organization",e);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}async function i(e){const a=await t.put("/system/organization",e);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}async function d(e){const a=await t.delete("/system/organization/"+e);return a.data.code===0?a.data.message:Promise.reject(new Error(a.data.message))}export{o as a,n as l,s as p,d as r,i as u};
