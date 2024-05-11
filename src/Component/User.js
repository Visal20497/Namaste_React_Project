import React from 'react'

export default class User extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            count:0,
            UserInfo: {
                name: "default",
                location: "default",
                avatar_url: "http://dummyjson.com"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Visal20497")
        const response = await data.json()
        console.log(response)
        this.setState({
            UserInfo: response
        })
    }
  async  componentDidUpdate(prevProps,prevState){
        console.log("component did update")
        if(this.state.count!==prevState.count){
            const data = await fetch("https://api.github.com/users/Visal20497")
            const response = await data.json()
            console.log(response)
            this.setState({
                UserInfo: response
            })
        }
        if(this.props!==prevProps){
            const data = await fetch("https://api.github.com/users/Visal20497")
            const response = await data.json()
            console.log(response)
            this.setState({
                UserInfo: response
            })
        }
        this.timer=setTimeout(()=>{
            console.log("this is the timer function")
        },1500)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
  console.log('component will unmount')
    }
    render() {
        const { name, location, avatar_url } = this.state.UserInfo
        return (
            <div>
                <img src={avatar_url} alt={avatar_url} />
                <h3>{name}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}
