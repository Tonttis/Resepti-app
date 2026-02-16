import{a as R,f as z,c as Qr}from"../chunks/Dz7pCa6H.js";import"../chunks/D7lsop31.js";import{o as Wr}from"../chunks/C3BLZL5R.js";import{n as ve,z as Je,M as Xr,l as Ve,v as Zr,t as $r,g as r,w as et,x as rt,y as dr,A as Ge,o as ze,V as tt,at,ad as cr,i as ye,m as Ze,av as it,s as ot,aw as gr,ax as nt,ay as br,ar as er,az as st,a1 as ur,aA as lt,aB as dt,aC as C,aD as ge,j as hr,p as _r,aE as Ke,a0 as xr,aF as ct,aG as ut,aq as vt,k as ft,W as mt,aH as pt,aI as gt,aJ as bt,aK as ht,aL as _t,aM as xt,aN as yt,aO as wt,b as x,Z as kt,aP as Et,C as Tt,aQ as St,aR as Rt,G as Ct,I as s,K as l,J as o,ae as vr,aS as n,F as re,aT as Le,D as At,aU as Nt}from"../chunks/BTXrJkxh.js";import{s as T,e as I}from"../chunks/1vzc476d.js";import{i as ie}from"../chunks/9tYRfuwp.js";import{i as It}from"../chunks/DE5GKAog.js";import"../chunks/ByZMWdq-.js";function De(e,t){return t}function zt(e,t,i){for(var u=[],m=t.length,a,v=t.length,y=0;y<m;y++){let V=t[y];_r(V,()=>{if(a){if(a.pending.delete(V),a.done.add(V),a.pending.size===0){var S=e.outrogroups;$e(er(a.done)),S.delete(a),S.size===0&&(e.outrogroups=null)}}else v-=1},!1)}if(v===0){var p=u.length===0&&i!==null;if(p){var k=i,b=k.parentNode;vt(b),b.append(k),e.items.clear()}$e(t,!p)}else a={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(a)}function $e(e,t=!0){for(var i=0;i<e.length;i++)ft(e[i],t)}var fr;function Se(e,t,i,u,m,a=null){var v=e,y=new Map,p=(t&gr)!==0;if(p){var k=e;v=ve?Je(Xr(k)):k.appendChild(Ve())}ve&&Zr();var b=null,V=nt(()=>{var g=i();return br(g)?g:g==null?[]:er(g)}),S,D=!0;function oe(){d.fallback=b,Lt(d,S,v,t,u),b!==null&&(S.length===0?(b.f&ge)===0?hr(b):(b.f^=ge,Ce(b,null,v)):_r(b,()=>{b=null}))}var G=$r(()=>{S=r(V);var g=S.length;let ne=!1;if(ve){var se=et(v)===rt;se!==(g===0)&&(v=dr(),Je(v),Ge(!1),ne=!0)}for(var U=new Set,te=ye,le=ot(),P=0;P<g;P+=1){ve&&ze.nodeType===tt&&ze.data===at&&(v=ze,ne=!0,Ge(!1));var ae=S[P],de=u(ae,P),H=D?null:y.get(de);H?(H.v&&cr(H.v,ae),H.i&&cr(H.i,P),le&&te.unskip_effect(H.e)):(H=Dt(y,D?v:fr??=Ve(),ae,de,P,m,t,i),D||(H.e.f|=ge),y.set(de,H)),U.add(de)}if(g===0&&a&&!b&&(D?b=Ze(()=>a(v)):(b=Ze(()=>a(fr??=Ve())),b.f|=ge)),g>U.size&&it(),ve&&g>0&&Je(dr()),!D)if(le){for(const[xe,Ae]of y)U.has(xe)||te.skip_effect(Ae.e);te.oncommit(oe),te.ondiscard(()=>{})}else oe();ne&&Ge(!0),r(V)}),d={effect:G,items:y,outrogroups:null,fallback:b};D=!1,ve&&(v=ze)}function Re(e){for(;e!==null&&(e.f&ct)===0;)e=e.next;return e}function Lt(e,t,i,u,m){var a=(u&ut)!==0,v=t.length,y=e.items,p=Re(e.effect.first),k,b=null,V,S=[],D=[],oe,G,d,g;if(a)for(g=0;g<v;g+=1)oe=t[g],G=m(oe,g),d=y.get(G).e,(d.f&ge)===0&&(d.nodes?.a?.measure(),(V??=new Set).add(d));for(g=0;g<v;g+=1){if(oe=t[g],G=m(oe,g),d=y.get(G).e,e.outrogroups!==null)for(const H of e.outrogroups)H.pending.delete(d),H.done.delete(d);if((d.f&ge)!==0)if(d.f^=ge,d===p)Ce(d,null,i);else{var ne=b?b.next:p;d===e.effect.last&&(e.effect.last=d.prev),d.prev&&(d.prev.next=d.next),d.next&&(d.next.prev=d.prev),he(e,b,d),he(e,d,ne),Ce(d,ne,i),b=d,S=[],D=[],p=Re(b.next);continue}if((d.f&Ke)!==0&&(hr(d),a&&(d.nodes?.a?.unfix(),(V??=new Set).delete(d))),d!==p){if(k!==void 0&&k.has(d)){if(S.length<D.length){var se=D[0],U;b=se.prev;var te=S[0],le=S[S.length-1];for(U=0;U<S.length;U+=1)Ce(S[U],se,i);for(U=0;U<D.length;U+=1)k.delete(D[U]);he(e,te.prev,le.next),he(e,b,te),he(e,le,se),p=se,b=le,g-=1,S=[],D=[]}else k.delete(d),Ce(d,p,i),he(e,d.prev,d.next),he(e,d,b===null?e.effect.first:b.next),he(e,b,d),b=d;continue}for(S=[],D=[];p!==null&&p!==d;)(k??=new Set).add(p),D.push(p),p=Re(p.next);if(p===null)continue}(d.f&ge)===0&&S.push(d),b=d,p=Re(d.next)}if(e.outrogroups!==null){for(const H of e.outrogroups)H.pending.size===0&&($e(er(H.done)),e.outrogroups?.delete(H));e.outrogroups.size===0&&(e.outrogroups=null)}if(p!==null||k!==void 0){var P=[];if(k!==void 0)for(d of k)(d.f&Ke)===0&&P.push(d);for(;p!==null;)(p.f&Ke)===0&&p!==e.fallback&&P.push(p),p=Re(p.next);var ae=P.length;if(ae>0){var de=(u&gr)!==0&&v===0?i:null;if(a){for(g=0;g<ae;g+=1)P[g].nodes?.a?.measure();for(g=0;g<ae;g+=1)P[g].nodes?.a?.fix()}zt(e,P,de)}}a&&xr(()=>{if(V!==void 0)for(d of V)d.nodes?.a?.apply()})}function Dt(e,t,i,u,m,a,v,y){var p=(v&lt)!==0?(v&dt)===0?C(i,!1,!1):ur(i):null,k=(v&st)!==0?ur(m):null;return{v:p,i:k,e:Ze(()=>(a(t,p??i,k??m,y),()=>{e.delete(u)}))}}function Ce(e,t,i){if(e.nodes)for(var u=e.nodes.start,m=e.nodes.end,a=t&&(t.f&ge)===0?t.nodes.start:i;u!==null;){var v=mt(u);if(a.before(u),u===m)return;u=v}}function he(e,t,i){t===null?e.effect.first=i:t.next=i,i===null?e.effect.last=t:i.prev=t}function yr(e){var t,i,u="";if(typeof e=="string"||typeof e=="number")u+=e;else if(typeof e=="object")if(Array.isArray(e)){var m=e.length;for(t=0;t<m;t++)e[t]&&(i=yr(e[t]))&&(u&&(u+=" "),u+=i)}else for(i in e)e[i]&&(u&&(u+=" "),u+=i);return u}function Mt(){for(var e,t,i=0,u="",m=arguments.length;i<m;i++)(e=arguments[i])&&(t=yr(e))&&(u&&(u+=" "),u+=t);return u}function mr(e){return typeof e=="object"?Mt(e):e??""}function Ot(e,t,i){var u=e==null?"":""+e;return u===""?null:u}function Me(e,t,i,u,m,a){var v=e.__className;if(ve||v!==i||v===void 0){var y=Ot(i);(!ve||y!==e.getAttribute("class"))&&(y==null?e.removeAttribute("class"):e.className=y),e.__className=i}return a}const Pt=Symbol("is custom element"),jt=Symbol("is html"),qt=ht?"link":"LINK";function ue(e){if(ve){var t=!1,i=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var u=e.value;we(e,"value",null),e.value=u}if(e.hasAttribute("checked")){var m=e.checked;we(e,"checked",null),e.checked=m}}};e.__on_r=i,xr(i),pt()}}function we(e,t,i,u){var m=Ut(e);ve&&(m[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===qt)||m[t]!==(m[t]=i)&&(t==="loading"&&(e[gt]=i),i==null?e.removeAttribute(t):typeof i!="string"&&Ht(e).includes(t)?e[t]=i:e.setAttribute(t,i))}function Ut(e){return e.__attributes??={[Pt]:e.nodeName.includes("-"),[jt]:e.namespaceURI===bt}}var pr=new Map;function Ht(e){var t=e.getAttribute("is")||e.nodeName,i=pr.get(t);if(i)return i;pr.set(t,i=[]);for(var u,m=e,a=Element.prototype;a!==m;){u=xt(m);for(var v in u)u[v].set&&i.push(v);m=_t(m)}return i}function X(e,t,i=t){var u=new WeakSet;yt(e,"input",async m=>{var a=m?e.defaultValue:e.value;if(a=Ye(e)?Qe(a):a,i(a),ye!==null&&u.add(ye),await wt(),a!==(a=t())){var v=e.selectionStart,y=e.selectionEnd,p=e.value.length;if(e.value=a??"",y!==null){var k=e.value.length;v===y&&y===p&&k>p?(e.selectionStart=k,e.selectionEnd=k):(e.selectionStart=v,e.selectionEnd=Math.min(y,k))}}}),(ve&&e.defaultValue!==e.value||x(t)==null&&e.value)&&(i(Ye(e)?Qe(e.value):e.value),ye!==null&&u.add(ye)),kt(()=>{var m=t();if(e===document.activeElement){var a=Et??ye;if(u.has(a))return}Ye(e)&&m===Qe(e.value)||e.type==="date"&&!m&&!e.value||m!==e.value&&(e.value=m??"")})}function Ye(e){var t=e.type;return t==="number"||t==="range"}function Qe(e){return e===""?null:+e}function We(e){return function(...t){var i=t[0];return i.stopPropagation(),e?.apply(this,t)}}function Xe(e,t){var i=e.$$events?.[t.type],u=br(i)?i.slice():i==null?[]:[i];for(var m of u)m.call(this,t)}var Ft=z('<div class="user-actions"><div class="user-info"><span class="avatar"> </span> <span class="user-name"> </span></div> <button class="create-button">+ New Recipe</button> <button class="logout-button">Logout</button></div>'),Bt=z('<button class="login-button">Sign In</button>'),Jt=z('<p class="login-prompt">Sign in to create recipes</p>'),Vt=z('<button class="button">Create Recipe</button>'),Gt=z('<div class="empty-state"><div class="empty-icon">🍳</div> <h2 class="empty-title"> </h2> <p class="empty-description"> </p> <!></div>'),Kt=z('<div class="recipe-image"><img/></div>'),Yt=z("<span>★</span>"),Qt=z('<div class="recipe-card" role="button" tabindex="0"><!> <div class="recipe-content"><h3 class="recipe-title"> </h3> <p class="recipe-description"> </p> <div class="recipe-meta"><div class="meta-item"> </div> <div class="meta-item"> </div></div> <div class="recipe-stats"><div class="rating"></div> <div class="comment-count"> </div></div></div></div>'),Wt=z('<div class="recipes-grid"></div>'),Xt=z('<div class="detail-image"><img/></div>'),Zt=z("<span>★</span>"),$t=z("<li> </li>"),ea=z('<div class="comment-input-section"><textarea placeholder="Add a comment..." class="comment-textarea"></textarea> <button class="button submit-button">Post Comment</button></div>'),ra=z('<p class="login-prompt">Sign in to comment</p>'),ta=z('<div class="comment"><div class="comment-avatar"> </div> <div class="comment-body"><div class="comment-author"> </div> <div class="comment-text"> </div> <div class="comment-date"> </div></div></div>'),aa=z('<div class="detail-actions"><button class="button edit-button">Edit Recipe</button> <button class="button delete-button">Delete Recipe</button></div>'),ia=z('<div class="modal-overlay" role="dialog"><div class="modal-content"><button class="close-button">×</button> <!> <div class="detail-content"><h2 class="detail-title"> </h2> <p class="detail-author"> </p> <div class="detail-meta"><div class="meta-item"> </div> <div class="meta-item"> </div> <div class="rating-large"><!> <span> </span></div></div> <p class="detail-description"> </p> <div class="detail-section"><h3>Ingredients</h3> <ul class="ingredients-list"></ul></div> <div class="detail-section"><h3>Instructions</h3> <div class="instructions-text"> </div></div> <hr class="divider"/> <div class="detail-section"><h3> </h3> <!> <div class="comments-list"></div></div> <hr class="divider"/> <!></div></div></div>'),oa=z('<div class="auth-error"> </div>'),na=z('<form class="auth-form"><input type="email" placeholder="Email" class="input" required=""/> <input type="password" placeholder="Password" class="input" required=""/> <button type="submit" class="button"> </button></form>'),sa=z('<form class="auth-form"><input type="text" placeholder="Name (optional)" class="input"/> <input type="email" placeholder="Email" class="input" required=""/> <input type="password" placeholder="Password" class="input" required=""/> <input type="password" placeholder="Confirm Password" class="input" required=""/> <button type="submit" class="button"> </button></form>'),la=z('<div class="modal-overlay" role="dialog"><div class="modal-content auth-modal"><button class="close-button">×</button> <div class="auth-tabs"><button>Login</button> <button>Register</button></div> <!> <!></div></div>'),da=z('<div class="modal-overlay" role="dialog"><div class="modal-content create-modal"><button class="close-button">×</button> <h2 class="modal-title">Create New Recipe</h2> <form class="create-form"><div class="form-group"><label for="title">Recipe Title *</label> <input type="text" id="title" class="input" required="" placeholder="e.g., Homemade Pasta Carbonara"/></div> <div class="form-group"><label for="description">Description *</label> <textarea id="description" class="textarea" required="" placeholder="Brief description of your recipe" rows="3"></textarea></div> <div class="form-group"><label for="ingredients">Ingredients *</label> <textarea id="ingredients" class="textarea" required="" placeholder="Enter each ingredient on a new line" rows="6"></textarea></div> <div class="form-group"><label for="instructions">Instructions *</label> <textarea id="instructions" class="textarea" required="" placeholder="Step-by-step cooking instructions" rows="6"></textarea></div> <div class="form-row"><div class="form-group"><label for="cookTime">Cook Time (minutes) *</label> <input type="number" id="cookTime" class="input" required="" min="1"/></div> <div class="form-group"><label for="servings">Servings *</label> <input type="number" id="servings" class="input" required="" min="1"/></div></div> <div class="form-group"><label for="imageUrl">Image URL (optional)</label> <input type="url" id="imageUrl" class="input" placeholder="https://example.com/recipe-image.jpg"/></div> <div class="form-actions"><button type="button" class="button button-secondary">Cancel</button> <button type="submit" class="button">Create Recipe</button></div></form></div></div>'),ca=z(`<div class="container"><header class="header"><div class="header-content"><h1 class="logo"><span class="chef-icon">👨‍🍳</span> RecipeHub</h1> <div class="search-section"><input type="text" placeholder="Search by ingredients or recipe name..." class="search-input"/></div> <!></div></header> <main class="main-content"><!></main> <!> <!> <!> <style>.header {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #f97316;
    }

    .chef-icon {
      font-size: 2rem;
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    .avatar {
      width: 2.5rem;
      height: 2.5rem;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      border-radius: 50%;
    }

    .user-name {
      font-weight: 500;
    }

    .logout-button {
      padding: 0.5rem 1rem;
      background: #ef4444;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .login-button {
      padding: 0.5rem 1.5rem;
      background: #f97316;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .search-section {
      flex: 1;
      max-width: 600px;
      margin: 0 1.5rem;
    }

    .search-input {
      padding: 0.875rem 1.25rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-size: 1rem;
      width: 100%;
    }

    .search-input:focus {
      outline: none;
      border-color: #f97316;
    }

    .main-content {
      padding: 2.5rem 0;
    }

    .empty-state {
      text-align: center;
      padding: 5rem 2rem;
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .empty-title {
      font-size: 1.5rem;
      color: #374151;
      margin-bottom: 0.5rem;
    }

    .empty-description {
      color: #6b7280;
      margin-bottom: 1rem;
    }

    .recipes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .recipe-card {
      background: white;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
      cursor: pointer;
    }

    .recipe-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .recipe-image {
      width: 100%;
      aspect-ratio: 16/9;
      overflow: hidden;
      background: #f8f9fa;
    }

    .recipe-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .recipe-content {
      padding: 1.5rem;
    }

    .recipe-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.75rem;
      line-height: 1.4;
      padding: 0.25rem 0;
    }

    .recipe-description {
      color: #6b7280;
      margin-bottom: 1rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 0.25rem 0;
    }

    .recipe-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      color: #6b7280;
      margin-bottom: 0.75rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .rating {
      display: flex;
      gap: 0.25rem;
    }

    .star-filled {
      color: #fbbf24;
    }

    .star-empty {
      color: #d1d5db;
    }

    .comment-count {
      font-size: 1.5rem;
    }

    .recipe-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 2rem;
    }

    .modal-content {
      background: white;
      border-radius: 1rem;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #6b7280;
      color: white;
      border: none;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .detail-image {
      width: 100%;
      max-height: 50vh;
      overflow: auto;
      background: #f8f9fa;
    }

    .detail-image img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }

    .detail-content {
      padding: 2.5rem;
    }

    .detail-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 0.75rem;
      line-height: 1.2;
      padding: 0.5rem 0;
    }

    .detail-author {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
      padding: 0 0.5rem;
    }

    .detail-meta {
      display: flex;
      gap: 1.5rem;
      margin-bottom: 1.75rem;
      font-size: 1rem;
      padding: 0.5rem 0;
    }

    .rating-large {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .detail-description {
      color: #374151;
      line-height: 1.7;
      margin-bottom: 1.75rem;
      padding: 0.5rem 0;
    }

    .detail-section {
      margin-bottom: 2rem;
    }

    .detail-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1rem;
      padding: 0.25rem 0;
    }

    .divider {
      border: none;
      border-top: 1px solid #e5e7eb;
      margin: 1.5rem 0;
    }

    .ingredients-list {
      list-style: none;
      padding: 0;
      background: #f8f9fa;
      border-radius: 0.5rem;
      padding: 2rem;
    }

    .ingredients-list li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #e5e7eb;
      display: flex;
      gap: 0.5rem;
      line-height: 1.6;
    }

    .ingredients-list li:last-child {
      border-bottom: none;
    }

    .instructions-text {
      background: #f8f9fa;
      border-radius: 0.5rem;
      padding: 2rem;
      white-space: pre-line;
      line-height: 1.7;
    }

    .rating-input {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      align-items: center;
    }

    .star-button {
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      color: #d1d5db;
      transition: transform 0.1s;
      padding: 0.25rem;
    }

    .star-button:hover {
      transform: scale(1.2);
    }

    .star-button.selected {
      color: #fbbf24;
    }

    .submit-button {
      margin-left: 1rem;
      padding: 0.75rem 1.5rem;
    }

    .comment-input-section {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.5rem;
    }

    .comment-textarea {
      flex: 1;
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-family: inherit;
      font-size: 0.875rem;
      resize: vertical;
      line-height: 1.5;
    }

    .comment-textarea:focus {
      outline: none;
      border-color: #f97316;
    }

    .comments-list {
      max-height: 350px;
      overflow-y: auto;
    }

    .comment {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .comment-avatar {
      width: 2.5rem;
      height: 2.5rem;
      background: linear-gradient(135deg, #f97316, #ea580c);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .comment-body {
      flex: 1;
    }

    .comment-author {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.25rem;
    }

    .comment-text {
      color: #374151;
      line-height: 1.6;
      padding: 0.25rem 0;
    }

    .comment-date {
      color: #6b7280;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }

    .detail-actions {
      display: flex;
      gap: 0.5rem;
      justify-content: flex-end;
      padding-top: 1rem;
    }

    .edit-button {
      background: #3b82f6;
      color: white;
    }

    .delete-button {
      background: #ef4444;
      color: white;
    }

    .auth-modal {
      max-width: 400px;
    }

    .auth-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .tab-button {
      flex: 1;
      padding: 0.5rem 1rem;
      background: transparent;
      border: 2px solid #e5e7eb;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .tab-button.active {
      background: #f97316;
      color: white;
      border-color: #f97316;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .auth-error {
      background: #fef2f2;
      color: #ef4444;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      margin-bottom: 1rem;
    }

    .login-prompt {
      text-align: center;
      color: #6b7280;
      padding: 1rem;
    }

    /* Additional styles */
    .user-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .create-button {
      padding: 0.5rem 1rem;
      background: #f97316;
      color: white;
      border: none;
      border-radius: 0.25rem;
      cursor: pointer;
      font-weight: 500;
    }

    .button-secondary {
      background: #9ca3af;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 1.5rem;
    }

    .create-modal {
      max-width: 700px;
      max-height: 90vh;
      overflow-y: auto;
    }

    .create-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: #374151;
      font-size: 0.875rem;
    }

    .textarea {
      padding: 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 0.5rem;
      font-family: inherit;
      font-size: 1rem;
      resize: vertical;
      line-height: 1.5;
    }

    .textarea:focus {
      outline: none;
      border-color: #f97316;
      box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1rem;
    }

    .login-prompt {
      color: #6b7280;
      margin-top: 1rem;
    }</style></div>`);function _a(e,t){Tt(t,!1);let i=[],u=C([]),m=C(""),a=C(null),v=C(null),y=C(!1),p=C(!1),k=C(""),b=C(""),V=C(""),S=C(""),D=C(""),oe=C(""),G=C(""),d=C(!1),g=C(!0),ne=C(""),se=C(""),U=C(""),te=C(""),le=C(""),P=C(30),ae=C(4),de=C("");async function H(){try{const c=await(await fetch("/api/auth/me")).json();c.authenticated&&c.user?n(v,c.user):n(v,null)}catch(f){console.error("Error checking session:",f),n(v,null)}}async function xe(){try{i=await(await fetch("/api/recipes")).json(),Ae()}catch(f){console.error("Error fetching recipes:",f),i=[]}}function Ae(){if(!r(m)){n(u,i);return}const f=r(m).toLowerCase();n(u,i.filter(c=>c.ingredients.toLowerCase().includes(f)||c.title.toLowerCase().includes(f)))}function wr(f){n(a,f)}function Ne(){n(a,null)}async function kr(f){f.preventDefault(),n(d,!0),n(G,"");try{const c=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r(k),password:r(b)})}),_=await c.json();c.ok?(n(v,_.user),n(y,!1),n(k,""),n(b,"")):n(G,_.error||"Login failed")}catch{n(G,"An error occurred")}finally{n(d,!1)}}async function Er(f){if(f.preventDefault(),n(d,!0),n(G,""),r(D)!==r(oe)){n(G,"Passwords do not match"),n(d,!1);return}try{const c=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r(S),password:r(D),name:r(V)||void 0})}),_=await c.json();c.ok?(n(v,_.user),n(y,!1),n(V,""),n(S,""),n(D,""),n(oe,"")):n(G,_.error||"Registration failed")}catch{n(G,"An error occurred")}finally{n(d,!1)}}async function Tr(){try{await fetch("/api/auth/logout",{method:"POST"}),n(v,null)}catch(f){console.error("Logout error:",f)}}async function Sr(){if(!(!r(a)||!r(v)||!r(ne).trim()))try{if((await fetch(`/api/recipes/${r(a).id}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r(ne)})})).ok){n(ne,""),await xe();const c=i.find(_=>_.id===r(a).id);c&&c.comments&&n(a,{...r(a),comments:c.comments})}}catch(f){console.error("Error submitting comment:",f)}}async function Rr(f){if(confirm("Are you sure you want to delete this recipe?"))try{(await fetch(`/api/recipes/${f}`,{method:"DELETE"})).ok&&(Ne(),await xe())}catch(c){console.error("Error deleting recipe:",c)}}function Cr(f){alert("Edit functionality coming soon!"),Ne()}async function Ar(f){if(f.preventDefault(),!!r(v))try{const c=await fetch("/api/recipes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r(se),description:r(U),ingredients:r(te),instructions:r(le),cookTime:parseInt(r(P)),servings:parseInt(r(ae)),imageUrl:r(de)||void 0})});if(c.ok)n(p,!1),n(se,""),n(U,""),n(te,""),n(le,""),n(P,30),n(ae,4),n(de,""),await xe();else{const _=await c.json();alert(_.error||"Failed to create recipe")}}catch(c){console.error("Error creating recipe:",c),alert("An error occurred while creating the recipe")}}function Oe(){n(p,!1),n(se,""),n(U,""),n(te,""),n(le,""),n(P,30),n(ae,4),n(de,"")}Wr(()=>{H(),xe()}),St(()=>r(m),()=>{r(m)!==void 0&&Ae()}),Rt(),It();var Pe=ca(),je=s(Pe),rr=s(je),qe=l(s(rr),2),tr=s(qe);ue(tr),o(qe);var Nr=l(qe,2);{var Ir=f=>{var c=Ft(),_=s(c),h=s(_),M=s(h,!0);o(h);var J=l(h,2),Z=s(J,!0);o(J),o(_);var F=l(_,2),$=l(F,2);o(c),re(O=>{T(M,O),T(Z,(r(v),x(()=>r(v).name||r(v).email)))},[()=>(r(v),x(()=>r(v).name?.[0]||r(v).email[0].toUpperCase()))]),I("click",F,()=>n(p,!0)),I("click",$,Tr),R(f,c)},zr=f=>{var c=Bt();I("click",c,()=>n(y,!0)),R(f,c)};ie(Nr,f=>{r(v)?f(Ir):f(zr,!1)})}o(rr),o(je);var Ue=l(je,2),Lr=s(Ue);{var Dr=f=>{var c=Gt(),_=l(s(c),2),h=s(_,!0);o(_);var M=l(_,2),J=s(M,!0);o(M);var Z=l(M,2);{var F=O=>{var Y=Jt();R(O,Y)},$=O=>{var Y=Vt();I("click",Y,()=>n(p,!0)),R(O,Y)};ie(Z,O=>{r(v)?O($,!1):O(F)})}o(c),re(()=>{T(h,r(m)?"No recipes found":"No recipes yet"),T(J,r(m)?"Try different keywords":"Be the first to share a recipe!")}),R(f,c)},Mr=f=>{var c=Wt();Se(c,5,()=>r(u),_=>_,(_,h)=>{var M=Qt(),J=s(M);{var Z=me=>{var E=Kt(),be=s(E);o(E),re(()=>{we(be,"src",(r(h),x(()=>r(h).imageUrl))),we(be,"alt",(r(h),x(()=>r(h).title)))}),R(me,E)};ie(J,me=>{r(h),x(()=>r(h).imageUrl)&&me(Z)})}var F=l(J,2),$=s(F),O=s($,!0);o($);var Y=l($,2),ce=s(Y,!0);o(Y);var A=l(Y,2),N=s(A),j=s(N);o(N);var Q=l(N,2),W=s(Q);o(Q),o(A);var ee=l(A,2),B=s(ee);Se(B,4,()=>({count:5}),De,(me,E)=>{var be=Yt();re(()=>Me(be,1,mr((r(h),x(()=>E<=r(h).avgRating?"star-filled":"star-empty"))))),R(me,be)}),o(B);var fe=l(B,2),K=s(fe);o(fe),o(ee),o(F),o(M),re(()=>{T(O,(r(h),x(()=>r(h).title))),T(ce,(r(h),x(()=>r(h).description))),T(j,`⏱️ ${r(h),x(()=>r(h).cookTime)??""} min`),T(W,`👥 ${r(h),x(()=>r(h).servings)??""} servings`),T(K,`💬 ${r(h),x(()=>r(h)._count.comments)??""}`)}),I("click",M,()=>wr(r(h))),R(_,M)}),o(c),R(f,c)};ie(Lr,f=>{r(u),x(()=>r(u).length===0)?f(Dr):f(Mr,!1)})}o(Ue);var ar=l(Ue,2);{var Or=f=>{var c=ia(),_=s(c),h=s(_),M=l(h,2);{var J=L=>{var w=Xt(),q=s(w);o(w),re(()=>{we(q,"src",(r(a),x(()=>r(a).imageUrl))),we(q,"alt",(r(a),x(()=>r(a).title)))}),R(L,w)};ie(M,L=>{r(a),x(()=>r(a).imageUrl)&&L(J)})}var Z=l(M,2),F=s(Z),$=s(F,!0);o(F);var O=l(F,2),Y=s(O);o(O);var ce=l(O,2),A=s(ce),N=s(A);o(A);var j=l(A,2),Q=s(j);o(j);var W=l(j,2),ee=s(W);Se(ee,0,()=>({count:5}),De,(L,w)=>{var q=Zt();re(()=>Me(q,1,mr((r(a),x(()=>w<=r(a).avgRating?"star-filled":"star-empty"))))),R(L,q)});var B=l(ee,2),fe=s(B);o(B),o(W),o(ce);var K=l(ce,2),me=s(K,!0);o(K);var E=l(K,2),be=l(s(E),2);Se(be,5,()=>(r(a),x(()=>r(a).ingredients.split(`
`))),De,(L,w)=>{var q=Qr(),pe=At(q);{var ke=_e=>{var Ee=$t(),Te=s(Ee,!0);o(Ee),re(()=>T(Te,r(w))),R(_e,Ee)},Ie=Nt(()=>(r(w),x(()=>r(w).trim())));ie(pe,_e=>{r(Ie)&&_e(ke)})}R(L,q)}),o(be),o(E);var He=l(E,2),or=l(s(He),2),Ur=s(or,!0);o(or),o(He);var Fe=l(He,4),Be=s(Fe),Hr=s(Be);o(Be);var nr=l(Be,2);{var Fr=L=>{var w=ea(),q=s(w);Le(q);var pe=l(q,2);o(w),X(q,()=>r(ne),ke=>n(ne,ke)),I("click",pe,Sr),R(L,w)},Br=L=>{var w=ra();R(L,w)};ie(nr,L=>{r(v)?L(Fr):L(Br,!1)})}var sr=l(nr,2);Se(sr,5,()=>(r(a),x(()=>r(a).comments)),De,(L,w)=>{var q=ta(),pe=s(q),ke=s(pe,!0);o(pe);var Ie=l(pe,2),_e=s(Ie),Ee=s(_e,!0);o(_e);var Te=l(_e,2),Gr=s(Te,!0);o(Te);var lr=l(Te,2),Kr=s(lr,!0);o(lr),o(Ie),o(q),re(Yr=>{T(ke,(r(w),x(()=>r(w).user.name?.[0]||r(w).user.email[0]))),T(Ee,(r(w),x(()=>r(w).user.name||r(w).user.email))),T(Gr,(r(w),x(()=>r(w).text))),T(Kr,Yr)},[()=>(r(w),x(()=>new Date(r(w).createdAt).toLocaleDateString()))]),R(L,q)}),o(sr),o(Fe);var Jr=l(Fe,4);{var Vr=L=>{var w=aa(),q=s(w),pe=l(q,2);o(w),I("click",q,()=>Cr(r(a))),I("click",pe,()=>Rr(r(a).id)),R(L,w)};ie(Jr,L=>{r(v),r(a),x(()=>r(v)&&r(a).canEdit)&&L(Vr)})}o(Z),o(_),o(c),re(()=>{T($,(r(a),x(()=>r(a).title))),T(Y,`By ${r(a),x(()=>r(a).author.name||r(a).author.email)??""}`),T(N,`⏱️ ${r(a),x(()=>r(a).cookTime)??""} minutes`),T(Q,`👥 ${r(a),x(()=>r(a).servings)??""} servings`),T(fe,`(${r(a),x(()=>r(a)._count.ratings)??""})`),T(me,(r(a),x(()=>r(a).description))),T(Ur,(r(a),x(()=>r(a).instructions))),T(Hr,`Comments (${r(a),x(()=>r(a).comments.length)??""})`)}),I("click",h,Ne),I("click",_,We(function(L){Xe.call(this,t,L)})),I("click",c,Ne),R(f,c)};ie(ar,f=>{r(a)&&f(Or)})}var ir=l(ar,2);{var Pr=f=>{var c=la(),_=s(c),h=s(_),M=l(h,2),J=s(M),Z=l(J,2);o(M);var F=l(M,2);{var $=A=>{var N=oa(),j=s(N,!0);o(N),re(()=>T(j,r(G))),R(A,N)};ie(F,A=>{r(G)&&A($)})}var O=l(F,2);{var Y=A=>{var N=na(),j=s(N);ue(j);var Q=l(j,2);ue(Q);var W=l(Q,2),ee=s(W,!0);o(W),o(N),re(()=>{W.disabled=r(d),T(ee,r(d)?"...":"Sign In")}),X(j,()=>r(k),B=>n(k,B)),X(Q,()=>r(b),B=>n(b,B)),I("submit",N,kr),R(A,N)},ce=A=>{var N=sa(),j=s(N);ue(j);var Q=l(j,2);ue(Q);var W=l(Q,2);ue(W);var ee=l(W,2);ue(ee);var B=l(ee,2),fe=s(B,!0);o(B),o(N),re(()=>{B.disabled=r(d),T(fe,r(d)?"...":"Create Account")}),X(j,()=>r(V),K=>n(V,K)),X(Q,()=>r(S),K=>n(S,K)),X(W,()=>r(D),K=>n(D,K)),X(ee,()=>r(oe),K=>n(oe,K)),I("submit",N,Er),R(A,N)};ie(O,A=>{r(g)?A(Y):A(ce,!1)})}o(_),o(c),re(()=>{Me(J,1,`tab-button ${r(g)?"active":""}`),Me(Z,1,`tab-button ${r(g)?"":"active"}`)}),I("click",h,()=>n(y,!1)),I("click",J,()=>n(g,!0)),I("click",Z,()=>n(g,!1)),I("click",_,We(function(A){Xe.call(this,t,A)})),I("click",c,()=>n(y,!1)),R(f,c)};ie(ir,f=>{r(y)&&f(Pr)})}var jr=l(ir,2);{var qr=f=>{var c=da(),_=s(c),h=s(_),M=l(h,4),J=s(M),Z=l(s(J),2);ue(Z),o(J);var F=l(J,2),$=l(s(F),2);Le($),o(F);var O=l(F,2),Y=l(s(O),2);Le(Y),o(O);var ce=l(O,2),A=l(s(ce),2);Le(A),o(ce);var N=l(ce,2),j=s(N),Q=l(s(j),2);ue(Q),o(j);var W=l(j,2),ee=l(s(W),2);ue(ee),o(W),o(N);var B=l(N,2),fe=l(s(B),2);ue(fe),o(B);var K=l(B,2),me=s(K);vr(2),o(K),o(M),o(_),o(c),I("click",h,Oe),X(Z,()=>r(se),E=>n(se,E)),X($,()=>r(U),E=>n(U,E)),X(Y,()=>r(te),E=>n(te,E)),X(A,()=>r(le),E=>n(le,E)),X(Q,()=>r(P),E=>n(P,E)),X(ee,()=>r(ae),E=>n(ae,E)),X(fe,()=>r(de),E=>n(de,E)),I("click",me,Oe),I("submit",M,Ar),I("click",_,We(function(E){Xe.call(this,t,E)})),I("click",c,Oe),R(f,c)};ie(jr,f=>{r(p)&&f(qr)})}vr(2),o(Pe),X(tr,()=>r(m),f=>n(m,f)),R(e,Pe),Ct()}export{_a as component};
