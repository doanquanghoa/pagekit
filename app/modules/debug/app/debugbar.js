!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){jQuery(function(t){t("body").append('<div id="profiler"></div>');{var e=n(26);new Vue(e).$mount("#profiler")}})},,,,,,,,,,,,,,,,,,function(t,e,n){var r='<div v-el="navbar" style="display: none">\n\n        <a title="User"><div class="pf-icon pf-icon-auth" v-class="pf-parent: user"></div> {{ label }}</a>\n\n        <div class="pf-dropdown" v-show="user">\n\n            <table class="pf-table pf-table-dropdown">\n                <tbody>\n                    <tr>\n                        <td>Username</td>\n                        <td>{{ user }}</td>\n                    </tr>\n                    <tr>\n                        <td>Roles</td>\n                        <td>{{ roles | json }}</td>\n                    </tr>\n                    <tr>\n                        <td>Authenticated</td>\n                        <td>{{ authenticated ? \'yes\' : \'no\' }}</td>\n                    </tr>\n                    <tr>\n                        <td>Class</td>\n                        <td>{{ user_class }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>';t.exports={ready:function(){this.$parent.add(this,$(this.$$.navbar).html())},computed:{label:function(){return this.user?this.user:this.enabled?"You are not authenticated.":"Authentication is disabled."}}},("function"==typeof t.exports?t.exports.options:t.exports).template=r},function(t,e,n){var r='<h1>Queries</h1>\n\n    <p v-show="!nb_statements">\n        <em>No queries.</em>\n    </p>\n\n    <div v-repeat="statements">\n\n        <pre><code>{{ sql }}</code></pre>\n\n        <p class="pf-submenu">\n            <span>{{ duration_str }}</span>\n            <span>{{ params | json }}</span>\n        </p>\n\n    </div>\n\n    <div v-el="navbar" style="display: none">\n\n        <a title="Database" class="pf-parent">\n            <div class="pf-icon pf-icon-database"></div> {{ nb_statements }}\n        </a>\n\n        <div class="pf-dropdown">\n\n            <table class="pf-table pf-table-dropdown">\n                <tbody>\n                    <tr>\n                        <td>Queries</td>\n                        <td>{{ nb_statements }}</td>\n                    </tr>\n                    <tr>\n                        <td>Time</td>\n                        <td>{{ accumulated_duration_str }}</td>\n                    </tr>\n                    <tr>\n                        <td>Driver</td>\n                        <td>{{ driver }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n    </div>';t.exports={ready:function(){this.$parent.add(this,$(this.$$.navbar).html(),"database")}},("function"==typeof t.exports?t.exports.options:t.exports).template=r},function(t,e,n){t.exports={ready:function(){this.$parent.add(this,'<a title="Events"><div class="pf-icon pf-icon-events"></div> Events</a>')}}},function(t,e,n){t.exports={ready:function(){this.$parent.add(this,'<a title="Memory"><div class="pf-icon pf-icon-memory"></div> {{ peak_usage_str }}</a>')}}},function(t,e,n){t.exports={ready:function(){this.$parent.add(this,'<a title="Request"><div class="pf-icon pf-icon-request"></div> <span class="pf-badge">200</span> @test</a>')}}},function(t,e,n){var r='<h1>Routes</h1>\n\n    <table class="pf-table">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Pattern</th>\n                <th>Controller</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr v-repeat="routes">\n                <td>{{ name }}</td>\n                <td>{{ pattern }} {{ methods | str }}</td>\n                <td><abbr title="{{ controller }}">{{ controller | short }}</abbr></td>\n            </tr>\n        </tbody>\n    </table>';t.exports={ready:function(){this.$parent.add(this,'<a title="Routes"><div class="pf-icon pf-icon-routes"></div> Routes</a>',"routes")},filters:{str:function(t){return t.length?"("+t+")":""},"short":function(t){return t.split("\\").pop()}}},("function"==typeof t.exports?t.exports.options:t.exports).template=r},function(t,e,n){var r='<h1>Information</h1>\n\n    <h2>System</h2>\n    <table class="pf-table pf-table-dropdown">\n        <tbody>\n            <tr>\n                <td>Pagekit</td>\n                <td>{{ version }}</td>\n            </tr>\n            <tr>\n                <td>Server</td>\n                <td>{{ server }}</td>\n            </tr>\n            <tr>\n                <td>Useragent</td>\n                <td>{{ useragent }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <h2>PHP</h2>\n    <table class="pf-table pf-table-dropdown">\n        <tbody>\n            <tr>\n                <td>PHP</td>\n                <td>{{ phpversion }}</td>\n            </tr>\n            <tr>\n                <td>PHP SAPI</td>\n                <td>{{ sapi_name }}</td>\n            </tr>\n            <tr>\n                <td>System</td>\n                <td>{{ php }}</td>\n            </tr>\n            <tr>\n                <td>Extensions</td>\n                <td>{{ extensions }}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <h2>Database</h2>\n    <table class="pf-table pf-table-dropdown">\n        <tbody>\n            <tr>\n                <td>Driver</td>\n                <td>{{ dbdriver }}</td>\n            </tr>\n            <tr>\n                <td>Version</td>\n                <td>{{ dbversion }}</td>\n            </tr>\n            <tr>\n                <td>Client</td>\n                <td>{{ dbclient }}</td>\n            </tr>\n        </tbody>\n    </table>';t.exports={ready:function(){this.$parent.add(this,'<a title="System Information"><div class="pf-icon-large pf-icon-pagekit"></div></a>',"system")}},("function"==typeof t.exports?t.exports.options:t.exports).template=r},function(t,e,n){t.exports={ready:function(){this.$parent.add(this,'<a title="Time"><div class="pf-icon pf-icon-time"></div> {{ duration_str }}</a>')}}},function(t,e,n){var r='<div id="pk-profiler" class="pf-profiler">\n\n        <div class="pf-navbar">\n\n            <ul class="pf-navbar-nav" v-repeat="navbar">\n                <li v-html="html" v-on="click: open(panel)"></li>\n            </ul>\n\n            <a class="pf-close" v-on="click: close"></a>\n\n        </div>\n\n        <div v-repeat="panels">\n            <div class="pf-profiler-panel" data-panel="{{ $value }}" v-component="{{ $value }}" v-with="data[$value]"></div>\n        </div>\n\n    </div>',a=window.jQuery,i=window.$debugbar,s={system:n(24),routes:n(23),events:n(20),time:n(25),memory:n(21),database:n(19),request:n(22),auth:n(18)};t.exports={data:{data:{},navbar:[],panels:[]},created:function(){var t=this;a.getJSON(i.url,function(e){t.$set("data",e),a.each(s,function(n){e[n]&&t.panels.push(n)})})},methods:{add:function(t,e,n){this.navbar.push({panel:n,html:t.$interpolate(e||"")})},open:function(t){t&&a("[data-panel]",this.$el).each(function(){var e=a(this).attr("style",null);e.data("panel")==t&&e.css({display:"block",height:Math.ceil(window.innerHeight/2)})})},close:function(){a("[data-panel]",this.$el).attr("style",null)}},components:s},("function"==typeof t.exports?t.exports.options:t.exports).template=r}]);