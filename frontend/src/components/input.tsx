
interface Props{
    placeholder:string;
}
export const Input=(props:Props)=>{
    return  <div className='flex justify-center pt-[10px]' >
                <input className='flex justify-center rounded bg-slate-300 text-black 
                p-[10px] px-[15px] w-[300px] placeholder-gray-800'
                 placeholder={props.placeholder}   
                 />
            </div>
}

