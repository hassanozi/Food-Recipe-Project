"use strict";(self.webpackChunkFood_Recipe_Project=self.webpackChunkFood_Recipe_Project||[]).push([[262],{4262:(A,d,n)=>{n.r(d),n.d(d,{UserRecipesModule:()=>x});var r=n(177),m=n(7062),u=n(6920),p=n(5351),e=n(7705);function f(i,l){1&i&&e.nrm(0,"img",8)}function F(i,l){if(1&i&&e.nrm(0,"img",9),2&i){const t=e.XpG();e.Y8G("src",t.imagePath+t.data.imagePath,e.B4B)}}let v=(()=>{class i{constructor(t,s){this.dialogRef=t,this.data=s,this.imagePath="https://upskilling-egypt.com:3006/",this.dummyImage="../../../../assets/images/recipe-title.png",console.log(s)}onNoClick(){this.dialogRef.close()}static{this.\u0275fac=function(s){return new(s||i)(e.rXU(p.CP),e.rXU(p.Vh))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-recipe-detailes"]],decls:13,vars:5,consts:[[1,"container","py-3"],[1,"d-block","text-end",3,"click"],[1,"fa-regular","fa-2x","fa-circle-xmark","text-danger"],[1,"text-center"],["src","../../../../../assets/images/recipe-title.png","alt","","class","w-25",4,"ngIf"],["alt","","class","w-25",3,"src",4,"ngIf"],[1,"text-end"],[1,"primary",3,"mat-dialog-close"],["src","../../../../../assets/images/recipe-title.png","alt","",1,"w-25"],["alt","",1,"w-25",3,"src"]],template:function(s,a){1&s&&(e.j41(0,"section",0)(1,"a",1),e.bIt("click",function(){return a.onNoClick()}),e.nrm(2,"i",2),e.k0s(),e.j41(3,"div",3),e.DNE(4,f,1,0,"img",4),e.DNE(5,F,1,1,"img",5),e.j41(6,"h3"),e.EFF(7),e.k0s(),e.j41(8,"p"),e.EFF(9),e.k0s()(),e.j41(10,"div",6)(11,"button",7),e.EFF(12,"Add to favorites"),e.k0s()()()),2&s&&(e.R7$(4),e.Y8G("ngIf",!a.data.imagePath),e.R7$(1),e.Y8G("ngIf",a.data.imagePath),e.R7$(2),e.JRh(a.data.name?a.data.name:"Recipe"),e.R7$(2),e.JRh(a.data.description?a.data.description:"No Description"),e.R7$(2),e.Y8G("mat-dialog-close",a.data.id))},dependencies:[r.bT,p.tx]})}}return i})();var C=n(2735),y=n(9685),j=n(6358),k=n(5794),_=n(9825),g=n(9417),b=n(6440),h=n(882),E=n(7250),I=n(6600);function D(i,l){if(1&i&&(e.j41(0,"mat-option",16),e.EFF(1),e.k0s()),2&i){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function T(i,l){if(1&i&&(e.j41(0,"mat-option",16),e.EFF(1),e.k0s()),2&i){const t=l.$implicit;e.Y8G("value",t.id),e.R7$(1),e.JRh(t.name)}}function U(i,l){if(1&i&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&i){const t=l.$implicit;e.R7$(1),e.JRh(t.name)}}function $(i,l){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td",23),e.nrm(6,"img",24),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.DNE(10,U,2,1,"span",21),e.k0s(),e.j41(11,"td"),e.EFF(12),e.k0s(),e.j41(13,"td"),e.EFF(14),e.nI1(15,"date"),e.k0s(),e.j41(16,"td"),e.EFF(17),e.nI1(18,"date"),e.k0s(),e.j41(19,"td")(20,"a",25),e.bIt("click",function(){const o=e.eBV(t).$implicit,c=e.XpG(2);return e.Njj(c.openRecipeDetails(o))}),e.nrm(21,"i",26),e.k0s()()()}if(2&i){const t=l.$implicit,s=e.XpG(2);e.R7$(2),e.JRh(t.name),e.R7$(2),e.JRh(t.price),e.R7$(2),e.Y8G("src",t.imagePath?s.imagePath+t.imagePath:s.dummyImage,e.B4B),e.R7$(2),e.JRh(t.tag.name),e.R7$(2),e.Y8G("ngForOf",t.category),e.R7$(2),e.JRh(t.description),e.R7$(2),e.JRh(e.i5U(15,8,t.creationDate,"dd-MM-yyyy, h:mm a")),e.R7$(3),e.JRh(e.i5U(18,11,t.modificationDate,"dd-MM-yyyy, h:mm a"))}}function S(i,l){if(1&i){const t=e.RV6();e.j41(0,"div")(1,"table",19)(2,"thead")(3,"th"),e.EFF(4,"Name"),e.k0s(),e.j41(5,"th"),e.EFF(6,"Price"),e.k0s(),e.j41(7,"th"),e.EFF(8,"Image"),e.k0s(),e.j41(9,"th"),e.EFF(10,"Tag"),e.k0s(),e.j41(11,"th"),e.EFF(12,"Category"),e.k0s(),e.j41(13,"th"),e.EFF(14,"Description"),e.k0s(),e.j41(15,"th"),e.EFF(16,"Creation Date"),e.k0s(),e.j41(17,"th"),e.EFF(18,"Modification Date"),e.k0s(),e.j41(19,"th"),e.EFF(20,"Actions"),e.k0s()(),e.j41(21,"tbody",20),e.DNE(22,$,22,14,"tr",21),e.k0s()(),e.j41(23,"mat-paginator",22),e.bIt("page",function(a){e.eBV(t);const o=e.XpG();return e.Njj(o.handlePageEvent(a))}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(22),e.Y8G("ngForOf",t.tableData),e.R7$(1),e.Y8G("length",null==t.tableResponse?null:t.tableResponse.totalNumberOfRecords)("pageIndex",null==t.tableResponse?null:t.tableResponse.pageNumber)("pageSize",null==t.tableResponse?null:t.tableResponse.pageSize)("pageSizeOptions",t.pageSizeOptions)}}function G(i,l){1&i&&(e.j41(0,"div")(1,"div",20),e.nrm(2,"img",27),e.j41(3,"h5"),e.EFF(4,"No Data"),e.k0s()()())}const M=[{path:"",component:(()=>{class i{constructor(t,s,a,o,c,P){this._UserService=t,this._RecipesService=s,this.dialog=a,this._CategoryService=o,this._ToastrService=c,this._HelperService=P,this.tableData=[],this.tags=[],this.tagId=0,this.categories=[],this.categoryId=0,this.searchkey="",this.imagePath="https://upskilling-egypt.com:3006/",this.dummyImage="../../../../assets/images/recipe-title.png",this.length=50,this.pageSize=5,this.pageIndex=0,this.pageSizeOptions=[5,10,25]}ngOnInit(){this.getRecipes(),this.getAllTages(),this.getAllCategories()}getRecipes(){this._RecipesService.getAllRecipes({pageSize:this.pageSize,pageNumber:this.pageIndex,name:this.searchkey,tagId:this.tagId>0?this.tagId:null,categoryId:this.categoryId>0?this.categoryId:null}).subscribe({next:s=>{console.log(s),this.tableResponse=s,this.tableData=s.data}})}handlePageEvent(t){this.pageEvent=t,this.length=t.length,this.pageSize=t.pageSize,this.pageIndex=t.pageIndex,this.getRecipes()}openDeleteRecipeDialog(t){this.dialog.open(u.b,{data:t}).afterClosed().subscribe(a=>{console.log(a),a&&this.onDeleteRecipe(a)})}getAllTages(){this._HelperService.getTags().subscribe({next:t=>{console.log(t),this.tags=t}})}getAllCategories(){this._CategoryService.getAllCategories(1e3,1,"").subscribe({next:t=>{console.log(t),this.categories=t.data}})}onDeleteRecipe(t){this._RecipesService.onDeleteRecipe(t).subscribe({next:s=>{console.log(s)},error:()=>{},complete:()=>{this._ToastrService.info("Deleted Successfuly"),this.getRecipes()}})}openRecipeDetails(t){this.dialog.open(v,{data:t}).afterClosed().subscribe(a=>{console.log("The Dialog was closed"),console.log(a),a&&this.addToFav(a)})}addToFav(t){this._UserService.onAddToFav(t).subscribe({next:s=>{console.log(s)},error:s=>{console.log(s)},complete:()=>{this._ToastrService.success("Added To Favorites Successfully")}})}static{this.\u0275fac=function(s){return new(s||i)(e.rXU(C.D),e.rXU(y.F),e.rXU(p.bZ),e.rXU(j.M),e.rXU(k.tw),e.rXU(_.w))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-user-recipes"]],decls:42,vars:9,consts:[[1,"header-page","px-2"],[1,"row","align-items-center"],[1,"col-8"],[1,"mb-0"],[1,"col-4","text-end"],["src","../../../../assets/images/menu-avatar.svg","alt",""],[1,"container","mt-4","row","d-flex","align-items-center"],[1,"row","justify-content-between"],[1,"col-3"],[1,"col-6"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-magnifying-glass"],["type","text","placeholder","Search By Name","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup.enter"],["appearance","outline"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"table","table-striped","text-center"],[1,"text-center"],[4,"ngFor","ngForOf"],["aria-label","Select page",3,"length","pageIndex","pageSize","pageSizeOptions","page"],[1,"w-25"],["alt","",1,"w-25",3,"src"],[1,"myPointer","text-main",3,"click"],[1,"fa-solid","fa-eye"],["src","../../../../assets/images/nodata.svg","alt",""]],template:function(s,a){1&s&&(e.j41(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"h4"),e.EFF(5,"Recipes "),e.j41(6,"span"),e.EFF(7,"item"),e.k0s()(),e.j41(8,"p",3),e.EFF(9,"You can now add your items that any user can order it from the Application and you can edit"),e.k0s()(),e.j41(10,"div",4),e.nrm(11,"img",5),e.k0s()()(),e.j41(12,"div",6)(13,"div",7)(14,"div",8)(15,"h6"),e.EFF(16,"Recipes Table Details"),e.k0s(),e.j41(17,"p"),e.EFF(18,"You can check all details"),e.k0s()()(),e.j41(19,"div",9)(20,"div",10)(21,"span",11),e.nrm(22,"i",12),e.k0s(),e.j41(23,"input",13),e.bIt("ngModelChange",function(c){return a.searchkey=c})("keyup.enter",function(){return a.getRecipes()}),e.k0s()()(),e.j41(24,"div",8)(25,"mat-form-field",14)(26,"mat-label"),e.EFF(27,"Choose Tag"),e.k0s(),e.j41(28,"mat-select",15),e.bIt("ngModelChange",function(c){return a.tagId=c})("selectionChange",function(){return a.getRecipes()}),e.j41(29,"mat-option",16),e.EFF(30,"All"),e.k0s(),e.DNE(31,D,2,2,"mat-option",17),e.k0s()()(),e.j41(32,"div",8)(33,"mat-form-field",14)(34,"mat-label"),e.EFF(35,"Choose Category"),e.k0s(),e.j41(36,"mat-select",15),e.bIt("ngModelChange",function(c){return a.categoryId=c})("selectionChange",function(){return a.getRecipes()}),e.j41(37,"mat-option",16),e.EFF(38,"All"),e.k0s(),e.DNE(39,T,2,2,"mat-option",17),e.k0s()()()(),e.DNE(40,S,24,5,"div",18),e.DNE(41,G,5,0,"div",18),e.k0s()),2&s&&(e.R7$(23),e.Y8G("ngModel",a.searchkey),e.R7$(5),e.Y8G("ngModel",a.tagId),e.R7$(1),e.Y8G("value",0),e.R7$(2),e.Y8G("ngForOf",a.tags),e.R7$(5),e.Y8G("ngModel",a.categoryId),e.R7$(1),e.Y8G("value",0),e.R7$(2),e.Y8G("ngForOf",a.categories),e.R7$(1),e.Y8G("ngIf",a.tableData.length>0),e.R7$(1),e.Y8G("ngIf",0==a.tableData.length))},dependencies:[r.Sq,r.bT,g.me,g.BC,b.iy,g.vS,h.rl,h.nJ,E.VO,I.wT,r.vh]})}}return i})()}];let Y=(()=>{class i{static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[m.iI.forChild(M),m.iI]})}}return i})();var N=n(3887);let x=(()=>{class i{static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[r.MD,Y,N.G]})}}return i})()}}]);