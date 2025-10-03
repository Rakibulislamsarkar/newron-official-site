import * as React from "react"
import {SVGProps} from "react"

const RonAgent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={45}
        height={47}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M11 10.506a7 7 0 0 0-7 7v9.798a7 7 0 0 0 7 7h12.247l9.268 4.3v-4.3h.688a7 7 0 0 0 7-7v-9.798a7 7 0 0 0-7-7H11Z"
                clipRule="evenodd"
            />
            <rect
                width={29.114}
                height={18.354}
                x={7.544}
                y={13.228}
                fill="url(#b)"
                rx={9.177}
            />
            <path
                fill="#fff"
                fillRule="evenodd"
                d="M23.114 5.903A3.04 3.04 0 0 0 22.1 0a3.038 3.038 0 0 0-1.012 5.903v2.831h2.025v-2.83Z"
                clipRule="evenodd"
            />
            <circle cx={15.392} cy={22.405} r={2.025} fill="#fff" />
            <circle cx={28.81} cy={22.405} r={2.025} fill="#fff" />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={15.355}
                x2={78.389}
                y1={-35.717}
                y2={6.422}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#4F46E5" />
                <stop offset={0.917} stopColor="#F17953" />
            </linearGradient>
            <filter
                id="a"
                width={44.203}
                height={48}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_408" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_408"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
export default RonAgent
