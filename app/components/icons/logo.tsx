import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 600 512"
     width={size || height}
    {...props}
  >
  <g stroke="currentColor">
      <path
        fill="none"
        strokeWidth={24.734}
        d="M499.633 256A243.633 243.633 0 0 1 256 499.633 243.633 243.633 0 0 1 12.367 256 243.633 243.633 0 0 1 256 12.367 243.633 243.633 0 0 1 499.633 256z"
      />
      <g
        fill="currentColor"
        stroke="none"
        strokeWidth={0}
        fontFamily="JetBrains Mono"
        fontSize={50.8}
        textAnchor="middle"
      >
        <path
          d="M158.472 161.497q-14.339 0-23.463-9.124-9.125-9.125-9.125-23.463 0-13.904 9.125-23.029 9.559-9.56 23.463-9.56h8.69q13.904 0 23.029 9.56 9.559 9.125 9.559 23.029 0 14.338-9.125 23.463-9.125 9.124-23.463 9.124zm-36.933 247.667 23.898-132.958h46.926l-30.415 132.958z"
          aria-label=";"
          style={{
            InkscapeFontSpecification: "&quot",
            textAlign: "center",
          }}
        />
        <path
          d="M269.235 320.09v-73.866h21.725q27.808 0 43.884-15.208 16.512-15.642 16.512-41.278 0-25.635-16.512-40.843-16.076-15.642-44.319-15.642h-54.313V96.32h54.313q30.415 0 52.575 11.732 22.594 11.297 34.76 32.153 12.6 20.856 12.6 49.533 0 24.767-10.427 44.754-10.428 19.553-29.112 31.284-18.249 11.732-42.581 13.035v41.278zm12.6 95.59q-11.297 0-18.684-7.387-7.386-7.386-7.386-18.683t7.386-18.684q7.387-7.387 18.684-7.387h13.035q12.6 0 19.118 7.387 6.952 6.952 6.952 18.25 0 11.296-7.386 19.117-7.387 7.387-18.684 7.387z"
          aria-label="?"
          style={{
            InkscapeFontSpecification: "&quot",
            textAlign: "center",
          }}
        />
      </g>
    </g>
  </svg>
);
