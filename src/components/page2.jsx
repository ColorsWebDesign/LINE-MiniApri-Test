import { useNavigate  } from 'react-router-dom' // React Routerを使うためのもの

function page2(){
    const navigate = useNavigate()
    const changePage = () =>{
        navigate('/page3')
    }
    return (
        <>
        <h1>page2</h1>
        <button onClick={changePage}>page3へ遷移</button>
        </>
    )

}
export default page3