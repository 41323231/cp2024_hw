"use strict";var Graph3D,toEngNotation,toSciNotation;!function(){function t(t,e,o){let i,n,s,r,a,l,h=o||0;if(this.tic1=void 0,this.ticStep=void 0,this.lbl1=void 0,this.lblStep=void 0,this.minTics=[],this.majTics=[],t>=e)return void console.error("Axes Ticks: Max must be greater than Min");s=(i=Math.log(e-t)/Math.LN10)<0?Math.floor(i)-1:Math.floor(i),(n=(e-t)/Math.pow(10,s))>=5.5&&(s+=1,n/=10),a=.5,n<2.2&&(a=.2),n<1.1&&(a=.1),l=3*Math.floor(s/3),s<0&&s%3!=0&&(l-=3),r=a*Math.pow(10,s-l),this.ticStep=r*Math.pow(10,l),this.tic1=t>=0?(Math.floor(t/this.ticStep-.01)+1)*this.ticStep:-Math.floor(-t/this.ticStep+.01)*this.ticStep,"auto"===h?this.lblStep=.2===a?5*this.ticStep:2*this.ticStep:h&&(this.lblStep=this.ticStep*Math.round(h/this.ticStep),(this.lblStep<this.ticStep||(e-t)/this.lblStep>12)&&(console.warn("Requested major tick interval too small"),this.lblStep=.2===a?5*this.ticStep:2*this.ticStep),this.lblStep>e-t&&(console.warn("Requested major tick interval too large"),this.lblStep=.2===a?5*this.ticStep:2*this.ticStep));const c=.001*this.ticStep;this.lblStep&&(this.lbl1=this.lblStep*Math.ceil((t-c)/this.lblStep));for(let t=0,o=this.tic1;o<e+1e-9;o+=this.ticStep){let e="";Math.abs(o-(this.lbl1+t*this.lblStep))<1e-4*this.ticStep?(Math.abs(o)<1e-9&&(o=0),e=o.toPrecision(4),this.majTics.push(parseFloat(e)),t++):(Math.abs(o)<1e-9&&(o=0),e=o.toPrecision(4),this.minTics.push(parseFloat(e)))}}function e(e,o,i,n){if(this.tic1=void 0,this.ticStep=void 0,this.lbl1=void 0,this.lblStep=void 0,this.minTics=[],this.majTics=[],void 0===e||void 0===o||!i)return;if(i<(o-e)/25)return console.warn("Requested tick interval too small"),new t(e,o,"auto");if(i>o-e)return console.warn("Requested tick interval too large"),new t(e,o,"auto");const s=.01*i;this.tic1=i*Math.ceil((e-s)/i),this.ticStep=i,n<i?(console.warn("Requested major tick interval too small"),this.lblStep=this.ticStep,this.lbl1=this.tic1):n>=o-e?console.warn("Requested major tick interval too large"):(this.lblStep=this.ticStep*Math.round(n/i),this.lbl1=this.lblStep*Math.ceil((e-s)/this.lblStep));for(let t=0,e=this.tic1;e<o+1e-8;e+=this.ticStep)Math.abs(e-(this.lbl1+t*this.lblStep))<1e-4*this.ticStep?(this.majTics.push(e),t++):this.minTics.push(e)}toEngNotation=function(t,e){const o={};let i=0,n=0,s="",r="";for(Math.abs(t)>1e-12&&(void 0!==e&&e%3==0?(n=e,i=t/Math.pow(10,n)):(n=Math.floor(Math.log(Math.abs(t))/(3*Math.LN10)),i=t/Math.pow(1e3,n),n*=3)),s=i.toFixed(2);"0"===s.charAt(s.length-1);)s=s.substring(0,s.length-1);return"."===s.charAt(s.length-1)&&(s=s.substring(0,s.length-1)),n&&(r="pnum kMGT".charAt(n/3+4)),o.man=parseFloat(s),o.manStr=s,o.exp=n,o.expStr=r,o},toSciNotation=function(t,e){const o={};let i,n,s=0,r=0;for(Math.abs(t)>1e-12&&(r=void 0!==e?e:Math.floor(Math.log(Math.abs(t))/Math.LN10),s=t/Math.pow(10,r)),i=s.toFixed(2);"0"===i.charAt(i.length-1);)i=i.substring(0,i.length-1);return"."===i.charAt(i.length-1)&&(i=i.substring(0,i.length-1)),n=r.toString(),o.man=parseFloat(i),o.manStr=i,o.exp=r,o.expStr=n,o};Graph3D=class{constructor(t){this.gc=new Cango3D(t),this.cId=t,this.xRot=20,this.zRot=35,this.gc.setWorldCoords3D(-50,-50/this.gc.aRatio,100),this.gc.setFOV(35),this.gc.setLightSource(-500,300,500),this.setGridbox(),this.setGraphCoords(),this.data=new Group3D,this.axesGrp=void 0,this.wireframe="",this.colMap=[[0,0,128,255],[0,0,131,255],[0,0,135,255],[0,0,139,255],[0,0,143,255],[0,0,147,255],[0,0,151,255],[0,0,155,255],[0,0,159,255],[0,0,163,255],[0,0,167,255],[0,0,171,255],[0,0,175,255],[0,0,179,255],[0,0,183,255],[0,0,187,255],[0,0,191,255],[0,0,195,255],[0,0,199,255],[0,0,203,255],[0,0,207,255],[0,0,211,255],[0,0,215,255],[0,0,219,255],[0,0,223,255],[0,0,227,255],[0,0,231,255],[0,0,235,255],[0,0,239,255],[0,0,243,255],[0,0,247,255],[0,0,251,255],[0,0,255,255],[0,4,255,255],[0,8,255,255],[0,12,255,255],[0,16,255,255],[0,20,255,255],[0,24,255,255],[0,28,255,255],[0,32,255,255],[0,36,255,255],[0,40,255,255],[0,44,255,255],[0,48,255,255],[0,52,255,255],[0,56,255,255],[0,60,255,255],[0,64,255,255],[0,68,255,255],[0,72,255,255],[0,76,255,255],[0,80,255,255],[0,84,255,255],[0,88,255,255],[0,92,255,255],[0,96,255,255],[0,100,255,255],[0,104,255,255],[0,108,255,255],[0,112,255,255],[0,116,255,255],[0,120,255,255],[0,124,255,255],[0,128,255,255],[0,131,255,255],[0,135,255,255],[0,139,255,255],[0,143,255,255],[0,147,255,255],[0,151,255,255],[0,155,255,255],[0,159,255,255],[0,163,255,255],[0,167,255,255],[0,171,255,255],[0,175,255,255],[0,179,255,255],[0,183,255,255],[0,187,255,255],[0,191,255,255],[0,195,255,255],[0,199,255,255],[0,203,255,255],[0,207,255,255],[0,211,255,255],[0,215,255,255],[0,219,255,255],[0,223,255,255],[0,227,255,255],[0,231,255,255],[0,235,255,255],[0,239,255,255],[0,243,255,255],[0,247,255,255],[0,251,255,255],[0,255,255,255],[4,255,251,255],[8,255,247,255],[12,255,243,255],[16,255,239,255],[20,255,235,255],[24,255,231,255],[28,255,227,255],[32,255,223,255],[36,255,219,255],[40,255,215,255],[44,255,211,255],[48,255,207,255],[52,255,203,255],[56,255,199,255],[60,255,195,255],[64,255,191,255],[68,255,187,255],[72,255,183,255],[76,255,179,255],[80,255,175,255],[84,255,171,255],[88,255,167,255],[92,255,163,255],[96,255,159,255],[100,255,155,255],[104,255,151,255],[108,255,147,255],[112,255,143,255],[116,255,139,255],[120,255,135,255],[124,255,131,255],[128,255,128,255],[131,255,124,255],[135,255,120,255],[139,255,116,255],[143,255,112,255],[147,255,108,255],[151,255,104,255],[155,255,100,255],[159,255,96,255],[163,255,92,255],[167,255,88,255],[171,255,84,255],[175,255,80,255],[179,255,76,255],[183,255,72,255],[187,255,68,255],[191,255,64,255],[195,255,60,255],[199,255,56,255],[203,255,52,255],[207,255,48,255],[211,255,44,255],[215,255,40,255],[219,255,36,255],[223,255,32,255],[227,255,28,255],[231,255,24,255],[235,255,20,255],[239,255,16,255],[243,255,12,255],[247,255,8,255],[251,255,4,255],[255,255,0,255],[255,251,0,255],[255,247,0,255],[255,243,0,255],[255,239,0,255],[255,235,0,255],[255,231,0,255],[255,227,0,255],[255,223,0,255],[255,219,0,255],[255,215,0,255],[255,211,0,255],[255,207,0,255],[255,203,0,255],[255,199,0,255],[255,195,0,255],[255,191,0,255],[255,187,0,255],[255,183,0,255],[255,179,0,255],[255,175,0,255],[255,171,0,255],[255,167,0,255],[255,163,0,255],[255,159,0,255],[255,155,0,255],[255,151,0,255],[255,147,0,255],[255,143,0,255],[255,139,0,255],[255,135,0,255],[255,131,0,255],[255,128,0,255],[255,124,0,255],[255,120,0,255],[255,116,0,255],[255,112,0,255],[255,108,0,255],[255,104,0,255],[255,100,0,255],[255,96,0,255],[255,92,0,255],[255,88,0,255],[255,84,0,255],[255,80,0,255],[255,76,0,255],[255,72,0,255],[255,68,0,255],[255,64,0,255],[255,60,0,255],[255,56,0,255],[255,52,0,255],[255,48,0,255],[255,44,0,255],[255,40,0,255],[255,36,0,255],[255,32,0,255],[255,28,0,255],[255,24,0,255],[255,20,0,255],[255,16,0,255],[255,12,0,255],[255,8,0,255],[255,4,0,255],[255,0,0,255],[251,0,0,255],[247,0,0,255],[243,0,0,255],[239,0,0,255],[235,0,0,255],[231,0,0,255],[227,0,0,255],[223,0,0,255],[219,0,0,255],[215,0,0,255],[211,0,0,255],[207,0,0,255],[203,0,0,255],[199,0,0,255],[195,0,0,255],[191,0,0,255],[187,0,0,255],[183,0,0,255],[179,0,0,255],[175,0,0,255],[171,0,0,255],[167,0,0,255],[163,0,0,255],[159,0,0,255],[155,0,0,255],[151,0,0,255],[147,0,0,255],[143,0,0,255],[139,0,0,255],[135,0,0,255],[131,0,0,255],[0,0,0,0]]}setGridbox(t,e,o){let i=50,n=50,s=40;t&&t>=10&&t<=100&&(i=t),e&&e>=10&&(n=e),o&&o>=10&&(s=o),this.gbX=i,this.gbY=n,this.gbZ=s}setGraphCoords(t,e,o,i,n,s){if(this.xmin=t||0,this.xmax=e||100,this.ymin=o||0,this.ymax=i||100,this.zmin=n||0,this.zmax=s||100,this.xmax<=this.xmin)return void console.error("xMax must be greater than xMin",this.xmax,this.xmin);if(this.ymax<=this.ymin)return void console.error("yMax must be greater than yMin");if(this.zmax<=this.zmin)return void console.error("zMax must be greater than zMin");const r=this.xmax-this.xmin,a=this.ymax-this.ymin,l=this.zmax-this.zmin;this.xScale=this.gbX/r,this.yScale=this.gbY/a,this.zScale=this.gbZ/l,this.xOffset=this.xScale*(this.xmin+r/2),this.yOffset=this.yScale*(this.ymin+a/2),this.zOffset=this.zScale*(this.zmin+l/2)}drawGraph(){this.data.rotateX(-90),this.data.rotateY(this.zRot),this.data.rotateX(this.xRot),void 0!==this.axesGrp?(this.axesGrp.rotateX(-90),this.axesGrp.rotateY(this.zRot),this.axesGrp.rotateX(this.xRot),this.gc.render(this.axesGrp),this.gc.render(this.data,"noclear",this.wireframe)):this.gc.render(this.data)}toRawCoords(t,e,o){return[-this.xOffset+t*this.xScale,-this.yOffset+e*this.yScale,-this.zOffset+o*this.zScale]}plotPoints(t,e){const o="object"==typeof e?e:{},i=o.fillColor||o.fillcolor||this.gc.paintCol.toRGBA(),n=.5*(o.symbolSize||o.symbolsize||3)/this.xScale,s=o.symbol||"sphere";let r=[],a=null;if(Array.isArray(t)){if(Array.isArray(t[0])&&3==t[0].length)for(let e=0;e<t.length;e++)r[e]={x:t[e][0],y:t[e][1],z:t[e][2]};else if("object"==typeof t[0]&&null!=t[0].x)r=t;else{if("number"!=typeof t[0]||3!=t.length)return void console.log("Graph3D: plotPoints not passed an array of coordinates");r[0]={x:t[0],y:t[1],z:t[2]}}r.forEach(t=>{switch(s){default:case"sphere":a=function(t,e){return new Sphere3D(2*t,{fillColor:e,relShine:.7,relAmbient:.8})}(n,i);break;case"cube":a=function(t,e){const o=.7*t,i=new Group3D,n=[[o,o,o],[o,o,-o],[o,-o,o],[o,-o,-o],[-o,o,o],[-o,o,-o],[-o,-o,o],[-o,-o,-o]];function s(t,o,s,r){let a=["M",n[t][0],n[t][1],n[t][2],"L",n[o][0],n[o][1],n[o][2],"L",n[s][0],n[s][1],n[s][2],"L",n[r][0],n[r][1],n[r][2],"z"],l=new Shape3D(a,{fillColor:e});i.addObj(l)}return s(0,2,3,1),s(1,3,7,5),s(1,5,4,0),s(4,5,7,6),s(6,7,3,2),s(6,2,0,4),i}(n,i);break;case"tetra":case"tetrahedron":a=function(t,e){const o=t,i=new Group3D,n=1/Math.sqrt(2),s=[[o,0,-o*n],[-o,0,-o*n],[0,o,o*n],[0,-o,o*n]];function r(t,o,n){let r=["M",s[t][0],s[t][1],s[t][2],"L",s[o][0],s[o][1],s[o][2],"L",s[n][0],s[n][1],s[n][2],"z"],a=new Shape3D(r,{fillColor:e});i.addObj(a)}return r(0,1,2),r(2,1,3),r(2,3,0),r(0,3,1),i.rotateX(54.74),i}(n,i);break;case"dodeca":case"dodecahedron":a=function(t,e){const o=.6*t||100,i=new Group3D,n=(1+Math.sqrt(5))/2,s=[[o,o,o],[o,o,-o],[o,-o,o],[o,-o,-o],[-o,o,o],[-o,o,-o],[-o,-o,o],[-o,-o,-o],[0,o*n,o/n],[0,o*n,-o/n],[0,-o*n,o/n],[0,-o*n,-o/n],[o/n,0,o*n],[o/n,0,-o*n],[-o/n,0,o*n],[-o/n,0,-o*n],[o*n,o/n,0],[o*n,-o/n,0],[-o*n,o/n,0],[-o*n,-o/n,0]];function r(t,o,n,r,a){const l=["M",s[t][0],s[t][1],s[t][2],"L",s[o][0],s[o][1],s[o][2],"L",s[n][0],s[n][1],s[n][2],"L",s[r][0],s[r][1],s[r][2],"L",s[a][0],s[a][1],s[a][2],"z"],h=new Shape3D(l,{fillColor:e});i.addObj(h)}return r(0,8,4,14,12),r(12,14,6,10,2),r(12,2,17,16,0),r(0,16,1,9,8),r(8,9,5,18,4),r(4,18,19,6,14),r(3,11,7,15,13),r(13,15,5,9,1),r(13,1,16,17,3),r(3,17,2,10,11),r(11,10,6,19,7),r(7,19,18,5,15),i}(n,i);break;case"icos":case"icosahedron":a=function(t,e){const o=t/2,i=new Group3D,n=(1+Math.sqrt(5))/2,s=[[0,o,o*n],[0,o,-o*n],[0,-o,o*n],[0,-o,-o*n],[o*n,0,o],[o*n,0,-o],[-o*n,0,o],[-o*n,0,-o],[o,o*n,0],[o,-o*n,0],[-o,o*n,0],[-o,-o*n,0]];function r(t,o,n){let r=["M",s[t][0],s[t][1],s[t][2],"L",s[o][0],s[o][1],s[o][2],"L",s[n][0],s[n][1],s[n][2],"z"],a=new Shape3D(r,{fillColor:e});i.addObj(a)}return r(0,2,4),r(0,4,8),r(0,8,10),r(0,10,6),r(0,6,2),r(9,4,2),r(4,9,5),r(4,5,8),r(8,5,1),r(8,1,10),r(10,1,7),r(10,7,6),r(6,7,11),r(6,11,2),r(2,11,9),r(3,9,11),r(3,11,7),r(3,7,1),r(3,1,5),r(3,5,9),i}(n,i)}const e=this.toRawCoords(t.x,t.y,t.z);a.setProperty("x",e[0]),a.setProperty("y",e[1]),a.setProperty("z",e[2]),this.data.addObj(a)}),this.drawGraph()}else console.log("Graph3D: plotPoints not passed an array of coordinates")}plotLine(t,e){const o="object"==typeof e?e:{},i=o.lineWidth||this.gc.penWid,n=o.strokeColor||this.gc.penCol;let s,r,a=["M"];if(Array.isArray(t)){if(s=t.length,Array.isArray(t[0])&&3==t[0].length)for(let e=0;e<s;e++)r[e]={x:t[e][0],y:t[e][1],z:t[e][2]};else{if("object"!=typeof t[0]||null==t[0].x){if("M"===t[0]||"m"===t[0]){const e=new Path3D(t,{strokeColor:n,lineWidth:i,sclNonUniform:[this.xScale,this.yScale,this.zScale],trans:[-this.xOffset,-this.yOffset,-this.zOffset]});return this.data.addObj(e),void this.drawGraph()}return void console.error("unknown data format")}r=t}for(let t=0;t<s;t++){let e=this.toRawCoords(r[t].x,r[t].y,r[t].z);a.push(e[0],e[1],e[2])}this.data.addObj(new Path3D(a,{strokeColor:n,lineWidth:i})),this.drawGraph()}else console.error("unknown data format")}plotMesh(t,e){const o="object"==typeof e?e:{},i=o.meshColor||this.gc.penCol;o.strokeColor=i;const n=this.buildMesh(t,o);this.wireframe="wireframe",this.data.addObj(n),this.drawGraph()}plotSurface(t,e){const o="object"==typeof e?e:{};o.strokeColor=o.meshColor||"colorMap";const i=this.buildMesh(t,e);this.data.addObj(i),this.wireframe="",this.drawGraph()}buildMesh(t,e){const o=this,i="object"==typeof e?e:{},n=i.lineWidth||this.gc.penWid,s=i.fillColor||"colorMap";let r,a,l,h,c,f=i.strokeColor;function d(t){t>o.zmax?t=o.zmax:t<o.zmin&&(t=o.zmin);const e=Math.round(256*(t-o.zmin)/(o.zmax-o.zmin)),i=o.colMap[e];return"rgba("+i[0]+","+i[1]+","+i[2]+", 1)"}if(!Array.isArray(t)||!Array.isArray(t[0]))return void console.error("unknown data format");if(a=t.length,l=t[0].length,Array.isArray(t[0][0])&&3==t[0][0].length){r=[];for(let e=0;e<a;e++){r[e]=[];for(let o=0;o<l;o++)r[e][o]={x:t[e][o][0],y:t[e][o][1],z:t[e][o][2]}}}else{if("object"!=typeof t[0][0]||null==t[0][0].x)return void console.error("unknown data format");r=t}const p=[];for(let t=0;t<a-1;t++)for(let e=0;e<l-1;e++){let o=this.toRawCoords(r[t][e].x,r[t][e].y,r[t][e].z),i=this.toRawCoords(r[t][e+1].x,r[t][e+1].y,r[t][e+1].z),a=this.toRawCoords(r[t+1][e+1].x,r[t+1][e+1].y,r[t+1][e+1].z),l=this.toRawCoords(r[t+1][e].x,r[t+1][e].y,r[t+1][e].z),x=(r[t][e].z+r[t][e+1].z+r[t+1][e+1].z+r[t+1][e].z)/4,g=["M",o[0],o[1],o[2],"L",i[0],i[1],i[2],a[0],a[1],a[2],l[0],l[1],l[2],"z"];h="colorMap"===s||"colormap"===s?d(x):s,c="colorMap"===f||"colormap"===f?d(x):f,p.push(new Shape3D(g,{fillColor:h,backColor:h,border:c!=h,strokeColor:c,strokeWidth:n}))}return p}drawGraphAxes(o){const i=this,n=new class{constructor(t){this.xMinTic="auto",this.yMinTic="auto",this.zMinTic="auto",this.xMajTic="auto",this.yMajTic="auto",this.zMajTic="auto",this.xUnits="",this.yUnits="",this.zUnits="",this.xLabel="",this.yLabel="",this.zLabel="",this.strokeColor="black",this.gridColor="dimgray",this.fontSize=11,this.fontWeight=400,this.lineWidth=1;const e="object"==typeof t?t:{};for(let t in e)e.hasOwnProperty(t)&&this.setProperty(t,e[t])}setProperty(t,e){if("string"==typeof t&&void 0!==e)switch(t.toLowerCase()){case"xunits":"string"==typeof e&&(this.xUnits=e);break;case"yunits":"string"==typeof e&&(this.yUnits=e);break;case"zunits":"string"==typeof e&&(this.zUnits=e);break;case"xlabel":case"xaxislabel":"string"==typeof e&&(this.xLabel=e);break;case"ylabel":case"yaxislabel":"string"==typeof e&&(this.yLabel=e);break;case"zlabel":case"zaxislabel":"string"==typeof e&&(this.zLabel=e);break;case"xtickinterval":case"xminortickinterval":this.xMinTic=e;break;case"ytickinterval":case"yminortickinterval":this.yMinTic=e;break;case"ztickinterval":case"zminortickinterval":this.zMinTic=e;break;case"xmajortickinterval":this.xMajTic=e;break;case"ymajortickinterval":this.yMajTic=e;break;case"zmajortickinterval":this.zMajTic=e;break;case"strokecolor":this.strokeColor=e;break;case"linewidth":this.lineWidth=e;break;case"gridcolor":this.gridColor=e;break;case"fontsize":"number"==typeof e&&e>=8&&e<=50?this.fontSize=e:console.warn("invalid font size:",e);break;case"fontweight":"string"==typeof e&&"bold"==e?this.fontWeight=700:"string"==typeof e&&"normal"==e?this.fontWeight=400:"string"==typeof e&&"light"==e?this.fontWeight=200:"number"==typeof e&&e>=100&&e<=900?this.fontWeight=e:console.warn("invalid font weight:",e);break;default:return void console.warn("unrecognized option key:",t)}}}(o),s=this.xmin,r=this.xmax,a=this.ymin,l=this.ymax,h=this.zmin,c=this.zmax,f=new Group3D,d=new Group3D,p=new Group3D,x=j("X").width,g=1/(this.xScale*this.gc.xscl),u=-1/(this.yScale*this.gc.yscl),b=n.strokeColor,y=n.lineWidth;let S,m,w,z,C,M,k=1,T=1,D=0;function j(t){const e=new Text3D(t,{fontSize:n.fontSize,fontWeight:n.fontWeight}),o=n.fontSize/33;return{width:e.width*o,height:e.height*o}}const W=new Path3D(["M",s,l,h,"l",r-s,0,0,"M",s,l,c,"l",r-s,0,0,"M",r,a,h,"l",0,l-a,0,"M",r,a,c,"l",0,l-a,0,"M",r,a,h,"l",0,0,c-h,"M",r,l,h,"l",0,0,c-h],{strokeColor:n.gridColor});!function(){const o=x*u,d=1*o,p=1.8*o;let g,m,w,C,M,W=1*o,v=1.5*o,P="",L="",O=[];if(m=null===n.xMinTic||"auto"===n.xMinTic?new t(s,r,n.xMajTic):new e(s,r,n.xMinTic,n.xMajTic),S=new Path3D(["M",s,0,0,"L",r,0,0],{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),f.addObj(S),m.ticStep){let t=[];m.minTics.forEach(function(e){t=t.concat(["M",e,0,0,"l",0,-d/2,0])}),C=new Path3D(t,{lineWidth:1.5,lineCap:"round",strokeColor:n.gridColor}),t=[],m.majTics.forEach(function(e){t=t.concat(["M",e,0,0,"l",0,-p/2,0])}),M=new Path3D(t,{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),f.addObj(C,M);{let t=[];m.majTics.forEach(function(e){t=t.concat(["M",e,0,0,"l",0,l-a,0,"M",e,l-a,0,"l",0,0,c-h])});let e=new Path3D(t,{lineWidth:.5*y,lineCap:"round",strokeColor:n.gridColor});f.addObj(e)}w=toEngNotation(m.minTics[m.minTics.length-1])}T=-1,m.lblStep&&(k=2,W+=.6*d,m.majTics.forEach(function(t){const e=new Text3D(toEngNotation(t,w.exp).manStr,{lorg:k,strokeColor:b,fontSize:n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.xScale,1/i.yScale,-90],trans:[t,T*W,0]});O.push(e)}),f.addObj(O)),k=2,g=(s+r)/2,m.lblStep?(v+=m.majTics.reduce(function(t,e){let o=j(toEngNotation(e,w.exp).manStr);return Math.max(t,o.width)},0)*u,v+=d,n.xUnits.length>0?P=n.xLabel+" ("+w.expStr+n.xUnits+")":"0"!=(L=toSciNotation(10,w.exp)).expStr?z=i.genSciNotationText(10,L.expStr,{preText:n.xLabel+"  (",postText:")",lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.xScale,1/i.yScale,1],trans:[g,T*v,0]}):P=n.xLabel):n.xLabel.length>0&&(P=n.xLabel);P.length>0&&(z=new Text3D(P,{lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.xScale,1/i.yScale,1],rotZ:D,trans:[g,T*v,0]})),z&&f.addObj(z),f.setProperty("z",h),f.setProperty("y",a)}(),function(){const o=x*g,f=1*o,p=1.8*o;let u,S,w,z,M,W=1*o,v=1.5*o,P="",L="",O=[];if(S=null===n.yMinTic||"auto"===n.yMinTic?new t(a,l,n.yMajTic):new e(a,l,n.yMinTic,n.yMajTic),m=new Path3D(["M",0,a,0,"L",0,l,0],{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),d.addObj(m),S.ticStep){let t=[];S.minTics.forEach(function(e){t=t.concat(["M",0,e,0,"L",-f/2,e,0])}),z=new Path3D(t,{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),t=[],S.majTics.forEach(function(e){t=t.concat(["M",0,e,0,"L",-p/2,e,0])}),M=new Path3D(t,{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),d.addObj(z,M);{let t=[];S.majTics.forEach(function(e){t=t.concat(["M",0,e,0,"l",r-s,0,0,"M",r-s,e,0,"l",0,0,c-h])});let e=new Path3D(t,{lineWidth:.5*y,lineCap:"round",strokeColor:n.gridColor});d.addObj(e)}w=toEngNotation(S.minTics[S.minTics.length-1])}T=-1,S.lblStep&&(k=6,W+=.6*f,S.majTics.forEach(function(t){if(t>l-1e-7)return;const e=new Text3D(toEngNotation(t,w.exp).manStr,{lorg:k,strokeColor:b,fontSize:n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.xScale,1/i.yScale,1],trans:[T*W,t,0]});O.push(e)}),d.addObj(O)),k=2,D=-90,u=(a+l)/2,S.lblStep?(v+=S.majTics.reduce(function(t,e){let o=j(toEngNotation(e,w.exp).manStr);return Math.max(t,o.width)},0)*g,v+=f,n.yUnits.length>0?P=n.yLabel+" ("+w.expStr+n.yUnits+")":"0"!=(L=toSciNotation(10,w.exp)).expStr?C=i.genSciNotationText(10,L.expStr,{preText:n.yLabel+"  (",postText:")",lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.yScale,1/i.xScale,1],zRot:D,trans:[T*v,u,0]}):P=n.yLabel):n.yLabel.length>0&&(P=n.yLabel);P.length>0&&(C=new Text3D(P,{lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.yScale,1/i.xScale,1],zRot:D,trans:[T*v,u,0]})),C&&d.addObj(C),d.setProperty("z",h),d.setProperty("x",s)}(),function(){const o=x*g,f=1*o,d=1.8*o;let u,S,m,z,C,W=1*o,v=1.5*o,P="",L="",O=[];if(S=null===n.zMinTic||"auto"===n.zMinTic?new t(h,c,n.zMajTic):new e(h,c,n.zMinTic,n.zMajTic),w=new Path3D(["M",0,0,h,"L",0,0,c],{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),p.addObj(w),S.ticStep){let t=[];S.minTics.forEach(function(e){t=t.concat(["M",0,0,e,"l",-f/2,0,0])}),z=new Path3D(t,{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),t=[],S.majTics.forEach(function(e){t=t.concat(["M",0,0,e,"l",-d/2,0,0])}),C=new Path3D(t,{lineWidth:1.5*y,lineCap:"round",strokeColor:n.gridColor}),p.addObj(z,C);{let t=[];S.majTics.forEach(function(e){t=t.concat(["M",0,0,e,"l",r-s,0,0,"M",r-s,0,e,"l",0,-(l-a),0])});let e=new Path3D(t,{lineWidth:.5*y,lineCap:"round",strokeColor:n.gridColor});p.addObj(e)}m=toEngNotation(S.minTics[S.minTics.length-1])}T=-1,S.lblStep&&(k=6,W+=.6*f,S.majTics.forEach(function(t){const e=new Text3D(toEngNotation(t,m.exp).manStr,{lorg:k,strokeColor:b,fontSize:n.fontSize,fontWeight:n.fontWeight,fontFamily:n.fontFamily,sclNonUniform:[1/i.xScale,1/i.zScale,1],xRot:90,trans:[T*W,0,t]});O.push(e)}),p.addObj(O)),k=2,D=90,u=(h+c)/2,S.lblStep?(v+=S.majTics.reduce(function(t,e){let o=j(toEngNotation(e,m.exp).manStr);return Math.max(t,o.width)},0)*g,v+=f,n.zUnits.length>0?P=n.zLabel+" ("+m.expStr+n.zUnits+")":"0"!=(L=toSciNotation(10,m.exp)).expStr?M=i.genSciNotationText(10,L.expStr,{preText:P+"  (",postText:")",lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.zScale,1/i.xScale,1],rotX:D,rotY:D,trans:[T*v,0,u]}):P=n.zLabel):n.zLabel.length>0&&(P=n.zLabel);P.length>0&&(M=new Text3D(P,{lorg:k,strokeColor:b,fontSize:1.1*n.fontSize,fontWeight:n.fontWeight,sclNonUniform:[1/i.zScale,1/i.xScale,1],xRot:D,yRot:D,trans:[T*v,0,u]})),M&&p.addObj(M),p.setProperty("x",s),p.setProperty("y",l)}(),this.axesGrp=new Group3D,this.axesGrp.addObj(W,f,d,p),this.axesGrp.setProperty("sclNonUniform",[this.xScale,this.yScale,this.zScale]),this.axesGrp.setProperty("trans",[-this.xOffset,-this.yOffset,-this.zOffset]),this.gc.render(this.axesGrp)}genSciNotationText(t,e,o){let i="string"==typeof t?t:t.toString();const n="string"==typeof e?e:e.toString(),s="object"==typeof o?o:{},r=s.fontSize||this.gc.fontSize,a=s.fontWeight||this.gc.fontWeight,l=s.strokeColor||this.gc.penCol,h=s.preText||"",c=s.postText||"",f=s.lorg||7,d=r/33,p=new Group3D;let x,g,u,b,y=7,S=0,m=0;"string"==typeof h&&(i=h+i);const w=new Text3D(i,{lorg:7,strokeColor:l,fontSize:r,fontWeight:a}),z=d*w.width/this.gc.xscl,C=-d*w.height/this.gc.yscl,M={ul:{x:0,y:C},ll:{x:0,y:0},lr:{x:z,y:0},ur:{x:z,y:C}};""!=n&&(S=.7*d*(u=new Text3D(n,{lorg:7,strokeColor:l,fontSize:.7*r,fontWeight:a,x:M.ur.x,y:M.ur.y-m})).width/this.gc.xscl,m=.7*-d*u.height/this.gc.yscl),c&&(b=new Text3D(c,{lorg:7,strokeColor:l,fontSize:r,fontWeight:a,x:M.lr.x+S,y:M.lr.y})),-1!==[1,2,3,4,5,6,7,8,9].indexOf(f)&&(y=f);const k=z+S,T=C,D=k/2,j=T/2,W=[0,[0,T],[D,T],[k,T],[0,j],[D,j],[k,j],[0,0],[D,0],[k,0]];return x=-W[y][0],g=-W[y][1],p.addObj(w),u&&p.addObj(u),b&&p.addObj(b),p.setProperty("x",x),p.setProperty("y",g),p.width=k,p.height=T,p}initZoomTurn(){const t=this,e=["m",-7,-2,0,"l",7,5,0,7,-5,0],o=this.gc,i=new Group3D;function n(e){const i=o.toPixelCoords(0,0,0),n=o.rawWidth/2-i.x,s=o.rawHeight/2-i.y;o.xoffset+=n-n/e,o.yoffset+=s-s/e,o.xscl/=e,o.yscl/=e,t.drawGraph()}function s(e,o){t.xRot+=o,t.zRot+=e,t.xRot>90&&(t.xRot=90),t.xRot<0&&(t.xRot=0),t.zRot>90&&(t.zRot=90),t.zRot<0&&(t.zRot=0),t.drawGraph()}const r=new CanvasStack(o.cId);r.deleteAllLayers();const a=r.createLayer(),l=111,h=78,c=document.getElementById(a);c.style.left=o.cnvs.offsetLeft+o.cnvs.clientLeft+o.cnvs.offsetWidth-l-3+"px",c.style.top=o.cnvs.offsetTop+o.cnvs.clientTop+3+"px",c.style.width=l+"px",c.style.height=h+"px";const f=new Cango3D(a);f.setWorldCoords3D(40-f.rawWidth,40-f.rawHeight,f.rawWidth);const d=new Panel3D(shapeDefs.rectangle(l,h),{x:-17,fillColor:"rgba(0, 50, 0, 0.12)"}),p=new Panel3D(shapeDefs.rectangle(20,20),{fillColor:"rgba(0,0,0,0.2)"});p.enableDrag(null,null,function(){o.xscl=o.savWC.xscl,o.yscl=o.savWC.yscl,o.xoffset=o.savWC.xoffset,o.yoffset=o.savWC.yoffset,t.xRot=20,t.zRot=35,t.drawGraph()});const x=new Panel3D(shapeDefs.rectangle(20,20),{x:22,fillColor:"rgba(0,0,0,0.2)"});x.enableDrag(null,null,function(){s(5,0)});const g=new Panel3D(shapeDefs.rectangle(20,20),{y:22,fillColor:"rgba(0,0,0,0.2)"});g.enableDrag(null,null,function(){s(0,-5)});const u=new Panel3D(shapeDefs.rectangle(20,20,2),{x:-22,fillColor:"rgba(0,0,0,0.2)"});u.enableDrag(null,null,function(){s(-5,0)});const b=new Panel3D(shapeDefs.rectangle(20,20,2),{y:-22,fillColor:"rgba(0,0,0,0.2)"});b.enableDrag(null,null,function(){s(0,5)});const y=new Panel3D(shapeDefs.rectangle(20,20,2),{x:-56,y:11,fillColor:"rgba(0,0,0,0.2)"});y.enableDrag(null,null,function(){n(1/1.2)});const S=new Panel3D(shapeDefs.rectangle(20,20,2),{x:-56,y:-11,fillColor:"rgba(0,0,0,0.2)"});S.enableDrag(null,null,function(){n(1.2)});const m=new Path3D(e,{y:22,strokeColor:"white",lineWidth:2}),w=new Path3D(e,{rotZ:-90,x:22,strokeColor:"white",lineWidth:2}),z=new Path3D(e,{rotZ:90,x:-22,strokeColor:"white",lineWidth:2}),C=new Path3D(e,{rotZ:180,y:-22,strokeColor:"white",lineWidth:2}),M=new Path3D(["m",-7,0,0,"l",14,0,0,"m",-7,-7,0,"l",0,14,0],{x:-56,y:11,strokeColor:"white",lineWidth:2}),k=new Path3D(["m",-7,0,0,"l",14,0,0],{x:-56,y:-11,strokeColor:"white",lineWidth:2}),T=new Path3D(["m",-6,-6,0,"l",12,12,0,"m",0,-12,0,"l",-12,12,0],{strokeColor:"white",lineWidth:2});i.addObj(d,p,x,g,u,b,y,S,m,w,z,C,M,k,T),r.addResizeCallback(function(){c.style.left=o.cnvs.offsetLeft+o.cnvs.clientLeft+o.cnvs.offsetWidth-l-3+"px",c.style.top=o.cnvs.offsetTop+o.cnvs.clientTop+3+"px",c.style.width=l+"px",c.style.height=h+"px",c.width=l,c.height=h,f.render(i,"noclear")}),f.render(i,"noclear")}}}();