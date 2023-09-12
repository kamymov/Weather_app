import Swal from "sweetalert2"

export const ErrorHanldling = (error) => {
    if(error.response){
        if(error.response.status === 400){
            Swal.fire(`${error.response.status}`, 'موقعیت مورد نظر یافت نشد', 'error');
        }else{
            Swal.fire(`${error.response.status}`,  'کاربر گرامی سرویس ما دچار اخلال شده است لطفا دوباره تلاش کنید', 'error')
        }
    }else{
        Swal.fire('500', 'کاربر گرامی سرویس ما دچار اخلال شده است لطفا دوباره تلاش کنید', 'error');
    }
}