function Props(p){
    console.log(p);
    return(<div>props
        {
            p.name.map((data)=>{
                return(
                <li key={data}>{data}</li>)
            })
        }
    </div>)
}
export default Props;