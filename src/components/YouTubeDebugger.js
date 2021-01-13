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
  
  handleUtube=()=> {
    this.setState( prev =>
    ({timesClicked:prev.timesClicked+1})
  )}
  
  render(){
    return (
      <button className="bitrate" onClick={this.handleUtube}>{this.state.timesClicked}</button>
      
      
     <button className="bitrate" onClick={this.handleUtube}>{this.state.timesClicked}</button>
      )
  }
}