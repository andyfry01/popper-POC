import React, { useState, useEffect } from 'react'
import Flyout from './Flyout'

const picOne = 'https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg?quality=98&strip=all&w=782'
const picTwo = 'https://i.ytimg.com/vi/c-VhXf0dT3c/maxresdefault.jpg'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: picOne
    }
  }

  updatePic = () => this.setState({pic: picTwo})

  render () {
    return (
      <div>
      <button onClick={this.updatePic}>Update it!</button>
        <p>I never did anything out of the blue. Dignity is valuable, but our lives are valuable too. Don't pick <Flyout/> with the bullies or the cads. I'm floating in a most peculiar way. I'm afraid I can't help it. If you think we're gonna make it, you better hang on to yourself. No death for the perfect men. Look up here, I'm in heaven. </p>

        <p>Breaking up is hard, but keeping dark is hateful. Strange games they would play then. I would not challenge a giant. Yes we're lovers, and that is that. I wave to the policemen, but they don't wave back. If you stay you won't be sorry. </p>

        <p>You were a talented child. Wake up in the wrong town, boy you really get around. I watch the ripples change their size, but never leave the <Flyout content={this.state.pic} placement="left"/>. Sometimes I feel the need to move on; so I pack a bag and move on. Oh we can beat them, for ever and ever. Strange, mad celebration. </p>

        <p>His name was always Buddy, and he'd shrug and ask to stay. A couple of songs from your old scrapbook could send her home again. Pale blinds drawn all day. Dignity is valuable, but our lives are valuable too. He treats you well and makes you up real fine. Is it any wonder I reject you first? Beware the savage jaw of 1984. </p>

      </div>
    )
  }
}

export default Main