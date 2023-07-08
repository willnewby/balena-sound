"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[595],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(h,i(i({ref:e},p),{},{components:a})):r.createElement(h,i({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},444:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={},i="Audio interfaces",l={unversionedId:"audio-interfaces",id:"audio-interfaces",title:"Audio interfaces",description:"If you want to upgrade the sound quality of your balenaSound devices, or if your board has no onboard soundcard, you'll probably want to add an external soundcard. Generally these come in two flavors: USB soundcards or DAC boards. Both alternatives are widely supported in balenaSound.",source:"@site/docs/05-audio-interfaces.md",sourceDirName:".",slug:"/audio-interfaces",permalink:"/balena-sound/audio-interfaces",draft:!1,editUrl:"https://github.com/willnewby/balena-sound/edit/master/docs/05-audio-interfaces.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/balena-sound/plugins"},next:{title:"Device support",permalink:"/balena-sound/device-support"}},d={},s=[{value:"Onboard",id:"onboard",level:2},{value:"USB Soundcards",id:"usb-soundcards",level:2},{value:"DAC boards",id:"dac-boards",level:2},{value:"Overview",id:"overview",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Supported DACs",id:"supported-dacs",level:3},{value:"Untested DACs",id:"untested-dacs",level:3},{value:"Unsupported DACs",id:"unsupported-dacs",level:3}],p={toc:s};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"audio-interfaces"},"Audio interfaces"),(0,n.kt)("p",null,"If you want to upgrade the sound quality of your balenaSound devices, or if your board has no onboard soundcard, you'll probably want to add an external soundcard. Generally these come in two flavors: ",(0,n.kt)("strong",{parentName:"p"},"USB soundcards")," or ",(0,n.kt)("strong",{parentName:"p"},"DAC boards"),". Both alternatives are widely supported in balenaSound."),(0,n.kt)("p",null,"Checkout the ",(0,n.kt)("a",{parentName:"p",href:"customization#general"},"customization")," section to learn how to select which audio interface to use. For a detailed and up to date list of what interfaces are supported on each device check out the audio block ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/balenablocks/audio#supported-devices"},"documentation")," section."),(0,n.kt)("p",null,"As a general rule of thumb, onboard and USB soundcards should work out of the box without any configuration, and DACs usually require setting a ",(0,n.kt)("inlineCode",{parentName:"p"},"dtoverlay"),". Read on to learn more about the alternatives. If for any reason you can't get your soundcard to work, feel free to ",(0,n.kt)("a",{parentName:"p",href:"./support#contact-us"},"contact us")," and we'll gladly help out."),(0,n.kt)("h2",{id:"onboard"},"Onboard"),(0,n.kt)("p",null,"While most boards have built-in soundcards it's well known that the quality you can get from them is not the greatest. For the Raspberry Pi family for example, the Pi Foundation does an excellent job at keeping the cost of their boards down, but that comes with some compromises with audio being one of them. The ",(0,n.kt)("a",{parentName:"p",href:"https://hackaday.com/2018/07/13/behind-the-pin-how-the-raspberry-pi-gets-its-audio/"},"audio circuitry")," does an OK job, but it's nothing stellar. Onboard audiocards don't require any configuration."),(0,n.kt)("h2",{id:"usb-soundcards"},"USB Soundcards"),(0,n.kt)("p",null,"USB soundcards are also supported without any special configuration needed. Just make sure you power cycle your device after plugging in the soundcard and you should be good to go."),(0,n.kt)("h2",{id:"dac-boards"},"DAC boards"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"balenaSound supports a wide variety of DACs, but in an ever-growing market, chances are your particular DAC might not work with the project just yet. Broadly speaking, it's a two step process in order for a DAC to be officially supported:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"the required kernel driver must be available in balenaOS"),(0,n.kt)("li",{parentName:"ol"},"adequate testing must be performed with balenaSound")),(0,n.kt)("p",null,"Latest versions of balenaOS already ships with drivers for most, if not all, of the DACs available. The testing story, however, is different. It's not possible for us to test all of them individually as it would take an incredible amount of resources. For this reason, we rely on community contributions to help catalogue existing DACs into three categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Supported-DACs"},"Supported DACs"),": battle-tested, known to work with balenaSound."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Untested-DACs"},"Untested DACs"),": DACs whose drivers are included in balenaOS but haven't been tested with balenaSound (most likely because no balena team member has one)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#Unsupported-DACs"},"Unsupported DACs"),": DACs that probably need additional drivers that aren't currently available in balenaOS.")),(0,n.kt)("p",null,"A curated list for all three categories can be found in the sections below. If you don't find your DAC anywhere, please add a comment to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/439"},"this")," GitHub issue and we'll take a look for you."),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To get a DAC board to work with balenaSound you will need to enable its corresponding Device Tree Overlay. Thankfully balenaCloud makes this very easy to do."),(0,n.kt)("p",null,"In the balenaCloud dashboard:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on the specific device within your fleet and select ",(0,n.kt)("inlineCode",{parentName:"li"},"Configuration")," in the left-side menu."),(0,n.kt)("li",{parentName:"ul"},"Add an additional custom configuration variable called ",(0,n.kt)("inlineCode",{parentName:"li"},"BALENA_HOST_CONFIG_dtoverlay"),". The value of this will depend on your DAC board (see tables below in each DAC category subsection)."),(0,n.kt)("li",{parentName:"ul"},"Cycle the power by unplugging your device.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/balenalabs/balena-sound/master/docs/images/dac-vars.png",alt:"DAC Configuration"})),(0,n.kt)("p",null,"If you're using multiple devices with multiple DACs for multi-room audio, you'll want to do this process per unique device that is using a DAC. Do not set this variable fleet-wide as it will affect every device within your fleet."),(0,n.kt)("h3",{id:"supported-dacs"},"Supported DACs"),(0,n.kt)("p",null,"These are the DACs that are known to work with balenaSound. If you have trouble setting one up, please reach us at our ",(0,n.kt)("a",{parentName:"p",href:"https://forums.balena.io/"},"forums")," where we'll gladly help you troubleshoot the issue. Please ",(0,n.kt)("strong",{parentName:"p"},"do not")," create new GitHub issues for supported DACs unless you've been instructed to do so by our forums support agents."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"DAC Name"),(0,n.kt)("th",{parentName:"tr",align:null},"BALENA_HOST_CONFIG_dtoverlay"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.suptronics.com/Xseries/x400.html"},"Suptronics X400")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://shop.pimoroni.com/collections/pirate-audio"},"Pimoroni Pirate Audio")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://shop.pimoroni.com/products/phat-dac"},"Pimoroni pHAT DAC")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://uk.pi-supply.com/products/justboom-dac-hat"},"Justboom DAC HAT/Zero")),(0,n.kt)("td",{parentName:"tr",align:null},"justboom-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://uk.pi-supply.com/products/justboom-amp-hat"},"Justboom Amp HAT/Zero")),(0,n.kt)("td",{parentName:"tr",align:null},"justboom-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://uk.pi-supply.com/products/justboom-digi-hat"},"Justboom Digi HAT/Zero")),(0,n.kt)("td",{parentName:"tr",align:null},"justboom-digi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://blokas.io/pisound/"},"Pisound")),(0,n.kt)("td",{parentName:"tr",align:null},"pisound")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.inno-maker.com/product/hifi-dac-hat/"},"InnoMaker HiFi DAC HAT")),(0,n.kt)("td",{parentName:"tr",align:null},"allo-boss-dac-pcm512x-audio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.inno-maker.com/product/hifi-amp-hat/"},"InnoMaker HiFi Amp HAT")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-amp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://allo.com/sparky/boss-dac.html"},"Boss DAC v1.2")),(0,n.kt)("td",{parentName:"tr",align:null},"allo-boss-dac-pcm512x-audio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://allo.com/sparky/miniboss-rpi-zero.html"},"miniBoss DAC")),(0,n.kt)("td",{parentName:"tr",align:null},"allo-boss-dac-pcm512x-audio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.kumantech.com/kuman-sc07-raspberry-pi-hifi-digi-digital-sound-card-i2s-spdif-optical-fiber-for-raspberry-pi-3-2-model-b-b-sc07_p0041.html"},"PiFi Digi+")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-digi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.raspberrypi.org/products/iqaudio-dac-plus/"},"IQaudIO Pi-DAC+")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.raspberrypi.org/products/iqaudio-dac-pro/"},"IQaudIO Pi-DAC Pro")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.thepilocator.com/Product/Info/iqaudio-pi-daczero-full-hd-audio-card-mmp"},"IQaudIO Pi-DACZero")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://shop.pimoroni.com/products/pi-digi?variant=33370425994"},"IQaudIO Pi-Digi+")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-digi-wm8804-audio")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.raspberrypi.org/products/iqaudio-digiamp-plus/"},"IQaudIO Pi-DigiAMP+")),(0,n.kt)("td",{parentName:"tr",align:null},"iqaudio-dacplus,unmute_amp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-amp2/"},"Hifiberry Amp2")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/products/dacplus/"},"Hifiberry DAC+")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dac-light/"},"Hifiberry DAC+ Light")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dacplus-rca-version/"},"Hifiberry DAC+ Standard")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dac-pro/"},"Hifiberry DAC+ Pro")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dacplus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dac-zero/"},"Hifiberry DAC Zero")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/products/ampplus/"},"Hifiberry Amp+")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-amp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/products/digi/"},"Hifiberry Digi")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-digi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/products/digiplus/"},"Hifiberry Digi+")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-digi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/beocreate/"},"Hifiberry Beocreate")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dac-dsp/"},"Hifiberry DAC+ DSP")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/miniamp/"},"Hifiberry MiniAmp")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.hifiberry.com/shop/boards/hifiberry-dac2-hd/"},"Hifiberry DAC2 HD")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dacplushd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.adafruit.com/product/4037"},"Adafruit I2S Audio Bonnet")),(0,n.kt)("td",{parentName:"tr",align:null},'"hifiberry-dac","i2s-mmap"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://learn.adafruit.com/adafruit-max98357-i2s-class-d-mono-amp"},"Adafruit MAX98357 I2S Class-D Mono Amp")),(0,n.kt)("td",{parentName:"tr",align:null},'"hifiberry-dac\u201d,"i2s-mmap"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://raspiaudio.com/produit/audio"},"RasPiAudio Audio+ DAC")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.audiophonics.fr/fr/dac-et-interfaces-pour-raspberry-pi/audiophonics-i-sabre-dac-es9023-tcxo-raspberry-pi-a-b-20-i2s-p-9978.html"},"AUDIOPHONICS I-Sabre DAC ES9023")),(0,n.kt)("td",{parentName:"tr",align:null},"hifiberry-dac")))),(0,n.kt)("h3",{id:"untested-dacs"},"Untested DACs"),(0,n.kt)("p",null,"An up to date list of untested DACs can be found in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/439"},"this")," GitHub issue. If you have one of these DACs and want to help us test it, please post on our ",(0,n.kt)("a",{parentName:"p",href:"https://forums.balena.io/"},"forums")," and we'll get back to you with instructions. Hopefully, with your assistance, new DACs can be graduated into the supported category!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Please ",(0,n.kt)("strong",{parentName:"p"},"do not")," create new GitHub issues for untested DACs unless you've been instructed to do so by our forums support agents."),(0,n.kt)("h3",{id:"unsupported-dacs"},"Unsupported DACs"),(0,n.kt)("p",null,"An up to date list of unsupported DACs can be found in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/issues/439"},"this")," GitHub issue. Unsupported DACs can be made to work with balenaSound but often will require further investigation and patching balenaOS, so they are best avoided. Please ",(0,n.kt)("strong",{parentName:"p"},"do")," create a new GitHub issue if you are working on adding support or testing an unsupported DAC as that will facilitate discussion with balenaSound developers."))}u.isMDXComponent=!0}}]);