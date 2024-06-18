//? Special component to generate the og:image and twitter:image, which fit the available space
//? source https://github.com/vercel/commerce
//? https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image

/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { colors } from 'theme/colors';
export const contentType = 'image/png';

export const size = {
  width: 630,
  height: 630
};

export const runtime = 'edge';

const OpengraphImage = async (url, alt) => {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px',
          backgroundColor: colors.background,
          color: 'white'
        }}>
        {url ? <img src={url} alt={alt} /> : <Logo />}
      </div>
    ),
    {
      ...size
    }
  );
};

export default OpengraphImage;

const Logo = () => {
  return (
    <svg
      width="103"
      height="24"
      viewBox="0 0 103 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: 'scale(3)'
      }}>
      <path
        d="M14.4886 2.51973C9.90514 2.51973 6.30017 5.89724 6.30017 11.2405V23.714H9.45884V10.9725C9.45884 7.59491 11.7077 5.53983 14.5058 5.53983C17.3898 5.53983 19.5528 7.59491 19.5528 10.9725V23.6247H22.6943V11.1511C22.6943 5.89723 19.1752 2.51973 14.4886 2.51973ZM82.6577 3.00223H78.9667L75.1896 8.52417L76.9068 11.0618L82.6577 3.00223ZM0 0H3.15866V23.6247H0V0ZM102.468 3.00223H98.8629L94.9831 8.52417L96.7856 11.0618L102.468 3.00223ZM29.0803 0H25.9216V14.9039C25.9216 20.1579 29.5266 23.6247 34.1101 23.6247V20.5331C31.2261 20.5331 29.0631 18.478 29.0631 15.1005V5.82575H34.1101V3.0201H29.0803V0ZM64.4607 14.2427C64.5466 13.8674 64.7354 12.9382 64.7354 11.8123C64.7354 6.29039 60.7699 2.44825 55.7401 2.44825C50.0751 2.44825 45.5602 7.21963 45.5602 13.2241C45.5602 19.3179 50.0579 24 56.1006 24C59.3451 24 62.0403 22.5882 64.0316 20.4438L62.2119 18.1742C60.5983 19.8541 58.6069 20.9798 56.1864 20.9798C52.2209 20.9798 49.3369 18.3529 48.8906 14.2248H53.7488H64.4607V14.2427ZM55.5513 5.43261C58.7099 5.43261 61.4051 7.59491 61.4909 11.3298H53.7488H48.8906C49.6116 7.86298 52.221 5.43261 55.5513 5.43261ZM88.6827 3.00223H85.0776L99.395 23.6247H103L88.6827 3.00223ZM84.4602 23.6068H88.1506L92.4765 17.2271L90.674 14.6001L84.4602 23.6068ZM65.1817 3.00223L79.5847 23.6247H83.1898L68.8724 3.00223H65.1817ZM64.6496 23.6068H68.2543L72.5803 17.2271L70.8637 14.6001L64.6496 23.6068ZM45.4744 2.51973C40.891 2.51973 37.2859 5.89724 37.2859 11.2405V23.714H40.4275V10.9725C40.4275 7.59491 42.6763 5.53983 45.4744 5.53983C45.4744 5.52196 45.4744 2.51973 45.4744 2.51973Z"
        fill="#F2F8F5"
      />
    </svg>
  );
};
