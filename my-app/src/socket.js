import { io } from "socket.io-client";
 
const socket = io('http://localhost:3000'); // Replace with your backend URL
// const socket = io('http://172.17.200.213:3000'); // Replace with your backend URL
 
export default socket;