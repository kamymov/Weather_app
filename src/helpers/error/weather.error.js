import Swal from "sweetalert2"

export const ErrorHanldling = (error) => {
    if(error.status === 400){
        Swal.fire(`${error.status}`, 'موقعیت مورد نظر یافت نشد', 'error');
    }else{
        Swal.fire(`${error.status}`, error.data?.error?.message ?? 'کاربر گرامی سرویس ما دچار اخلال شده است لطفا دوباره تلاش کنید', 'error')
    }
}