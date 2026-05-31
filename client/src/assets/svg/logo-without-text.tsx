type Props = {
  width?: string;
  height?: string;
};
const LogoWithoutText = ({ width = "36", height = "36" }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
      <g filter="url(#filter0_iii_3046_38806)">
        <g clipPath="url(#clip0_3046_38806)">
          <rect width="48" height="48" rx="12" fill="#1D4ED8" />
          <rect width="48" height="48" fill="url(#paint0_linear_3046_38806)" />
          <g filter="url(#filter1_d_3046_38806)">
            <path
              d="M30.9974 30.9972C25.1233 36.8714 15.5994 36.8714 9.72526 30.9972"
              stroke="url(#paint1_linear_3046_38806)"
              strokeWidth="4.75"
            />
            <path
              opacity="0.5"
              d="M25.6794 25.6795C22.7423 28.6166 17.9804 28.6166 15.0433 25.6795"
              stroke="url(#paint2_linear_3046_38806)"
              strokeWidth="4.75"
            />
            <path
              opacity="0.5"
              d="M17.0026 17.0028C22.8767 11.1286 32.4006 11.1286 38.2747 17.0028"
              stroke="url(#paint3_linear_3046_38806)"
              strokeWidth="4.75"
            />
            <path
              d="M22.3206 22.3205C25.2577 19.3834 30.0196 19.3834 32.9567 22.3205"
              stroke="url(#paint4_linear_3046_38806)"
              strokeWidth="4.75"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoWithoutText;
