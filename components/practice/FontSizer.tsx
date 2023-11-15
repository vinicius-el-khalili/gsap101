"use client"

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Fleur_De_Leah } from "next/font/google";

const FontSizer = () => {
    return (
        <>
        
        <div
        style={{
            margin:0,
            padding:0,
            height:200,
            width:200,
            border:"1px solid white",
            whiteSpace:"nowrap",
            display:"flex",
            justifyContent:"center"
        }}>

<LetterTest/>
<LetterTest/>
<LetterTest/>
<LetterTest/>

        </div>
        
        </>
    );
}
 
export default FontSizer;

const LetterTest = () => {
    return (
        <>

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810.000000 1280.000000"
        preserveAspectRatio="xMidYMid meet"     >
            <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
                <path d="M3445 12403 c-603 -49 -1043 -156 -1471 -358 -581 -274 -1041 -698
                -1289 -1188 -146 -289 -219 -588 -232 -942 -19 -539 124 -953 437 -1265 194
                -194 412 -311 693 -372 138 -30 484 -33 619 -5 263 53 486 170 666 348 227
                225 340 462 373 782 43 426 -125 829 -430 1031 -36 24 -198 103 -360 176 -162
                72 -306 139 -320 148 -41 25 -81 65 -97 94 -45 87 31 236 184 357 259 207 614
                321 994 321 850 -1 1367 -467 1517 -1367 36 -214 45 -343 45 -623 -1 -503 -68
                -912 -229 -1395 -164 -492 -361 -863 -716 -1345 -284 -385 -570 -731 -1055
                -1276 -814 -914 -1076 -1226 -1345 -1605 -715 -1005 -1043 -1906 -1105 -3032
                l-7 -128 28 -30 29 -29 3417 0 3416 0 6 33 c2 17 107 771 233 1674 l228 1643
                -29 30 -29 30 -388 0 -388 0 -4 -22 c-3 -13 -15 -84 -27 -158 -42 -264 -115
                -504 -196 -650 -118 -211 -334 -300 -798 -330 -86 -6 -907 -10 -1934 -10
                l-1783 0 7 28 c22 91 169 383 287 572 250 399 666 844 1149 1231 298 239 521
                394 964 669 826 512 1176 750 1581 1074 567 452 884 819 1123 1296 245 491
                354 1007 338 1610 -6 239 -21 379 -63 579 -174 844 -721 1532 -1559 1962 -484
                249 -1031 392 -1680 439 -126 9 -700 12 -800 3z"/>
            </g>
        </svg>

        </>
    );
}
 