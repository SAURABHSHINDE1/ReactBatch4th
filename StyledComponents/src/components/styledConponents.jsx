import xyz from 'styled-components'

const Components = () => {

    const Button = xyz.button`
        padding : 15px 50px;
        background-color: orange;
        color:white;
        border:none;
        border-radius:10px
    `

    const Div = xyz.div`
        height:300px;
        width:300px;
        background-color:teal;
        display:flex;
        align-item:center;
        justify-content:center;
        flex-direction:column;
        padding-left:20px;
        gap:20px;
        color:#fff
    `

    return ( <>
    
        <Button>Click mi </Button>

        <Div>

            <h1>Hello</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptates!</p>

        </Div>

    </> );
}
 
export default Components;