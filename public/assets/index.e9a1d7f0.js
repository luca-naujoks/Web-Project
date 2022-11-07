(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function w(t){return t.split(".").map(e=>parseInt(e,10).toString(2).padStart(8,"0"))}function E(t){return t.split(".").map(e=>parseInt(e,2).toString(10)).join(".")}function v(t){const n=Number(t.slice(1)),o=("1".repeat(n)+"0".repeat(32-n)).replace(/(.{8})/g,"$1.").slice(0,-1);return E(o)}function b(t,n){const e=w(t).join("");return(parseInt(e,2)+n).toString(2).padStart(32,"0").match(/.{1,8}/g).map(o=>parseInt(o,2)).join(".")}function L(t){for(let n=1;n<33;n++){const e=document.createElement("option"),o=`/${n.toString()}`;e.value=o,e.innerText=o,t.appendChild(e)}}function A(t){var o;const n=`
    <div class="subnets subnets-${t} mb-3">
      <div class="mt-1">
        <label for="subnet-${t}">Netzwerkname</label>
        <input type="text" id="subnet-${t}" name="subnet-${t}" />
      </div>
      <div class="mt-1">
        <label for="host-num-${t}">Anzahl Hosts</label>
        <input type="number" id="host-num-${t}" name="host-num-${t}" min="1" step="1" />
      </div>
      <div>
        <button
          type="button"
          id="remove-subnet-btn-${t}"
          class="inline-flex items-center border h-1/2 border-transparent bg-slate-600 p-2 text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          title="Subnet entfernen"
        >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
      </div>
    </div>`;(o=document.querySelector(".subnet-container"))==null||o.insertAdjacentHTML("afterbegin",n);const e=document.querySelector(`#remove-subnet-btn-${t}`);e==null||e.addEventListener("click",()=>{const r=document.querySelector(`.subnets-${t}`);r==null||r.remove()})}function H(t){document.querySelectorAll("td").forEach(e=>e.remove());const n=document.querySelector("tbody");t.forEach(e=>{const o=`
      <tr>
        <td>${e.networkName}</td>
        <td>${e.numReqHosts}</td>
        <td>${e.numAssignableIps}</td>
        <td>${e.cidr}</td>
        <td>${e.mask}</td>
        <td>${e.nid}</td>
        <td>${b(e.nid,1)}</td>
        <td>${b(e.broadcastIp,-1)}</td>
        <td>${e.broadcastIp}</td>
      </tr>
    `;n.innerHTML+=o})}const M=document.querySelector("#mask-select"),x=document.querySelector("#add-subnet-btn-1"),h=document.querySelector("form"),R=document.querySelector(".back-btn"),T=document.querySelector("#ip");L(M);let q=1;x.addEventListener("click",()=>{q++,A(q)});h.addEventListener("submit",B);R.addEventListener("click",()=>{var t,n,e;(t=document.querySelector("form"))==null||t.reset(),document.querySelectorAll(".subnets").forEach(o=>{o.getAttribute("data-firstInput")!=="Subnet hinzuf\xFCgen"&&o.remove()}),(n=document.querySelector(".form-container"))==null||n.classList.remove("hidden"),(e=document.querySelector(".table-container"))==null||e.classList.add("hidden")});function B(t){var r,s;if(t.preventDefault(),!h)return;let n=[];const e=new FormData(h);e.forEach((i,c)=>{c!=="ip"&&c!=="mask"&&!c.includes("host-num")&&n.push({networkName:i,numReqHosts:Number(e.get(`host-num-${c.at(-1)}`))})}),n=n.sort((i,c)=>c.numReqHosts-i.numReqHosts);const o=[];n.forEach((i,c)=>{let m=[];c===0?m=T.value.split("."):m=b(o[c-1].broadcastIp,1).split(".");let a="",d="";const y=1+Math.floor(Math.log(i.numReqHosts)/Math.log(2)),g=2**y,$=g-2,f=32-y,I=v(`/${f}`),S=v(`/${f}`).split(".");m.forEach((u,p)=>{a+=Number(u)&Number(S[p]),a+="."}),a=a.slice(0,-1);const k=a.split(".");S.forEach(u=>{d+=255^Number(u),d+="."}),d=d.slice(0,-1);let l="";k.forEach((u,p)=>{l+=Number(u)|Number(d.split(".")[p]),l+="."}),l=l.slice(0,-1);const N={networkName:i.networkName,numReqHosts:i.numReqHosts,numAssignableIps:$,totalIps:g,cidr:f,nid:a,mask:I,broadcastIp:l};o.push(N)}),H(o),(r=document.querySelector(".form-container"))==null||r.classList.add("hidden"),(s=document.querySelector(".table-container"))==null||s.classList.remove("hidden")}

