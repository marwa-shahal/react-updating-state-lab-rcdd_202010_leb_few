// Code YouTubeDebugger Component Here
import React,{Component} from 'react';


export default class YouTubeDebugger extends Component{
  
  constructor(){
    super();
    this.state={
        errors: [],
        user: null,
        settings: {
             bitrate: 8,
             video: {
                resolution: '1080p'
              }
           }
     }
  }
  
  handleBit = () => {
    this.setState( bit =>
    ({timesClicked:prev.timesClicked+1})
  )}
  
  
  handleRes = () => {
    
    
  }
  
  render(){
    return (
      <button className="bitrate" onClick={this.handleBit}>Bitrate</button>
      
      
     <button className="resolution" onClick={this.handleRes}>Resolution</button>
      )
  }
}