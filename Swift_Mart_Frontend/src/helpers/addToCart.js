import { toast } from "react-toastify";

const addToCart=async(e,id)=>{
    e?.stopPropagation();
    e?.preventDefault();

    const response=await fetch("http://localhost:8080/api/addtocart",{
        method:"post",
        credentials:"include",
        headers:{
            "content-type": " application/json"
        },
        body:JSON.stringify(
            {productId:id}
        )
    })
    const responseData=await response.json()
    if(responseData.success){
        toast.success(responseData.message)
    }
    if(responseData.error){
        toast.error(responseData.message)
    }
    return responseData

}

export default addToCart;