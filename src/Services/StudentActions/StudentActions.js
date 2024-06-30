export const cForm = (data) =>{
    
    return{
        type: 'CREATEFORM',
        payload : data,
    }
}

export const  fedit= (editrec)=>{
    return{
        type: 'EDITFORM',
        payload: editrec,
    }
}

export const uForm = (update) =>{
    return{
        type: 'UPDATEFORM',
        payload: update,
    }
}

export const fdelete = (deleteid)=>{
    return{
        type: 'DELETEFORM',
        payload : deleteid,
    }
}