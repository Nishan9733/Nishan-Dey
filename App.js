import Expenses from "./Component/Expenses";


function App(){

    var expenses = [
        {
            id : "e1",
            date : new Date(2024,5,19),
            title : "School Fees",
            amount : 300
        },
        {
            id : "e2",
            date : new Date(2023,8,22),
            title : "Library Fees",
            amount : 200
        },
        {
            id : "e3",
            date : new Date(2022,5,7),
            title : "Books",
            amount : 500
        },
        {
            id : "e4",
            date : new Date(2021,10,6),
            title : "Foods",
            amount : 800
        },
    ];

    return <div>
                <h2>Let's get started</h2>
                <Expenses item={expenses}/>
            </div>
}

export default App;