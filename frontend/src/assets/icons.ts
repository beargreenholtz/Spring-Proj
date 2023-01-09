const icons = {
	brandLogo: [
		'512 141',
		`
		<path d="M274.552 0.654986C270.668 1.69316 268.246 3.11585 265.785 5.73052C264.132 7.53771 263.555 8.53744 262.901 10.6907C262.209 12.9978 262.132 13.613 262.517 15.151C264.862 24.3793 276.09 29.301 287.164 25.9557C290.586 24.9176 292.47 23.7256 294.777 21.2263C299.468 16.1123 299.391 10.3062 294.508 5.30756C291.278 2.00077 286.933 0.308927 281.204 0.0397702C278.166 -0.0755828 276.743 0.0397702 274.552 0.654986Z"/>
		<path d="M505.102 15.4586C492.221 17.7272 484.877 21.5723 480.263 28.4551C479.224 30.07 478.302 31.5311 478.225 31.7618C478.109 32.0695 477.148 31.9925 475.187 31.5311C472.957 31.0313 470.458 30.8775 464.036 30.8775C456.923 30.8775 455.231 30.9928 451.848 31.7234C441.85 33.9151 433.776 37.9525 427.355 44.1046C420.28 50.872 416.742 58.6006 416.742 67.3675C416.742 76.8649 421.164 85.5932 429.469 92.3991L432.161 94.5908L428.739 96.398C422.664 99.5125 418.549 103.396 416.204 108.126C410.821 119.161 416.05 132.042 428.085 137.387C432.891 139.502 436.006 140.001 443.658 140.001C451.425 140.001 453.386 139.694 458.922 137.541C464.921 135.233 469.996 130.965 474.111 124.775C477.187 120.199 478.801 119.238 480.57 121.007C482.416 122.852 480.762 126.197 474.495 133.619C472.842 135.58 472.534 136.156 472.918 136.618C473.303 137.079 476.148 137.156 490.414 137.156H507.447L508.408 135.887C510.216 133.503 510.677 131.581 510.715 126.39C510.754 120.737 509.985 117.431 507.37 112.163C505.409 108.202 501.872 104.396 499.449 103.665C498.027 103.242 497.45 103.319 492.99 104.588C476.994 109.125 463.613 110.356 451.924 108.356C449.194 107.895 446.311 107.203 445.58 106.857C442.85 105.511 442.543 102.704 445.003 101.512C446.272 100.897 446.541 100.897 450.656 101.896C456.154 103.204 460.076 103.704 464.536 103.704C479.378 103.704 492.836 98.2436 502.141 88.4386C507.101 83.2477 510.062 77.134 510.946 70.2128C512.33 59.7542 506.87 48.2958 497.027 40.9132L495.258 39.6059L500.68 39.106C503.679 38.8368 507.178 38.5292 508.447 38.3754L510.754 38.1447L510.869 26.571C510.946 17.4965 510.869 14.9203 510.485 14.805C510.216 14.6896 507.793 14.9972 505.102 15.4586ZM466.536 41.7591C468.612 42.6819 472.457 46.95 474.149 50.1799C474.918 51.6026 475.995 54.3326 476.571 56.2167C477.609 59.485 477.648 60.1002 477.648 66.983C477.648 73.8657 477.609 74.4809 476.571 77.7492C475.149 82.4403 473.149 86.0931 470.381 89.0538C465.536 94.2447 461.768 94.2447 456.885 89.0154C454.193 86.1316 451.809 81.5943 450.502 76.9802C449.771 74.2887 449.656 72.9813 449.656 66.7907C449.656 60.1387 449.733 59.4466 450.732 56.2167C452.155 51.5641 454.078 48.0651 456.846 45.0274C459.384 42.259 461.46 41.0285 463.652 41.0285C464.382 41.0285 465.69 41.3746 466.536 41.7591Z" />
		<path d="M31.2748 30.1084C21.8544 30.9544 15.1255 33.3383 9.39637 37.914C2.89822 43.1049 0.283573 50.2568 2.0523 57.9085C3.39807 63.5224 7.58919 68.7902 14.3949 73.3274C16.5482 74.7501 22.9694 78.2876 28.6217 81.1329C40.8105 87.2851 42.6177 88.6309 42.6177 91.63C42.6177 93.1681 42.4254 93.591 41.2335 94.7061C39.2725 96.5902 35.3121 97.7438 31.7362 97.4361C28.1987 97.1285 25.5072 95.7828 23.0463 93.1296C20.7778 90.5919 19.7396 88.0926 19.1244 83.44C18.8937 81.5943 18.6245 79.8256 18.5476 79.5564C18.4323 79.1719 16.3944 79.095 9.28102 79.1719L0.129771 79.2873L0.014419 91.7838C-0.0240316 98.6666 0.014419 104.665 0.129771 105.126C0.322024 105.972 0.398926 105.972 9.66552 106.126C18.0478 106.241 19.432 106.357 23.5846 107.28C29.1215 108.51 39.1956 109.164 45.3477 108.664C57.575 107.703 67.0723 103.665 72.5323 97.0516C75.6083 93.3219 76.6465 89.8998 76.3773 84.4397C76.2235 81.4021 76.0697 80.7484 74.5702 77.7492C73.3013 75.173 72.2631 73.7503 69.9561 71.4817C65.342 66.8676 60.1127 63.5608 45.3477 55.986C37.1193 51.7564 34.1586 49.1417 34.1586 46.1041C34.1586 42.5281 40.9643 40.2595 46.2321 42.0283C50.6539 43.5278 54.1529 48.7187 54.9603 54.9093C55.191 56.6781 55.4602 58.5237 55.5371 59.0236L55.6909 59.8695L64.8421 59.7926L73.9549 59.6773V33.1461L64.5345 32.9154C57.2674 32.7616 54.6143 32.5693 52.9994 32.0695C49.0774 30.8775 36.0811 29.6855 31.2748 30.1084Z" />
		<path d="M236.601 30.4161C229.872 31.7234 222.759 34.7995 218.529 38.2601L216.222 40.1826L212.531 36.5682L208.801 32.9538L198.304 33.0307C188.076 33.1461 187.769 33.1845 187.653 33.9151C187.615 34.3381 188.576 37.0681 189.884 39.9904L192.191 45.2966V93.9756L189.884 99.2049C188.615 102.127 187.576 104.819 187.576 105.242C187.576 106.011 187.884 106.011 208.532 106.011C225.527 106.011 229.565 105.895 229.718 105.511C229.795 105.242 228.757 102.396 227.373 99.2049L224.874 93.3988V71.6355C224.874 53.256 224.95 49.68 225.45 48.7572C226.642 46.3732 227.181 46.4886 239.6 51.4488C245.483 53.7943 250.559 55.6399 250.943 55.563C251.558 55.4477 251.597 54.4095 251.712 43.2587L251.789 31.0697L250.943 30.6083C249.636 29.9162 239.908 29.7624 236.601 30.4161Z" />
		<path d="M131.708 30.6468C125.979 31.608 120.019 34.3765 115.635 38.0294L112.905 40.3364L109.368 36.8374L105.869 33.3383H95.1797C86.7975 33.3383 84.452 33.4537 84.2982 33.8382C84.2213 34.1074 85.2594 36.9143 86.6436 40.0673L89.1429 45.8349V125.698L86.6436 131.504C85.2594 134.695 84.2213 137.541 84.2982 137.81C84.6058 138.54 126.248 138.54 126.555 137.848C126.632 137.579 125.633 134.849 124.287 131.773L121.864 126.198L121.826 115.7V105.203L122.903 105.78C127.209 107.972 135.053 109.202 141.628 108.702C160.315 107.203 174.311 96.0519 178.579 79.2488C181.117 69.2516 179.502 58.2161 174.234 49.334C171.658 44.9505 165.429 38.7984 160.969 36.1837C157.047 33.8767 150.741 31.6849 145.665 30.839C141.82 30.2238 134.822 30.1469 131.708 30.6468ZM136.168 43.8739C138.783 44.9505 142.359 50.0645 144.166 55.4092C147.511 65.1373 147.011 78.326 142.974 86.9006C141.436 90.1689 138.706 93.8987 137.091 94.8599C135.476 95.8597 132.784 95.8597 131.169 94.8599C128.439 93.2065 124.71 86.8237 123.364 81.5559C119.98 68.3672 122.403 54.025 129.324 46.1425C131.592 43.4894 133.669 42.7973 136.168 43.8739Z" />
		<path d="M356.336 31.0313C349.3 32.3002 344.186 34.6072 339.456 38.683L337.765 40.1826L330.459 33.3383H319.77C311.157 33.3383 309.004 33.4537 308.85 33.8382C308.734 34.1458 309.773 36.9527 311.118 40.1057L313.618 45.8349L313.848 69.6745L314.117 93.5142L311.657 99.2818C310.311 102.473 309.273 105.28 309.35 105.511C309.657 106.28 351.299 106.241 351.607 105.472C351.722 105.203 350.684 102.319 349.3 99.128L346.762 93.2834V74.3656C346.762 53.4867 346.839 52.5254 349.069 49.257C351.453 45.7965 355.067 43.9893 359.451 43.9893C361.796 43.9893 362.758 44.1815 364.488 45.0274C367.026 46.2194 369.563 48.7956 370.717 51.3334C371.563 53.1021 371.563 53.5636 371.678 73.2889L371.793 93.3988L369.217 99.2818C367.833 102.55 366.795 105.357 366.949 105.588C367.102 105.895 373.562 106.011 388.096 106.011C405.092 106.011 409.014 105.934 409.167 105.511C409.283 105.203 408.245 102.396 406.899 99.2818L404.438 93.5526V74.4809C404.438 53.6789 404.323 52.2562 402.208 47.7959C399.747 42.605 395.133 38.2985 388.481 35.0686C386.174 33.9151 382.867 32.6462 381.175 32.1848C373.178 30.1854 363.796 29.7239 356.336 31.0313Z" />
		<path d="M259.479 33.7228C259.479 34.1458 260.517 36.6836 261.786 39.3751L264.093 44.22V93.668L261.786 98.9742C260.479 101.896 259.518 104.626 259.556 105.049C259.671 105.818 259.941 105.818 280.281 105.934C297.507 106.011 300.967 105.934 301.352 105.472C301.698 105.049 301.275 103.781 299.391 99.6279L296.968 94.2832L296.584 33.1461L278.051 33.0307C259.633 32.9538 259.479 32.9538 259.479 33.7228Z" />
		<path d="M156.431 138.694H157.585C158.739 138.694 158.739 138.694 158.739 136.425V134.195L160.892 133.965C163.468 133.695 164.775 132.926 165.506 131.196C165.929 130.119 165.967 129.62 165.544 128.428C164.891 126.39 163.237 125.621 159.431 125.621H156.431V138.694ZM163.122 128.158C163.929 128.928 163.891 130.581 163.083 131.465C162.66 131.965 161.93 132.157 160.584 132.157H158.739V127.543H160.623C161.853 127.543 162.737 127.774 163.122 128.158Z" />
		<path d="M178.733 138.694H179.694C180.617 138.694 180.655 138.579 180.655 136.387V134.08H182.155C183.616 134.08 183.731 134.157 184.962 136.387C186.038 138.348 186.385 138.694 187.269 138.694C187.884 138.694 188.346 138.617 188.346 138.54C188.346 138.425 187.73 137.31 187 136.041L185.616 133.695L186.884 132.58C187.999 131.619 188.153 131.235 188.115 129.697C188.038 126.697 186.308 125.621 181.617 125.621H178.733V138.694ZM185.577 128.005C186.231 128.658 186.154 130.85 185.423 131.542C185.039 131.965 184.116 132.157 182.732 132.157H180.655V127.543H182.886C184.116 127.543 185.308 127.736 185.577 128.005Z" />
		<path d="M204.187 126.274C202.188 127.274 201.265 128.889 201.111 131.773C200.996 133.888 201.111 134.464 201.88 135.58C203.457 137.887 204.61 138.502 207.532 138.502C209.762 138.502 210.339 138.348 211.493 137.464C213.261 136.118 214.3 133.58 213.992 131.158C213.8 129.158 212.877 127.736 211.031 126.467C209.493 125.428 206.11 125.313 204.187 126.274ZM210.455 128.312C211.647 129.466 212.339 131.465 212.031 133.119C211.262 137.118 206.571 138.348 203.918 135.195C202.149 133.08 202.841 129.043 205.187 127.736C206.61 126.928 209.301 127.197 210.455 128.312Z" />
		<path d="M227.181 138.694H230.372C235.87 138.694 238.331 136.695 238.331 132.157C238.331 127.659 235.87 125.621 230.372 125.621H227.181V138.694ZM234.486 128.043C236.486 129.62 237.024 132.85 235.64 135.118C234.832 136.425 233.064 137.156 230.564 137.156H229.103V127.543H231.526C232.833 127.543 234.179 127.774 234.486 128.043Z" />
		<path d="M251.481 130.773C251.597 135.31 251.712 136.079 252.404 137.041C254.173 139.386 257.672 139.617 259.979 137.541L261.209 136.464L261.325 131.042L261.479 125.621H259.479V130.389C259.479 134.618 259.402 135.233 258.672 136.156C257.98 137.041 257.595 137.194 256.249 137.079C253.904 136.925 253.327 135.541 253.327 129.927V125.621H251.328L251.481 130.773Z" />
		<path d="M278.128 126.159C274.09 127.966 273.168 134.08 276.436 137.002C278.974 139.271 284.857 139.271 284.857 137.041C284.857 136.118 284.857 136.118 283.126 136.656C279.896 137.733 276.974 136.003 276.513 132.657C276.013 128.851 279.973 126.005 283.319 127.736C284.472 128.312 284.472 128.312 284.472 127.197C284.472 126.39 284.241 126.044 283.626 125.851C282.127 125.467 279.358 125.621 278.128 126.159Z" />
		<path d="M296.853 126.467C296.968 127.236 297.238 127.351 298.814 127.466L300.621 127.582V138.694H302.544V127.543H304.274C305.851 127.543 306.004 127.466 306.004 126.582V125.621H301.352C296.776 125.621 296.738 125.621 296.853 126.467Z" />
		<path d="M318.962 125.89C318.808 126.005 318.693 128.966 318.693 132.427V138.694H321V125.621H320.116C319.616 125.621 319.078 125.736 318.962 125.89Z" />
		<path d="M337.149 126.313C334.535 127.736 333.304 130.812 334.112 133.772C334.689 136.041 335.458 137.002 337.303 137.925C340.687 139.54 344.724 138.348 346.301 135.233C346.762 134.311 347.147 132.926 347.147 132.157C347.147 130.427 345.724 127.62 344.34 126.62C342.802 125.505 338.957 125.313 337.149 126.313ZM342.532 127.736C344.263 128.62 344.84 129.773 344.84 132.196C344.84 134.08 344.686 134.541 343.763 135.541C342.34 137.079 340.379 137.464 338.534 136.579C336.842 135.772 335.996 134.311 335.996 132.157C335.996 128.312 339.303 126.044 342.532 127.736Z" />
		<path d="M360.104 125.89C359.951 126.005 359.835 128.966 359.835 132.427V138.694H362.104L362.335 129.735L365.334 134.234C367.794 137.925 368.448 138.694 369.256 138.694H370.217V125.621H368.333L368.102 135.003L365.103 130.312C362.719 126.582 361.912 125.621 361.219 125.621C360.72 125.621 360.22 125.736 360.104 125.89Z" />
		<path d="M384.636 126.582C383.521 127.659 383.405 129.274 384.251 130.542C384.597 131.004 386.059 132.157 387.52 133.119C390.211 134.849 390.75 135.695 389.75 136.695C389.096 137.348 385.789 137.271 384.444 136.579C383.29 135.964 383.29 136.003 383.29 137.118C383.29 138.117 383.482 138.31 384.751 138.656C387.981 139.578 390.942 138.771 391.788 136.695C392.557 134.849 391.903 133.734 388.673 131.542C385.751 129.581 385.174 128.735 385.982 127.736C386.635 126.928 388.25 127.005 390.019 127.928C391.903 128.889 391.826 128.889 391.672 127.659C391.519 126.274 390.211 125.621 387.597 125.621C385.943 125.621 385.366 125.813 384.636 126.582Z" />
		`,
	],
	brandSmallLogo: [
		'154, 198',
		`
			<path fill-rule="evenodd" clip-rule="evenodd" d="M148.871 0.360954C122.085 4.68235 109.531 11.4661 102.447 25.4493C101.451 27.4148 101.362 27.485 100.195 27.2332C26.3894 11.3142 -28.0295 81.5932 25.6711 123.477L28.822 125.935L24.7153 127.952C-17.8002 148.833 -2.24623 198.067 46.8453 198C68.6634 197.971 84.1742 190.23 94.8275 174.057C99.3042 167.26 101.237 165.682 103.863 166.679C108.793 168.55 106.418 174.771 96.3471 186.367C90.0166 193.657 87.7988 193.046 120.613 193.046H147.761L148.752 191.997C157.708 182.514 152.383 153.38 139.78 142.913C135.224 139.129 133.822 138.997 125.053 141.523C114.366 144.602 103.652 146.817 91.5259 148.454C86.7846 149.094 71.0455 149.094 66.2939 148.455C50.1656 146.285 45.5249 144.24 46.6423 139.794C47.4979 136.391 50.603 135.731 57.5716 137.471C130.584 155.703 186.977 82.9507 131.821 41.6816L128.726 39.365L140.614 38.3132C147.153 37.7346 152.718 37.085 152.981 36.8694C153.659 36.3126 153.678 1.067 153 0.39034C152.486 -0.122977 151.896 -0.127173 148.871 0.360954ZM83.6141 43.0498C105.111 53.9134 107.086 101.195 86.8136 119.647C71.2979 133.771 51.0545 100.778 57.0265 71.1005C61.0823 50.9457 73.4395 37.9079 83.6141 43.0498Z"/>
		`,
	],
	arrowRight: [
		'7 12',
		`
			<path d="M1.05986 12L0 10.9295L4.88028 6L0 1.07054L1.05986 0L7 6L1.05986 12Z"/>
		`,
	],
	arrowLeft: [
		'7 12',
		`
			<path d="M5.94014 9.26558e-08L7 1.07054L2.11972 6L7 10.9295L5.94014 12L-5.24537e-07 6L5.94014 9.26558e-08Z"/>
		`,
	],
	hayotaLogo: [
		'106, 35',
		`
			<path d="M13.1698 32.9019H18.0805V31.2679H13.1698V32.9019ZM18.0805 31.2679H21.3485V29.634H18.0805V31.2679ZM0.0980967 26.366H1.73206V24.7321H0.0980967V26.366ZM5 28H11.5359V26.366H13.1698V24.7321H8.26794V23.0981H6.63397V21.4641H3.36603V23.0981H1.73206V24.7321H3.36603V26.366H5V28ZM21.3485 29.634H22.9912V28H24.6252V26.366H26.2592V23.0981H27.8931V14.9195H26.2592V11.6515H24.6252V10.0088H22.9912V8.37482H18.0805V10.0088H16.4466V11.6515H13.1698V13.2855H19.7145V14.9195H21.3485V16.5534H22.9912V26.366H21.3485V29.634ZM13.1698 24.7321H14.8126V21.4641H16.4466V18.1874H14.8126V14.9195H13.1698V13.2855H11.5359V10.0088H9.9019V8.37482H8.26794V5.10688H6.63397V6.74085H5V11.6515H6.63397V14.9195H8.26794V16.5534H9.9019V19.8302H11.5359V21.4641H13.1698V24.7321ZM8.26794 5.10688H9.9019V3.47291H8.26794V5.10688ZM9.9019 3.47291H11.5359V1.83895H9.9019V3.47291ZM16.4466 6.74085H18.0805V5.10688H21.3485V3.47291H19.7145V1.83895H18.0805V0.196193H11.5359V1.83895H13.1698V3.47291H14.8126V5.10688H16.4466V6.74085ZM37.7089 24.7321H34.441V23.0981H32.807V13.2855H37.7089V24.7321ZM40.9856 29.634H42.6196V28H44.2536V26.366H45.8875V24.7321H44.2536V23.0981H42.6196V14.1025H44.2536V12.4685H39.3517V10.0088H37.7089V8.37482H34.441V11.6515H31.173V13.2855H29.5391V16.5534H27.9051V23.0981H29.5391V26.366H31.173V28H34.441V26.366H39.3517V28H40.9856V29.634ZM48.9437 34.5359H50.5777V32.9019H48.9437V34.5359ZM50.5777 32.9019H52.2117V31.2679H50.5777V32.9019ZM44.0418 13.2855H45.6758V11.6515H44.0418V13.2855ZM52.2117 31.2679H55.4884V29.634H57.1223V28H58.7563V26.366H60.3903V23.0981H62.0242V14.9195H60.3903V11.6515H58.7563V10.0088H57.1223V8.37482H55.4884V10.0088H50.5777V8.37482H47.3097V5.10688H45.6758V8.37482H44.0418V10.0088H45.6758V11.6515H47.3097V24.7321H45.6758V26.366H48.9437V28H52.2117V26.366H55.4884V24.7321H52.2117V11.6515H55.4884V14.9195H57.1223V26.366H55.4884V28H53.8456V29.634H52.2117V31.2679ZM68.5777 28H70.2117V26.366H71.8456V24.7321H70.2117V23.0981H68.5777V11.6515H70.2117V13.2855H71.8456V16.5534H73.4884V23.0981H71.8456V24.7321H75.1223V23.0981H76.7563V13.2855H75.1223V10.0088H73.4884V8.37482H70.2117V10.0088H63.6758V23.0981H62.0418V24.7321H65.3097V26.366H68.5777V28ZM86.5761 24.7321H88.2188V23.0981H86.5761V24.7321ZM76.7723 14.9195H78.4062V13.2855H76.7723V14.9195ZM83.3082 28H86.5761V24.7321H84.9421V13.2855H88.2188V11.6515H84.9421V8.37482H81.6742V10.0088H80.0402V11.6515H78.4062V13.2855H80.0402V24.7321H78.4062V26.366H83.3082V28ZM84.9421 8.37482H86.5761V6.74085H88.2188V5.10688H84.9421V8.37482ZM97.1933 24.7321H93.9253V23.0981H92.2914V13.2855H97.1933V24.7321ZM100.47 29.634H102.104V28H103.738V26.366H105.372V24.7321H103.738V23.0981H102.104V14.1025H103.738V12.4685H98.836V10.0088H97.1933V8.37482H93.9253V11.6515H90.6574V13.2855H89.0234V16.5534H87.3895V23.0981H89.0234V26.366H90.6574V28H93.9253V26.366H98.836V28H100.47V29.634Z" fill="#FF3131"/>
		`,
	],
	contactHeader: [
		'58 40',
		`
			<g clip-path="url(#clip0_17_216)">
			<path d="M38.3439 37.594C48.2419 37.594 56.2659 29.57 56.2659 19.672C56.2659 9.77395 48.2419 1.75 38.3439 1.75C28.4458 1.75 20.4219 9.77395 20.4219 19.672C20.4219 29.57 28.4458 37.594 38.3439 37.594Z" stroke="black" stroke-width="2.5"/>
			<path d="M19.172 37.594C29.07 37.594 37.094 29.57 37.094 19.672C37.094 9.77395 29.07 1.75 19.172 1.75C9.27395 1.75 1.25 9.77395 1.25 19.672C1.25 29.57 9.27395 37.594 19.172 37.594Z" stroke="black" stroke-width="2.5"/>
			</g>
			<defs>
			<clipPath id="clip0_17_216">
			<rect width="58" height="39" fill="white" transform="translate(0 0.5)"/>
			</clipPath>
			</defs>
		`,
	],
};

export default icons;
