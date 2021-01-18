import React from 'react'

class MemeGenerator extends React.Component{
    constructor()
    {
        super()
        this.state={
          topText:"",
          bottomText:"",
          randomImg:"http://i.imgflip.com/1bij.jpg",
          allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.setRandom=this.setRandom.bind(this)
    }
    handleChange(event){
        const {name,value}=event.target
        this.setState(()=>{
            return{
             [name]:value
            }
        })
    }
    setRandom(event)
    {
        event.preventDefault()
        const arr=this.state.allMemeImgs
      this.setState(()=>
      {
          return{
          randomImg:this.state.allMemeImgs[Math.floor(Math.random() * arr.length)].url
          }
      })
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").
        then((val)=>val.json()).
        then((val)=>{
            const {memes}=val.data
            this.setState({
                allMemeImgs:memes
            })
        })
    }
    render()
    {
       return(
        <div>
        <form className="meme-form">
               
            <input 
            type="text" 
            name="topText" 
            value={this.state.topText} 
            onChange={this.handleChange}
            placeholder="top text"
            />
            <input 
            type="text" 
            name="bottomText" 
            value={this.state.bottomText} 
            onChange={this.handleChange} 
            placeholder="bottom text"
            />
        
            <button onClick={this.setRandom}>Gen</button>
        </form>
        <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
    </div>
       )
    }
}
export default MemeGenerator
