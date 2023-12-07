import { IconType } from "./type/Icon.type";

const LivestockIcon = ({
  className = "h-10 w-10",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3853 0.018586C13.2624 0.177046 12.1534 0.891136 11.216 2.05916C11.1233 2.17466 11.0424 2.28417 11.0363 2.30259C11.0301 2.32125 10.8259 2.3427 10.5745 2.3511C9.55855 2.38505 8.88328 2.65031 8.48978 3.17001C8.30283 3.41688 8.19804 3.67663 8.13907 4.03923C8.09166 4.33079 8.06535 4.3831 8.01304 4.28963C7.87497 4.0429 6.89338 3.04034 6.41522 2.65768C5.59477 2.0011 5.12762 1.8388 4.29606 1.9215C3.04724 2.04573 1.70883 2.47397 0.881181 3.0142C0.53401 3.24081 0.157098 3.63948 0.0700168 3.87217C-0.120563 4.38154 0.0786503 4.99781 0.658651 5.6932C1.33042 6.49862 2.53413 7.22828 3.65427 7.50904C4.30068 7.67106 4.67229 7.70981 5.39947 7.69095C5.94004 7.67691 6.14201 7.65716 6.47789 7.58548C7.04634 7.4642 7.53168 7.29942 8.08068 7.0414C8.62013 6.78781 8.79572 6.73421 8.99646 6.7617C9.52769 6.83451 9.97897 7.41988 10.3634 8.53478C10.7712 9.71738 10.8527 10.5947 10.6399 11.5088L10.5762 11.7823L10.6961 11.9252C10.913 12.1837 10.9687 12.4591 10.8042 12.4591C10.7081 12.4591 10.4749 12.3349 10.437 12.2635C10.4196 12.2309 10.3799 12.0437 10.3489 11.8476C9.99834 9.63676 9.41729 8.07187 8.84748 7.80403C8.62577 7.69982 8.3392 7.71946 8.08805 7.85617C7.87779 7.97058 7.76699 8.0941 7.64819 8.3463C7.56798 8.51663 7.56023 8.57104 7.56077 8.95812C7.56125 9.29781 7.57695 9.4372 7.63905 9.65338C7.79047 10.1804 8.07296 10.5804 8.40521 10.7381C8.56537 10.8141 8.87716 10.8071 9.10669 10.7223C9.38333 10.6202 9.44659 10.6087 9.44659 10.6607C9.44659 10.7493 8.97559 11.3831 8.78919 11.5453L8.68699 11.6342L8.79728 12.1571C9.27603 14.4266 10.0861 17.0984 10.8303 18.8622L10.9864 19.2322L10.909 19.44C10.5306 20.4567 10.3832 21.0923 10.4075 21.6023C10.436 22.2008 10.62 22.5094 11.0239 22.6365C11.4346 22.7657 11.9657 22.661 12.8013 22.2862C13.5688 21.9419 13.9617 21.8587 14.817 21.8594C15.6163 21.8599 15.9451 21.9305 16.7952 22.284C17.1179 22.4181 17.5257 22.5644 17.7014 22.609C18.4165 22.7904 18.8597 22.656 19.0884 22.1883C19.3177 21.7198 19.194 20.7175 18.7771 19.6649C18.7067 19.4873 18.649 19.3037 18.6487 19.257C18.6485 19.2103 18.7429 18.9426 18.8586 18.6622C19.5922 16.8835 20.3621 14.3166 20.8022 12.1816L20.9119 11.6492L20.6736 11.3828C20.4012 11.0782 20.1109 10.6648 20.1384 10.6203C20.1486 10.6038 20.2135 10.6145 20.2826 10.6441C20.581 10.772 20.6919 10.8017 20.8841 10.8047C21.1387 10.8088 21.2618 10.7468 21.5175 10.4857C21.8581 10.1377 22.064 9.54893 22.0635 8.92413C22.0631 8.3773 21.8809 8.04271 21.4729 7.83877C21.25 7.72742 20.9948 7.70057 20.8136 7.76943C20.3857 7.93214 19.965 8.74041 19.64 10.0246C19.5433 10.4068 19.2739 11.7007 19.2181 12.0512C19.1839 12.266 19.1613 12.2973 18.9608 12.4064C18.7884 12.5002 18.7818 12.5011 18.7351 12.4386C18.6594 12.3371 18.7068 12.1683 18.8635 11.9811C19.0211 11.7929 19.0181 11.8363 18.9135 11.2694C18.745 10.3562 19.0138 8.85357 19.5294 7.8267C19.8085 7.27084 20.0257 7.00255 20.3173 6.85382C20.6263 6.69617 20.8622 6.73451 21.5439 7.05327C22.2293 7.37379 22.8942 7.56858 23.6415 7.6678C24.1037 7.72919 25.1049 7.69438 25.5706 7.60074C27.3285 7.24731 29.0225 6.04415 29.4979 4.81137C29.6342 4.45795 29.6541 4.28718 29.5888 4.03213C29.4642 3.54577 28.9808 3.10179 28.1239 2.68657C27.4729 2.37115 26.5536 2.09104 25.7786 1.97197C25.3379 1.9043 24.6592 1.89438 24.4191 1.95216C24.1605 2.01436 23.7394 2.23648 23.3994 2.49011C23.0613 2.74222 21.8303 3.95143 21.6465 4.2119L21.5299 4.37722L21.5075 4.27988C21.4952 4.22638 21.4692 4.07584 21.4497 3.94538C21.4026 3.62921 21.1952 3.21355 20.9797 3.00346C20.537 2.57193 19.9059 2.3669 18.9656 2.34912C18.692 2.34396 18.5726 2.32931 18.5627 2.29967C18.5273 2.19372 18.1211 1.73272 17.7359 1.36142C16.9843 0.636995 16.2506 0.221029 15.4288 0.0535274C15.1698 0.000741358 14.6379 -0.0170693 14.3853 0.018586ZM16.0236 18.5925C16.4481 18.6516 16.8874 18.7487 17.1691 18.8456C17.5886 18.9899 17.9839 19.3424 18.1853 19.7516C18.2792 19.9423 18.2937 20.0067 18.2915 20.2236C18.2881 20.5461 18.1721 20.9811 18.0506 21.1267C17.9697 21.2236 17.9451 21.234 17.8485 21.2128C17.6057 21.1595 17.4754 20.978 17.3154 20.4703C17.1497 19.9445 16.8501 19.5813 16.4977 19.4789C16.2578 19.4091 15.9693 19.4135 15.4798 19.4942C14.9577 19.5803 14.664 19.5797 14.1372 19.4914C13.8381 19.4413 13.6243 19.425 13.4151 19.4363C13.1532 19.4505 13.0952 19.466 12.9268 19.5671C12.6124 19.756 12.4163 20.048 12.2678 20.5486C12.1731 20.8679 12.1308 20.9501 11.9905 21.0873C11.7721 21.3008 11.5965 21.2651 11.4712 20.9818C11.3704 20.754 11.3128 20.4751 11.3115 20.2097C11.3096 19.8077 11.6603 19.267 12.0919 19.0064C12.4079 18.8155 13.0275 18.6584 13.8483 18.5609C14.3519 18.5011 15.4857 18.5175 16.0236 18.5925ZM14.3241 22.3174C13.9325 22.362 13.4422 22.5296 13.1286 22.7263C12.7715 22.9502 12.6613 23.0454 12.6857 23.1091C12.7208 23.2007 13.1261 23.4974 13.4076 23.6376C13.7266 23.7965 14.1503 23.9259 14.537 23.9825C15.1711 24.0751 16.1161 23.7917 16.6703 23.3425C16.9142 23.1447 16.9532 23.0876 16.8879 23.0235C16.763 22.9011 16.3742 22.6541 16.1596 22.5607C15.6373 22.3336 14.9654 22.2445 14.3241 22.3174Z"
        fill="CurrentColor"
      />
    </svg>
  );
};

export default LivestockIcon;
