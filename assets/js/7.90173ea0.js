(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(e,t,s){"use strict";s.r(t);var o=s(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"common-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-issues"}},[e._v("#")]),e._v(" Common Issues")]),e._v(" "),s("p",[e._v("Before opening an issue on GitHub, please check the list of known issues below.")]),e._v(" "),s("h2",{attrs:{id:"connection-closed-with-ssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connection-closed-with-ssl"}},[e._v("#")]),e._v(" Connection closed with SSL")]),e._v(" "),s("p",[e._v("When connecting via HTTPS, you get an exception:")]),e._v(" "),s("blockquote",[s("p",[e._v("The underlying connection was closed: An unexpected error occurred on a send")])]),e._v(" "),s("p",[e._v("The exception is thrown by "),s("code",[e._v("WebRequest")]),e._v(" so you need to tell the .NET Framework to\naccept more certificate types than it does by default.")]),e._v(" "),s("p",[e._v("Adding this line somewhere in your application, where it gets called once, should solve the issue:")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[e._v("ServicePointManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SecurityProtocol "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" SecurityProtocolType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Tls12 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" SecurityProtocolType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Tls11 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" SecurityProtocolType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Tls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"setting-the-user-agent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-user-agent"}},[e._v("#")]),e._v(" Setting the User Agent")]),e._v(" "),s("p",[e._v("Due to the specifics of how "),s("code",[e._v("WebRequest")]),e._v(" works, setting the user agent\non the request won't work when you use "),s("code",[e._v("AddHeader")]),e._v(".")]),e._v(" "),s("p",[e._v("Instead, please use the "),s("code",[e._v("IRestClient.UserAgent")]),e._v(" property.")]),e._v(" "),s("h2",{attrs:{id:"empty-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#empty-response"}},[e._v("#")]),e._v(" Empty Response")]),e._v(" "),s("p",[e._v("We regularly get issues where developers complain that their requests get executed\nand they get a proper raw response, but the "),s("code",[e._v("RestResponse<T>")]),e._v(" instance doesn't\nhave a deserialized object set.")]),e._v(" "),s("p",[e._v("In other situations, the raw response is also empty.")]),e._v(" "),s("p",[e._v("All those issues are caused by the design choice to swallow exceptions\nthat occur when RestSharp makes the request and processes the response. Instead,\nRestSharp produces so-called "),s("em",[e._v("error response")]),e._v(".")]),e._v(" "),s("p",[e._v("You can check the response status to find out if there're any errors.\nThe following properties can tell you about those errors:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("IsSuccessful")])]),e._v(" "),s("li",[s("code",[e._v("ResponseStatus")])]),e._v(" "),s("li",[s("code",[e._v("StatusCode")])]),e._v(" "),s("li",[s("code",[e._v("ErrorMessage")])]),e._v(" "),s("li",[s("code",[e._v("ErrorException")])])]),e._v(" "),s("p",[e._v("It could be that the request was executed and you got "),s("code",[e._v("200 OK")]),e._v(" status\ncode back and some content, but the typed "),s("code",[e._v("Data")]),e._v(" property is empty.")]),e._v(" "),s("p",[e._v("In that case, you probably got deserialization issues. By default, RestSharp will just return an empty ("),s("code",[e._v("null")]),e._v(") result in the "),s("code",[e._v("Data")]),e._v(" property.\nDeserialization errors can be also populated to the error response. To do that,\nset the "),s("code",[e._v("client.FailOnDeserialization")]),e._v(" property to "),s("code",[e._v("true")]),e._v(".")]),e._v(" "),s("p",[e._v("It is also possible to force RestSharp to throw an exception.")]),e._v(" "),s("p",[e._v("If you set "),s("code",[e._v("client.ThrowOnDeserializationError")]),e._v(", RestSharp will throw a "),s("code",[e._v("DeserializationException")]),e._v("\nwhen the serializer throws. The exception has the internal exception and the response.")]),e._v(" "),s("p",[e._v("Finally, by setting "),s("code",[e._v("ThrowOnAnyError")]),e._v(" you can force RestSharp to re-throw any\nexception that happens when making the request and processing the response.")])])}),[],!1,null,null,null);t.default=r.exports}}]);