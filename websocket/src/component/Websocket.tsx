import { useContext, useEffect } from "react"
import { WebsocketContext } from "../context/WebsocketContext"

export const WebSocket = () =>{
const socket = useContext(WebsocketContext)

useEffect(()=>{
    socket.on("connect", () =>{
        console.log("connect to gateway")
    })
})
useEffect(() =>{
    socket.on("onMessage" , (paylod:any) =>{
        console.log(paylod)
    })
})

return (
    <div className="container mt-4">
      <header className="d-flex justify-content-between align-items-center p-3 mb-4 bg-primary text-white rounded">
        <h1 className="h3">FaceAo</h1>
        <nav className="nav">
          <a className="nav-link text-white" href="#">Home</a>
          <a className="nav-link text-white" href="#">Profile</a>
          <a className="nav-link text-white" href="#">Messages</a>
          <a className="nav-link text-white" href="#">Notifications</a>
        </nav>
      </header>
  

      <div className="row">
        <aside className="col-md-3 mb-4">
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">Friends</a>
            <a href="#" className="list-group-item list-group-item-action">Groups</a>
            <a href="#" className="list-group-item list-group-item-action">Marketplace</a>
            <a href="#" className="list-group-item list-group-item-action">Watch</a>
            <a href="#" className="list-group-item list-group-item-action">Events</a>
          </div>
        </aside>

        <div className="col-md-9">
          <div className="card mb-4">
            <div className="card-body">
            <textarea className="form-control mb-2" placeholder="What&apos;s on your mind?" rows={3}></textarea>
              <button className="btn btn-primary w-100">Post</button>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">John Doe</h5>
              <small>5 mins ago</small>
            </div>
            <div className="card-body">
              <p className="card-text">This is a sample post content.</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <button className="btn btn-link">Like</button>
              <button className="btn btn-link">Comment</button>
              <button className="btn btn-link">Share</button>
            </div>
          </div>
  

        </div>
      </div>
  

      <footer className="text-center mt-4">
        <p>© 2024 Facebook Clone. All rights reserved.</p>
      </footer>
    </div>
  );
  
}