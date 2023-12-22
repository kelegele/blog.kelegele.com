import{a4 as t}from"./app-D47_Z1PS.js";var a={provider:"Waline",dark:"auto",serverURL:"https://blog-comment-kelegele.vercel.app/",requiredMeta:["nick"],login:"force",wordLimit:[5,500]};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-D47_Z1PS.js").then(r=>r.a5),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}