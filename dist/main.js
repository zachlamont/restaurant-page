(()=>{"use strict";console.log("Zach's Restaurant page"),window.addEventListener("load",(function(){switch(document.title){case"Menu":!function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("background-image");const n=document.createElement("header"),a=document.createElement("div");a.classList.add("home");const d=document.createElement("a");d.setAttribute("href","./index.html"),d.innerText="HOME",a.appendChild(d);const o=document.createElement("nav"),c=document.createElement("ul"),i=document.createElement("li"),l=document.createElement("a");l.setAttribute("id","menu-button"),l.setAttribute("href","./menu.html"),l.innerText="MENU",i.appendChild(l),c.appendChild(i);const m=document.createElement("li"),r=document.createElement("a");r.setAttribute("id","menu-button"),r.setAttribute("href","./about.html"),r.innerText="ABOUT",m.appendChild(r),c.appendChild(m);const s=document.createElement("li"),u=document.createElement("a");u.setAttribute("id","menu-button"),u.setAttribute("href","./contact.html"),u.innerText="CONTACT",s.appendChild(u),c.appendChild(s),o.appendChild(c),n.appendChild(a),n.appendChild(o);const p=document.createElement("main");p.setAttribute("id","menu-scroll-container");const h=document.createElement("div");h.classList.add("menu-logo");const C=document.createElement("div");C.classList.add("cafe"),C.innerText="Café";const E=document.createElement("div");E.classList.add("fofinho-red"),E.innerText="Fofinho",h.appendChild(C),h.appendChild(E),p.appendChild(h);const f=document.createElement("div");f.classList.add("menu-container"),p.appendChild(f),[{title:"Feijoada",snippet:"A traditional Brazilian stew made with black beans and various cuts of meat.",price:"$15"},{title:"Pão de Queijo",snippet:"Cheese bread made with tapioca flour, originating from Minas Gerais, Brazil.",price:"$5"},{title:"Churrasco",snippet:"A Brazilian-style barbecue with various grilled meats served with sides.",price:"$20"},{title:"Açai Bowl",snippet:"A Brazilian dish made with a blend of açai berries, granola and fresh fruit.",price:"$10"}].forEach((e=>{const t=document.createElement("div");t.classList.add("menu-item");const n=document.createElement("h2");n.classList.add("menu-item-title"),n.textContent=e.title;const a=document.createElement("p");a.classList.add("menu-item-snippet"),a.textContent=e.snippet;const d=document.createElement("h2");d.classList.add("menu-item-price"),d.textContent=e.price;const o=document.createElement("hr");o.classList.add("menu-item-border"),t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(o),f.appendChild(t)}));const b=document.createElement("footer"),v=document.createElement("p");v.textContent="Developed with ♡ by Zach Lamont",b.appendChild(v),e.appendChild(t),e.appendChild(n),e.appendChild(p),e.appendChild(b)}();break;case"About":!function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("background-image");const n=document.createElement("header"),a=document.createElement("div");a.classList.add("home");const d=document.createElement("a");d.href="./index.html",d.textContent="HOME",a.appendChild(d);const o=document.createElement("nav"),c=document.createElement("ul"),i=document.createElement("a");i.id="menu-button",i.href="./menu.html",i.textContent="MENU";const l=document.createElement("li");l.appendChild(i);const m=document.createElement("a");m.id="menu-button",m.href="./about.html",m.textContent="ABOUT";const r=document.createElement("li");r.appendChild(m);const s=document.createElement("a");s.id="menu-button",s.href="./contact.html",s.textContent="CONTACT";const u=document.createElement("li");u.appendChild(s),c.appendChild(l),c.appendChild(r),c.appendChild(u),o.appendChild(c),n.appendChild(a),n.appendChild(o);const p=document.createElement("main");p.id="menu-scroll-container";const h=document.createElement("div");h.classList.add("menu-logo");const C=document.createElement("div");C.classList.add("cafe"),C.textContent="Café";const E=document.createElement("div");E.classList.add("fofinho-red"),E.textContent="Fofinho",h.appendChild(C),h.appendChild(E),p.appendChild(h);const f=document.createElement("div");f.classList.add("menu-container");const b=document.createElement("p");b.setAttribute("class","about-paragraph"),b.innerHTML="Our Brazilian-themed seaside cafe offers a unique dining experience\n                              with a menu featuring authentic dishes inspired by the flavors of\n                              Brazil. Our chefs use only the freshest ingredients to create\n                              delectable dishes, such as the traditional Feijoada stew, Pão de\n                              Queijo cheese bread, Churrasco barbecue, and refreshing Açai Bowl.\n                              <br /><br />\n                              Located on the beach, our cafe provides the perfect atmosphere for a\n                              relaxing meal, with stunning views of the ocean and a warm,\n                              welcoming ambiance. Whether you're a local or a tourist, you're sure\n                              to enjoy the exotic flavors and friendly service at our cafe.\n                              <br /><br />\n                              Come visit us and taste the magic of Brazil for yourself!",f.appendChild(b),p.appendChild(f);const v=document.createElement("footer"),x=document.createElement("p");x.innerHTML="Developed with ♡ by Zach Lamont",v.appendChild(x),e.appendChild(t),e.appendChild(n),e.appendChild(p),e.appendChild(v)}();break;case"Contact":!function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("background-image");const n=document.createElement("header"),a=document.createElement("div");a.classList.add("home");const d=document.createElement("a");d.href="./index.html",d.textContent="HOME",a.appendChild(d);const o=document.createElement("nav"),c=document.createElement("ul"),i=document.createElement("li"),l=document.createElement("a");l.id="menu-button",l.href="./menu.html",l.textContent="MENU",i.appendChild(l);const m=document.createElement("li"),r=document.createElement("a");r.id="menu-button",r.href="./about.html",r.textContent="ABOUT",m.appendChild(r);const s=document.createElement("li"),u=document.createElement("a");u.id="menu-button",u.href="./contact.html",u.textContent="CONTACT",s.appendChild(u),c.appendChild(i),c.appendChild(m),c.appendChild(s),o.appendChild(c),n.appendChild(a),n.appendChild(o);const p=document.createElement("main");p.id="menu-scroll-container";const h=document.createElement("div");h.classList.add("menu-logo");const C=document.createElement("div");C.classList.add("cafe"),C.textContent="Café";const E=document.createElement("div");E.classList.add("fofinho-red"),E.textContent="Fofinho",h.appendChild(C),h.appendChild(E);const f=document.createElement("div");f.classList.add("menu-container");const b=document.createElement("h2");b.textContent="Contact Us";const v=document.createElement("p");v.textContent="We would love to hear from you! If you have any questions or comments about our cafe or menu, please feel free to reach out to us using the form below or by giving us a call.";const x=document.createElement("p");x.textContent="Café Fofinho";const g=document.createElement("p");g.textContent="1234 Seaside Avenue";const L=document.createElement("p");L.textContent="We would love to hear from you! If you have any questions or comments about our cafe or menu, please feel free to reach out to us using the form below or by giving us a call.";const w=document.createElement("p");w.textContent="Café Fofinho";const A=document.createElement("p");A.textContent="1234 Seaside Avenue",f.append(b,v,x,g,L,w,A),p.append(h),p.append(f);const y=document.createElement("footer"),T=document.createElement("p");T.innerHTML="Developed with ♡ by Zach Lamont",y.appendChild(T),e.appendChild(t),e.appendChild(n),e.appendChild(p),e.appendChild(y)}();break;default:"/dist/index.html"===window.location.pathname&&function(){const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("background-image"),e.appendChild(t);const n=document.createElement("header"),a=document.createElement("nav"),d=document.createElement("ul"),o=document.createElement("li"),c=document.createElement("a");c.href="./menu.html",c.textContent="MENU",o.appendChild(c),d.appendChild(o);const i=document.createElement("li"),l=document.createElement("a");l.href="./about.html",l.textContent="ABOUT",i.appendChild(l),d.appendChild(i);const m=document.createElement("li"),r=document.createElement("a");r.href="./contact.html",r.textContent="CONTACT",m.appendChild(r),d.appendChild(m),a.appendChild(d),n.appendChild(a),e.appendChild(n);const s=document.createElement("main");s.id="scroll-container";const u=document.createElement("div");u.classList.add("logo");const p=document.createElement("div");p.classList.add("cafe"),p.textContent="Café",u.appendChild(p);const h=document.createElement("div");h.classList.add("fofinho"),h.textContent="Fofinho",u.appendChild(h),s.appendChild(u),e.appendChild(s);const C=document.createElement("a");C.classList.add("button"),C.setAttribute("href","./menu.html"),C.textContent="SEE THE MENU",s.appendChild(C);const E=document.createElement("footer"),f=document.createElement("p");f.textContent="Developed with ♡ by Zach Lamont",E.appendChild(f),e.appendChild(E)}()}}))})();