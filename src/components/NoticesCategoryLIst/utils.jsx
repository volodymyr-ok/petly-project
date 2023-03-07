export const filterData =(notices, petId)=>{
    const result = notices.filter(
        el => el._id !== petId)
        return result
}