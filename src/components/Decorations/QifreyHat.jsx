import { useState, useEffect } from "react";
import "../../css/Decorations.scss";

function QifreyHat() {
    return (
        <div>
            <svg
                className="svg" viewBox="0 0 42.022312 64.312187" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                <defs />
                <path
                    style="fill:#b2b3af;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                    d="M 29.706714,2.421207 27.051574,5.945936 0.2021358,41.58885 c 8.57909,12.486855 19.6900282,14.231389 32.7255982,9.920749 L 30.005044,6.967758 Z"
                    id="path1" />
                <path
                    style="fill:#faf3ed;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                    d="M 32.927734,51.509598 21.002844,34.275145 0.2021338,41.58885 c 7.825987,11.464507 18.7345202,14.771423 32.7256002,9.920748 z"
                    id="path3" />
                <path
                    style="fill:#c0bca4;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                    d="m 27.051574,5.945936 c 0.68328,0.956595 1.54135,1.219215 2.95347,1.021822 l -0.29833,-4.546551 z"
                    id="path4" />
                <path
                    style="fill:#c0bca4;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                    id="path5"
                    d="m 18.884071,44.423351 a 1.0307274,1.0307274 0 0 1 -1.028172,1.030725 1.0307274,1.0307274 0 0 1 -1.03327,-1.025615 1.0307274,1.0307274 0 0 1 1.02305,-1.035809 1.0307274,1.0307274 0 0 1 1.038342,1.020479" />
                <g
                    id="g10"
                    transform="translate(-82.127216,-22.573933)">
                    <path
                        style="fill:#1c1c1c;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                        d="m 111.83393,24.99514 c -0.29105,-1.340947 -2.85829,-2.080636 -7.70172,-2.219067 -1.16396,0.559774 -2.44011,1.023374 -3.32531,1.822086 l -1.822085,3.325307 c 0.642565,-0.587343 1.056605,-1.403213 2.004295,-1.68543 4.84092,-1.052071 6.33728,-0.907025 10.84482,-1.242896 z"
                        id="path6" />
                    <path
                        style="fill:#383838;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                        d="m 100.8069,24.598159 c -1.110396,0.771674 -1.767051,0.898295 -4.111784,3.424743 -0.606871,1.954512 -0.908811,5.052515 -1.28841,7.859297 1.006563,2.638973 2.195334,4.700952 3.566314,6.185937 l 3.15634,-4.190072 c -1.31124,-1.043956 -2.217778,-2.964761 -3.179528,-4.765944 -0.504598,-1.759919 -0.492938,-3.489471 0.03498,-5.188654 z"
                        id="path7" />
                    <path
                        style="fill:#383838;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                        d="m 113.36798,48.374133 c 3.74322,4.130454 7.55029,8.240957 10.35165,12.665744 l 0.22776,4.236349 C 121.35717,60.15235 117.1656,58.906504 113.68243,53.166364 Z"
                        id="path8" />
                    <path
                        style="fill:#1c1c1c;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                        d="m 119.98056,60.226688 c 0.68302,2.020656 1.35998,4.041313 1.16212,6.061969 -0.11325,3.110886 -1.35283,6.034051 -2.02924,9.051076 -0.77707,2.520658 -3.02196,4.138042 -4.83154,6.023313 l 3.7686,-1.288409 c 1.30988,-0.85894 2.36208,-1.911141 3.1566,-3.156604 l 2.41577,-8.245819 0.32452,-3.395988 c -1.1105,-2.043878 -2.43277,-3.727057 -3.96683,-5.049538 z"
                        id="path9" />
                    <path
                        style="fill:#383838;fill-opacity:1;stroke:#000000;stroke-width:0.404283;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:0;stroke-opacity:1"
                        d="m 114.2819,81.363044 c -2.64124,1.030728 -5.41132,1.374304 -8.31024,1.030729 l -7.666033,-3.929647 c -2.941868,-0.193262 -4.938903,0.515363 -5.991104,2.125874 0.193262,2.254717 0.7301,3.349865 1.610514,3.285445 0.944833,-1.030728 2.061454,-1.546092 3.349863,-1.546093 5.54229,3.246036 5.72513,3.101398 7.34393,3.865229 2.77008,0.730098 5.45427,0.644204 8.05256,-0.257683 l 5.669,-3.221024 2.86671,-5.797841 -3.1566,3.156604 z"
                        id="path10" />
                </g>
            </svg>
        </div>
    );
}

export default QifreyHat;
