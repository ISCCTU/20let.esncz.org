(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{509:function(C,e,t){"use strict";t.r(e);var r={name:"ColorModeSwitcher"},o=t(14),component=Object(o.a)(r,(function(){var C=this,e=C.$createElement,t=C._self._c||e;return t("button",{staticClass:"\n    py-1 px-2 m-1 flex flex-row items-center gap-2\n    rounded border-2 border-current text-gray-300\n    hover:text-white\n    uppercase text-sm\n  ",on:{click:function(e){C.$colorMode.preference="dark"===C.$colorMode.value?"light":"dark"}}},["dark"===C.$colorMode.value?[t("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"clip-rule":"evenodd",d:"M12 2C12.3315 2 12.6495 2.1317 12.8839 2.36612C13.1183 2.60054 13.25 2.91848 13.25 3.25V4.5C13.25 4.83152 13.1183 5.14946 12.8839 5.38388C12.6495 5.6183 12.3315 5.75 12 5.75C11.6685 5.75 11.3505 5.6183 11.1161 5.38388C10.8817 5.14946 10.75 4.83152 10.75 4.5V3.25C10.75 2.91848 10.8817 2.60054 11.1161 2.36612C11.3505 2.1317 11.6685 2 12 2V2ZM17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12V12ZM16.42 18.1875L17.3038 19.0712C17.5395 19.2989 17.8553 19.4249 18.183 19.4221C18.5107 19.4192 18.8243 19.2878 19.056 19.056C19.2878 18.8243 19.4192 18.5107 19.4221 18.183C19.4249 17.8553 19.2989 17.5395 19.0712 17.3038L18.1875 16.42C17.9517 16.1923 17.636 16.0663 17.3082 16.0692C16.9805 16.072 16.667 16.2035 16.4352 16.4352C16.2035 16.667 16.072 16.9805 16.0692 17.3082C16.0663 17.636 16.1923 17.9517 16.42 18.1875V18.1875ZM19.07 4.92875C19.3043 5.16316 19.436 5.48105 19.436 5.8125C19.436 6.14396 19.3043 6.46184 19.07 6.69625L18.1875 7.58C18.0722 7.69939 17.9343 7.79462 17.7818 7.86013C17.6293 7.92564 17.4652 7.96012 17.2993 7.96156C17.1333 7.96301 16.9687 7.93138 16.8151 7.86853C16.6614 7.80568 16.5219 7.71286 16.4045 7.59549C16.2871 7.47813 16.1943 7.33856 16.1315 7.18494C16.0686 7.03132 16.037 6.86672 16.0384 6.70075C16.0399 6.53477 16.0744 6.37075 16.1399 6.21824C16.2054 6.06574 16.3006 5.92781 16.42 5.8125L17.3038 4.92875C17.5382 4.69441 17.856 4.56277 18.1875 4.56277C18.519 4.56277 18.8368 4.69441 19.0712 4.92875H19.07ZM20.75 13.25C21.0815 13.25 21.3995 13.1183 21.6339 12.8839C21.8683 12.6495 22 12.3315 22 12C22 11.6685 21.8683 11.3505 21.6339 11.1161C21.3995 10.8817 21.0815 10.75 20.75 10.75H19.5C19.1685 10.75 18.8505 10.8817 18.6161 11.1161C18.3817 11.3505 18.25 11.6685 18.25 12C18.25 12.3315 18.3817 12.6495 18.6161 12.8839C18.8505 13.1183 19.1685 13.25 19.5 13.25H20.75ZM12 18.25C12.3315 18.25 12.6495 18.3817 12.8839 18.6161C13.1183 18.8505 13.25 19.1685 13.25 19.5V20.75C13.25 21.0815 13.1183 21.3995 12.8839 21.6339C12.6495 21.8683 12.3315 22 12 22C11.6685 22 11.3505 21.8683 11.1161 21.6339C10.8817 21.3995 10.75 21.0815 10.75 20.75V19.5C10.75 19.1685 10.8817 18.8505 11.1161 18.6161C11.3505 18.3817 11.6685 18.25 12 18.25V18.25ZM5.8125 7.58C5.92856 7.69614 6.06635 7.78828 6.21802 7.85116C6.36968 7.91405 6.53225 7.94645 6.69643 7.9465C6.86062 7.94656 7.02321 7.91428 7.17492 7.8515C7.32663 7.78872 7.46449 7.69668 7.58062 7.58062C7.69676 7.46457 7.7889 7.32678 7.85179 7.17511C7.91467 7.02344 7.94707 6.86088 7.94713 6.69669C7.94719 6.53251 7.91491 6.36992 7.85213 6.21821C7.78935 6.0665 7.69731 5.92864 7.58125 5.8125L6.69625 4.92875C6.4605 4.70105 6.14474 4.57506 5.817 4.57791C5.48925 4.58076 5.17574 4.71222 4.94398 4.94398C4.71222 5.17574 4.58076 5.48925 4.57791 5.817C4.57506 6.14474 4.70105 6.4605 4.92875 6.69625L5.8125 7.58V7.58ZM7.58 18.1875L6.69625 19.0712C6.4605 19.2989 6.14474 19.4249 5.817 19.4221C5.48925 19.4192 5.17574 19.2878 4.94398 19.056C4.71222 18.8243 4.58076 18.5107 4.57791 18.183C4.57506 17.8553 4.70105 17.5395 4.92875 17.3038L5.8125 16.42C6.04825 16.1923 6.36401 16.0663 6.69175 16.0692C7.0195 16.072 7.33301 16.2035 7.56477 16.4352C7.79653 16.667 7.92799 16.9805 7.93084 17.3082C7.93369 17.636 7.8077 17.9517 7.58 18.1875V18.1875ZM4.5 13.25C4.83152 13.25 5.14946 13.1183 5.38388 12.8839C5.6183 12.6495 5.75 12.3315 5.75 12C5.75 11.6685 5.6183 11.3505 5.38388 11.1161C5.14946 10.8817 4.83152 10.75 4.5 10.75H3.25C2.91848 10.75 2.60054 10.8817 2.36612 11.1161C2.1317 11.3505 2 11.6685 2 12C2 12.3315 2.1317 12.6495 2.36612 12.8839C2.60054 13.1183 2.91848 13.25 3.25 13.25H4.5Z",fill:"currentColor","fill-rule":"evenodd"}})]),C._v("\n    light mode\n  ")]:C._e(),C._v(" "),"light"===C.$colorMode.value?[t("svg",{staticClass:"w-6 h-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M21 16.1529C19.1593 16.9855 17.1086 17.2374 15.1211 16.8751C13.1336 16.5128 11.3036 15.5535 9.87509 14.1249C8.44655 12.6964 7.48723 10.8665 7.12493 8.87894C6.76263 6.89144 7.01455 4.84072 7.84714 3C6.38172 3.66225 5.09883 4.67013 4.10854 5.93716C3.11824 7.2042 2.45011 8.69256 2.16146 10.2746C1.87281 11.8566 1.97225 13.485 2.45126 15.0201C2.93028 16.5552 3.77456 17.9512 4.91167 19.0883C6.04878 20.2254 7.44478 21.0697 8.9799 21.5487C10.515 22.0277 12.1434 22.1272 13.7254 21.8385C15.3074 21.5499 16.7958 20.8818 18.0628 19.8915C19.3299 18.9012 20.3377 17.6183 21 16.1529Z",fill:"currentColor"}})]),C._v("\n    dark mode\n  ")]:C._e()],2)}),[],!1,null,"18eb53f8",null);e.default=component.exports}}]);