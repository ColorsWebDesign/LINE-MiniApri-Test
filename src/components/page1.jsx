import { useNavigate  } from 'react-router-dom' // React Routerを使うためのもの

function page1(){
    const navigate = useNavigate()
    const changePage = () =>{
        navigate('/page2')
    }
    return (
        <>
        <h1>page1</h1>
        <button onClick={changePage}>page2へ遷移</button>
        </>
    )

}
export default page1