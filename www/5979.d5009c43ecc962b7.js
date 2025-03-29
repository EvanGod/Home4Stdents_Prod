"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5979],{5979:(I,m,p)=>{p.r(m),p.d(m,{PropertyUploadPageModule:()=>j});var u=p(177),d=p(4341),r=p(7125),h=p(6454),c=p(467),e=p(9498),f=p(2872),_=p(6340),P=p(8831);const y=["addressInput"];function M(a,s){if(1&a&&(e.j41(0,"div",33),e.nrm(1,"img",34),e.k0s()),2&a){const l=s.$implicit;e.R7$(),e.Y8G("src",l,e.B4B)}}function F(a,s){if(1&a){const l=e.RV6();e.j41(0,"ion-item",35)(1,"ion-label"),e.EFF(2,"Sube tu documento:"),e.k0s(),e.j41(3,"input",36),e.bIt("change",function(t){e.eBV(l);const i=e.XpG();return e.Njj(i.onFileSelected(t))}),e.k0s()()}}function b(a,s){if(1&a&&(e.j41(0,"div",37),e.nrm(1,"img",38),e.k0s()),2&a){const l=e.XpG();e.R7$(),e.Y8G("src",l.documentPreview,e.B4B)}}const k=[{path:"",component:(()=>{var a;class s{constructor(o,t,i,n,g,w){this.navCtrl=o,this.afs=t,this.afAuth=i,this.injector=n,this.alert=g,this.loadingController=w,this.propertyType="",this.rooms=1,this.bathrooms=1,this.parking=0,this.additionalSpecs="",this.price=null,this.water=!1,this.electricity=!1,this.internet=!1,this.gas=!1,this.ineSelected=!1,this.passportSelected=!1,this.documentPreview=null,this.propertyImages=[],this.addressInputRef={},this.address="",this.latitude=null,this.longitude=null}onBack(){this.navCtrl.back()}ngAfterViewInit(){this.checkUserAuthentication(),setTimeout(()=>{this.initMap()},500)}checkUserAuthentication(){var o=this;return(0,c.A)(function*(){const t=localStorage.getItem("userData");t&&"propietario"===JSON.parse(t).userType||o.navCtrl.navigateRoot("/login")})()}initMap(){const o=document.getElementById("map");this.map=new google.maps.Map(o,{center:{lat:20.5937,lng:-100.4261},zoom:14}),this.marker=new google.maps.Marker({position:{lat:20.5937,lng:-100.4261},map:this.map,title:"Ubicaci\xf3n de la propiedad"}),google.maps.event.addListener(this.map,"click",t=>{this.latitude=t.latLng.lat(),this.longitude=t.latLng.lng(),this.marker.setPosition(t.latLng),this.map.setCenter(t.latLng)})}isFormValid(){return""!==this.propertyType.trim()&&this.rooms>0&&this.bathrooms>0&&this.parking>=0&&""!==this.additionalSpecs.trim()&&null!==this.documentPreview&&(this.ineSelected||this.passportSelected)&&this.propertyImages.length>0&&null!==this.price&&this.price>0&&null!==this.latitude&&null!==this.longitude}onImageSelected(o){const t=o.target.files;if(t&&t.length>0)for(let i of t){if(i.size>1048576)return void this.showAlert("La imagen excede el tama\xf1o m\xe1ximo de 1 MB.");const n=new FileReader;n.onload=()=>{this.propertyImages.push(n.result)},n.onerror=()=>{this.showAlert("Hubo un problema al leer la imagen. Intenta nuevamente.")},n.readAsDataURL(i)}else this.showAlert("No se seleccion\xf3 ninguna imagen.")}onFileSelected(o){const t=o.target.files[0];if(t){if(t.size>1048576)return void this.showAlert("El documento de identidad excede el tama\xf1o m\xe1ximo de 1 MB.");this.selectedDocument=t;const i=new FileReader;i.onload=()=>{this.documentPreview=i.result},i.onerror=()=>{this.showAlert("Hubo un problema al leer el documento. Intenta nuevamente.")},i.readAsDataURL(t)}else this.showAlert("No se seleccion\xf3 ning\xfan documento.")}showAlert(o){var t=this;return(0,c.A)(function*(){yield(yield t.alert.create({header:"Error",message:o,buttons:["Aceptar"]})).present()})()}publish(){var o=this;return(0,c.A)(function*(){const t=yield o.loadingController.create({message:"Publicando propiedad...",spinner:"bubbles",cssClass:"custom-spinner"});yield t.present();try{const i=yield o.afAuth.currentUser;if(!i)return o.showAlert("No hay usuario autenticado"),void(yield t.dismiss());const g={ownerId:i.uid,tipo:o.propertyType,habitaciones:o.rooms,banos:o.bathrooms,estacionamiento:o.parking,especificaciones_adicionales:o.additionalSpecs,servicios:{agua:o.water,luz:o.electricity,internet:o.internet,gas:o.gas},identidad:{ine:o.ineSelected,pasaporte:o.passportSelected},documento:o.documentPreview,imagenes:o.propertyImages,precio:o.price,latitud:o.latitude,longitud:o.longitude,createdAt:new Date};yield(0,e.N4e)(o.injector,(0,c.A)(function*(){yield o.afs.collection("properties").add(g)})),console.log("Propiedad publicada:",g),o.openModal(),yield t.dismiss()}catch(i){console.error("Error al publicar la propiedad: ",i),o.showAlert("Hubo un problema al guardar la propiedad. Por favor, int\xe9ntalo nuevamente."),yield t.dismiss()}})()}openModal(){document.getElementById("confirmationModal").style.display="flex"}closeModal(){document.getElementById("confirmationModal").style.display="none"}}return(a=s).\u0275fac=function(o){return new(o||a)(e.rXU(f.q9),e.rXU(_.Qe),e.rXU(P.DS),e.rXU(e.zZn),e.rXU(r.hG),e.rXU(r.Xi))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-property-upload"]],viewQuery:function(o,t){if(1&o&&e.GBs(y,5),2&o){let i;e.mGM(i=e.lsd())&&(t.addressInputRef=i.first)}},standalone:!1,decls:119,vars:16,consts:[["slot","start"],[3,"click"],["name","arrow-back"],[1,"property-content"],[1,"centered-card"],[1,"property-container"],["name","home","size","large"],["type","file","multiple","","accept","image/*",1,"input-file",3,"change"],[1,"image-preview-container"],["class","image-preview",4,"ngFor","ngForOf"],[3,"ngModelChange","ngModel"],["slot","start","value","casa"],["slot","start","value","departamento"],["slot","start","value","cuarto"],["id","map",2,"height","200px","width","100%","margin-bottom","16px"],["position","stacked"],["type","number","placeholder","Ingresa el precio de la propiedad","required","",3,"ngModelChange","ngModel"],["value","1"],["value","2"],["value","3"],["value","4"],["value","0"],["placeholder","Escribe aqu\xed cualquier detalle adicional",3,"ngModelChange","ngModel"],[1,"upload-section"],["class","upload-box",4,"ngIf"],["class","document-preview",4,"ngIf"],["expand","full","color","success",3,"click","disabled"],["id","confirmationModal",1,"modal",2,"display","none"],[1,"modal-content"],[1,"close",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","50","height","50","fill","green","viewBox","0 0 16 16"],["d","M16 8A8 8 0 1 1 8 0a8 8 0 0 1 8 8zM6.354 11.354l6-6a.5.5 0 1 0-.708-.708l-5.646 5.647L4.354 8.354a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0z"],[1,"modal-button",3,"click"],[1,"image-preview"],["alt","Imagen subida",1,"img-preview",3,"src"],[1,"upload-box"],["type","file",1,"input-file",3,"change"],[1,"document-preview"],["alt","Documento subido",1,"img-preview",3,"src"]],template:function(o,t){1&o&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(){return t.onBack()}),e.nrm(4,"ion-icon",2),e.EFF(5," Volver "),e.k0s()(),e.j41(6,"ion-title"),e.EFF(7,"Formulario de Propiedad"),e.k0s()()(),e.j41(8,"ion-content",3)(9,"ion-card",4)(10,"ion-card-content")(11,"div",5),e.nrm(12,"ion-icon",6),e.j41(13,"h1"),e.EFF(14,"Subir im\xe1genes de la propiedad"),e.k0s(),e.j41(15,"h2"),e.EFF(16,"Subir Im\xe1genes"),e.k0s(),e.j41(17,"ion-item")(18,"ion-label"),e.EFF(19,"Seleccionar im\xe1genes:"),e.k0s(),e.j41(20,"input",7),e.bIt("change",function(n){return t.onImageSelected(n)}),e.k0s()(),e.j41(21,"div",8),e.DNE(22,M,2,1,"div",9),e.k0s(),e.j41(23,"ion-item")(24,"ion-label"),e.EFF(25,"Tipo:"),e.k0s(),e.j41(26,"ion-radio-group",10),e.mxI("ngModelChange",function(n){return e.DH7(t.propertyType,n)||(t.propertyType=n),n}),e.j41(27,"ion-item"),e.nrm(28,"ion-radio",11),e.j41(29,"ion-label"),e.EFF(30,"Casa"),e.k0s()(),e.j41(31,"ion-item"),e.nrm(32,"ion-radio",12),e.j41(33,"ion-label"),e.EFF(34,"Departamento"),e.k0s()(),e.j41(35,"ion-item"),e.nrm(36,"ion-radio",13),e.j41(37,"ion-label"),e.EFF(38,"Cuarto"),e.k0s()()()(),e.nrm(39,"div",14),e.j41(40,"h2"),e.EFF(41,"ESPECIFICACIONES"),e.k0s(),e.j41(42,"ion-item")(43,"ion-label",15),e.EFF(44,"Precio"),e.k0s(),e.j41(45,"ion-input",16),e.mxI("ngModelChange",function(n){return e.DH7(t.price,n)||(t.price=n),n}),e.k0s()(),e.j41(46,"ion-item")(47,"ion-label"),e.EFF(48,"Habitaciones:"),e.k0s(),e.j41(49,"ion-select",10),e.mxI("ngModelChange",function(n){return e.DH7(t.rooms,n)||(t.rooms=n),n}),e.j41(50,"ion-select-option",17),e.EFF(51,"1"),e.k0s(),e.j41(52,"ion-select-option",18),e.EFF(53,"2"),e.k0s(),e.j41(54,"ion-select-option",19),e.EFF(55,"3"),e.k0s(),e.j41(56,"ion-select-option",20),e.EFF(57,"4+"),e.k0s()()(),e.j41(58,"ion-item")(59,"ion-label"),e.EFF(60,"Ba\xf1os:"),e.k0s(),e.j41(61,"ion-select",10),e.mxI("ngModelChange",function(n){return e.DH7(t.bathrooms,n)||(t.bathrooms=n),n}),e.j41(62,"ion-select-option",17),e.EFF(63,"1"),e.k0s(),e.j41(64,"ion-select-option",18),e.EFF(65,"2"),e.k0s(),e.j41(66,"ion-select-option",19),e.EFF(67,"3+"),e.k0s()()(),e.j41(68,"ion-item")(69,"ion-label"),e.EFF(70,"Estacionamiento:"),e.k0s(),e.j41(71,"ion-select",10),e.mxI("ngModelChange",function(n){return e.DH7(t.parking,n)||(t.parking=n),n}),e.j41(72,"ion-select-option",21),e.EFF(73,"No"),e.k0s(),e.j41(74,"ion-select-option",17),e.EFF(75,"1"),e.k0s(),e.j41(76,"ion-select-option",18),e.EFF(77,"2+"),e.k0s()()(),e.j41(78,"ion-item")(79,"ion-label",15),e.EFF(80,"Especificaciones adicionales"),e.k0s(),e.j41(81,"ion-textarea",22),e.mxI("ngModelChange",function(n){return e.DH7(t.additionalSpecs,n)||(t.additionalSpecs=n),n}),e.k0s()(),e.j41(82,"h2"),e.EFF(83,"SERVICIOS DISPONIBLES"),e.k0s(),e.j41(84,"ion-item")(85,"ion-label"),e.EFF(86,"Servicios:"),e.k0s(),e.j41(87,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.water,n)||(t.water=n),n}),e.EFF(88," Agua"),e.k0s(),e.j41(89,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.electricity,n)||(t.electricity=n),n}),e.EFF(90," Luz"),e.k0s(),e.j41(91,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.internet,n)||(t.internet=n),n}),e.EFF(92," Internet"),e.k0s(),e.j41(93,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.gas,n)||(t.gas=n),n}),e.EFF(94," Gas"),e.k0s()(),e.j41(95,"h2"),e.EFF(96,"VALIDAR TU IDENTIDAD"),e.k0s(),e.j41(97,"ion-item")(98,"ion-label"),e.EFF(99,"Documento:"),e.k0s(),e.j41(100,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.ineSelected,n)||(t.ineSelected=n),n}),e.EFF(101," INE"),e.k0s(),e.j41(102,"ion-checkbox",10),e.mxI("ngModelChange",function(n){return e.DH7(t.passportSelected,n)||(t.passportSelected=n),n}),e.EFF(103," Pasaporte"),e.k0s()(),e.j41(104,"div",23),e.DNE(105,F,4,0,"ion-item",24)(106,b,2,1,"div",25),e.k0s(),e.j41(107,"ion-button",26),e.bIt("click",function(){return t.publish()}),e.EFF(108,"VALIDAR Y PUBLICAR"),e.k0s()()()()(),e.j41(109,"div",27)(110,"div",28)(111,"span",29),e.bIt("click",function(){return t.closeModal()}),e.EFF(112,"\xd7"),e.k0s(),e.qSk(),e.j41(113,"svg",30),e.nrm(114,"path",31),e.k0s(),e.joV(),e.j41(115,"h1"),e.EFF(116,"PROPIEDAD PUBLICADA CON \xc9XITO"),e.k0s(),e.j41(117,"button",32),e.bIt("click",function(){return t.closeModal()}),e.EFF(118,"OK"),e.k0s()()()),2&o&&(e.R7$(22),e.Y8G("ngForOf",t.propertyImages),e.R7$(4),e.R50("ngModel",t.propertyType),e.R7$(19),e.R50("ngModel",t.price),e.R7$(4),e.R50("ngModel",t.rooms),e.R7$(12),e.R50("ngModel",t.bathrooms),e.R7$(10),e.R50("ngModel",t.parking),e.R7$(10),e.R50("ngModel",t.additionalSpecs),e.R7$(6),e.R50("ngModel",t.water),e.R7$(2),e.R50("ngModel",t.electricity),e.R7$(2),e.R50("ngModel",t.internet),e.R7$(2),e.R50("ngModel",t.gas),e.R7$(7),e.R50("ngModel",t.ineSelected),e.R7$(2),e.R50("ngModel",t.passportSelected),e.R7$(3),e.Y8G("ngIf",t.ineSelected||t.passportSelected),e.R7$(),e.Y8G("ngIf",t.documentPreview),e.R7$(),e.Y8G("disabled",!t.isFormValid()))},dependencies:[u.Sq,u.bT,d.BC,d.YS,d.vS,r.Jm,r.QW,r.b_,r.I9,r.eY,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.KO,r.f0,r.Nm,r.Ip,r.nc,r.BC,r.ai,r.hB,r.su,r.Je,r.Gw],styles:['@charset "UTF-8";.property-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;padding:1rem}.centered-card[_ngcontent-%COMP%]{width:90%;max-width:600px;margin:auto;text-align:center;padding:1rem}.image-preview-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;border-radius:5px}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px}.checkbox-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.upload-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px}.upload-box[_ngcontent-%COMP%]{width:100%;text-align:center}.document-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:120px;height:auto;border-radius:5px;margin-top:10px}#map[_ngcontent-%COMP%]{height:300px;width:100%;border-radius:10px;margin-top:15px}.modal[_ngcontent-%COMP%]{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000000b3;display:flex;justify-content:center;align-items:center;z-index:10000}.modal-content[_ngcontent-%COMP%]{background:#fff;padding:30px;text-align:center;border-radius:10px;width:80%;max-width:400px;box-shadow:0 4px 10px #0003}.modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#333;font-size:20px;margin-bottom:20px}.close[_ngcontent-%COMP%]{position:absolute;top:10px;right:15px;font-size:30px;cursor:pointer;color:#000}.modal-button[_ngcontent-%COMP%]{background-color:green;color:#fff;border:none;padding:10px 20px;font-size:16px;border-radius:5px;cursor:pointer;margin-top:20px}@media (max-width: 768px){.property-content[_ngcontent-%COMP%]{padding:1rem}.centered-card[_ngcontent-%COMP%]{width:95%;padding:1rem}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}.grid-container[_ngcontent-%COMP%]{grid-template-columns:1fr}.modal-content[_ngcontent-%COMP%]{width:90%}.input-file[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:8px;margin-bottom:16px}ion-button[_ngcontent-%COMP%]{font-size:14px}.modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px}}@media (max-width: 480px){.modal-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px}.modal-button[_ngcontent-%COMP%]{font-size:14px}}']}),s})()}];let C=(()=>{var a;class s{}return(a=s).\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[h.iI.forChild(k),h.iI]}),s})(),j=(()=>{var a;class s{}return(a=s).\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[u.MD,d.YN,r.bv,C]}),s})()}}]);