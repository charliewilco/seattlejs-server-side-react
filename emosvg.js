import * as React from 'react';

export const Emosvg = ({size}) => (
  <svg className="Emosvg" width={size} height={size} viewBox="0 0 375 375">
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
        <stop stopColor="#FAE299" offset="0%" />
        <stop stopColor="#F4C669" offset="83.7795139%" />
        <stop stopColor="#F3C160" offset="100%" />
      </linearGradient>
      <path
        d="M285.120264,90.7863757 C285.120264,40.6464449 221.293919,0 142.560132,0 C63.8263452,0 0,40.6464449 0,90.7863757 C0,140.926306 285.120264,140.926306 285.120264,90.7863757 Z"
        id="path-2"
      />
      <linearGradient
        x1="50%"
        y1="108.331943%"
        x2="50%"
        y2="0%"
        id="linearGradient-4">
        <stop stopColor="#FCB8B4" offset="0%" />
        <stop stopColor="#F7827D" offset="100%" />
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Ghost" transform="translate(-13.000000, -13.000000)">
        <g id="Dead" transform="translate(13.000000, 13.000000)">
          <circle
            id="Oval"
            fill="url(#linearGradient-1)"
            cx="187.5"
            cy="187.5"
            r="187.5"
          />
          <g
            id="Group"
            transform="translate(41.666667, 118.333333)"
            fill="#093750">
            <path
              d="M27.0833333,18.6371205 L43.9731126,1.74734124 C46.3012826,-0.580828761 50.0854682,-0.584197613 52.4174051,1.7477393 C54.7498548,4.08018895 54.7495203,7.86031476 52.4178032,10.1920318 L35.5280239,27.0818111 L52.4178032,43.9715903 C54.7495203,46.3033074 54.7498548,50.0834332 52.4174051,52.4158829 C50.0854682,54.7478198 46.3012826,54.7444509 43.9731126,52.4162809 L27.0833333,35.5265017 L10.1935541,52.4162809 C7.86538408,54.7444509 4.08119847,54.7478198 1.74926155,52.4158829 C-0.583188095,50.0834332 -0.582853584,46.3033074 1.74886349,43.9715903 L18.6386427,27.0818111 L1.74886349,10.1920318 C-0.582853584,7.86031476 -0.583188095,4.08018895 1.74926155,1.7477393 C4.08119847,-0.584197613 7.86538408,-0.580828761 10.1935541,1.74734124 L27.0833333,18.6371205 Z"
              id="Combined-Shape"
            />
            <path
              d="M264.583333,18.6371205 L281.473113,1.74734124 C283.801283,-0.580828761 287.585468,-0.584197613 289.917405,1.7477393 C292.249855,4.08018895 292.24952,7.86031476 289.917803,10.1920318 L273.028024,27.0818111 L289.917803,43.9715903 C292.24952,46.3033074 292.249855,50.0834332 289.917405,52.4158829 C287.585468,54.7478198 283.801283,54.7444509 281.473113,52.4162809 L264.583333,35.5265017 L247.693554,52.4162809 C245.365384,54.7444509 241.581198,54.7478198 239.249262,52.4158829 C236.916812,50.0834332 236.917146,46.3033074 239.248863,43.9715903 L256.138643,27.0818111 L239.248863,10.1920318 C236.917146,7.86031476 236.916812,4.08018895 239.249262,1.7477393 C241.581198,-0.584197613 245.365384,-0.580828761 247.693554,1.74734124 L264.583333,18.6371205 Z"
              id="Combined-Shape-Copy"
            />
          </g>
          <g id="Oval-2-Copy" transform="translate(45.000000, 187.500000)">
            <mask id="mask-3" fill="white">
              <use xlinkHref="#path-2" />
            </mask>
            <use id="Mask" fill="#093750" xlinkHref="#path-2" />
            <path
              d="M241.895875,113.705147 C241.895875,86.3457997 197.259588,64.1666667 142.197937,64.1666667 C87.136287,64.1666667 42.5,86.3457997 42.5,113.705147 C42.5,141.064494 241.895875,141.064494 241.895875,113.705147 Z"
              fill="url(#linearGradient-4)"
              mask="url(#mask-3)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
