import{a4 as t}from"./app-osJNylK3.js";var a={provider:"Waline",dark:"auto",serverURL:"https://blog-comment-kelegele.vercel.app/",requiredMeta:["nick","mail"],wordLimit:[3,1e3]};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-osJNylK3.js").then(r=>r.a5),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}