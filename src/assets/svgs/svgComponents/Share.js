import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Share = (props) => (
  <Svg
    width={props.width || 14}
    height={props.height || 12}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.10547 0.63462C5.25545 0.784642 5.3397 0.988088 5.3397 1.20022C5.3397 1.41235 5.25545 1.6158 5.10547 1.76582L3.27107 3.60022H7.73987C9.22508 3.60022 10.6495 4.19022 11.6997 5.24042C12.7499 6.29063 13.3399 7.71501 13.3399 9.20022V10.8002C13.3399 11.0124 13.2556 11.2159 13.1056 11.3659C12.9555 11.5159 12.752 11.6002 12.5399 11.6002C12.3277 11.6002 12.1242 11.5159 11.9742 11.3659C11.8242 11.2159 11.7399 11.0124 11.7399 10.8002V9.20022C11.7399 8.13935 11.3184 7.12194 10.5683 6.37179C9.81815 5.62165 8.80073 5.20022 7.73987 5.20022H3.27107L5.10547 7.03462C5.18188 7.10842 5.24282 7.19669 5.28475 7.2943C5.32668 7.3919 5.34875 7.49688 5.34967 7.6031C5.35059 7.70932 5.33035 7.81467 5.29013 7.91298C5.2499 8.0113 5.1905 8.10062 5.11538 8.17574C5.04027 8.25085 4.95095 8.31025 4.85263 8.35048C4.75431 8.3907 4.64897 8.41094 4.54275 8.41002C4.43652 8.4091 4.33155 8.38703 4.23394 8.3451C4.13634 8.30317 4.04807 8.24223 3.97427 8.16582L0.774268 4.96582C0.624291 4.8158 0.540039 4.61235 0.540039 4.40022C0.540039 4.18809 0.624291 3.98464 0.774268 3.83462L3.97427 0.63462C4.12429 0.484643 4.32774 0.400391 4.53987 0.400391C4.752 0.400391 4.95545 0.484643 5.10547 0.63462Z"
      fill={props.color || "white"}
    />
  </Svg>
);
export default Share;
