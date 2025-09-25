import axiosInstance from "@/axios"

export const getProducts = async ()=>{
    const res = await axiosInstance.get('/products')
    console.log(res.data);
    return res.data
}


export const getOrders = async()=>{
    const res = await axiosInstance('/carts')
    console.log(res.data);
    return res.data
    
}