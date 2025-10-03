import * as React from "react";
import { SVGProps } from "react";

const VideoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        viewBox="0 0 60 60"
        fill="none"
        {...props}
    >
        <rect
            x={3}
            y={3}
            width={54}
            height={40}
            rx={4}
            fill="#FF8CA0"
            stroke="#000"
            strokeWidth={1}
        />
        <rect
            x={3}
            y={43}
            width={54}
            height={14}
            rx={2}
            fill="#E5E7EB"
            stroke="#000"
            strokeWidth={1}
        />
        <polygon
            points="25,13 37,20 25,27"
            fill="#000"
        />
        <circle cx={10} cy={50} r={2} fill="#C084FC" />
        <rect x={15} y={49} width={33} height={2} rx={1} fill="#9CA3AF" />
    </svg>
);

export default VideoIcon;
