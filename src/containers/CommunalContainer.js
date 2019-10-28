import React, { Component } from "react"
import Card from "../components/Card"

class CommunalContainer extends Component{

  state = {
    leftClass: false,
    rightClass: true
  }

  handleScroll = e => {
    let cardWidth = (e.target.scrollWidth - e.target.offsetWidth) / (e.target.childElementCount * 2)
    if (e.target.scrollLeft >= cardWidth) {
      this.setState({ leftClass: true})
    } else {
      this.state.leftClass && this.setState({ leftClass: false })
    }
    if (e.target.scrollLeft >= e.target.scrollWidth - e.target.offsetWidth - cardWidth) {
      this.setState({ rightClass: false})
    } else {
      !this.state.rightClass && this.setState({ rightClass: true})
    }
  }

  getClass = boolean => boolean ? "" : "hidden"

  render() {
    const leftShow = this.getClass(this.state.leftClass)
    const rightShow = this.getClass(this.state.rightClass)
    return (
      <div className="scroll-container">
        <div className="arrow-container">
          <p className={`${leftShow} left arrow `}>Scroll<img className="arrow-img" alt="left arrow" src='/imgs/arrow-left.png'></img></p>
          <p className={`${rightShow} right arrow`}>Scroll<img className="arrow-img" alt="right arrow" src='/imgs/arrow-right.png'></img></p>
        </div>
        <div onScroll={this.handleScroll} className="communal-container">
          {this.props.cards.map(card => <Card disable={this.props.disable} key={card.name} card={card} clickHandler={() => this.props.addCard(card)} />)}
        </div>
      </div>
    )
  }
}

export default CommunalContainer