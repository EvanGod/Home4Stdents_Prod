"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9195],{9195:(j,g,l)=>{l.r(g),l.d(g,{CitasPropietarioPageModule:()=>k});var d=l(177),C=l(4341),o=l(7125),m=l(6454),u=l(467),t=l(9498),h=l(2872),f=l(8472);function _(r,s){if(1&r&&(t.j41(0,"div"),t.nrm(1,"ion-img",18),t.k0s()),2&r){const i=t.XpG().$implicit;t.R7$(),t.Y8G("src",i.propertyData.documento)}}function P(r,s){if(1&r){const i=t.RV6();t.j41(0,"ion-row",19)(1,"ion-button",20),t.bIt("click",function(){t.eBV(i);const e=t.XpG().$implicit,n=t.XpG(2);return t.Njj(n.aceptarCita(e.id))}),t.nrm(2,"ion-icon",21),t.EFF(3," Aceptar "),t.k0s(),t.j41(4,"ion-button",22),t.bIt("click",function(){t.eBV(i);const e=t.XpG().$implicit,n=t.XpG(2);return t.Njj(n.rechazarCita(e.id))}),t.nrm(5,"ion-icon",23),t.EFF(6," Rechazar "),t.k0s()()}}function F(r,s){if(1&r&&(t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-card-subtitle"),t.EFF(5),t.nI1(6,"date"),t.k0s()(),t.j41(7,"ion-card-content")(8,"p")(9,"strong"),t.EFF(10,"\u{1f464} Cliente:"),t.k0s(),t.EFF(11),t.k0s(),t.j41(12,"p")(13,"strong"),t.EFF(14,"\u{1f3e0} Tipo de Propiedad:"),t.k0s(),t.EFF(15),t.k0s(),t.j41(16,"p")(17,"strong"),t.EFF(18,"\u{1f4b2} Precio:"),t.k0s(),t.EFF(19),t.k0s(),t.j41(20,"p")(21,"strong"),t.EFF(22,"\u{1f6cf} Habitaciones:"),t.k0s(),t.EFF(23),t.k0s(),t.j41(24,"p")(25,"strong"),t.EFF(26,"\u{1f697} Estacionamiento:"),t.k0s(),t.EFF(27),t.k0s(),t.j41(28,"p")(29,"strong"),t.EFF(30,"\u{1f4cb} Especificaciones:"),t.k0s(),t.EFF(31),t.k0s(),t.DNE(32,_,2,1,"div",16),t.k0s(),t.DNE(33,P,7,0,"ion-row",17),t.k0s()),2&r){const i=s.$implicit;t.R7$(3),t.JRh(i.status),t.R7$(2),t.Lme(" \u{1f4c5} ",t.i5U(6,11,i.fecha,"fullDate")," - \u23f0 ",i.hora," "),t.R7$(6),t.SpI(" ",null==i.userData?null:i.userData.user,""),t.R7$(4),t.SpI(" ",null==i.propertyData?null:i.propertyData.tipo,""),t.R7$(4),t.SpI(" ",null==i.propertyData?null:i.propertyData.precio,""),t.R7$(4),t.SpI(" ",null==i.propertyData?null:i.propertyData.habitaciones,""),t.R7$(4),t.SpI(" ",null==i.propertyData?null:i.propertyData.estacionamiento,""),t.R7$(4),t.SpI(" ",null==i.propertyData?null:i.propertyData.especificaciones_adicionales,""),t.R7$(),t.Y8G("ngIf",null==i.propertyData?null:i.propertyData.documento),t.R7$(),t.Y8G("ngIf","pendiente"===i.status)}}function v(r,s){if(1&r&&(t.j41(0,"ion-list"),t.DNE(1,F,34,14,"ion-card",15),t.k0s()),2&r){const i=t.XpG();t.R7$(),t.Y8G("ngForOf",i.citas)}}function y(r,s){1&r&&(t.j41(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),t.EFF(3,"No hay citas agendadas"),t.k0s()(),t.j41(4,"ion-card-content"),t.EFF(5," Actualmente no tienes citas agendadas. "),t.k0s()())}const D=[{path:"",component:(()=>{var r;class s{constructor(a,e,n,c,p){this.alertCtrl=a,this.toastCtrl=e,this.navCtrl=n,this.authService=c,this.loadingCtrl=p,this.citas=[]}ngOnInit(){var a=this;return(0,u.A)(function*(){a.checkUserAuthentication()})()}checkUserAuthentication(){var a=this;return(0,u.A)(function*(){const e=localStorage.getItem("userData");if(!e)return void a.navCtrl.navigateRoot("/login");const n=JSON.parse(e);if(n&&"propietario"===n.userType){a.presentLoading();try{a.citas=yield a.authService.getCitasOfCurrentUser(),console.log("Citas del usuario actual:",a.citas),0===a.citas.length?setTimeout(()=>{a.loading.dismiss()},5e3):a.loading.dismiss()}catch(c){console.error("Error al obtener las citas:",c),a.mostrarToast("Error al cargar las citas","danger"),a.loading.dismiss()}}else a.navCtrl.navigateRoot("/login")})()}presentLoading(){var a=this;return(0,u.A)(function*(){a.loading=yield a.loadingCtrl.create({message:"Cargando citas...",spinner:"bubbles",duration:5e3,translucent:!0}),yield a.loading.present()})()}aceptarCita(a){var e=this;return(0,u.A)(function*(){var c;yield(yield e.alertCtrl.create({header:"Confirmar",message:"\xbfEst\xe1s seguro de aceptar esta cita?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Aceptar",handler:(c=(0,u.A)(function*(){try{yield e.authService.updateCitaStatus(a,"aceptada"),e.mostrarToast("Cita aceptada correctamente.","success"),e.citas=yield e.authService.getCitasOfCurrentUser()}catch(p){console.error("Error actualizando el status de la cita:",p),e.mostrarToast("Error al actualizar el status de la cita.","danger")}}),function(){return c.apply(this,arguments)})}]})).present()})()}rechazarCita(a){var e=this;return(0,u.A)(function*(){var c;yield(yield e.alertCtrl.create({header:"Confirmar",message:"\xbfEst\xe1s seguro de rechazar esta cita?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Rechazar",handler:(c=(0,u.A)(function*(){try{yield e.authService.updateCitaStatus(a,"rechazada"),e.mostrarToast("Cita rechazada.","danger"),e.citas=yield e.authService.getCitasOfCurrentUser()}catch(p){console.error("Error actualizando el status de la cita:",p),e.mostrarToast("Error al actualizar el status de la cita.","danger")}}),function(){return c.apply(this,arguments)})}]})).present()})()}mostrarToast(a,e){var n=this;return(0,u.A)(function*(){(yield n.toastCtrl.create({message:a,duration:2e3,color:e,position:"top"})).present()})()}refreshCitas(a){var e=this;setTimeout((0,u.A)(function*(){try{e.citas=yield e.authService.getCitasOfCurrentUser(),e.mostrarToast("Citas actualizadas.","primary")}catch{e.mostrarToast("Error al actualizar las citas","danger")}a.target.complete()}),1500)}verCitas(){this.navCtrl.navigateForward("/citas-propietarios")}publicarPropiedad(){this.navCtrl.navigateForward("/property-upload")}cerrarSesion(){localStorage.removeItem("userData"),this.navCtrl.navigateRoot("/login")}}return(r=s).\u0275fac=function(a){return new(a||r)(t.rXU(o.hG),t.rXU(o.K_),t.rXU(h.q9),t.rXU(f.u),t.rXU(o.Xi))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-citas-propietarios"]],standalone:!1,decls:33,vars:2,consts:[["noCitas",""],["side","end","contentId","main-content","menuId","menu-end"],["color","primary"],["button","",3,"click"],["name","calendar","slot","start"],["name","home","slot","start"],["name","log-out","slot","start"],["slot","start"],["defaultHref","/home-propietario"],["slot","end"],["menu","menu-end"],["id","main-content",1,"ion-padding"],[4,"ngIf","ngIfElse"],["slot","fixed",3,"ionRefresh"],["pullingText","Desliza para actualizar..."],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","ion-justify-content-around",4,"ngIf"],[3,"src"],[1,"ion-justify-content-around"],["color","success",3,"click"],["name","checkmark-circle"],["color","danger",3,"click"],["name","close-circle"]],template:function(a,e){if(1&a){const n=t.RV6();t.j41(0,"ion-menu",1)(1,"ion-header")(2,"ion-toolbar",2)(3,"ion-title"),t.EFF(4,"Men\xfa"),t.k0s()()(),t.j41(5,"ion-content")(6,"ion-list")(7,"ion-item",3),t.bIt("click",function(){return t.eBV(n),t.Njj(e.verCitas())}),t.nrm(8,"ion-icon",4),t.j41(9,"ion-label"),t.EFF(10,"Ver citas"),t.k0s()(),t.j41(11,"ion-item",3),t.bIt("click",function(){return t.eBV(n),t.Njj(e.publicarPropiedad())}),t.nrm(12,"ion-icon",5),t.j41(13,"ion-label"),t.EFF(14,"Publicar propiedad"),t.k0s()(),t.j41(15,"ion-item",3),t.bIt("click",function(){return t.eBV(n),t.Njj(e.cerrarSesion())}),t.nrm(16,"ion-icon",6),t.j41(17,"ion-label"),t.EFF(18,"Cerrar sesi\xf3n"),t.k0s()()()()(),t.j41(19,"ion-header")(20,"ion-toolbar",2)(21,"ion-buttons",7),t.nrm(22,"ion-back-button",8),t.k0s(),t.j41(23,"ion-title"),t.EFF(24,"Mis Citas"),t.k0s(),t.j41(25,"ion-buttons",9),t.nrm(26,"ion-menu-button",10),t.k0s()()(),t.j41(27,"ion-content",11),t.DNE(28,v,2,1,"ion-list",12)(29,y,6,0,"ng-template",null,0,t.C5r),t.j41(31,"ion-refresher",13),t.bIt("ionRefresh",function(p){return t.eBV(n),t.Njj(e.refreshCitas(p))}),t.nrm(32,"ion-refresher-content",14),t.k0s()()}if(2&a){const n=t.sdS(30);t.R7$(28),t.Y8G("ngIf",e.citas.length>0)("ngIfElse",n)}},dependencies:[d.Sq,d.bT,o.Jm,o.QW,o.b_,o.I9,o.ME,o.HW,o.tN,o.W9,o.eU,o.iq,o.KW,o.uz,o.he,o.nf,o.oS,o.MC,o.To,o.Ki,o.ln,o.BC,o.ai,o.el,d.vh],styles:["ion-card[_ngcontent-%COMP%]{width:100%;max-width:400px;margin:auto;box-shadow:0 4px 8px #0003}ion-card-title[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;margin:5px 0}ion-button[_ngcontent-%COMP%]{width:45%}"]}),s})()}];let E=(()=>{var r;class s{}return(r=s).\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[m.iI.forChild(D),m.iI]}),s})(),k=(()=>{var r;class s{}return(r=s).\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[d.MD,C.YN,o.bv,E]}),s})()}}]);