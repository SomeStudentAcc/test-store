import axiosInstance from "@/axios"



export const getOrders = async()=>{
    const res = await axiosInstance('/carts')
    console.log(res.data);
    return res.data
    
}