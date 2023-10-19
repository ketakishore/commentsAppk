import {Component} from 'react'
import {v4, as, uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {Name: '', comment: '', AddComments: ''}

  onChangeName = event => {
    this.setState({Name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  AddComment = event => {
    event.preventDefault()
    const {Name, comment, AddComments} = this.state
    const function1 = () => {
      const object1 = {
        Name: this.Name,
        comment: this.comment,
      }

      this.setState({
        AddComments: <CommentItem commentDetails={object1} />,
      })
    }
    function1()
  }

  render() {
    const {Name, comment, AddComments} = this.state

    return (
      <div className="app-container">
        <div className="comment-container">
          <h1>Comments</h1>
          <div className="image-container">
            <div className="input-container">
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="NameInput-element"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                type="textarea"
                className="comment-element"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button type="button" onClick={this.AddComment}>
                Add Comment
              </button>
            </div>
            <div className="image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="image"
              />
            </div>
          </div>
          <p>
            <span>{0}</span> Comments
          </p>
          <ul>{AddComments}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
