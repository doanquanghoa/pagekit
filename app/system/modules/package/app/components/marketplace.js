!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var a='<div data-uk-observe="">\n\n       <ul class="uk-grid uk-grid-width-small-1-2 uk-grid-width-xlarge-1-3" data-uk-grid-margin="" data-uk-grid-match="{target:\'.uk-panel\'}">\n            <li v-repeat="pkg: packages">\n                <a class="uk-panel uk-panel-box pk-marketplace-panel uk-overlay-hover">\n                    <div class="uk-panel-teaser">\n                        <img width="800" height="600" alt="{{ pkg.title }}" v-attr="src: pkg.extra.teaser">\n                    </div>\n                    <h2 class="uk-panel-title uk-margin-remove">{{ pkg.title }}</h2>\n                    <p class="uk-margin-remove uk-text-small uk-text-muted">{{ pkg.author.name }}</p>\n                    <div class="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle">\n                        <div>\n                            <button class="uk-button uk-button-primary uk-button-large" v-on="click: details(pkg)">{{ \'Details\' | trans }}</button>\n                        </div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n\n        <v-pagination v-with="page: page, pages: pages" v-show="pages > 1"></v-pagination>\n\n        <div class="uk-modal" v-el="modal">\n            <div class="uk-modal-dialog uk-modal-dialog-large pk-marketplace-modal-dialog">\n\n                <div class="pk-marketplace-modal-action">\n                    <button class="uk-button" disabled="disabled" v-show="isInstalled(pkg)">{{ \'Installed\' | trans }}</button>\n                    <button class="uk-button uk-button-primary" v-on="click: install(pkg)" v-show="!isInstalled(pkg)">\n                        {{ \'Install\' | trans }} <i class="uk-icon-spinner uk-icon-spin" v-show="status == \'installing\'"></i>\n                    </button>\n                </div>\n\n                <iframe class="uk-width-1-1 uk-height-1-1" v-attr="src: iframe"></iframe>\n\n            </div>\n        </div>\n\n        <p class="uk-alert uk-alert-info" v-show="!packages.length">{{ \'No extensions found.\' | trans }}</p>\n        <p class="uk-alert uk-alert-warning" v-show="status == \'error\'">{{ \'Cannot connect to the marketplace. Please try again later.\' | trans }}</p>\n\n    </div>',r=jQuery,i=Vue.util;e.exports={replace:!0,template:a,data:function(){return{api:{},search:"",type:"extension",pkg:null,packages:null,installed:[],page:0,pages:0,iframe:"",status:""}},ready:function(){this.query()},watch:{search:function(){this.query()},page:function(){this.query(this.page)}},methods:{query:function(e){var t=this,n=this.api.url+"/package/search";r.post(n,{q:this.search,type:this.type,page:e||0},function(e){t.$set("packages",e.packages),t.$set("pages",e.pages)},"jsonp").fail(function(){t.$set("packages",null),t.$set("status","error")})},details:function(e){this.modal||(this.modal=UIkit.modal(this.$$.modal)),this.$set("iframe",this.api.url.replace(/\/api$/,"")+"/marketplace/frame/"+e.name),this.$set("pkg",e),this.modal.show()},install:function(e){var t=this,n=this.$url("admin/system/package/install");t.$set("status","installing"),r.post(n,{"package":JSON.stringify(e.version)},function(n){n.message?t.installed.push(e):UIkit.notify(n.error,"danger"),t.$set("status","")})},isInstalled:function(e){return i.isObject(e)?i.findBy(this.installed,"name",e.name):void 0}}},Vue.component("v-marketplace",e.exports),("function"==typeof e.exports?e.exports.options:e.exports).template=a}]);