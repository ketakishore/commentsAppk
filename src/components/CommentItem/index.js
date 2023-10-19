// Write your code here
const CommentItem = props => {
  const {commentDetails} = props
  const {Name, comment} = commentDetails

  return (
    <li>
      <div>
        <div>
          <p>{Name}less than a minute ago</p>
          <p>{comment}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            alt="liked"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default CommentItem
