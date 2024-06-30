

export const getStuddata = (mykey)=>{
    let data = JSON.parse(localStorage.getItem(mykey))
    if(!data){
        return []
    }
    return data;
}