import { useNavigate  } from 'react-router-dom' // React Routerを使うためのもの

function page3(){
    const navigate = useNavigate()
    const changePage = () =>{
        navigate('/page1')
    }
    return (
        <>
        <h1>page3</h1>
        <button onClick={changePage}>page1へ遷移</button>
        </>
    )

}
export default page3