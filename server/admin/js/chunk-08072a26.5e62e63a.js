(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08072a26"],{1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data>0?a("el-pagination",{attrs:{background:"","page-size":10,"pager-count":5,total:t.data,"current-page":t.page,layout:"prev, pager, next"},on:{"current-change":t.load}}):t._e()},s=[],l={props:{data:{type:Number,default:0},page:{type:Number,default:1}},methods:{load(t){this.$emit("update",t)}}},o=l,r=a("2877"),i=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=i.exports},2172:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"phrase"},[a("h2",{staticClass:"tit"},[t._v("订阅用户 ("+t._s(t.total)+")")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,height:"calc(800px - 240px)"}},[a("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.email))])]}}])}),a("el-table-column",{attrs:{label:"Date",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.$getDate(e.row.time)))])]}}])}),a("el-table-column",{attrs:{label:"Status",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#ff7b7b"}},[t._v(t._s(e.row.active))])]}}])}),a("el-table-column",{attrs:{label:"options",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"Delete",placement:"top"}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){return t.remove(e.row)}}})])]}}])})],1),a("Pagination",{attrs:{data:t.total,page:t.page},on:{update:t.load}})],1)},s=[],l=a("1799"),o={components:{Pagination:l["a"]},data(){return{data:[],total:0,page:1}},created(){this.load()},methods:{load(t){this.$request(()=>this.$http.get("/subscribe",{params:{page:t}}).then(t=>{["data","total","page"].map(e=>this[e]=t.data.body[e])}))},remove(t){this.$confirm("删除订阅用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$request(()=>this.$http.delete(`subscribe/${t._id}`).then(t=>{this.$message.success("删除成功!"),this.load()}))}).catch(()=>{this.$message("已取消删除")})}}},r=o,i=(a("480d"),a("2877")),c=Object(i["a"])(r,n,s,!1,null,"211388aa",null);e["default"]=c.exports},"480d":function(t,e,a){"use strict";var n=a("9731"),s=a.n(n);s.a},9731:function(t,e,a){}}]);
//# sourceMappingURL=chunk-08072a26.5e62e63a.js.map