import { IconType } from "./type/Icon.type";

const NotificationIcon = ({
  className = "h-10 w-10",
  color = "",
}: IconType): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.7872 10.539C21.6518 10.6706 21.4681 10.7457 21.2747 10.7457C20.559 10.7457 19.9787 11.3095 19.9787 11.9953C19.9787 12.6858 20.5522 13.2467 21.2611 13.2543C21.6605 13.258 22 13.5286 22 13.9166V16.3265C22 18.3549 20.3075 20 18.2186 20H15.0658C14.7398 20 14.4758 19.7435 14.4758 19.4269V17.3975C14.4758 17.0029 14.1567 16.6929 13.7505 16.6929C13.354 16.6929 13.0251 17.0029 13.0251 17.3975V19.4269C13.0251 19.7435 12.7611 20 12.4362 20H5.78143C3.70213 20 2 18.3558 2 16.3265V13.9166C2 13.5286 2.33946 13.258 2.73888 13.2543C3.44874 13.2467 4.02128 12.6858 4.02128 11.9953C4.02128 11.3282 3.46035 10.8209 2.72534 10.8209C2.53191 10.8209 2.34816 10.7457 2.21277 10.6142C2.07737 10.4827 2 10.3042 2 10.1163V7.68291C2 5.65731 3.706 4 5.7911 4H12.4362C12.7611 4 13.0251 4.25649 13.0251 4.57311V6.97827C13.0251 7.36348 13.354 7.68291 13.7505 7.68291C14.1567 7.68291 14.4758 7.36348 14.4758 6.97827V4.57311C14.4758 4.25649 14.7398 4 15.0658 4H18.2186C20.3075 4 22 5.64416 22 7.67352V10.0411C22 10.229 21.9226 10.4075 21.7872 10.539ZM13.7505 14.8702C14.1567 14.8702 14.4758 14.5508 14.4758 14.1656V10.4075C14.4758 10.0223 14.1567 9.70288 13.7505 9.70288C13.354 9.70288 13.0251 10.0223 13.0251 10.4075V14.1656C13.0251 14.5508 13.354 14.8702 13.7505 14.8702Z"
        fill="#788B9A"
      />
    </svg>
  );
};

export default NotificationIcon;
