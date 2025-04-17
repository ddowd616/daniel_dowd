import {useState,useEffect} from "react";
import axios from 'axios'
import "./App.css"

const App = () => {
    //READ our data
    //HTTP request (GET) /api/bucket
    //axios for call
    //if data is good - display
    //list elements
    //state management
    const [bucketList,setBucketList] = useState([])
    const [newItem,setNewItem] = useState("")
    const baseURL = "http://localhost:3000"
    useEffect(() => {
        //communicate with the server
        let route = "api/bucket"
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .then(result=>{
                console.log(result)
                let copyOfBucketList = [...result.data]
                setBucketList(copyOfBucketList)
            })
            .catch(err=>console.error(err))
    }, []);

    function clickHandler(event) {
        let requestedId = event.target.id
        let route = `api/bucket/${requestedId}`
        let endpoint = `${baseURL}/${route}`
        let options = {
            method:"put",
            url:endpoint
        }
        axios(options)
            .then(result => {
                console.log("Front-end result: ",result.data.isComplete)
                let copyOfBucketList = [...bucketList]
                let requestedItem = copyOfBucketList.find(item=>{
                    //-0 converts to a number by default
                    return item.id === event.target.id-0
                })
                //if an item is found, flip its isComplete
                if(requestedItem){
                    requestedItem.isComplete = !requestedItem.isComplete;
                }
                setNewItem(copyOfBucketList)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    function deleteHandler(bucketId) {
        let route = `api/bucket/${bucketId}`
        let endpoint = `${baseURL}/${route}`
        let options = {
            method:"delete",
            url:endpoint
        }
        axios(options)
            .then(result => {
                console.log("Delete result: ",result)
                //this rebuilds the array (not the most efficient way to do this)
                let filteredBucketList = bucketList.filter(item => {
                    return item.id !== bucketId
                })
                setBucketList(filteredBucketList)
            })
            .catch(err =>{
                console.log("Error deleting from front-end",err)
            })
    }

    let myList = bucketList.map((el)=>{
        return <li key={el.id}
                   className={el.isComplete ? "completed":""}
                   onClick={clickHandler}
                   id={el.id}
            >{el.description}
        <button
            onClick={event => {
                event.stopPropagation()
                deleteHandler(el.id)
            }}
        >Delete</button></li>})

    function handleSubmit(e) {
        e.preventDefault();
        let item = {
            description:newItem,
            isComplete:false
        }
        let route = "api/bucket"
        let endpoint = `${baseURL}/${route}`
        let options ={
            method:"post",
            url: endpoint,
            data:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json"
            }
        }
        axios(options)
            .then(result =>{
                console.log("Front-end result: ", result)
                let newItem = result.data
                let newArray = [...bucketList,newItem]
                setBucketList(newArray)
                //cannot directly mutate our state with a push
            })
            .catch(err => {
                console.log(err)
                })
    }

    function handleChange(event) {
        setNewItem(event.target.value)
    }

    return (
        <div>
            <h1>BucketList</h1>
            <form onSubmit={handleSubmit}>
                <label> What do you want to do before you kick the bucket</label>
                <br/>
                <input
                    onChange={handleChange}
                    type="text"
                    name="newItem"
                />
                <button type="submit">Save</button>
            </form>
            <ul>{myList}</ul>
        </div>
    );
};

export default App;
